/**
 * sidebar.js — Collapsible tree navigation sidebar
 *
 * Renders a list of cards (Thẻ 1–5) as top-level collapsible groups.
 * Each card expands to show its sections, with question counts and
 * mastered / total progress badges.
 *
 * CSS classes used (defined in style.css):
 *   .sidebar-card, .sidebar-card-header, .expanded, .chevron,
 *   .sidebar-sections, .sidebar-section, .active,
 *   .sidebar-section-name, .sidebar-section-badge, .done,
 *   .sidebar-progress, .sidebar-progress-label,
 *   .progress-bar, .progress-bar-fill
 *
 * @module components/sidebar
 */

import { getAllProgress } from '../utils/storage.js';

/**
 * Create and render the sidebar navigation tree.
 *
 * @param {HTMLElement} container — element to render into (#sidebar)
 * @param {object} questionsData — full questions data object (cards → sections → questions)
 * @param {Function} onSectionSelect — callback(cardId, sectionId, sectionData)
 * @returns {{ update: Function, destroy: Function, setActive: Function }}
 */
export function createSidebar(container, questionsData, onSectionSelect) {
  // Keep references for update / destroy
  let activeSectionKey = null;
  let els = {};

  // ── Build DOM ──────────────────────────────────────────────────

  function render() {
    container.innerHTML = '';
    els = { cardGroups: [] };

    const cards = questionsData.cards || questionsData;

    cards.forEach((card, cardIdx) => {
      const group = document.createElement('div');
      group.classList.add('sidebar-card');

      // ── Card header (collapsible toggle) ────────────────────────
      const header = document.createElement('div');
      header.classList.add('sidebar-card-header');
      header.innerHTML = `
        <span>${card.title || `Thẻ ${cardIdx + 1}`}</span>
        <span class="chevron">▸</span>
      `;

      // ── Sections list ──────────────────────────────────────────
      const sectionsContainer = document.createElement('div');
      sectionsContainer.classList.add('sidebar-sections');

      const sections = card.sections || [];
      const sectionEls = [];

      sections.forEach((section, secIdx) => {
        const item = document.createElement('div');
        item.classList.add('sidebar-section');
        item.dataset.cardIndex = cardIdx;
        item.dataset.sectionIndex = secIdx;

        const questions = section.questions || [];
        const total = questions.length;
        const mastered = _countMastered(questions);

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('sidebar-section-name');
        nameSpan.textContent = section.title || `Section ${secIdx + 1}`;
        nameSpan.title = section.title || '';

        const badge = document.createElement('span');
        badge.classList.add('sidebar-section-badge');
        badge.innerHTML = mastered === total && total > 0
          ? `<span class="done">✓ ${total}</span>`
          : `${mastered}/${total}`;

        item.appendChild(nameSpan);
        item.appendChild(badge);

        // Click handler
        item.addEventListener('click', () => {
          _setActiveItem(cardIdx, secIdx, item);
          if (typeof onSectionSelect === 'function') {
            onSectionSelect(card.id, section.id, section);
          }
        });

        sectionsContainer.appendChild(item);
        sectionEls.push({ el: item, badgeEl: badge, questions });
      });

      // Toggle expand / collapse on header click
      header.addEventListener('click', () => {
        const isExpanded = header.classList.toggle('expanded');
        sectionsContainer.classList.toggle('expanded', isExpanded);
      });

      group.appendChild(header);
      group.appendChild(sectionsContainer);
      container.appendChild(group);

      els.cardGroups.push({ header, sectionsContainer, sectionEls });
    });

    // ── Overall progress bar at the bottom ──────────────────────
    const progressWrap = document.createElement('div');
    progressWrap.classList.add('sidebar-progress');
    els.progressWrap = progressWrap;
    _renderProgressBar(progressWrap, cards);
    container.appendChild(progressWrap);

    // Expand the first card by default
    if (els.cardGroups.length > 0) {
      els.cardGroups[0].header.classList.add('expanded');
      els.cardGroups[0].sectionsContainer.classList.add('expanded');
    }
  }

  // ── Helpers ────────────────────────────────────────────────────

  /** Count how many questions in the array have status "mastered". */
  function _countMastered(questions) {
    const allProgress = getAllProgress();
    return questions.filter(q => {
      const p = allProgress[q.id];
      return p && p.status === 'mastered';
    }).length;
  }

  /** Count total questions with any non-not_started status. */
  function _countReviewed(questions) {
    const allProgress = getAllProgress();
    return questions.filter(q => {
      const p = allProgress[q.id];
      return p && p.status !== 'not_started';
    }).length;
  }

  /** Highlight the active sidebar item and de-highlight the rest. */
  function _setActiveItem(cardIdx, secIdx, el) {
    const key = `${cardIdx}-${secIdx}`;
    if (activeSectionKey === key) return;
    activeSectionKey = key;

    // Remove .active from all section items
    container.querySelectorAll('.sidebar-section').forEach(s => s.classList.remove('active'));
    el.classList.add('active');

    // Ensure the parent card group is expanded
    const group = els.cardGroups[cardIdx];
    if (group && !group.header.classList.contains('expanded')) {
      group.header.classList.add('expanded');
      group.sectionsContainer.classList.add('expanded');
    }
  }

  /** Render the overall progress bar. */
  function _renderProgressBar(wrap, cards) {
    let totalQ = 0;
    let reviewedQ = 0;

    cards.forEach(card => {
      (card.sections || []).forEach(sec => {
        const qs = sec.questions || [];
        totalQ += qs.length;
        reviewedQ += _countReviewed(qs);
      });
    });

    const pct = totalQ > 0 ? Math.round((reviewedQ / totalQ) * 100) : 0;

    wrap.innerHTML = `
      <div class="sidebar-progress-label">
        <span>Overall Progress</span>
        <span>${pct}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-bar-fill" style="width:${pct}%"></div>
      </div>
    `;
  }

  // ── Initial render ─────────────────────────────────────────────
  render();

  // ── Public API ─────────────────────────────────────────────────
  return {
    /**
     * Re-render the sidebar (e.g. after progress changes).
     */
    update() {
      render();
    },

    /**
     * Programmatically select a section.
     * @param {number} cardIdx
     * @param {number} secIdx
     */
    setActive(cardIdx, secIdx) {
      const group = els.cardGroups[cardIdx];
      if (!group) return;
      const sec = group.sectionEls[secIdx];
      if (!sec) return;
      _setActiveItem(cardIdx, secIdx, sec.el);
    },

    /**
     * Tear down event listeners and clear the container.
     */
    destroy() {
      container.innerHTML = '';
    },
  };
}
