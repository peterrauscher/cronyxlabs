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

## Deploying to Cloudflare Pages

The site can be deployed to Cloudflare Pages using either of two methods:

1. **Direct upload via Wrangler CLI**:
   Run `bun run deploy` (executes `vite build && wrangler pages deploy dist`). This requires authenticating once with `wrangler login`.
2. **Cloudflare Pages Git integration**:
   Connect the repository in the Cloudflare dashboard with the following build settings:
   - **Framework preset**: None
   - **Build command**: `bun run build`
   - **Build output directory**: `dist`

`wrangler.toml` declares `pages_build_output_dir = "dist"`, and static files in `public/` (including `public/_headers`, `robots.txt`, and `sitemap.xml`) are copied into `dist` during the build and published as part of the deployment.

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
