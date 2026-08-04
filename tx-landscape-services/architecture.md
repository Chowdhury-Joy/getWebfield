# Architecture Overview
Last Updated: 2026-08-04T04:10:00Z

## Overview
Texas Landscape Services marketing site with three prototype directions: (1) Framer Monocromo-inspired editorial homepage, (2) HTML V1 Green Company–inspired conversion homepage at `/v1/`, (3) HTML V2 Farmio 1:1 visual clone at `/v2/` (default). Content adapted from txlandscapeservices.com (North Dallas–Fort Worth commercial and residential landscape management).

## Getting Started
### HTML versions
```bash
cd ~/Projects/tx-landscape-services
python3 -m http.server 8765
# V2 (default): http://127.0.0.1:8765/v2/
# V1:           http://127.0.0.1:8765/v1/
# Root redirects to /v2/
```

Live (getWebfield):
- V2: https://pro.getwebfield.com/tx-landscape-services/ (→ v2)
- V2 direct: https://pro.getwebfield.com/tx-landscape-services/v2/
- V1: https://pro.getwebfield.com/tx-landscape-services/v1/

### Framer version (Monocromo)
- Open Framer project ID `kUSjd2dseMjaqM70Dal1`
- Live: https://concave-marketplaces-214295.framer.app

## Tech Stack
- Framer (Monocromo): canvas + CMS; Geist Mono
- HTML V1 (Green Company): IBM Plex Mono; olive green `#3a4632`
- HTML V2 (Farmio 1:1): Inter + BDO Grotesk display; Farmio lime `#e7f352`, cream `#e3e4d4`, ink `#04303b`; floating pill nav; marquee about; solution/service panels; map retained
- Imagery: Unsplash + txlandscapeservices.com uploads
- Maps: `assets/maps/` (us, uk, canada, australia)

## Folder Structure
- `index.html` — redirects to `v2/`
- `v1/` — Green Company homepage (`index.html`, `css/`, `js/`, local `assets/` copy)
- `v2/` — Farmio-inspired homepage (`index.html`, `css/design-tokens.css`, `css/styles.css`, `js/main.js`)
- `assets/maps/` — shared country SVG pack (V2 areas map references `../assets/maps/us.svg`)
- Project memory docs at repo root
- `.firecrawl/` — design reference scrapes (Farmio, etc.)

## Key Components
- V2 nav — white floating pill over hero photo; Contact us CTA
- V2 hero — full-bleed landscape photo, large display title (~62px), bottom-left feature card, bottom-right copy + Get started
- V2 solutions — three tall image cards (commercial / estate / water)
- V2 areas — city list + US map with Texas highlighted
- V2 FAQ — exclusive accordion; contact form (front-end thank-you)
- V1 — prior Green Company layout preserved for comparison
- Framer Home — Monocromo direction

## Data Flow
Visitor hits root → redirected to V2 → browses sections → quote form (client-side) or tel/mailto.

## Integrations
- getWebfield monorepo deploy (`Chowdhury-Joy/getWebfield` → `tx-landscape-services/`)
- HTML form front-end only (no CRM yet)
- Contact: 469-455-9733, info@txlandscapeservices.com
