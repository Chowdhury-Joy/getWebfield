# Architecture Overview
Last Updated: 2026-08-04T01:31:25

## Overview
Texas Landscape Services marketing website with two prototype directions: (1) Framer Monocromo-inspired editorial homepage, (2) HTML/CSS/JS Green Company–inspired conversion homepage. Content adapted from txlandscapeservices.com (North Dallas–Fort Worth commercial and residential landscape management).

## Getting Started
### HTML version (Green Company)
```bash
cd ~/Projects/tx-landscape-services
python3 -m http.server 8765
# open http://127.0.0.1:8765
```

### Framer version (Monocromo)
- Open Framer project ID `kUSjd2dseMjaqM70Dal1`
- Live: https://concave-marketplaces-214295.framer.app
- No local install or env vars required

## Tech Stack
- Framer (Monocromo version): canvas + CMS + responsive breakpoints; Geist Mono
- HTML/CSS/JS (Green Company version): static index.html, css/, js/; IBM Plex Mono
- Imagery: Unsplash landscaping photos + assets from txlandscapeservices.com uploads

## Folder Structure
- Framer project (remote): Monocromo-style homepage
- Local HTML prototype:
  - index.html — Green Company–inspired homepage
  - css/design-tokens.css, css/styles.css
  - js/main.js
  - .firecrawl/ — design reference screenshots
  - project memory docs (architecture.md, decisions.md, sitemap.md, …)

## Key Components
- Framer Home (/) — Monocromo direction (CMS works, services grid, contact)
- HTML Home (index.html) — Green Company direction (white rounded nav above hero, hero CTAs, about, services, approach, portfolio, reviews, contact form)
- HTML nav — white rounded bar outside hero (not overlaid on photo)
- HTML footer — white shell with three green cards (brand, contact/social, nav/legal)
- HTML animations — IntersectionObserver scroll reveals, staggered cards, hero zoom, hover lifts
- Framer Nav — floating pill + overlay menu
- Framer Projects CMS — Title, Category, Location, Image, Slug

## Data Flow
### HTML
Visitor lands on index.html → browses services/portfolio/reviews → submits quote form (client-side thank-you) or uses tel/mailto.

### Framer
Visitor lands on / → browses featured Projects from CMS → reads TLS Approach → contacts via phone/email.

## Integrations
- Framer hosting / publish
- HTML form is front-end only (no CRM wired yet)
- Contact channels: phone 469-455-9733, email info@txlandscapeservices.com
