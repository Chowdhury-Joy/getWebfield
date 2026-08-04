# Architecture Overview
Last Updated: 2026-08-02T18:54:15+0600

## Overview
Static multi-demo roofing marketing sites for Getwebfield client previews. Each `rooferN/` folder is a standalone HTML landing page. Roofer 2 is currently the Roof Shark (Garfield / North Jersey) redesign using the Roofer 2 layout shell with client copy, photography, and brand orange.

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
- `scripts/` — image compression helpers
- `index.html` — redirects to `roofer1/`
- `decisions.md`, `bug_history.md`, `architecture.md`, `architecture_history.md`, `sitemap.md` — project memory

## Key Components
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
Visitor lands on `/roofer2/` → scans hero CTA / phone → scrolls services or process → submits contact form fields (prototype: no backend submit) or taps `tel:` / `mailto:` links.

## Integrations
- Google Fonts CDN
- Phone: `tel:9735132992`
- Email: `info@roofshark.com`
- No form backend, analytics, or CMS in this prototype
