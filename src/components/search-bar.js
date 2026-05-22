/**
 * search-bar.js — Full-text search with dropdown results
 *
 * Searches question text and answer content using debounced input.
 * Displays results in a dropdown with section context and
 * highlighted matching text. Supports keyboard navigation
 * (↑ / ↓ / Enter).
 *
 * CSS classes used (defined in style.css):
 *   .search-wrapper, .search-input, .search-icon,
 *   .search-results, .search-result-item, .focused,
 *   .search-result-section, .search-result-text, mark
 *
 * @module components/search-bar
 */

/**
 * Create and render the search bar.
 *
 * @param {HTMLElement} container — element to render into (e.g. .topbar-center)
 * @param {object} questionsData — full questions data object
 * @param {Function} onSelect — (question, cardIndex, sectionIndex) => void
 * @returns {{ update: Function, destroy: Function, clear: Function }}
 */
export function createSearchBar(container, questionsData, onSelect) {
  let debounceTimer = null;
  let focusedIndex = -1;
  let currentResults = [];

  // ── DOM ────────────────────────────────────────────────────────
  const wrapper = document.createElement('div');
  wrapper.classList.add('search-wrapper');

  // Search icon
  const icon = document.createElement('span');
  icon.classList.add('search-icon');
  icon.textContent = '🔍';

  // Input
  const input = document.createElement('input');
  input.classList.add('search-input');
  input.type = 'text';
  input.placeholder = 'Search questions…  (Ctrl+K)';

  // Results dropdown
  const dropdown = document.createElement('div');
  dropdown.classList.add('search-results', 'hidden');

  wrapper.appendChild(icon);
  wrapper.appendChild(input);
  wrapper.appendChild(dropdown);
  container.appendChild(wrapper);

  // ── Build searchable index ─────────────────────────────────────

  function _buildIndex() {
    const index = [];
    const cards = questionsData.cards || questionsData;
    cards.forEach((card, cardIdx) => {
      (card.sections || []).forEach((section, secIdx) => {
        (section.questions || []).forEach(q => {
          index.push({
            id: q.id,
            text: q.text || '',
            answer: q.answer || '',
            section: section.title || '',
            card: card.title || `Thẻ ${cardIdx + 1}`,
            cardIndex: cardIdx,
            sectionIndex: secIdx,
            question: q,
          });
        });
      });
    });
    return index;
  }

  const searchIndex = _buildIndex();

  // ── Search logic ───────────────────────────────────────────────

  function _search(query) {
    if (!query || query.length < 2) return [];
    const lowerQ = query.toLowerCase();
    const results = [];

    for (const entry of searchIndex) {
      const textMatch = entry.text.toLowerCase().includes(lowerQ);
      const answerMatch = entry.answer.toLowerCase().includes(lowerQ);
      if (textMatch || answerMatch) {
        results.push({
          ...entry,
          matchIn: textMatch ? 'question' : 'answer',
          snippet: textMatch ? entry.text : _extractSnippet(entry.answer, lowerQ),
        });
      }
      if (results.length >= 20) break; // Cap results
    }

    return results;
  }

  /**
   * Extract a snippet around the first occurrence of the query in text.
   * @param {string} text
   * @param {string} lowerQuery
   * @returns {string}
   */
  function _extractSnippet(text, lowerQuery) {
    const idx = text.toLowerCase().indexOf(lowerQuery);
    if (idx < 0) return text.slice(0, 100);
    const start = Math.max(0, idx - 40);
    const end = Math.min(text.length, idx + lowerQuery.length + 60);
    let snippet = text.slice(start, end);
    if (start > 0) snippet = '…' + snippet;
    if (end < text.length) snippet += '…';
    return snippet;
  }

  /**
   * Highlight occurrences of `query` inside `text` using <mark> tags.
   * @param {string} text
   * @param {string} query
   * @returns {string} HTML
   */
  function _highlight(text, query) {
    if (!query) return _escapeHtml(text);
    const escaped = _escapeHtml(text);
    const regex = new RegExp(`(${_escapeRegex(query)})`, 'gi');
    return escaped.replace(regex, '<mark>$1</mark>');
  }

  function _escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function _escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // ── Render results dropdown ────────────────────────────────────

  function _renderResults(results, query) {
    currentResults = results;
    focusedIndex = -1;
    dropdown.innerHTML = '';

    if (results.length === 0) {
      dropdown.classList.add('hidden');
      return;
    }

    dropdown.classList.remove('hidden');

    results.forEach((r, idx) => {
      const item = document.createElement('div');
      item.classList.add('search-result-item');

      const sectionLabel = document.createElement('div');
      sectionLabel.classList.add('search-result-section');
      sectionLabel.textContent = `${r.card} › ${r.section}`;

      const textLabel = document.createElement('div');
      textLabel.classList.add('search-result-text');
      textLabel.innerHTML = _highlight(r.snippet, query);

      item.appendChild(sectionLabel);
      item.appendChild(textLabel);

      item.addEventListener('click', () => _selectResult(idx));
      item.addEventListener('mouseenter', () => _setFocus(idx));

      dropdown.appendChild(item);
    });
  }

  function _setFocus(idx) {
    const items = dropdown.querySelectorAll('.search-result-item');
    items.forEach(el => el.classList.remove('focused'));
    if (idx >= 0 && idx < items.length) {
      items[idx].classList.add('focused');
      items[idx].scrollIntoView({ block: 'nearest' });
    }
    focusedIndex = idx;
  }

  function _selectResult(idx) {
    const r = currentResults[idx];
    if (!r) return;
    _closeDropdown();
    input.value = '';
    if (typeof onSelect === 'function') {
      onSelect(r.question, r.cardIndex, r.sectionIndex);
    }
  }

  function _closeDropdown() {
    dropdown.classList.add('hidden');
    dropdown.innerHTML = '';
    currentResults = [];
    focusedIndex = -1;
  }

  // ── Event listeners ────────────────────────────────────────────

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = input.value.trim();
      if (query.length < 2) {
        _closeDropdown();
        return;
      }
      const results = _search(query);
      _renderResults(results, query);
    }, 300);
  });

  input.addEventListener('keydown', (e) => {
    if (currentResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      _setFocus(Math.min(focusedIndex + 1, currentResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      _setFocus(Math.max(focusedIndex - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (focusedIndex >= 0) _selectResult(focusedIndex);
    } else if (e.key === 'Escape') {
      _closeDropdown();
      input.blur();
    }
  });

  // Close on outside click
  const _outsideHandler = (e) => {
    if (!wrapper.contains(e.target)) {
      _closeDropdown();
    }
  };
  document.addEventListener('click', _outsideHandler);

  // Ctrl+K global shortcut to focus search
  const _globalShortcut = (e) => {
    if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      input.focus();
    }
  };
  document.addEventListener('keydown', _globalShortcut);

  // ── Public API ─────────────────────────────────────────────────
  return {
    /**
     * Clear the search input and close dropdown.
     */
    clear() {
      input.value = '';
      _closeDropdown();
    },

    /**
     * Rebuild the search index (call after data changes).
     */
    update() {
      // Rebuild index by re-creating — simple & correct
      searchIndex.length = 0;
      searchIndex.push(..._buildIndex());
    },

    /**
     * Tear down.
     */
    destroy() {
      clearTimeout(debounceTimer);
      document.removeEventListener('click', _outsideHandler);
      document.removeEventListener('keydown', _globalShortcut);
      wrapper.remove();
    },
  };
}
