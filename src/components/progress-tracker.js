/**
 * progress-tracker.js — Progress tracking dashboard
 *
 * Renders an overview panel with:
 *   • Overall progress bar with percentage
 *   • Per-card progress bars
 *   • Stats cards: total reviewed, mastered, needs review, not started
 *   • Mini CSS bar chart — daily review count (last 7 days)
 *   • Review streak counter
 *
 * CSS classes used (defined in style.css):
 *   .stats-grid, .stats-card, .stats-card-value, .stats-card-label,
 *   .mastered, .review, .learning, .total,
 *   .stats-chart, .stats-chart-bar,
 *   .progress-bar, .progress-bar-fill
 *
 * @module components/progress-tracker
 */

import { getAllProgress, getStats } from '../utils/storage.js';

/**
 * Create and render the progress tracker dashboard.
 *
 * @param {HTMLElement} container — element to render into
 * @param {object} questionsData — full questions data (cards → sections → questions)
 * @returns {{ update: Function, destroy: Function }}
 */
export function createProgressTracker(container, questionsData) {

  // ── Gather all question IDs ────────────────────────────────────

  function _getAllQuestions() {
    const questions = [];
    const cards = questionsData.cards || questionsData;
    cards.forEach(card => {
      (card.sections || []).forEach(sec => {
        (sec.questions || []).forEach(q => questions.push(q));
      });
    });
    return questions;
  }

  // ── Compute statistics ─────────────────────────────────────────

  function _computeStats() {
    const allQ = _getAllQuestions();
    const progress = getAllProgress();
    const total = allQ.length;

    let mastered = 0, review = 0, learning = 0, notStarted = 0;

    allQ.forEach(q => {
      const p = progress[q.id];
      if (!p || p.status === 'not_started') notStarted++;
      else if (p.status === 'mastered') mastered++;
      else if (p.status === 'review') review++;
      else if (p.status === 'learning') learning++;
    });

    const reviewed = mastered + review + learning;
    const pct = total > 0 ? Math.round((reviewed / total) * 100) : 0;

    return { total, mastered, review, learning, notStarted, reviewed, pct };
  }

  function _computeCardStats() {
    const cards = questionsData.cards || questionsData;
    const progress = getAllProgress();

    return cards.map((card, idx) => {
      let total = 0, reviewed = 0;
      (card.sections || []).forEach(sec => {
        (sec.questions || []).forEach(q => {
          total++;
          const p = progress[q.id];
          if (p && p.status !== 'not_started') reviewed++;
        });
      });
      return {
        title: card.title || `Thẻ ${idx + 1}`,
        total,
        reviewed,
        pct: total > 0 ? Math.round((reviewed / total) * 100) : 0,
      };
    });
  }

  // ── Render ─────────────────────────────────────────────────────

  function render() {
    container.innerHTML = '';
    const stats = _computeStats();
    const cardStats = _computeCardStats();
    const appStats = getStats();

    // ── Title ──────────────────────────────────────────────────
    const heading = document.createElement('h2');
    heading.style.cssText = 'font-size:var(--text-xl);font-weight:var(--font-bold);margin-bottom:var(--space-6);';
    heading.textContent = '📊 Progress Dashboard';
    container.appendChild(heading);

    // ── Stats cards grid ───────────────────────────────────────
    const grid = document.createElement('div');
    grid.classList.add('stats-grid');

    const cards = [
      { value: stats.total,      label: 'Total Questions', cls: 'total' },
      { value: stats.mastered,   label: 'Mastered',        cls: 'mastered' },
      { value: stats.review,     label: 'Needs Review',    cls: 'review' },
      { value: stats.learning,   label: 'Learning',        cls: 'learning' },
    ];

    cards.forEach(({ value, label, cls }) => {
      const card = document.createElement('div');
      card.classList.add('stats-card', cls);

      const valEl = document.createElement('div');
      valEl.classList.add('stats-card-value');
      valEl.textContent = value;

      const labEl = document.createElement('div');
      labEl.classList.add('stats-card-label');
      labEl.textContent = label;

      card.appendChild(valEl);
      card.appendChild(labEl);
      grid.appendChild(card);
    });

    container.appendChild(grid);

    // ── Overall progress bar ───────────────────────────────────
    const overallWrap = document.createElement('div');
    overallWrap.style.cssText = 'margin-bottom:var(--space-6);';

    const overallLabel = document.createElement('div');
    overallLabel.style.cssText = 'display:flex;justify-content:space-between;font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-2);';
    overallLabel.innerHTML = `<span>Overall Progress</span><span>${stats.reviewed}/${stats.total} (${stats.pct}%)</span>`;

    const overallBar = document.createElement('div');
    overallBar.classList.add('progress-bar');
    overallBar.style.height = '8px';

    const overallFill = document.createElement('div');
    overallFill.classList.add('progress-bar-fill');
    overallFill.style.width = `${stats.pct}%`;

    overallBar.appendChild(overallFill);
    overallWrap.appendChild(overallLabel);
    overallWrap.appendChild(overallBar);
    container.appendChild(overallWrap);

    // ── Per-card progress bars ─────────────────────────────────
    cardStats.forEach(cs => {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'margin-bottom:var(--space-4);';

      const label = document.createElement('div');
      label.style.cssText = 'display:flex;justify-content:space-between;font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-1);';
      label.innerHTML = `<span>${cs.title}</span><span>${cs.reviewed}/${cs.total}</span>`;

      const bar = document.createElement('div');
      bar.classList.add('progress-bar');

      const fill = document.createElement('div');
      fill.classList.add('progress-bar-fill');
      fill.style.width = `${cs.pct}%`;

      bar.appendChild(fill);
      wrap.appendChild(label);
      wrap.appendChild(bar);
      container.appendChild(wrap);
    });

    // ── Daily review chart (last 7 days) ───────────────────────
    const chartTitle = document.createElement('div');
    chartTitle.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-top:var(--space-6);margin-bottom:var(--space-2);';
    chartTitle.innerHTML = `
      <span style="font-size:var(--text-sm);font-weight:var(--font-semibold);">Daily Reviews (Last 7 days)</span>
      <span style="font-size:var(--text-xs);color:var(--text-muted);">🔥 Streak: ${appStats.streak} day${appStats.streak !== 1 ? 's' : ''}</span>
    `;
    container.appendChild(chartTitle);

    const chart = document.createElement('div');
    chart.classList.add('stats-chart');

    const dailyCounts = appStats.dailyCounts || {};
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days.push(d.toISOString().slice(0, 10));
    }

    const maxCount = Math.max(1, ...days.map(d => dailyCounts[d] || 0));

    days.forEach(dayKey => {
      const count = dailyCounts[dayKey] || 0;
      const heightPct = Math.max(4, (count / maxCount) * 100); // min 4% so bars are always visible

      const barWrap = document.createElement('div');
      barWrap.style.cssText = 'flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--space-1);';

      const bar = document.createElement('div');
      bar.classList.add('stats-chart-bar');
      bar.style.height = `${heightPct}%`;
      bar.title = `${dayKey}: ${count} reviews`;

      const label = document.createElement('span');
      label.style.cssText = 'font-size:0.65rem;color:var(--text-muted);';
      label.textContent = dayKey.slice(5); // 'MM-DD'

      barWrap.appendChild(bar);
      barWrap.appendChild(label);
      chart.appendChild(barWrap);
    });

    container.appendChild(chart);
  }

  // ── Initial render ─────────────────────────────────────────────
  render();

  // ── Public API ─────────────────────────────────────────────────
  return {
    /**
     * Re-render dashboard with fresh data.
     */
    update() {
      render();
    },

    /**
     * Remove the dashboard from the DOM.
     */
    destroy() {
      container.innerHTML = '';
    },
  };
}
