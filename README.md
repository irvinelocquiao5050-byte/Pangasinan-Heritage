# Pangasinan Heritage Digital Showcase

Next.js 14 (App Router) source code for Activity 1.1 — Deliverable 1.2
(Atomic Design System) built on top of Deliverable 1.1 (framework
selection: Next.js 14, see `/report/Framework-Selection-Report.pdf`).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  components/
    atoms/       Button, Typography, tokens (Color Tokens), Icon, Image
    molecules/   HeritageCard, SearchForm, NavigationItem
    organisms/   HeaderNavigation, HeritageGrid
  data/          heritageSites.ts — sample content
  layout.tsx     Root layout (HeaderNavigation + footer)
  page.tsx       Homepage (hero + HeritageGrid)
  globals.css    Design tokens (CSS variables) + Tailwind directives
public/images/   Local SVG illustrations (no external image hosting needed)
```

## Design system

See `/documentation/Atomic-Design-System-Manual.pdf` for the full
component-by-component write-up (visual preview, usage context,
responsive logic, and code reference) for every atom, molecule, and
organism in this project.

## Accessibility & performance notes

- All interactive elements meet the 44px minimum touch-target size.
- Focus-visible outlines are defined globally for keyboard users.
- Images are local SVGs with locked aspect ratios to avoid layout
  shift on slow mobile connections; non-priority images lazy-load.
- Color contrast for text/background pairs was checked against
  WCAG 2.1 AA (4.5:1 for body text, 3:1 for large text).
