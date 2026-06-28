/**
 * storage.js — LocalStorage wrapper for Interview Prep App
 *
 * All keys are prefixed with 'interview_prep_' to avoid collisions.
 *
 * Progress data shape:
 * {
 *   status: 'not_started' | 'learning' | 'review' | 'mastered',
 *   lastReviewed: number (timestamp),
 *   reviewCount: number,
 *   confidence: 'low' | 'medium' | 'high'
 * }
 */

const defaultAnswerFiles = import.meta.glob('../data/answers/**/*.md', { query: '?raw', import: 'default' });

const PREFIX = 'interview_prep_';
const KEYS = {
  progress: `${PREFIX}progress`,
  answers: `${PREFIX}answers`,
  settings: `${PREFIX}settings`,
  stats: `${PREFIX}stats`,
};

// ── Helpers ──────────────────────────────────────────────────────

/**
 * Safely read and parse a JSON value from LocalStorage.
 * @param {string} key
 * @param {*} fallback — returned when the key is missing or unparseable
 */
function readJSON(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

/**
 * Serialize a value and write it to LocalStorage.
 * @param {string} key
 * @param {*} value
 */
function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('[storage] write failed:', e);
  }
}

// ── Progress ─────────────────────────────────────────────────────

/** Default progress object for a question that has never been touched. */
const DEFAULT_PROGRESS = Object.freeze({
  status: 'not_started',
  lastReviewed: null,
  reviewCount: 0,
  confidence: 'low',
});

/**
 * Get progress data for a single question.
 * @param {string} questionId
 * @returns {object} progress data (always returns a valid shape)
 */
export function getProgress(questionId) {
  const all = readJSON(KEYS.progress, {});
  return all[questionId] ? { ...DEFAULT_PROGRESS, ...all[questionId] } : { ...DEFAULT_PROGRESS };
}

/**
 * Set progress data for a single question.
 * Merges with existing data so callers can supply partial updates.
 * @param {string} questionId
 * @param {object} data — partial progress object
 */
export function setProgress(questionId, data) {
  const all = readJSON(KEYS.progress, {});
  all[questionId] = {
    ...DEFAULT_PROGRESS,
    ...all[questionId],
    ...data,
    lastReviewed: Date.now(),
  };
  writeJSON(KEYS.progress, all);

  // Also bump daily review stats
  _bumpDailyStat();
}

/**
 * Get progress map for every question that has data.
 * @returns {object} { [questionId]: progressData }
 */
export function getAllProgress() {
  return readJSON(KEYS.progress, {});
}

// ── Answers ──────────────────────────────────────────────────────

/**
 * Check if an answer exists for a question (either user-saved or default).
 * @param {string} questionId
 * @returns {boolean}
 */
export function hasAnswer(questionId) {
  const all = readJSON(KEYS.answers, {});
  if (all[questionId] !== undefined && all[questionId] !== null) return true;

  const path = `../data/answers/${questionId}.md`;
  return !!defaultAnswerFiles[path];
}

/**
 * Get the markdown answer for a question (loads dynamically if using default).
 * @param {string} questionId
 * @returns {Promise<string|null>}
 */
export async function getAnswer(questionId) {
  const all = readJSON(KEYS.answers, {});
  if (all[questionId] !== undefined && all[questionId] !== null) {
    return all[questionId];
  }

  const path = `../data/answers/${questionId}.md`;
  const loader = defaultAnswerFiles[path];
  if (loader) {
    try {
      const markdown = await loader();
      return markdown;
    } catch (err) {
      console.error(`[storage] Failed to dynamic-load answer for ${questionId}:`, err);
      return null;
    }
  }

  return null;
}

/**
 * Save a markdown answer for a question.
 * @param {string} questionId
 * @param {string} markdown
 */
export function setAnswer(questionId, markdown) {
  const all = readJSON(KEYS.answers, {});
  all[questionId] = markdown;
  writeJSON(KEYS.answers, all);
}

/**
 * Get all saved answers.
 * @returns {object} { [questionId]: markdownString }
 */
export function getAllAnswers() {
  return readJSON(KEYS.answers, {});
}

// ── Settings ─────────────────────────────────────────────────────

const DEFAULT_SETTINGS = Object.freeze({
  theme: 'light',
  sidebarCollapsed: false,
  fontSize: 'medium',
  autoSaveInterval: 5000, // ms
});

/**
 * Get application settings, merged with defaults.
 * @returns {object}
 */
export function getSettings() {
  return { ...DEFAULT_SETTINGS, ...readJSON(KEYS.settings, {}) };
}

/**
 * Persist settings. Partial updates are merged with current values.
 * @param {object} settings
 */
export function setSettings(settings) {
  const current = getSettings();
  writeJSON(KEYS.settings, { ...current, ...settings });
}

// ── Stats (daily review tracking) ────────────────────────────────

/**
 * Get accumulated stats including daily review counts and streak.
 * @returns {object} { dailyCounts: { [YYYY-MM-DD]: number }, streak: number }
 */
export function getStats() {
  const stats = readJSON(KEYS.stats, { dailyCounts: {}, streak: 0 });
  stats.streak = _calculateStreak(stats.dailyCounts);
  return stats;
}

/**
 * Increment today's review count (called internally by setProgress).
 * @private
 */
function _bumpDailyStat() {
  const stats = readJSON(KEYS.stats, { dailyCounts: {}, streak: 0 });
  const today = _todayKey();
  stats.dailyCounts[today] = (stats.dailyCounts[today] || 0) + 1;
  stats.streak = _calculateStreak(stats.dailyCounts);
  writeJSON(KEYS.stats, stats);
}

/**
 * Calculate the current consecutive-day review streak.
 * @param {object} dailyCounts — { 'YYYY-MM-DD': count }
 * @returns {number}
 * @private
 */
function _calculateStreak(dailyCounts) {
  let streak = 0;
  const d = new Date();
  // Check today first; if no reviews today, start from yesterday
  const todayStr = _dateKey(d);
  if (!dailyCounts[todayStr]) {
    d.setDate(d.getDate() - 1);
  }
  while (true) {
    const key = _dateKey(d);
    if (dailyCounts[key] && dailyCounts[key] > 0) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

/** @returns {string} 'YYYY-MM-DD' for today */
function _todayKey() {
  return _dateKey(new Date());
}

/** @returns {string} 'YYYY-MM-DD' */
function _dateKey(date) {
  return date.toISOString().slice(0, 10);
}

// ── Import / Export ──────────────────────────────────────────────

/**
 * Export all app data as a JSON string (for backup / sharing).
 * @returns {string} JSON string
 */
export function exportData() {
  return JSON.stringify({
    progress: getAllProgress(),
    answers: getAllAnswers(),
    settings: getSettings(),
    stats: getStats(),
    exportedAt: new Date().toISOString(),
  }, null, 2);
}

/**
 * Import app data from a JSON string. Overwrites existing data.
 * @param {string} json
 * @throws {Error} if json is invalid
 */
export function importData(json) {
  const data = JSON.parse(json); // will throw on bad input

  if (data.progress) writeJSON(KEYS.progress, data.progress);
  if (data.answers) writeJSON(KEYS.answers, data.answers);
  if (data.settings) writeJSON(KEYS.settings, data.settings);
  if (data.stats) writeJSON(KEYS.stats, data.stats);
}

// Bundle and export storage as a single object for main.js
export const storage = {
  getProgress,
  setProgress,
  getAllProgress,
  hasAnswer,
  getAnswer,
  setAnswer,
  getAllAnswers,
  getSettings,
  setSettings,
  getStats,
  exportData,
  importData
};

