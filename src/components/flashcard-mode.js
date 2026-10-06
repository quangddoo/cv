/**
 * flashcard-mode.js — Flashcard study mode with 3D flip animation
 *
 * Full-screen modal overlay showing one question at a time.
 * Users flip the card to reveal the answer, then self-rate their
 * confidence. Supports keyboard shortcuts and progress tracking.
 *
 * CSS classes used (defined in style.css):
 *   .modal, .modal-content, .modal-header, .modal-title, .modal-close,
 *   .modal-body, .flashcard-container, .flashcard-progress,
 *   .flashcard-wrapper, .flashcard, .flipped, .flashcard-face,
 *   .flashcard-front, .flashcard-back, .flashcard-badge, .flashcard-front-text,
 *   .flashcard-hint, .flashcard-back-header, .flashcard-back-title,
 *   .flashcard-flip-btn, .flashcard-back-content, .flashcard-loading,
 *   .spinner, .flashcard-controls, .flashcard-rate-btn,
 *   .again, .hard, .good, .easy, .flashcard-nav, .flashcard-nav-btn, .markdown-body
 *
 * Keyboard shortcuts:
 *   Space  — flip card
 *   1      — Again
 *   2      — Hard
 *   3      — Good
 *   4      — Easy
 *   ←      — previous card
 *   →      — next card
 *   Escape — close
 *
 * @module components/flashcard-mode
 */

import { renderMarkdown, initMermaidDiagrams } from '../utils/markdown-parser.js';
import { getAnswer } from '../utils/storage.js';

/**
 * Create and show the flashcard mode overlay.
 *
 * @param {HTMLElement} container — element to append the overlay to (or existing modal element)
 * @param {Array<object>} questions — array of question objects { id, text, answer, sectionTitle, cardTitle, ... }
 * @param {Function} onRate — (questionId, rating) => void   rating ∈ { 'again','hard','good','easy' }
 * @param {Function} onClose — () => void
 * @param {object} [options]
 * @param {Function} [options.getAnswer] — async (questionId) => string
 * @returns {{ destroy: Function, goTo: Function }}
 */
export function createFlashcardMode(container, questions, onRate, onClose, options = {}) {
  if (!questions || questions.length === 0) {
    console.warn('[flashcard] No questions provided.');
    return { destroy() {}, goTo() {} };
  }

  let currentIndex = 0;
  let isFlipped = false;
  let renderedCardIndex = -1;
  const answerCache = new Map();

  // ── Modal overlay ──────────────────────────────────────────────
  const isModalContainer = container.classList.contains('modal');
  const modal = isModalContainer ? container : document.createElement('div');
  if (!isModalContainer) {
    modal.classList.add('modal');
  } else {
    modal.innerHTML = '';
    modal.classList.remove('hidden');
  }

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.style.maxWidth = '800px';
  modalContent.style.height = '90vh';

  // Header
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');

  const title = document.createElement('span');
  title.classList.add('modal-title');
  title.textContent = '🃏 Flashcard Mode';

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('modal-close');
  closeBtn.innerHTML = '✕';
  closeBtn.title = 'Close (Escape)';
  closeBtn.addEventListener('click', _close);

  modalHeader.appendChild(title);
  modalHeader.appendChild(closeBtn);

  // Body
  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  modalBody.style.padding = '0';
  modalBody.style.overflow = 'hidden';

  // Flashcard container
  const fcContainer = document.createElement('div');
  fcContainer.classList.add('flashcard-container');

  // Progress label
  const progressLabel = document.createElement('div');
  progressLabel.classList.add('flashcard-progress');

  // Flashcard wrapper (perspective parent)
  const fcWrapper = document.createElement('div');
  fcWrapper.classList.add('flashcard-wrapper');

  // The card itself (rotates on flip)
  const flashcard = document.createElement('div');
  flashcard.classList.add('flashcard');

  // Front face
  const front = document.createElement('div');
  front.classList.add('flashcard-face', 'flashcard-front');
  front.addEventListener('click', _flip);

  const badge = document.createElement('div');
  badge.classList.add('flashcard-badge');

  const frontText = document.createElement('div');
  frontText.classList.add('flashcard-front-text');

  const frontHint = document.createElement('div');
  frontHint.classList.add('flashcard-hint');
  frontHint.innerHTML = '<span>🖱️ Nhấp thẻ hoặc phím <kbd style="padding:2px 6px;border-radius:4px;border:1px solid var(--border-color);background:var(--bg-card);font-family:var(--font-mono);font-size:var(--text-xs);">Space</kbd> để xem câu trả lời</span>';

  front.appendChild(badge);
  front.appendChild(frontText);
  front.appendChild(frontHint);

  // Back face
  const back = document.createElement('div');
  back.classList.add('flashcard-face', 'flashcard-back');

  const backHeader = document.createElement('div');
  backHeader.classList.add('flashcard-back-header');

  const backTitle = document.createElement('div');
  backTitle.classList.add('flashcard-back-title');

  const flipBackBtn = document.createElement('button');
  flipBackBtn.classList.add('flashcard-flip-btn');
  flipBackBtn.innerHTML = '🔄 Lật lại <kbd style="font-size:10px;padding:1px 4px;border:1px solid var(--border-color);border-radius:3px;">Space</kbd>';
  flipBackBtn.title = 'Lật lại mặt câu hỏi (phím Space)';
  flipBackBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    _flip();
  });

  backHeader.appendChild(backTitle);
  backHeader.appendChild(flipBackBtn);

  const backContent = document.createElement('div');
  backContent.classList.add('flashcard-back-content', 'markdown-body');
  // Prevent clicks inside answer from accidentally flipping the card
  backContent.addEventListener('click', (e) => e.stopPropagation());

  back.appendChild(backHeader);
  back.appendChild(backContent);

  flashcard.appendChild(front);
  flashcard.appendChild(back);
  fcWrapper.appendChild(flashcard);

  // Confidence buttons
  const controls = document.createElement('div');
  controls.classList.add('flashcard-controls');

  const ratings = [
    { key: 'again', label: '1 · Again', cls: 'again' },
    { key: 'hard',  label: '2 · Hard',  cls: 'hard' },
    { key: 'good',  label: '3 · Good',  cls: 'good' },
    { key: 'easy',  label: '4 · Easy',  cls: 'easy' },
  ];

  ratings.forEach(({ key, label, cls }) => {
    const btn = document.createElement('button');
    btn.classList.add('flashcard-rate-btn', cls);
    btn.textContent = label;
    btn.addEventListener('click', () => _rate(key));
    controls.appendChild(btn);
  });

  // Navigation
  const nav = document.createElement('div');
  nav.classList.add('flashcard-nav');

  const prevBtn = document.createElement('button');
  prevBtn.classList.add('flashcard-nav-btn');
  prevBtn.innerHTML = '←';
  prevBtn.title = 'Previous (Left arrow)';
  prevBtn.addEventListener('click', _prev);

  const navLabel = document.createElement('span');
  navLabel.style.cssText = 'font-size:var(--text-sm);color:var(--text-muted);font-weight:var(--font-medium);';

  const nextBtn = document.createElement('button');
  nextBtn.classList.add('flashcard-nav-btn');
  nextBtn.innerHTML = '→';
  nextBtn.title = 'Next (Right arrow)';
  nextBtn.addEventListener('click', _next);

  nav.appendChild(prevBtn);
  nav.appendChild(navLabel);
  nav.appendChild(nextBtn);

  // Assemble
  fcContainer.appendChild(progressLabel);
  fcContainer.appendChild(fcWrapper);
  fcContainer.appendChild(controls);
  fcContainer.appendChild(nav);

  modalBody.appendChild(fcContainer);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modal.appendChild(modalContent);

  if (!isModalContainer) {
    container.appendChild(modal);
  }

  // Backdrop click to close
  const _backdropClick = (e) => {
    if (e.target === modal) _close();
  };
  modal.addEventListener('click', _backdropClick);

  // ── Keyboard shortcuts ─────────────────────────────────────────

  const _keyHandler = (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    switch (e.key) {
      case ' ':
        e.preventDefault();
        _flip();
        break;
      case '1': _rate('again'); break;
      case '2': _rate('hard');  break;
      case '3': _rate('good');  break;
      case '4': _rate('easy');  break;
      case 'ArrowLeft':  _prev(); break;
      case 'ArrowRight': _next(); break;
      case 'Escape':     _close(); break;
    }
  };
  document.addEventListener('keydown', _keyHandler);

  // ── Internal logic ─────────────────────────────────────────────

  async function _loadAnswer(q) {
    if (!q) return null;
    if (q.answer) return q.answer;
    if (answerCache.has(q.id)) return answerCache.get(q.id);

    const fetcher = typeof options.getAnswer === 'function' ? options.getAnswer : getAnswer;
    try {
      const text = await fetcher(q.id);
      if (text) {
        q.answer = text;
        answerCache.set(q.id, text);
        return text;
      }
    } catch (err) {
      console.error(`[flashcard] Failed to fetch answer for ${q.id}:`, err);
    }
    return null;
  }

  function _flip() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped', isFlipped);

    // Render answer on flip
    if (isFlipped) {
      _renderBack();
    }
  }

  async function _renderBack() {
    const cardIndex = currentIndex;
    const q = questions[cardIndex];
    if (!q) return;

    if (renderedCardIndex === cardIndex && backContent.innerHTML !== '') {
      return; // Already rendered for this card
    }

    // Show loading state
    backContent.innerHTML = `
      <div class="flashcard-loading">
        <div class="spinner"></div>
        <p style="color:var(--text-muted);font-size:var(--text-sm);margin-top:var(--space-2);">Đang tải câu trả lời...</p>
      </div>
    `;

    const answerText = await _loadAnswer(q);

    // Guard against race conditions if card switched or flipped back while loading
    if (currentIndex !== cardIndex || !isFlipped) {
      return;
    }

    if (!answerText) {
      backContent.innerHTML = `
        <div style="text-align:center;padding:var(--space-8);color:var(--text-muted);">
          <div style="font-size:2rem;margin-bottom:var(--space-2);">📝</div>
          <p>Chưa có câu trả lời cho câu hỏi này.</p>
        </div>
      `;
      renderedCardIndex = cardIndex;
      return;
    }

    try {
      const html = await renderMarkdown(answerText);
      if (currentIndex !== cardIndex || !isFlipped) return;

      backContent.innerHTML = html;
      renderedCardIndex = cardIndex;
      backContent.scrollTop = 0;

      await initMermaidDiagrams(backContent);
    } catch (err) {
      console.error('[flashcard] Markdown render error:', err);
      if (currentIndex !== cardIndex || !isFlipped) return;
      backContent.innerHTML = `<pre style="color:var(--error);padding:var(--space-4);">Lỗi hiển thị câu trả lời: ${err.message}</pre>`;
    }
  }

  function _showCard(index) {
    currentIndex = Math.max(0, Math.min(index, questions.length - 1));
    isFlipped = false;
    flashcard.classList.remove('flipped');

    const q = questions[currentIndex];
    frontText.textContent = q.text || '';

    const sectionInfo = [q.cardTitle, q.sectionTitle].filter(Boolean).join(' › ');
    if (sectionInfo) {
      badge.textContent = sectionInfo;
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }

    backTitle.textContent = q.text || '';
    backTitle.title = q.text || '';

    backContent.innerHTML = '';
    renderedCardIndex = -1;

    progressLabel.textContent = `Thẻ ${currentIndex + 1} / ${questions.length}`;
    navLabel.textContent = `${currentIndex + 1} / ${questions.length}`;

    // Disable nav buttons at bounds
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === questions.length - 1;
    prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
    nextBtn.style.opacity = currentIndex === questions.length - 1 ? '0.3' : '1';

    // Preload current card answer and next card answer
    _loadAnswer(q);
    if (currentIndex + 1 < questions.length) {
      _loadAnswer(questions[currentIndex + 1]);
    }
  }

  function _prev() {
    if (currentIndex > 0) _showCard(currentIndex - 1);
  }

  function _next() {
    if (currentIndex < questions.length - 1) _showCard(currentIndex + 1);
  }

  function _rate(rating) {
    const q = questions[currentIndex];
    if (typeof onRate === 'function') {
      onRate(q.id, rating);
    }
    // Auto-advance to next card after rating
    if (currentIndex < questions.length - 1) {
      _next();
    } else {
      progressLabel.textContent = `🎉 Đã hoàn thành ${questions.length} / ${questions.length} thẻ!`;
    }
  }

  function _close() {
    document.removeEventListener('keydown', _keyHandler);
    modal.removeEventListener('click', _backdropClick);
    if (isModalContainer) {
      modal.classList.add('hidden');
      modal.innerHTML = '';
    } else {
      modal.remove();
    }
    if (typeof onClose === 'function') onClose();
  }

  // Show the first card
  _showCard(0);

  // ── Public API ─────────────────────────────────────────────────
  return {
    /**
     * Jump to a specific card index.
     * @param {number} index
     */
    goTo(index) {
      _showCard(index);
    },

    /**
     * Tear down the flashcard overlay.
     */
    destroy() {
      _close();
    },
  };
}
