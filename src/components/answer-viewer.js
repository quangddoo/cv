/**
 * answer-viewer.js — Rendered markdown answer display
 *
 * Takes raw Markdown content, renders it to HTML (with syntax
 * highlighting and Mermaid diagrams), and injects it into the
 * given container with a smooth expand/collapse animation.
 *
 * CSS classes used (defined in style.css):
 *   .markdown-body, .mermaid, .answer-section, .expanded
 *
 * @module components/answer-viewer
 */

import { renderMarkdown, initMermaidDiagrams } from '../utils/markdown-parser.js';

/**
 * Create an answer viewer that renders markdown into the container.
 *
 * @param {HTMLElement} container — element to render into
 * @param {string} markdownContent — raw Markdown text
 * @returns {{ update: Function, expand: Function, collapse: Function, destroy: Function }}
 */
export function createAnswerViewer(container, markdownContent) {
  let isExpanded = true;
  let currentContent = markdownContent || '';

  // ── DOM structure ──────────────────────────────────────────────
  const wrapper = document.createElement('div');
  wrapper.classList.add('answer-section', 'expanded');

  const body = document.createElement('div');
  body.classList.add('markdown-body');

  wrapper.appendChild(body);
  container.appendChild(wrapper);

  // ── Render ─────────────────────────────────────────────────────

  /**
   * Render (or re-render) the markdown content.
   * @param {string} md
   */
  async function _render(md) {
    if (!md) {
      body.innerHTML = '<p style="color:var(--text-muted);font-style:italic;">No content.</p>';
      return;
    }

    // 1. Render markdown to HTML string
    const html = await renderMarkdown(md);

    // 2. Inject into DOM
    body.innerHTML = html;

    // 3. Initialise any Mermaid diagrams in the freshly inserted HTML
    await initMermaidDiagrams(body);
  }

  // Initial render
  _render(currentContent);

  // ── Public API ─────────────────────────────────────────────────
  return {
    /**
     * Update the viewer with new markdown content.
     * @param {string} newMarkdown
     */
    async update(newMarkdown) {
      currentContent = newMarkdown;
      await _render(currentContent);
    },

    /**
     * Expand the answer section (smooth CSS transition).
     */
    expand() {
      if (isExpanded) return;
      isExpanded = true;
      wrapper.classList.add('expanded');
    },

    /**
     * Collapse the answer section.
     */
    collapse() {
      if (!isExpanded) return;
      isExpanded = false;
      wrapper.classList.remove('expanded');
    },

    /**
     * Toggle expand/collapse.
     * @returns {boolean} new expanded state
     */
    toggle() {
      isExpanded ? this.collapse() : this.expand();
      return isExpanded;
    },

    /**
     * Remove the viewer from the DOM.
     */
    destroy() {
      wrapper.remove();
    },
  };
}
