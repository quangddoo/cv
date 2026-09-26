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
 *   .flashcard-front, .flashcard-back, .flashcard-hint,
 *   .flashcard-controls, .flashcard-rate-btn, .again, .hard, .good, .easy,
 *   .flashcard-nav, .flashcard-nav-btn, .markdown-body
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

/**
 * Create and show the flashcard mode overlay.
 *
 * @param {HTMLElement} container — element to append the overlay to (document.body)
 * @param {Array<object>} questions — array of question objects { id, text, answer, ... }
 * @param {Function} onRate — (questionId, rating) => void   rating ∈ { 'again','hard','good','easy' }
 * @param {Function} onClose — () => void
 * @returns {{ destroy: Function, goTo: Function }}
 */
export function createFlashcardMode(container, questions, onRate, onClose) {
  if (!questions || questions.length === 0) {
    console.warn('[flashcard] No questions provided.');
    return { destroy() {}, goTo() {} };
  }

  let currentIndex = 0;
  let isFlipped = false;

  // ── Modal overlay ──────────────────────────────────────────────
  const modal = document.createElement('div');
  modal.classList.add('modal');

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
  flashcard.addEventListener('click', _flip);

  // Front face
  const front = document.createElement('div');
  front.classList.add('flashcard-face', 'flashcard-front');

  const frontText = document.createElement('div');
  frontText.style.cssText = 'font-size:var(--text-lg);line-height:var(--leading-relaxed);';

  const frontHint = document.createElement('div');
  frontHint.classList.add('flashcard-hint');
  frontHint.textContent = 'Click or press Space to reveal answer';

  front.appendChild(frontText);
  front.appendChild(frontHint);

  // Back face
  const back = document.createElement('div');
  back.classList.add('flashcard-face', 'flashcard-back');

  const backContent = document.createElement('div');
  backContent.classList.add('markdown-body');
  backContent.style.cssText = 'width:100%;overflow-y:auto;max-height:100%;';

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
  navLabel.style.cssText = 'font-size:var(--text-sm);color:var(--text-muted);';

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
  container.appendChild(modal);

  // ── Keyboard shortcuts ─────────────────────────────────────────

  const _keyHandler = (e) => {
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

  function _flip() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped', isFlipped);

    // Render answer on first flip (lazy)
    if (isFlipped && backContent.innerHTML === '') {
      _renderBack();
    }
  }

  async function _renderBack() {
    const q = questions[currentIndex];
    if (!q || !q.answer) {
      backContent.innerHTML = '<p style="color:var(--text-muted);">Chưa có câu trả lời cho question này.</p>';
      return;
    }
    const html = await renderMarkdown(q.answer);
    backContent.innerHTML = html;
    await initMermaidDiagrams(backContent);
  }

  function _showCard(index) {
    currentIndex = Math.max(0, Math.min(index, questions.length - 1));
    isFlipped = false;
    flashcard.classList.remove('flipped');

    const q = questions[currentIndex];
    frontText.textContent = q.text || '';
    backContent.innerHTML = ''; // will be lazy-rendered on flip

    progressLabel.textContent = `Card ${currentIndex + 1} of ${questions.length}`;
    navLabel.textContent = `${currentIndex + 1} / ${questions.length}`;

    // Disable nav buttons at bounds
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === questions.length - 1;
    prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
    nextBtn.style.opacity = currentIndex === questions.length - 1 ? '0.3' : '1';
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
    }
  }

  function _close() {
    document.removeEventListener('keydown', _keyHandler);
    modal.remove();
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
      document.removeEventListener('keydown', _keyHandler);
      modal.remove();
    },
  };
}
