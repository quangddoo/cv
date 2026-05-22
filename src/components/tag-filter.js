/**
 * tag-filter.js — Category / tag filter pills
 *
 * Renders a horizontal row of selectable tag pills with multi-select
 * support. Includes a "Clear all" button when any tags are active.
 *
 * CSS classes used (defined in style.css):
 *   .tag-filter, .tag-pill, .active
 *
 * @module components/tag-filter
 */

/**
 * Create and render the tag filter bar.
 *
 * @param {HTMLElement} container — element to render into
 * @param {Array<string|object>} tags — array of tag strings or objects { key, label, group? }
 * @param {Function} onFilterChange — (activeTags: string[]) => void
 * @returns {{ update: Function, getActive: Function, setActive: Function, clearAll: Function, destroy: Function }}
 */
export function createTagFilter(container, tags, onFilterChange) {
  /** @type {Set<string>} active tag keys */
  const activeTags = new Set();
  const pillEls = new Map();
  let clearBtn = null;

  // Normalise tags to { key, label } shape
  const normalised = (tags || []).map(t =>
    typeof t === 'string' ? { key: t, label: t } : { key: t.key || t.label, label: t.label || t.key }
  );

  // ── DOM ────────────────────────────────────────────────────────
  const wrapper = document.createElement('div');
  wrapper.classList.add('tag-filter');

  // "Clear all" button (hidden initially)
  clearBtn = document.createElement('button');
  clearBtn.classList.add('tag-pill');
  clearBtn.textContent = '✕ Clear';
  clearBtn.style.display = 'none';
  clearBtn.addEventListener('click', _clearAll);
  wrapper.appendChild(clearBtn);

  // Tag pills
  normalised.forEach(({ key, label }) => {
    const pill = document.createElement('button');
    pill.classList.add('tag-pill');
    pill.textContent = label;
    pill.dataset.tagKey = key;

    pill.addEventListener('click', () => _toggle(key));

    wrapper.appendChild(pill);
    pillEls.set(key, pill);
  });

  container.appendChild(wrapper);

  // ── Internal logic ─────────────────────────────────────────────

  function _toggle(key) {
    if (activeTags.has(key)) {
      activeTags.delete(key);
    } else {
      activeTags.add(key);
    }
    _syncUI();
    _notify();
  }

  function _clearAll() {
    activeTags.clear();
    _syncUI();
    _notify();
  }

  function _syncUI() {
    pillEls.forEach((pill, key) => {
      pill.classList.toggle('active', activeTags.has(key));
    });
    clearBtn.style.display = activeTags.size > 0 ? '' : 'none';
  }

  function _notify() {
    if (typeof onFilterChange === 'function') {
      onFilterChange([...activeTags]);
    }
  }

  // ── Public API ─────────────────────────────────────────────────
  return {
    /**
     * Get the currently active tag keys.
     * @returns {string[]}
     */
    getActive() {
      return [...activeTags];
    },

    /**
     * Programmatically set active tags.
     * @param {string[]} keys
     */
    setActive(keys) {
      activeTags.clear();
      (keys || []).forEach(k => activeTags.add(k));
      _syncUI();
      _notify();
    },

    /**
     * Clear all active tags.
     */
    clearAll() {
      _clearAll();
    },

    /**
     * Replace the tags list and re-render.
     * @param {Array<string|object>} newTags
     */
    update(newTags) {
      // Remove old pills
      pillEls.forEach(pill => pill.remove());
      pillEls.clear();

      const updated = (newTags || []).map(t =>
        typeof t === 'string' ? { key: t, label: t } : { key: t.key || t.label, label: t.label || t.key }
      );

      updated.forEach(({ key, label }) => {
        const pill = document.createElement('button');
        pill.classList.add('tag-pill');
        pill.textContent = label;
        pill.dataset.tagKey = key;
        if (activeTags.has(key)) pill.classList.add('active');
        pill.addEventListener('click', () => _toggle(key));
        wrapper.appendChild(pill);
        pillEls.set(key, pill);
      });
    },

    /**
     * Remove from the DOM.
     */
    destroy() {
      wrapper.remove();
    },
  };
}
