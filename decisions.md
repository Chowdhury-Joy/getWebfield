# Project Decisions

## 2026-07-29

<decision>
 <category>UI/UX</category>
 <context>Roofer 3 needed a distinct demo layout so clients see variety beyond Roofer 1 and Roofer 2.</context>
 <action>Editorial centered hero + 3-photo filmstrip + sticky black nav + numbered service list rows + bordered property cards with thumbnails + horizontal process timeline + static trust row + clean white contact form. Fonts: Hanken Grotesk + IBM Plex Mono (not Bebas Neue).</action>
 <reason>None of these patterns appear in Roofer 1 (50-50 hero, card grid, viewport intro) or Roofer 2 (full-bleed overlay hero, 2x2 service cards, photo-bg split panels). Gives a third credible conversion-focused option.</reason>
</decision>

<decision>
 <category>Code</category>
 <context>Figma asset URLs expire and are large; Roofer 3 reuses photos from Roofer 1/2.</context>
 <action>Added scripts/compress-roofer3-images.sh — downloads shared assets, resizes with sips (max 1400px), outputs JPG + WebP to roofer3/images/. HTML uses picture elements with webp source.</action>
 <reason>Keeps page load fast and assets committed locally instead of relying on expiring Figma CDN links.</reason>
</decision>

<decision>
 <category>UI/UX</category>
 <context>Roofer 4 needed another distinct demo so clients can compare four conversion layouts.</context>
 <action>Lead-first dark hero panel with embedded form + stacked photo collage; desktop left side-rail nav; accordion services; zigzag residential/commercial rows; vertical process rail; 3-column review quotes; muted contact split (info + bordered form). Fonts: Source Serif 4 + Outfit.</action>
 <reason>Avoids Roofer 1 (50-50 white hero/card grid), Roofer 2 (full-bleed overlay/2x2 cards), and Roofer 3 (centered editorial/filmstrip/numbered list/horizontal timeline). Form-in-hero is the primary CRO difference.</reason>
</decision>

<decision>
 <category>Code</category>
 <context>Roofer 4 needed the same compressed photography without re-downloading raw Figma assets.</context>
 <action>Copied already-compressed JPG/WebP/SVG from roofer3/images into roofer4/images.</action>
 <reason>Same quality and file size with no extra network round-trip; keeps demos consistent.</reason>
</decision>

<decision>
 <category>UI/UX</category>
 <context>User asked Roofer 4 to be full dark mode.</context>
 <action>Switched page tokens to black surfaces (#000 / #0a0a0a / #111), inverted grayscale text, dark borders and form fields; brand blue kept for buttons only. Logo inverted on dark chrome.</action>
 <reason>Makes Roofer 4 visually distinct from the light demos while keeping Getwebfield text rules (no brand-colored body text).</reason>
</decision>

<decision>
 <category>CRO</category>
 <context>User asked for Roofer 5 to be UX and CRO focused, after providing fonts and Large type scale.</context>
 <action>Built conversion-first landing: offer strip, value+short lead form hero (name/phone first), proof band, service picker that preselects service and scrolls to form, urgency section, objection FAQ, final CTA band, sticky mobile Call/Book bar. Fonts: Outfit headings all-caps -1% tracking, Inter body, Inter Medium buttons all-caps, IBM Plex Mono taglines. Large type scale.</action>
 <reason>Prioritizes lead capture and phone calls over visual novelty; layout intentionally differs from demos 1–4 while following the design-system font/scale gate.</reason>
</decision>

<decision>
 <category>UI/UX</category>
 <context>Roofer 5 needed fonts and scale confirmed before CSS per Getwebfield rules.</context>
 <action>Asked user first; applied Heading Outfit all-caps -1% letter-spacing, Paragraph Inter, Button Inter Medium all-caps, Tagline IBM Plex Mono, Large scale sizes.</action>
 <reason>Follows mandatory Ask-fonts-then-build protocol after earlier demos skipped it.</reason>
</decision>

<decision>
 <category>UI/UX</category>
 <context>Section spacing was being collapsed between same-color sections (padding-top:0), which broke the intended rhythm.</context>
 <action>Updated getwebfield-design-system skill (SKILL.md, design-rules.md, design-tokens.css, anti-slop-design.mdc): every section must keep full top and bottom padding; adjacent sections stack (desktop 96+96, mobile/tablet 48+48) regardless of background color. Removed padding-top:0 overrides from roofer3/4/5 and about.html.</action>
 <reason>Same-color neighbors still need both cushions — collapsing made spacing inconsistent and violated the section token system.</reason>
</decision>

<decision>
 <category>UI/UX</category>
 <context>Roofer 5 needed the new section-padding rule applied fully, plus a stronger CRO UI.</context>
 <action>Reworked Roofer 5 so every content section uses `.space-section` (no collapsed padding). Alternated white/black sections for rhythm; black lead form in hero; proof as black quote+stats; service picker as full-width interactive rows; added how-it-works steps; FAQ split layout; sticky header; selected-service feedback on form.</action>
 <reason>Full 96+96 stacking reads clearer when sections alternate color; black form and row services improve hierarchy and conversion clarity without breaking design-system rules.</reason>
</decision>

<decision>
 <category>UI/UX</category>
 <context>User did not want demo sites cross-linked in footers — each roofer page should feel standalone for client sharing.</context>
 <action>Removed footer demo navigation links from roofer3, roofer4, and roofer5.</action>
 <reason>Prevents visitors from hopping between internal prototypes; each URL should present as a single client-ready site.</reason>
</decision>

<decision>
 <category>Code</category>
 <context>User wanted Roofer 1 moved off the site root to match multi-demo URL plan (domain/roofer1).</context>
 <action>Moved index.html, about.html, and images/ into roofer1/. Root index.html redirects to roofer1/. Updated roofer2 about link to ../roofer1/about.html.</action>
 <reason>Aligns repo structure with gatewayfield.com/roofer1-style hosting; keeps roofer2–5 paths consistent.</reason>
</decision>

<decision>
 <category>UI/UX</category>
 <context>Roofer 2 hero nav and content stretched edge-to-edge on ultra-wide screens.</context>
 <action>Capped `.hero-banner__inner` and `.top-bar__inner` at 1400px centered, matching `.layout-container`. Hero background photo stays full-bleed.</action>
 <reason>Content aligns with the rest of the page; only the photo remains edge-to-edge as designed.</reason>
</decision>

<decision>
 <category>UI/UX</category>
 <context>User asked Roofer 3, 4, and 5 to use typography similar to Roofer 1 for demo consistency.</context>
 <action>Aligned all three demos to Roofer 1 type system: Bebas Neue headings (letter-spacing 0, capitalize), Inter body/buttons (500 weight, uppercase, letter-spacing 0), Bebas Neue taglines (0.06em uppercase), Saira Extra Condensed available for badges. Matched h1–h4 scale (48/36/28/22 mobile → 64/48/36/28 at 640px+) and body letter-spacing (-0.04em). Hero descriptions capped at 560px only.</action>
 <reason>Keeps five demos feeling like one brand family while preserving each layout’s unique structure.</reason>
</decision>

<decision>
 <category>Code</category>
 <context>User asked Roofer 1 (root index.html) to use the same images as Roofer 2.</context>
 <action>Replaced all Figma MCP asset URLs in index.html with compressed local files in `/images/` (webp+jpg picture elements for photos; SVG for logo, wreaths, stars, icons, financing). Mapped hero→hero-aerial, about→about-house, service cards→service-work, splits→residential/commercial, testimonial→workers, contact→contact-bg.</action>
 <reason>Aligns Roofer 1 photography with Roofer 2, removes expiring CDN links, and improves load speed. Layout and copy unchanged.</reason>
</decision>

## 2026-08-02

<decision>
 <category>UI/UX</category>
 <context>Roofer 2 hero headline spanned wider than the supporting paragraph, breaking visual alignment in the left hero column.</context>
 <action>Capped `.hero-content .type-h1` at `max-width: 560px` — same constraint already on `.hero-content .text-desc`.</action>
 <reason>Keeps headline and body copy in one readable column; matches Roofer 1 hero description width rule.</reason>
</decision>

<decision>
 <category>UI/UX</category>
 <context>User wanted residential/commercial split-panel copy (headline, paragraph, CTA) at the top of each image card, not bottom-aligned.</context>
 <action>Changed `.split-panel` from `justify-content: flex-end` to `flex-start`. Unified top-dark gradient overlay on both panels for white text readability. Added overlay to residential panel (was missing).</action>
 <reason>Top alignment matches user screenshot intent; gradient at top preserves legibility without covering the full photo.</reason>
</decision>

<decision>
 <category>UI/UX</category>
 <context>Contact CTA section background photo was heavily dimmed by a white overlay (`rgba(255,255,255,0.88)`), hiding the roofing image.</context>
 <action>Removed overlay visibility (`display: none` on `.contact-section__overlay`). Form fields remain white cards for contrast.</action>
 <reason>User requested full image opacity; white form fields still separate content from the photo.</reason>
</decision>

<decision>
 <category>Code</category>
 <context>Roofer 2 still used expiring Figma MCP asset URLs; hero and contact images were oversized for web delivery.</context>
 <action>Created `roofer2/images/` with compressed JPG + WebP (max 1200px, cwebp q72–65). Replaced all Figma photo/SVG references with local `picture` elements. Hero webp ~36KB (was ~74KB in Roofer 1).</action>
 <reason>Same local-asset pattern as Roofer 1/3; faster load and no CDN expiry.</reason>
</decision>

<decision>
 <category>UI/UX</category>
 <context>Two decorative service-grid image slots used the same placeholder and had no distinct roofing photography.</context>
 <action>Added Unsplash roofing photos: `service-card-roofing` (worker on shingles) and `service-card-house` (modern shingle home), compressed to 800px max, webp+jpg in `roofer2/images/`.</action>
 <reason>Distinct visuals fill grid gaps on desktop; alt text describes each scene for accessibility.</reason>
</decision>
