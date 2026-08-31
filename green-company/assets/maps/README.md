# Service area maps (Getwebfield)

One country map per website. Highlight the client’s region(s) in dark green; keep other regions light green.

| File | Use when |
|------|----------|
| `us.svg` | US-based businesses — state classes like `.tx`, `.ca` |
| `uk.svg` | UK-based businesses |
| `canada.svg` | Canada-based businesses |
| `australia.svg` | Australia-based businesses |

## Colors (match reference)

- Base regions: `#b7c9a0`
- Active / service region: `#3a4632` (site green)
- Borders: `#ffffff`
- **No white panel behind the map** — map sits on the page background

## City / area list (required)

Always pull the **full** service-area list from the client’s real site or brief — every named city/town they claim to serve. Do not invent cities and do not drop any.

Example (Texas Landscape Services): Frisco, Plano, McKinney, Denton, Prosper, Little Elm, Celina, and surrounding North DFW areas.

## TLS example

Texas Landscape Services uses `us.svg` with `.tx { fill: #3a4632 }`.
