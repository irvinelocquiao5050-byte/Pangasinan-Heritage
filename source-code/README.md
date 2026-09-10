# The Pangasinan Heritage Digital Showcase

Activity 1.1 submission — Next.js 14 (App Router) + TypeScript + Tailwind CSS,
built with Brad Frost's Atomic Design methodology.

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Add real photos (see public/images/README.md), or leave placeholders

# 3. Run the dev server
npm run dev
# open http://localhost:3000

# 4. Production build (also proves the project compiles cleanly)
npm run build
npm run start
```

Requires **Node.js 18.18+**.

## Project structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx            # Root layout: header, footer, skip-link
│   ├── page.tsx               # Homepage (hero + HeritageGrid)
│   ├── not-found.tsx          # Custom 404
│   └── sites/[slug]/page.tsx  # Statically-generated site detail pages
├── components/
│   ├── atoms/                 # Button, Typography, Icon, Image, Color Tokens
│   ├── molecules/              # HeritageCard, SearchForm, NavigationItem
│   └── organisms/               # HeaderNavigation, HeritageGrid, Footer
├── data/heritageSites.ts       # Content — decoupled from components
├── lib/utils.ts                # Small shared helpers
└── types/index.ts              # Shared TypeScript types
```

## How this meets the platform requirements

| Requirement | Implementation |
|---|---|
| **Lightning-Fast** | Static Site Generation via `generateStaticParams`, `next/image` with AVIF/WebP + lazy loading, no heavy client bundles, inline SVG icons instead of an icon-font. |
| **Mobile-First** | Every component's Tailwind classes start unprefixed (mobile) and add `sm:`/`md:`/`lg:` overrides going up, not down. |
| **Maintainable** | Atomic Design component tree; content lives in `src/data/`, fully decoupled from presentation. |
| **Accessible** | Semantic landmarks, skip-link, visible focus rings, `aria-live` search results, `aria-current` nav state, required `alt` text on every image — targeting WCAG 2.1 AA. |
| **Deployable** | Framework-agnostic static export ready (`output: 'export'` in `next.config.js`) for JAMstack hosts (Vercel, Netlify, GitHub Pages). |

## Running a Lighthouse audit

The project targets Performance ≥80, Accessibility ≥85, Best Practices
≥85, and SEO ≥90. To check locally, always audit a **production
build** (the dev server disables optimizations and inflates the
Performance score downward):

```bash
npm run build
npm run start
# then, in a separate terminal:
npx lighthouse http://localhost:3000 --view
# or: open http://localhost:3000 in Chrome DevTools → Lighthouse tab
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. in `.env.local`) to your real
deployed domain before building for production — it feeds
`metadataBase`, the sitemap, robots.txt, and Open Graph URLs in
`src/app/layout.tsx`. It defaults to `http://localhost:3000` for local
testing.

## Notes for the report / documentation deliverables

This source code is the implementation referenced by:
- `report/Framework-Selection-Report` (Deliverable 1.1)
- `documentation/Atomic-Design-System-Manual` (Deliverable 1.2)

See the `report/` and `documentation/` folders for drafts you should
review, personalize with your own screenshots/reasoning, and export to
PDF before submission — the instructions require the report and manual
to accurately describe *your own* implementation and decisions.
