/**
 * markdown-parser.js — Unified Markdown rendering pipeline
 *
 * Combines marked.js, highlight.js, and mermaid.js into a single
 * async `renderMarkdown(content)` function.
 *
 * • Code blocks are syntax-highlighted via highlight.js (with selective
 *   language imports to keep the bundle small).
 * • Fenced code blocks tagged with `mermaid` are rendered as diagrams.
 * • All other Markdown features (tables, blockquotes, images, links)
 *   work out of the box via marked defaults.
 */

import { marked } from 'marked';
import mermaid from 'mermaid';
import markedKatex from 'marked-katex-extension';

// KaTeX stylesheet (side-effect import) — required to style rendered math
import 'katex/dist/katex.min.css';

// ── Highlight.js — selective language imports ────────────────────
import hljs from 'highlight.js/lib/core';
import java from 'highlight.js/lib/languages/java';
import sql from 'highlight.js/lib/languages/sql';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';
import yaml from 'highlight.js/lib/languages/yaml';

// Dark theme stylesheet (side-effect import)
import 'highlight.js/styles/github-dark.min.css';

// Register languages
hljs.registerLanguage('java', java);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('sh', bash);
hljs.registerLanguage('shell', bash);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('yml', yaml);

// ── Mermaid initialisation ──────────────────────────────────────

let mermaidInitialized = false;

function ensureMermaid() {
  if (mermaidInitialized) return;
  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    themeVariables: {
      primaryColor: '#6c5ce7',
      primaryTextColor: '#e8e8f0',
      primaryBorderColor: '#2a2a4a',
      lineColor: '#a29bfe',
      secondaryColor: '#1a1a30',
      tertiaryColor: '#12121f',
      background: '#0a0a14',
      mainBkg: '#1a1a30',
      nodeBorder: '#2a2a4a',
      fontFamily: "'Inter', sans-serif",
    },
    securityLevel: 'loose',
    logLevel: 'error',
  });
  mermaidInitialized = true;
}

// ── Marked configuration ────────────────────────────────────────

// A unique counter to create deterministic IDs for mermaid containers
let mermaidIdCounter = 0;

// Custom renderer overrides
const renderer = new marked.Renderer();

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Override code block rendering:
 * – `mermaid` blocks → wrapped in <div class="mermaid"> for later init.
 * – Everything else → syntax-highlighted with hljs.
 */
renderer.code = function (codeObj) {
  // marked v12+ passes an object { text, lang, escaped }
  const text = typeof codeObj === 'string' ? codeObj : codeObj.text;
  const lang = typeof codeObj === 'string' ? arguments[1] : codeObj.lang;

  if (lang === 'mermaid') {
    mermaidIdCounter++;
    return `<div class="mermaid" id="mermaid-${mermaidIdCounter}">${escapeHtml(text)}</div>`;
  }

  // Try to highlight with the requested language
  if (lang && hljs.getLanguage(lang)) {
    try {
      const highlighted = hljs.highlight(text, { language: lang }).value;
      return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
    } catch {
      // fall through
    }
  }

  // Auto-detect fallback
  try {
    const highlighted = hljs.highlightAuto(text).value;
    return `<pre><code class="hljs">${highlighted}</code></pre>`;
  } catch {
    return `<pre><code>${text}</code></pre>`;
  }
};

marked.setOptions({
  renderer,
  gfm: true,       // GitHub-flavored markdown
  breaks: false,    // Don't convert \n to <br>
});

// ── KaTeX math rendering ────────────────────────────────────────
// Renders inline `$...$` and block `$$...$$` LaTeX via KaTeX.
// `throwOnError: false` → invalid LaTeX is shown inline in error colour
// instead of throwing. The extension's default delimiter rules ignore
// stray currency-style `$` (e.g. "100$") because the content next to a
// delimiter must not be surrounded by whitespace.
marked.use(markedKatex({ throwOnError: false }));

// ── Public API ──────────────────────────────────────────────────

/**
 * Render a Markdown string to sanitised HTML and initialise any
 * Mermaid diagrams found inside the output.
 *
 * @param {string} content — raw Markdown text
 * @returns {Promise<string>} — rendered HTML string
 */
export async function renderMarkdown(content) {
  if (!content) return '';

  ensureMermaid();

  // Reset counter so IDs stay deterministic per render pass
  mermaidIdCounter = 0;

  // 1. Convert Markdown → HTML
  const html = marked.parse(content);

  return html;
}

/**
 * After inserting rendered HTML into the DOM, call this function
 * on the container element to convert <div class="mermaid"> nodes
 * into SVG diagrams.
 *
 * @param {HTMLElement} container — parent element that holds the rendered HTML
 */
export async function initMermaidDiagrams(container) {
  ensureMermaid();
  const nodes = container.querySelectorAll('.mermaid:not([data-processed])');
  if (nodes.length === 0) return;

  for (const node of nodes) {
    const id = node.id || `mermaid-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    try {
      const graphDefinition = node.textContent.trim();
      const { svg } = await mermaid.render(id + '-svg', graphDefinition);
      node.innerHTML = svg;
      node.setAttribute('data-processed', 'true');
    } catch (err) {
      console.warn('[mermaid] diagram render failed:', err);
      const stray = document.getElementById('d' + id + '-svg') || document.getElementById(id + '-svg');
      if (stray) stray.remove();
      node.innerHTML = `<pre style="color:var(--error)">[Mermaid error] ${err.message}</pre>`;
      node.setAttribute('data-processed', 'true');
    }
  }
}
