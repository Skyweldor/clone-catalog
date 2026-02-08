# Clone Catalog — Lessons Learned & Best Practices

## Project Overview

A curated catalog of 19 website clones/prototypes built as static HTML/CSS/JS sites, presented through a landing page with filtering, preview modals, and a vintage paper catalog aesthetic.

---

## 1. Cloning & Faithfulness to Originals

**PlanetScale Case Study:** We compared our clone against the live `planetscale.com` and identified key gaps — font choice, content density, and layout structure.

- **Extract computed styles from live sites** using Puppeteer's `getComputedStyle()` to discover actual font stacks, colors, and spacing — don't guess from screenshots alone.
- **System font stacks** (like PlanetScale's `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`) render differently across OS. Test on multiple platforms.
- **Density matters.** The original's appeal was text-heaviness and simplicity. Clones that add visual flourishes (gradients, glows) at the expense of density lose the character of the original.
- **Bordered grid layouts** for logo sections are more faithful to data-dense sites than spaced-out card layouts.

## 2. ASCII Art & Monospace Alignment

- Always use a **monospace font** and `white-space: pre` or `pre-wrap` for ASCII diagrams.
- Stick to **safe characters**: `─ │ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼ | - + * =`
- Avoid characters with ambiguous widths (emoji, CJK, some Unicode).
- Set `font-variant-ligatures: none` to prevent font ligatures from collapsing character pairs.
- Test in the target font at the target size — alignment breaks across fonts.

## 3. Automated Screenshots with Puppeteer

We built two screenshot workflows:

1. **Thumbnail screenshots** (viewport-only, 1440x900) for card previews.
2. **Full-page screenshots** (`fullPage: true`) for scrollable modal previews.

**Key learnings:**
- Use `--allow-file-access-from-files` when loading `file://` URLs.
- Add `waitUntil: 'networkidle0'` plus a manual delay for JS-rendered content.
- `file://` protocol blocks `fetch()` calls (CORS). Use a local HTTP server for testing dynamic content.
- Store screenshot paths in your data file (`catalog.json`) so the UI can reference them dynamically.

## 4. Scrollable Modal Image Containers

To display full-page screenshots in a modal:

```css
.modal-image-container {
    max-height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;
}

.modal-image {
    width: 100%;
    height: auto;
    display: block;
}
```

**Gotchas:**
- Set `overflow: hidden` on the parent `.modal` to prevent double-scroll confusion.
- Use `overflow-y: scroll` (not `auto`) to always show the scrollbar as a visual affordance.
- Custom scrollbar styling (`::-webkit-scrollbar`) helps make the scroll area obvious.
- Reset `scrollTop = 0` when opening the modal to start at the top.

## 5. Vintage Paper Catalog Aesthetic

CSS-only techniques that sell the "old print catalog" feel:

| Treatment | Technique |
|---|---|
| Paper texture | SVG `feTurbulence` noise as inline data URI in `background-image` |
| Warm palette | `#f7f3e9` background, `#fdfbf5` cards, `#c4b89a` borders |
| Dashed borders | `border: 1.5px dashed` on cards, `1px dashed` on section dividers |
| Halftone dots | `radial-gradient(circle, #000 1px, transparent 1px)` at 4px spacing, `mix-blend-mode: multiply`, low opacity |
| Page vignette | `position: fixed` div with `box-shadow: inset 0 0 150px rgba(139,119,84,0.12)` |
| Registration marks | Four fixed-position crosshairs using `::before`/`::after` pseudo-elements |
| Item numbers | "Item No. 001" labels in monospace above each card title |

**Principles:**
- Keep effects **subtle** — opacity under 0.15, small sizes, muted colors.
- Use `pointer-events: none` on all decorative overlays.
- Layer z-indexes carefully: content < halftone (1) < overlay (2) < reg marks (49) < vignette (50) < modal (100).
- Hide decorative details (registration marks) on mobile with `@media (max-width: 768px)`.

## 6. Project Structure

```
clone-catalog/
  index.html          # Landing page shell
  css/styles.css      # All styles (CSS variables, components, responsive)
  js/app.js           # CatalogApp object (load, render, filter, modal)
  data/catalog.json   # Site metadata (name, tags, paths, screenshots)
  assets/images/
    thumbnails/       # Viewport-only screenshots for cards
    screenshots/      # Full-page screenshots for modal preview
  Sites/
    website_00/       # Individual clone sites
    website_01/
    ...
```

**Data-driven approach:** All site metadata lives in `catalog.json`. The JS reads it and generates cards dynamically. Adding a new site = adding an entry to the JSON + dropping files in `Sites/`.

## 7. Development Workflow

- **No build tools needed.** This is a static site. Run with `npx serve .` from the project directory.
- **Puppeteer** is the only dependency, used only for screenshot generation — not required at runtime.
- **Browser caching** will bite you after updating images. Hard refresh (`Ctrl+Shift+R`) or disable cache in DevTools.

---

*Last updated: January 2026*
