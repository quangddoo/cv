# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Vite-based vanilla JavaScript single-page app for Senior Java Backend interview preparation. UI strings are Vietnamese. No framework, no test suite, no linter configured.

## Commands

```bash
npm install          # install deps
npm run dev          # vite dev server (HMR)
npm run build        # production build → dist/
npm run preview      # serve the built bundle
```

There is no test or lint script. Type checking is not configured.

## Architecture

### Data model

The question bank is a static tree defined in `src/data/questions.js`:

```
questionsData.cards[]            // top-level "Thẻ" (cards)
  ├── id: 'card_N'
  ├── type: 'questions' | 'guide'   // 'guide' cards are skipped in flashcard mode
  └── sections[]
        ├── id: 'cN_sM'             // e.g. 'c1_s3'
        └── questions[]
              └── id: 'cN_sM_qK'    // e.g. 'c1_s3_q12'
```

Metadata (`totalQuestions`, `totalSections`) is computed at the bottom of `questions.js` after the cards are declared — keep that computation block in sync if the shape changes.

### Answer storage — two layers

Answers live in two places. **Always understand both before editing answer-related code.**

1. **On-disk defaults** — `src/data/answers/{questionId}.md` (one markdown file per question). These are loaded via Vite's `import.meta.glob('../data/answers/**/*.md', { query: '?raw', import: 'default' })` in `src/utils/storage.js`. Files are lazy-loaded as raw text; the question ID is used as the filename. Adding a new question means creating both the entry in `questions.js` **and** the matching `.md` file.

2. **User edits** — saved in `localStorage` under `interview_prep_answers` (keyed by question ID). When a user edits and saves, the entry in localStorage **shadows the on-disk default** (`getAnswer` checks localStorage first, then falls back to the glob loader). There is no merge — once edited, the on-disk file is no longer read for that question until the localStorage entry is removed.

All localStorage keys use the `interview_prep_` prefix (`progress`, `answers`, `settings`, `stats`). The `storage` object in `src/utils/storage.js` is the single I/O choke point — go through it rather than touching `localStorage` directly.

### Markdown rendering pipeline

`src/utils/markdown-parser.js` wires together three libraries and is the only place that should know about them:

- **marked** — parses Markdown to HTML.
- **highlight.js** — syntax highlighting via a custom `renderer.code`. Languages are registered **selectively** (java, sql, js, json, xml/html, bash, yaml). Adding a new language requires importing it and calling `hljs.registerLanguage` here.
- **mermaid** — fenced blocks tagged ```` ```mermaid ```` are emitted as `<div class="mermaid">` placeholders. They are **not** rendered until `initMermaidDiagrams(container)` runs against the inserted DOM. Every call site that injects rendered markdown must follow `answerBody.innerHTML = html` with `await initMermaidDiagrams(answerBody)`, or diagrams will not appear.

### App composition

`src/main.js` is the orchestrator. It owns the `state` object, wires DOM elements from `index.html` to component factories, and routes events. Components in `src/components/` follow a consistent `createX(container, ...args)` factory pattern — they render into a passed-in element and return a small handle (often `{ setActive, update }`) rather than maintaining their own DOM roots.

The welcome screen, question list, and modals (flashcard, stats, editor) are all pre-declared `<div>`s in `index.html`. Components populate them on demand and toggle the `hidden` class — there is no routing.

### Build and deploy notes

- `dist/` is committed (see git log). The build output is the deployable artifact.
- Vite 8 with default config — no `vite.config.js` exists; if you need build customization, create one.
- The dev server resolves `import.meta.glob` against the source tree, so adding a new `src/data/answers/*.md` file is picked up on next reload without code changes.
