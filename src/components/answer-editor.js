/**
 * answer-editor.js — Markdown editor with live preview
 *
 * Split-pane layout: textarea (left) + live preview (right).
 * Includes a formatting toolbar, Tab / auto-indent support,
 * real-time preview, auto-save to LocalStorage, and Save/Cancel
 * action buttons.
 *
 * CSS classes used (defined in style.css):
 *   .modal, .modal-content, .modal-header, .modal-title, .modal-close,
 *   .modal-body, .editor-layout, .editor-pane, .editor-pane-header,
 *   .editor-toolbar, .editor-toolbar-btn, .editor-textarea,
 *   .editor-preview, .markdown-body, .editor-footer,
 *   .btn, .btn-primary, .btn-secondary
 *
 * @module components/answer-editor
 */

import { renderMarkdown, initMermaidDiagrams } from '../utils/markdown-parser.js';

/**
 * Create the answer editor modal.
 *
 * @param {HTMLElement} container — element to append the modal to (usually document.body)
 * @param {string} initialContent — starting Markdown text
 * @param {Function} onSave — (markdownString) => void
 * @param {Function} onCancel — () => void
 * @returns {{ destroy: Function, getContent: Function }}
 */
export function createAnswerEditor(container, initialContent, onSave, onCancel) {
  let autoSaveTimer = null;
  const AUTOSAVE_KEY = 'interview_prep_editor_draft';

  // ── Modal overlay ──────────────────────────────────────────────
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  // ── Header ─────────────────────────────────────────────────────
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');

  const title = document.createElement('span');
  title.classList.add('modal-title');
  title.textContent = 'Edit Answer';

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('modal-close');
  closeBtn.innerHTML = '✕';
  closeBtn.addEventListener('click', _handleCancel);

  modalHeader.appendChild(title);
  modalHeader.appendChild(closeBtn);

  // ── Body ───────────────────────────────────────────────────────
  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  modalBody.style.padding = '0';
  modalBody.style.overflow = 'hidden';

  // Toolbar
  const toolbar = _createToolbar();

  // Editor layout (grid: left = editor, right = preview)
  const editorLayout = document.createElement('div');
  editorLayout.classList.add('editor-layout');

  // Left pane — editor
  const editorPane = document.createElement('div');
  editorPane.classList.add('editor-pane');

  const editorHeader = document.createElement('div');
  editorHeader.classList.add('editor-pane-header');
  editorHeader.textContent = 'Markdown';

  const textarea = document.createElement('textarea');
  textarea.classList.add('editor-textarea');
  textarea.value = initialContent || '';
  textarea.placeholder = 'Write your answer in Markdown…';
  textarea.spellcheck = false;

  editorPane.appendChild(editorHeader);
  editorPane.appendChild(toolbar);
  editorPane.appendChild(textarea);

  // Right pane — preview
  const previewPane = document.createElement('div');
  previewPane.classList.add('editor-pane');

  const previewHeader = document.createElement('div');
  previewHeader.classList.add('editor-pane-header');
  previewHeader.textContent = 'Preview';

  const previewBody = document.createElement('div');
  previewBody.classList.add('editor-preview', 'markdown-body');

  previewPane.appendChild(previewHeader);
  previewPane.appendChild(previewBody);

  editorLayout.appendChild(editorPane);
  editorLayout.appendChild(previewPane);

  modalBody.appendChild(editorLayout);

  // ── Footer ─────────────────────────────────────────────────────
  const footer = document.createElement('div');
  footer.classList.add('editor-footer');

  const autosaveLabel = document.createElement('span');
  autosaveLabel.style.cssText = 'font-size:var(--text-xs);color:var(--text-muted);margin-right:auto;';
  autosaveLabel.textContent = '';

  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('btn', 'btn-secondary');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.addEventListener('click', _handleCancel);

  const saveBtn = document.createElement('button');
  saveBtn.classList.add('btn', 'btn-primary');
  saveBtn.textContent = 'Save';
  saveBtn.addEventListener('click', _handleSave);

  footer.appendChild(autosaveLabel);
  footer.appendChild(cancelBtn);
  footer.appendChild(saveBtn);

  // ── Assemble ───────────────────────────────────────────────────
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(footer);
  modal.appendChild(modalContent);
  container.appendChild(modal);

  // ── Preview debounce & auto-save ───────────────────────────────
  let previewTimeout = null;

  textarea.addEventListener('input', () => {
    clearTimeout(previewTimeout);
    previewTimeout = setTimeout(() => _updatePreview(), 300);
  });

  // Tab support inside textarea
  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      _insertAtCursor('  ');
    }
    // Ctrl+S → save
    if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      _handleSave();
    }
  });

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) _handleCancel();
  });

  // Close on Escape
  const _escHandler = (e) => {
    if (e.key === 'Escape') _handleCancel();
  };
  document.addEventListener('keydown', _escHandler);

  // Initial preview render
  _updatePreview();

  // Start auto-save timer (every 5 seconds)
  autoSaveTimer = setInterval(() => {
    try {
      localStorage.setItem(AUTOSAVE_KEY, textarea.value);
      autosaveLabel.textContent = 'Auto-saved draft ✓';
      setTimeout(() => { autosaveLabel.textContent = ''; }, 2000);
    } catch { /* quota exceeded — ignore */ }
  }, 5000);

  // ── Toolbar creation ───────────────────────────────────────────

  function _createToolbar() {
    const bar = document.createElement('div');
    bar.classList.add('editor-toolbar');

    const tools = [
      { label: 'B',  title: 'Bold',            action: () => _wrapSelection('**', '**') },
      { label: 'I',  title: 'Italic',           action: () => _wrapSelection('*', '*') },
      { label: '<>', title: 'Inline code',       action: () => _wrapSelection('`', '`') },
      { label: '```',title: 'Code block',        action: () => _insertBlock('```java\n', '\n```') },
      { label: 'H',  title: 'Heading',          action: () => _insertAtCursor('\n## ') },
      { label: '•',  title: 'Bulleted list',    action: () => _insertAtCursor('\n- ') },
      { label: '1.',  title: 'Numbered list',    action: () => _insertAtCursor('\n1. ') },
      { label: '❝',  title: 'Blockquote',       action: () => _insertAtCursor('\n> ') },
      { label: '⊞',  title: 'Table',            action: _insertTable },
      { label: '⎔',  title: 'Mermaid diagram',  action: _insertMermaid },
    ];

    tools.forEach(({ label, title, action }) => {
      const btn = document.createElement('button');
      btn.classList.add('editor-toolbar-btn');
      btn.textContent = label;
      btn.title = title;
      btn.type = 'button';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        action();
        textarea.focus();
      });
      bar.appendChild(btn);
    });

    return bar;
  }

  // ── Text manipulation helpers ──────────────────────────────────

  function _insertAtCursor(text) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;
    textarea.value = val.slice(0, start) + text + val.slice(end);
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    textarea.dispatchEvent(new Event('input'));
  }

  function _wrapSelection(before, after) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;
    const selected = val.slice(start, end) || 'text';
    const replacement = before + selected + after;
    textarea.value = val.slice(0, start) + replacement + val.slice(end);
    textarea.selectionStart = start + before.length;
    textarea.selectionEnd = start + before.length + selected.length;
    textarea.dispatchEvent(new Event('input'));
  }

  function _insertBlock(before, after) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;
    const selected = val.slice(start, end) || '// code here';
    const replacement = before + selected + after;
    textarea.value = val.slice(0, start) + replacement + val.slice(end);
    textarea.selectionStart = start + before.length;
    textarea.selectionEnd = start + before.length + selected.length;
    textarea.dispatchEvent(new Event('input'));
  }

  function _insertTable() {
    _insertAtCursor(
      '\n| Column 1 | Column 2 | Column 3 |\n' +
      '|----------|----------|----------|\n' +
      '| Cell 1   | Cell 2   | Cell 3   |\n' +
      '| Cell 4   | Cell 5   | Cell 6   |\n'
    );
  }

  function _insertMermaid() {
    _insertAtCursor(
      '\n```mermaid\ngraph TD\n    A[Start] --> B{Decision}\n    B -->|Yes| C[Action 1]\n    B -->|No| D[Action 2]\n    C --> E[End]\n    D --> E\n```\n'
    );
  }

  // ── Preview render ─────────────────────────────────────────────

  async function _updatePreview() {
    const md = textarea.value;
    if (!md.trim()) {
      previewBody.innerHTML = '<p style="color:var(--text-muted);font-style:italic;">Preview will appear here…</p>';
      return;
    }
    const html = await renderMarkdown(md);
    previewBody.innerHTML = html;
    await initMermaidDiagrams(previewBody);
  }

  // ── Action handlers ────────────────────────────────────────────

  function _handleSave() {
    const content = textarea.value;
    _cleanup();
    if (typeof onSave === 'function') onSave(content);
  }

  function _handleCancel() {
    _cleanup();
    if (typeof onCancel === 'function') onCancel();
  }

  function _cleanup() {
    clearInterval(autoSaveTimer);
    clearTimeout(previewTimeout);
    document.removeEventListener('keydown', _escHandler);
    try { localStorage.removeItem(AUTOSAVE_KEY); } catch { /* ignore */ }
    modal.remove();
  }

  // ── Public API ─────────────────────────────────────────────────
  return {
    /**
     * Get current editor content.
     * @returns {string}
     */
    getContent() {
      return textarea.value;
    },

    /**
     * Tear down the editor modal.
     */
    destroy() {
      _cleanup();
    },
  };
}
