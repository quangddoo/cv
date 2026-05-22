/**
 * question-card.js — Individual question display component
 *
 * Shows question text, sequential number, difficulty badge, and a
 * toggle to show/hide the answer section.  Includes status pills
 * (Not Started · Learning · Review · Mastered) and an Edit button.
 *
 * CSS classes used (defined in style.css):
 *   .question-card, .expanded, .status-mastered, .status-review,
 *   .status-learning, .question-header, .question-number,
 *   .question-text, .question-actions, .icon-btn,
 *   .answer-section, .answer-content, .answer-toolbar,
 *   .answer-toolbar-left, .answer-toolbar-right,
 *   .status-pill, .active, .not-started, .learning, .review, .mastered,
 *   .edit-btn, .no-answer, .no-answer-icon, .no-answer-text, .add-answer-btn
 *
 * @module components/question-card
 */

/**
 * Create and render a single question card.
 *
 * @param {HTMLElement} container — parent element to append the card to
 * @param {object} question — question data { id, text, answer, difficulty, number }
 * @param {object} progress — progress data { status, lastReviewed, reviewCount, confidence }
 * @param {object} callbacks
 * @param {Function} callbacks.onStatusChange — (questionId, newStatus) => void
 * @param {Function} callbacks.onEdit — (questionId) => void
 * @param {Function} callbacks.onToggle — (questionId, expanded) => void
 * @param {Function} [callbacks.renderAnswer] — async (container, markdown) => void
 * @returns {{ update: Function, expand: Function, collapse: Function, destroy: Function, el: HTMLElement }}
 */
export function createQuestionCard(container, question, progress, callbacks) {
  const {
    onStatusChange = () => {},
    onEdit = () => {},
    onToggle = () => {},
    renderAnswer,
  } = callbacks || {};

  let expanded = false;
  let answerRendered = false;

  // ── Root element ───────────────────────────────────────────────
  const card = document.createElement('div');
  card.classList.add('question-card', 'fade-in');
  card.dataset.questionId = question.id;
  _applyStatusClass(card, progress.status);

  // ── Header ─────────────────────────────────────────────────────
  const header = document.createElement('div');
  header.classList.add('question-header');

  // Number circle
  const numberEl = document.createElement('span');
  numberEl.classList.add('question-number');
  numberEl.textContent = question.number ?? '';

  // Question text
  const textEl = document.createElement('div');
  textEl.classList.add('question-text');
  textEl.textContent = question.text || '';

  // Action buttons (visible on hover)
  const actionsEl = document.createElement('div');
  actionsEl.classList.add('question-actions');

  const editIconBtn = document.createElement('button');
  editIconBtn.classList.add('icon-btn');
  editIconBtn.title = 'Edit answer';
  editIconBtn.innerHTML = '✏️';
  editIconBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    onEdit(question.id);
  });
  actionsEl.appendChild(editIconBtn);

  header.appendChild(numberEl);
  header.appendChild(textEl);
  header.appendChild(actionsEl);

  // Toggle answer on header click
  header.addEventListener('click', () => {
    expanded ? collapse() : expand();
  });

  // ── Answer section (initially hidden) ─────────────────────────
  const answerSection = document.createElement('div');
  answerSection.classList.add('answer-section');

  const answerContent = document.createElement('div');
  answerContent.classList.add('answer-content');

  // Toolbar inside answer
  const toolbar = document.createElement('div');
  toolbar.classList.add('answer-toolbar');

  const toolbarLeft = document.createElement('div');
  toolbarLeft.classList.add('answer-toolbar-left');

  // Status pills
  const statuses = [
    { key: 'not_started', label: '⭘ Not Started', cls: 'not-started' },
    { key: 'learning',    label: '📖 Learning',    cls: 'learning' },
    { key: 'review',      label: '🔄 Review',      cls: 'review' },
    { key: 'mastered',    label: '✅ Mastered',     cls: 'mastered' },
  ];

  const pillEls = {};
  statuses.forEach(({ key, label, cls }) => {
    const pill = document.createElement('button');
    pill.classList.add('status-pill', cls);
    if (progress.status === key) pill.classList.add('active');
    pill.textContent = label;
    pill.addEventListener('click', () => {
      _setActivePill(key);
      onStatusChange(question.id, key);
    });
    toolbarLeft.appendChild(pill);
    pillEls[key] = pill;
  });

  const toolbarRight = document.createElement('div');
  toolbarRight.classList.add('answer-toolbar-right');

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.innerHTML = '✏️ Edit';
  editBtn.addEventListener('click', () => onEdit(question.id));
  toolbarRight.appendChild(editBtn);

  toolbar.appendChild(toolbarLeft);
  toolbar.appendChild(toolbarRight);

  // Answer body (markdown will be rendered here)
  const answerBody = document.createElement('div');
  answerBody.classList.add('markdown-body');

  answerContent.appendChild(toolbar);
  answerContent.appendChild(answerBody);
  answerSection.appendChild(answerContent);

  // Assemble card
  card.appendChild(header);
  card.appendChild(answerSection);

  container.appendChild(card);

  // ── Internal helpers ───────────────────────────────────────────

  function _applyStatusClass(el, status) {
    el.classList.remove('status-mastered', 'status-review', 'status-learning');
    if (status === 'mastered') el.classList.add('status-mastered');
    else if (status === 'review') el.classList.add('status-review');
    else if (status === 'learning') el.classList.add('status-learning');
  }

  function _setActivePill(activeKey) {
    Object.entries(pillEls).forEach(([key, pill]) => {
      pill.classList.toggle('active', key === activeKey);
    });
    _applyStatusClass(card, activeKey);
  }

  async function _renderAnswerContent() {
    if (answerRendered) return;
    const markdown = question.answer;
    if (!markdown) {
      answerBody.innerHTML = `
        <div class="no-answer">
          <span class="no-answer-icon">📝</span>
          <span class="no-answer-text">No answer yet. Click Edit to add one.</span>
          <button class="add-answer-btn">+ Add Answer</button>
        </div>
      `;
      const addBtn = answerBody.querySelector('.add-answer-btn');
      if (addBtn) addBtn.addEventListener('click', () => onEdit(question.id));
    } else if (typeof renderAnswer === 'function') {
      await renderAnswer(answerBody, markdown);
    } else {
      answerBody.textContent = markdown;
    }
    answerRendered = true;
  }

  // ── Public methods ─────────────────────────────────────────────

  async function expand() {
    if (expanded) return;
    expanded = true;
    card.classList.add('expanded');
    answerSection.classList.add('expanded');
    await _renderAnswerContent();
    onToggle(question.id, true);
  }

  function collapse() {
    if (!expanded) return;
    expanded = false;
    card.classList.remove('expanded');
    answerSection.classList.remove('expanded');
    onToggle(question.id, false);
  }

  return {
    el: card,

    expand,
    collapse,

    /**
     * Update progress state (re-apply status pills + card class).
     * @param {object} newProgress
     */
    update(newProgress) {
      if (newProgress && newProgress.status) {
        _setActivePill(newProgress.status);
      }
    },

    /**
     * Force re-render of the answer content (e.g. after editing).
     */
    async refreshAnswer(newMarkdown) {
      if (newMarkdown !== undefined) {
        question.answer = newMarkdown;
      }
      answerRendered = false;
      answerBody.innerHTML = '';
      await _renderAnswerContent();
    },

    destroy() {
      card.remove();
    },
  };
}
