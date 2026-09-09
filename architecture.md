# Architecture Overview
Last Updated: 2026-09-09T12:37:26+0600

## Overview
Static single-page marketing sites for Getwebfield client previews. Two families live here:

1. **Roofer demos** — `rooferN/`, self-contained HTML landing pages. Roofer 2 is the Roof Shark (Garfield / North Jersey) redesign using the Roofer 2 layout shell with client copy, photography, and brand orange.
2. **Green Company previews** — `green-company/` is the master template (Texas Landscape Services). Every other top-level business folder is a copy of that template re-skinned for one real business, carrying a "Concept preview" banner and `noindex`. Most are London landscapers; `custom-timber-buildings/` is the first non-landscaping, non-London build (a Somerset timber-building manufacturer, timber palette).

## Getting Started
- Prerequisites: any static file server (Python 3 is enough)
- Install: none
- Environment variables: none
- Run locally:
  ```bash
  python3 -m http.server 8080
  ```
  Then open `/roofer1/` … `/roofer5/` (Roof Shark lives at `/roofer2/`)

## Tech Stack
- Plain HTML + embedded CSS + minimal vanilla JS (FAQ accordion)
- Google Fonts: Bebas Neue, Inter, Saira Extra Condensed (Roofer 2)
- Local JPG + WebP photography; SVG icons/stars/wreaths
- Deployed via GitHub Pages (`.github/workflows/pages.yml`)

## Folder Structure
- `roofer1/` — first Louisiana-style demo (homepage + about)
- `roofer2/` — Roof Shark homepage in Roofer 2 layout (`index.html`, `images/`)
- `roofer3/` … `roofer5/` — alternate layout demos
- `green-company/` — master Green Company template (`index.html`, `css/design-tokens.css`, `css/styles.css`, `js/main.js`, `assets/maps/*.svg`)
- `<business-name>/` — one folder per preview: `index.html` plus copies of the template CSS/JS and a `css/demo.css` overlay holding the preview banner, map animation, spacing fixes, and any palette re-tone
- `scripts/` — image compression helpers
- `index.html` — redirects to `roofer1/`
- `decisions.md`, `bug_history.md`, `architecture.md`, `architecture_history.md`, `sitemap.md` — project memory

## Key Components

### Green Company preview shell (green-company/ and its copies)
- **Concept-preview banner** — dark strip above the nav declaring the page unofficial; paired with `noindex, nofollow`
- **Nav + hero** — sticky pill nav with phone CTA; full-bleed hero photo driven by the `--hero-image` custom property
- **Stats / portfolio / service grids** — `.grid-cards` with `data-card-count` choosing 1–4 desktop columns (3/5/6/9 → 3 columns)
- **Service-area map** — inline SVG (UK, US, Canada, Australia in `green-company/assets/maps/`) with an animated pulse marker. Marker placement on the UK map uses the map's own projection: 114.05px per degree of latitude, 67.0px per degree of longitude, with London at (729.2, 1083.3)
- **Approach / reviews / FAQ / CTA form / footer** — as below
- **`css/demo.css`** — per-preview overlay; never edit the copied `styles.css` or `design-tokens.css`, override in `demo.css` instead
- **Roofer 2 viewport shell** — top bar + full-bleed hero + trust ticker = 100svh
- **About grid** — portrait photo (desktop) + copy/stats + testimonial card
- **Services grid** — 2-col below desktop / 3-col on desktop; cards hug content height at all breakpoints (no image tiles)
- **Split panels** — residential / commercial photo overlays
- **Process steps** — numbered how-it-works list
- **Financing band** — two-column pitch + CTA
- **Testimonials carousel** — CSS marquee of Google reviews
- **FAQ accordion** — independent toggles with animated height
- **Contact band** — photo background + lead form
- **Footer** — brand, services, company, service-area columns

## Data Flow
Roofer demos: visitor lands on `/roofer2/` → scans hero CTA / phone → scrolls services or process → submits contact form fields (prototype: no backend submit) or taps `tel:` / `mailto:` links.

Green Company previews: visitor lands on the preview → hero CTA (quote or call) → about/portfolio for credibility → building or service grid → delivery area → reviews → FAQ → contact form or `tel:` link. The form is client-side only: submit is prevented and a thank-you note is revealed.

## Integrations
- Google Fonts CDN
- Phone: `tel:9735132992` (Roofer 2), `tel:01935891195` (Custom Timber Buildings preview)
- Email: `info@roofshark.com` (Roofer 2). Custom Timber Buildings publish no email address, so the preview offers phone and form only
- No form backend, analytics, or CMS in this prototype
