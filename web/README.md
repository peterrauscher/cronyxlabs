# Cronyx Labs Web

Single-page static marketing site for Cronyx Labs, an independent technology holding company architecting, acquiring, and compounding category-defining software and AI systems. Built for fast loading, zero raster image dependencies, and deployment on Cloudflare Pages.

## Stack

- **React 19** and **TypeScript** (strict mode)
- **Vite 7** for development and production bundling
- **Tailwind CSS v4** using CSS-first `@theme` configuration in `src/index.css` (no `tailwind.config.js`)
- **Self-hosted variable fonts** via `@fontsource-variable` (`@fontsource-variable/outfit` and `@fontsource-variable/jetbrains-mono`)

## Getting started

Install project dependencies:

```bash
bun install
```

Start the local development server:

```bash
bun run dev
```

Run TypeScript type-checking without emitting files:

```bash
bun run check
```

Build the static site for production into `dist`:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

## Project layout

```text
src/
├── App.tsx             # Root page composition and band sequencing
├── sections/           # Page bands (Hero, WhatWeDo, Ventures, Advantage, Mission, Contact)
├── components/
│   ├── ui/             # Reusable UI primitives (Container, Button, ArrowLink, Eyebrow, etc.)
│   ├── art/            # Inline-SVG artwork components
│   ├── Header.tsx      # Site navigation header
│   └── Footer.tsx      # Site footer
├── data/               # Static site content and navigation data (site.ts)
└── index.css           # Design tokens (@theme) and shared utility classes
```

## Design tokens

All colour palettes, font families, and motion easing curves live in the `@theme` block of `src/index.css`. They are consumed throughout the application as standard Tailwind utility classes (such as `bg-cream`, `text-ink`, `border-line`, `text-night-muted`, `font-sans`, and `font-mono`).

## Crawler and agent discoverability

The page is client-rendered, so the HTML a non-executing crawler receives contains only `<div id="root">` — the copy is injected by JavaScript. Google renders JS, most AI crawlers do not. Everything below exists to close that gap.

- `public/robots.txt` — fully permissive (`Allow: /`) and carries a `Content-signal` line granting `search`, `ai-input`, and `ai-train`, so scrapers and model trainers have an explicit machine-readable grant rather than an inferred one.
- `public/llms.txt` — [llms.txt](https://llmstxt.org/) file: the required H1 plus summary, followed by H2 URL lists pointing at the Markdown content below. Read on demand by agents rather than by ranking crawlers.
- `public/index.md` — the whole page as Markdown, served at the page URL with the extension replaced by `.md` as the llms.txt spec recommends. This is the readable copy of the site for anything that does not execute JavaScript.
- `index.html` declares `rel="describedby"` → `/llms.txt` and `rel="alternate" type="text/markdown"` → `/index.md`.
- `public/_headers` sets explicit `Content-Type` for the two files above, since they are not covered by the extension-to-MIME defaults the rest of the site relies on.

Note that a Cloudflare managed `robots.txt` (dashboard: **Security → Settings → Bot traffic → Set your preference to block training in robots.txt**) is *prepended* to the origin file, and its default block disallows GPTBot, ClaudeBot, CCBot, Google-Extended, Bytespider, and others. If that toggle is on, it overrides the grant in `public/robots.txt`.

## Deploying to Cloudflare Pages

The site can be deployed to Cloudflare Pages using either of two methods:

1. **Direct upload via Wrangler CLI**:
   Run `bun run deploy` (executes `vite build && wrangler pages deploy dist`). This requires authenticating once with `wrangler login`.
2. **Cloudflare Pages Git integration**:
   Connect the repository in the Cloudflare dashboard with the following build settings:
   - **Framework preset**: None
   - **Build command**: `bun run build`
   - **Build output directory**: `dist`

`wrangler.toml` declares `pages_build_output_dir = "dist"`. Static files in `public/` (such as `_headers` and `robots.txt`) are copied into `dist` during the build, while `sitemap.xml` is automatically generated at build time by `vite-plugin-sitemap` with the latest build timestamp and injected into `dist/sitemap.xml` (as well as linked in `dist/index.html`).

## Performance notes

The site implements several deliberate performance choices:

- **Zero raster images**: Every visual is an inline SVG constructed from vector geometry and gradients, ensuring the Largest Contentful Paint (LCP) element is text and eliminating image network requests.
- **Self-hosted variable fonts**: `woff2` variable font files with `unicode-range` subsetting are self-hosted via `@fontsource-variable`, removing third-party font CDN latency and round-trips.
- **`content-visibility: auto` on below-the-fold bands**: Off-screen bands apply the `band-defer` utility (`content-visibility: auto; contain-intrinsic-size: auto 520px`) to skip layout and painting until they approach the viewport. The `auto` keyword lets the browser cache each band's real size after first render, so the scroll height only relies on the estimate before that.
- **Single JavaScript chunk**: Vite/Rollup is configured with `manualChunks: undefined` to emit a single application chunk, avoiding waterfall round-trips on cold loads.
- **`lightningcss` minification**: CSS is minified using `lightningcss` for high-throughput, optimal stylesheet compression.
- **Immutable hashed-asset caching**: `public/_headers` serves content-hashed bundles and `woff2` files in `/assets/*` with `Cache-Control: public, max-age=31536000, immutable`, while serving `/*` HTML documents with `max-age=0, must-revalidate` for immediate updates.
- **`prefers-reduced-motion` handling**: The `@layer base` stylesheet handles `prefers-reduced-motion: reduce` across animations and transitions.

Measured on the production build served locally, Chrome at 1440×900, cold cache:
FCP/LCP 96 ms, CLS 0.0001, 4 network requests, 165 KB transferred in total. The
LCP element is the header wordmark — text, not an image.
