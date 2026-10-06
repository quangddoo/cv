/**
 * Main Application — Senior BE Interview Prep
 * Wires all components together and manages application state
 */

import { questionsData } from './data/questions.js';
import { createSidebar } from './components/sidebar.js';
import { createQuestionCard } from './components/question-card.js';
import { createAnswerViewer } from './components/answer-viewer.js';
import { createAnswerEditor } from './components/answer-editor.js';
import { createProgressTracker } from './components/progress-tracker.js';
import { createSearchBar } from './components/search-bar.js';
import { createFlashcardMode } from './components/flashcard-mode.js';
import { createTagFilter } from './components/tag-filter.js';
import { storage } from './utils/storage.js';
import { renderMarkdown, initMermaidDiagrams } from './utils/markdown-parser.js';
import './style.css';

// ── Application State ──────────────────────────────────────────
const state = {
  currentCard: null,
  currentSection: null,
  currentQuestions: [],
  expandedQuestions: new Set(),
  sidebarCollapsed: false,
  theme: storage.getSettings().theme || 'light',
};

// ── Component References ───────────────────────────────────────
let sidebar = null;
let searchBar = null;

// ── Initialize App ─────────────────────────────────────────────
function init() {
  // Apply theme
  applyTheme(state.theme);

  // Initialize welcome stats
  renderWelcomeStats();

  // Initialize sidebar
  sidebar = createSidebar(
    document.getElementById('sidebar'),
    questionsData,
    handleSectionSelect
  );

  // Initialize search
  searchBar = createSearchBar(
    document.getElementById('search-container'),
    questionsData,
    handleSearchSelect
  );

  // Bind top bar actions
  document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
  document.getElementById('theme-toggle').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(state.theme);
    storage.setSettings({ ...storage.getSettings(), theme: state.theme });
  });

  document.getElementById('flashcard-btn').addEventListener('click', () => openFlashcardAll(20));
  document.getElementById('stats-btn').addEventListener('click', openStats);

  // Welcome screen actions
  document.getElementById('start-review-btn').addEventListener('click', () => {
    // Select first section
    const firstSection = questionsData.cards[0]?.sections[0];
    if (firstSection) handleSectionSelect(questionsData.cards[0].id, firstSection.id);
  });

  document.getElementById('start-flashcard-btn').addEventListener('click', () => openFlashcardAll(20));
  document.getElementById('start-random-btn').addEventListener('click', openRandomQuiz);

  // Keyboard shortcuts
  document.addEventListener('keydown', handleKeyboard);

  console.log(`📚 Loaded ${questionsData.metadata.totalQuestions} questions across ${questionsData.metadata.totalSections} sections`);
}

// ── Theme ──────────────────────────────────────────────────────
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

// ── Welcome Stats ──────────────────────────────────────────────
function renderWelcomeStats() {
  const container = document.getElementById('welcome-stats');
  const stats = storage.getStats();

  container.innerHTML = `
    <div class="stat-item">
      <div class="stat-value">${questionsData.metadata.totalQuestions}</div>
      <div class="stat-label">Câu hỏi</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${questionsData.metadata.totalSections}</div>
      <div class="stat-label">Sections</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${stats.mastered || 0}</div>
      <div class="stat-label">Mastered</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${Math.round(((stats.mastered || 0) / questionsData.metadata.totalQuestions) * 100)}%</div>
      <div class="stat-label">Tiến độ</div>
    </div>
  `;
}

// ── Sidebar ────────────────────────────────────────────────────
function toggleSidebar() {
  state.sidebarCollapsed = !state.sidebarCollapsed;
  const sidebarEl = document.getElementById('sidebar');
  sidebarEl.classList.toggle('collapsed', state.sidebarCollapsed);
}

// ── Section Selection ──────────────────────────────────────────
function handleSectionSelect(cardId, sectionId) {
  const card = questionsData.cards.find(c => c.id === cardId);
  if (!card) return;

  const section = card.sections.find(s => s.id === sectionId);
  if (!section) return;

  state.currentCard = card;
  state.currentSection = section;
  state.currentQuestions = section.questions;
  state.expandedQuestions.clear();

  // Hide welcome, show questions
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('question-list').classList.remove('hidden');

  renderSection(card, section);

  // Sync sidebar active state
  if (sidebar) {
    const cardIdx = questionsData.cards.findIndex(c => c.id === cardId);
    if (cardIdx !== -1) {
      const secIdx = questionsData.cards[cardIdx].sections.findIndex(s => s.id === sectionId);
      if (secIdx !== -1) {
        sidebar.setActive(cardIdx, secIdx);
      }
    }
  }
}

async function handleSearchSelect(result, query = '') {
  if (!result || !result.id) return;

  const card = questionsData.cards[result.cardIndex];
  const section = card?.sections?.[result.sectionIndex];
  if (!card || !section) return;

  handleSectionSelect(card.id, section.id);

  // Wait one frame so section DOM is guaranteed to exist.
  await new Promise(resolve => setTimeout(resolve, 0));

  const cardEl = document.getElementById(`question-${result.id}`);
  if (!cardEl) return;

  const header = cardEl.querySelector('.question-header');
  const isExpanded = cardEl.classList.contains('expanded');
  if (!isExpanded && header) {
    header.click();
  }

  // Let async answer rendering complete before locating text in answer body.
  await new Promise(resolve => setTimeout(resolve, 220));

  let matched = false;
  if (query) {
    if (result.matchIn === 'question') {
      const questionTextEl = cardEl.querySelector('.question-text');
      matched = highlightAndScrollMatch(questionTextEl, query);
    } else {
      const answerBodyEl = cardEl.querySelector('.answer-body');
      matched = highlightAndScrollMatch(answerBodyEl, query);
    }
  }

  if (!matched) {
    cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function highlightAndScrollMatch(container, query) {
  if (!container || !query) return false;

  container.querySelectorAll('.search-jump-highlight').forEach(mark => {
    const parent = mark.parentNode;
    if (!parent) return;
    parent.replaceChild(document.createTextNode(mark.textContent || ''), mark);
    parent.normalize();
  });

  const lowerQuery = query.toLowerCase();
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parentTag = node.parentElement?.tagName;
      if (parentTag === 'SCRIPT' || parentTag === 'STYLE') return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let matchedNode = null;
  let matchIndex = -1;

  while (walker.nextNode()) {
    const idx = walker.currentNode.nodeValue.toLowerCase().indexOf(lowerQuery);
    if (idx !== -1) {
      matchedNode = walker.currentNode;
      matchIndex = idx;
      break;
    }
  }

  if (!matchedNode || matchIndex === -1) return false;

  const range = document.createRange();
  range.setStart(matchedNode, matchIndex);
  range.setEnd(matchedNode, matchIndex + query.length);

  const mark = document.createElement('mark');
  mark.className = 'search-jump-highlight';

  try {
    range.surroundContents(mark);
  } catch {
    return false;
  }

  mark.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => {
    const parent = mark.parentNode;
    if (!parent) return;
    parent.replaceChild(document.createTextNode(mark.textContent || ''), mark);
    parent.normalize();
  }, 2600);

  return true;
}

// ── Render Section ─────────────────────────────────────────────
function renderSection(card, section) {
  const titleEl = document.getElementById('section-title');
  const progressEl = document.getElementById('section-progress');
  const container = document.getElementById('questions-container');

  // Section header
  titleEl.textContent = `${card.title} › ${section.title}`;

  // Calculate progress
  const allProgress = storage.getAllProgress();
  let mastered = 0, learning = 0, review = 0;
  section.questions.forEach(q => {
    const p = allProgress[q.id];
    if (p) {
      if (p.status === 'mastered') mastered++;
      else if (p.status === 'learning') learning++;
      else if (p.status === 'review') review++;
    }
  });

  const total = section.questions.length;
  const done = mastered + learning + review;
  progressEl.innerHTML = `
    <span>${done}/${total} đã ôn</span>
    <span style="margin-left: 8px; color: var(--success);">✓ ${mastered}</span>
    <span style="margin-left: 8px; color: var(--warning);">⟳ ${review}</span>
    <button class="btn btn-secondary btn-sm" id="section-flashcard-btn" style="margin-left: 12px; font-size: var(--text-xs); padding: 4px 10px;" title="Ôn tập phần này bằng Flashcard">🃏 Flashcard</button>
  `;

  const secFcBtn = progressEl.querySelector('#section-flashcard-btn');
  if (secFcBtn) {
    secFcBtn.addEventListener('click', () => {
      openFlashcardSection(card, section);
    });
  }

  // Clear and render questions
  container.innerHTML = '';

  section.questions.forEach((question, idx) => {
    const progress = allProgress[question.id] || { status: 'not_started' };
    const hasAnswer = storage.hasAnswer(question.id);

    const cardEl = document.createElement('div');
    cardEl.id = `question-${question.id}`;
    cardEl.className = `question-card status-${progress.status} fade-in`;
    cardEl.style.animationDelay = `${idx * 30}ms`;

    cardEl.innerHTML = `
      <div class="question-header">
        <span class="question-number">${question.index}</span>
        <span class="question-text">${escapeHtml(question.text)}</span>
        <div class="question-actions">
          <button class="icon-btn edit-action" title="Edit answer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="answer-section">
        <div class="answer-content">
          <div class="answer-toolbar">
            <div class="answer-toolbar-left">
              <button class="status-pill not-started ${progress.status === 'not_started' ? 'active' : ''}" data-status="not_started">⬜ Not Started</button>
              <button class="status-pill learning ${progress.status === 'learning' ? 'active' : ''}" data-status="learning">📘 Learning</button>
              <button class="status-pill review ${progress.status === 'review' ? 'active' : ''}" data-status="review">🔄 Review</button>
              <button class="status-pill mastered ${progress.status === 'mastered' ? 'active' : ''}" data-status="mastered">✅ Mastered</button>
            </div>
            <div class="answer-toolbar-right">
              <button class="edit-btn open-editor">✏️ Edit</button>
            </div>
          </div>
          <div class="answer-body markdown-body">
            ${hasAnswer ? '' : `
              <div class="no-answer">
                <div class="no-answer-icon">📝</div>
                <div class="no-answer-text">Chưa có câu trả lời. Click "Edit" để thêm.</div>
                <button class="add-answer-btn open-editor">Thêm câu trả lời</button>
              </div>
            `}
          </div>
        </div>
      </div>
    `;

    // Toggle expand/collapse on header click
    cardEl.querySelector('.question-header').addEventListener('click', async (e) => {
      if (e.target.closest('.question-actions')) return;

      const isExpanded = state.expandedQuestions.has(question.id);
      if (isExpanded) {
        state.expandedQuestions.delete(question.id);
        cardEl.classList.remove('expanded');
        cardEl.querySelector('.answer-section').classList.remove('expanded');
      } else {
        state.expandedQuestions.add(question.id);
        cardEl.classList.add('expanded');
        cardEl.querySelector('.answer-section').classList.add('expanded');

        // Render answer if we have one and haven't rendered yet
        const answerBody = cardEl.querySelector('.answer-body');
        if (hasAnswer && !answerBody.dataset.rendered) {
          answerBody.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--text-muted);">Đang render...</div>';
          try {
            const answerText = await storage.getAnswer(question.id);
            const html = await renderMarkdown(answerText);
            answerBody.innerHTML = html;
            answerBody.dataset.rendered = 'true';
            // Init mermaid diagrams after DOM update
            await initMermaidDiagrams(answerBody);
          } catch (err) {
            answerBody.innerHTML = `<pre style="color: var(--error);">Error rendering: ${err.message}</pre>`;
          }
        }
      }
    });

    // Status buttons
    cardEl.querySelectorAll('.status-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newStatus = btn.dataset.status;
        storage.setProgress(question.id, {
          status: newStatus,
          lastReviewed: new Date().toISOString(),
          reviewCount: (progress.reviewCount || 0) + 1,
        });

        // Update UI
        cardEl.className = `question-card status-${newStatus} expanded`;
        cardEl.querySelectorAll('.status-pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');

        // Update sidebar progress
        if (sidebar) sidebar.update();

        showToast(`Đã đánh dấu: ${newStatus}`, 'success');
      });
    });

    // Edit buttons
    cardEl.querySelectorAll('.open-editor, .edit-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openEditor(question);
      });
    });

    container.appendChild(cardEl);
  });
}

// ── Editor ─────────────────────────────────────────────────────
async function openEditor(question) {
  const modal = document.getElementById('editor-modal');
  const answerText = await storage.getAnswer(question.id);
  const currentAnswer = answerText || getDefaultAnswerTemplate(question);

  modal.classList.remove('hidden');
  modal.innerHTML = '';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modalContent.style.maxWidth = '1200px';
  modalContent.style.width = '95vw';
  modalContent.style.height = '85vh';

  modalContent.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">✏️ ${escapeHtml(question.text)}</h3>
      <button class="modal-close" id="editor-close">✕</button>
    </div>
    <div class="editor-toolbar" id="editor-toolbar"></div>
    <div class="editor-layout">
      <div class="editor-pane">
        <div class="editor-pane-header">Markdown</div>
        <textarea class="editor-textarea" id="editor-textarea" spellcheck="false">${escapeHtml(currentAnswer)}</textarea>
      </div>
      <div class="editor-pane">
        <div class="editor-pane-header">Preview</div>
        <div class="editor-preview markdown-body" id="editor-preview"></div>
      </div>
    </div>
    <div class="editor-footer">
      <span style="font-size: var(--text-xs); color: var(--text-muted);" id="editor-status">Ready</span>
      <button class="btn btn-secondary" id="editor-cancel">Cancel</button>
      <button class="btn btn-primary" id="editor-save">💾 Save</button>
    </div>
  `;

  modal.appendChild(modalContent);

  const textarea = modalContent.querySelector('#editor-textarea');
  const preview = modalContent.querySelector('#editor-preview');
  const toolbar = modalContent.querySelector('#editor-toolbar');

  // Toolbar buttons
  const toolbarItems = [
    { label: 'B', title: 'Bold', action: () => wrapText(textarea, '**', '**') },
    { label: 'I', title: 'Italic', action: () => wrapText(textarea, '*', '*') },
    { label: '`', title: 'Inline Code', action: () => wrapText(textarea, '`', '`') },
    { label: '```', title: 'Code Block', action: () => insertText(textarea, '\n```java\n// code here\n```\n') },
    { label: '📊', title: 'Table', action: () => insertText(textarea, '\n| Column 1 | Column 2 | Column 3 |\n|----------|----------|----------|\n| value    | value    | value    |\n') },
    { label: '📈', title: 'Mermaid Diagram', action: () => insertText(textarea, '\n```mermaid\ngraph TD\n    A["Start"] --> B["Process"]\n    B --> C["End"]\n```\n') },
    { label: 'H2', title: 'Heading 2', action: () => insertText(textarea, '\n## ') },
    { label: 'H3', title: 'Heading 3', action: () => insertText(textarea, '\n### ') },
    { label: '•', title: 'List', action: () => insertText(textarea, '\n- ') },
    { label: '>', title: 'Blockquote', action: () => insertText(textarea, '\n> ') },
  ];

  toolbarItems.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'editor-toolbar-btn';
    btn.textContent = item.label;
    btn.title = item.title;
    btn.addEventListener('click', () => {
      item.action();
      updatePreview();
    });
    toolbar.appendChild(btn);
  });

  // Tab support in textarea
  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = textarea.selectionStart;
      textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(textarea.selectionEnd);
      textarea.selectionStart = textarea.selectionEnd = start + 2;
    }
    if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      saveAnswer();
    }
  });

  // Live preview with debounce
  let previewTimeout;
  textarea.addEventListener('input', () => {
    clearTimeout(previewTimeout);
    previewTimeout = setTimeout(updatePreview, 300);
  });

  async function updatePreview() {
    try {
      const html = await renderMarkdown(textarea.value);
      preview.innerHTML = html;
      await initMermaidDiagrams(preview);
    } catch (err) {
      preview.innerHTML = `<p style="color: var(--error);">Preview error: ${err.message}</p>`;
    }
  }

  function saveAnswer() {
    storage.setAnswer(question.id, textarea.value);
    document.getElementById('editor-status').textContent = '✅ Saved!';
    setTimeout(() => {
      document.getElementById('editor-status').textContent = 'Ready';
    }, 2000);

    // Re-render the question card answer
    const answerBody = document.querySelector(`#question-${question.id} .answer-body`);
    if (answerBody) {
      answerBody.dataset.rendered = '';
    }

    showToast('Đã lưu câu trả lời!', 'success');
  }

  // Close handlers
  modalContent.querySelector('#editor-close').addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modalContent.querySelector('#editor-cancel').addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modalContent.querySelector('#editor-save').addEventListener('click', () => {
    saveAnswer();
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  // Initial preview
  updatePreview();
  textarea.focus();
}

function getDefaultAnswerTemplate(question) {
  return `# ${question.text}

## Tóm tắt ngắn (30s)
<!-- Trả lời ngắn gọn 1-2 câu -->

## Chi tiết

### Giải thích
<!-- Giải thích chi tiết -->

### Code Example

\`\`\`java
// TODO: Add code example
\`\`\`

## Trade-offs

| Aspect | Option A | Option B |
|--------|----------|----------|
| ...    | ...      | ...      |

## Key Takeaway
> <!-- Điểm chính cần nhớ khi phỏng vấn -->
`;
}

// ── Flashcard ──────────────────────────────────────────────────
function openFlashcardAll(count = 20) {
  const limit = typeof count === 'number' && !isNaN(count) && count > 0 ? count : 20;

  // Collect all questions from question-type cards
  const allQuestions = [];
  questionsData.cards.forEach(card => {
    if (card.type === 'guide') return;
    card.sections.forEach(section => {
      section.questions.forEach(q => {
        allQuestions.push({
          ...q,
          sectionTitle: section.title,
          cardTitle: card.title,
        });
      });
    });
  });

  // Shuffle
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }

  // Limit to count for a session
  const sessionQuestions = allQuestions.slice(0, limit);

  const modal = document.getElementById('flashcard-modal');
  modal.classList.remove('hidden');

  createFlashcardMode(
    modal,
    sessionQuestions,
    (questionId, rating) => {
      const statusMap = { again: 'learning', hard: 'review', good: 'review', easy: 'mastered' };
      storage.setProgress(questionId, {
        status: statusMap[rating] || 'learning',
        lastReviewed: new Date().toISOString(),
      });
      if (sidebar) sidebar.update();
    },
    () => {
      modal.classList.add('hidden');
      modal.innerHTML = '';
    },
    { getAnswer: storage.getAnswer }
  );
}

function openFlashcardSection(card, section) {
  if (!section.questions || section.questions.length === 0) return;
  const questions = section.questions.map(q => ({
    ...q,
    sectionTitle: section.title,
    cardTitle: card.title,
  }));

  const modal = document.getElementById('flashcard-modal');
  modal.classList.remove('hidden');

  createFlashcardMode(
    modal,
    questions,
    (questionId, rating) => {
      const statusMap = { again: 'learning', hard: 'review', good: 'review', easy: 'mastered' };
      storage.setProgress(questionId, {
        status: statusMap[rating] || 'learning',
        lastReviewed: new Date().toISOString(),
      });
      if (sidebar) sidebar.update();
      renderSection(card, section);
    },
    () => {
      modal.classList.add('hidden');
      modal.innerHTML = '';
    },
    { getAnswer: storage.getAnswer }
  );
}

function openRandomQuiz() {
  // 10 random questions
  openFlashcardAll(10);
}

// ── Stats ──────────────────────────────────────────────────────
function openStats() {
  const modal = document.getElementById('stats-modal');
  modal.classList.remove('hidden');

  modal.innerHTML = '';
  const content = document.createElement('div');
  content.className = 'modal-content';
  content.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">📊 Tiến độ ôn tập</h3>
      <button class="modal-close" id="stats-close">✕</button>
    </div>
    <div class="modal-body" id="stats-body"></div>
  `;
  modal.appendChild(content);

  createProgressTracker(
    content.querySelector('#stats-body'),
    questionsData
  );

  content.querySelector('#stats-close').addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });
}

// ── Keyboard Shortcuts ─────────────────────────────────────────
function handleKeyboard(e) {
  // Escape to close modals
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal:not(.hidden)').forEach(m => m.classList.add('hidden'));
  }
}

// ── Helpers ────────────────────────────────────────────────────
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function wrapText(textarea, before, after) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selected = textarea.value.substring(start, end) || 'text';
  textarea.value = textarea.value.substring(0, start) + before + selected + after + textarea.value.substring(end);
  textarea.selectionStart = start + before.length;
  textarea.selectionEnd = start + before.length + selected.length;
  textarea.focus();
}

function insertText(textarea, text) {
  const start = textarea.selectionStart;
  textarea.value = textarea.value.substring(0, start) + text + textarea.value.substring(textarea.selectionEnd);
  textarea.selectionStart = textarea.selectionEnd = start + text.length;
  textarea.focus();
}

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ── Start App ──────────────────────────────────────────────────
init();
