# Decisions

## 2026-08-04T00:52:32+0600

<decision>
  <category>UI/UX</category>
  <context>TLS’s existing site felt dated and busy; the brief asked for a Monocromo-style redesign while keeping Texas Landscape Services content.</context>
  <action>Rebuilt the homepage as a minimal white/black studio layout: floating centered nav, ghost display title, staggered-style project row, manifesto copy, numbered TLS Approach principles, and a calm contact close.</action>
  <reason>Monocromo’s restraint puts photography and craft first — a better fit for a premium landscaping brand than the old multi-box marketing layout.</reason>
</decision>

<decision>
  <category>CRO</category>
  <context>Need clear next steps without turning the page into a hard-sell landing page.</context>
  <action>Keep CTAs quiet (“View all works”, “More about us”) and put phone, email, and address in the contact section and menu overlay.</action>
  <reason>Matches Monocromo’s editorial tone while still making contact obvious for property managers and estate owners.</reason>
</decision>

<decision>
  <category>Code</category>
  <context>Featured projects are list-like content that will grow.</context>
  <action>Store featured works in a Framer Projects CMS collection and render them with a CMS collection list.</action>
  <reason>Lets the team update project photos/titles without redesigning the homepage layout.</reason>
</decision>


## 2026-08-04T00:56:47+0600

<decision>
  <category>UI/UX</category>
  <context>The TLS Approach section was a plain 2×2 text grid and did not match the Monocromo expertise pattern the client wanted.</context>
  <action>Rebuilt Services as a full-bleed 4×2 hairline grid alternating landscape photos and numbered principles (Service, Creativity, Teamwork, Results), with Lekton titles, body copy pinned to the bottom of text cells, and an Expertise CTA cell.</action>
  <reason>Matches the reference composition exactly so the page feels like the same design system as Monocromo while keeping TLS messaging.</reason>
</decision>


## 2026-08-04T00:57:54+0600

<decision>
  <category>UI/UX</category>
  <context>Site used a mix of Clash Display, Inter, and Lekton; the client asked for one typeface across the website.</context>
  <action>Set every homepage RichText node to Geist Mono.</action>
  <reason>A single monospace family keeps the Monocromo technical feel consistent from nav to body copy.</reason>
</decision>


## 2026-08-04T00:59:37+0600

<decision>
  <category>UI/UX</category>
  <context>Headings were muted grey and the page felt static compared to Monocromo’s subtle motion.</context>
  <action>Set all headings and primary titles to #000000. Added scroll/in-view reveals (word/line text effects, section fades, staggered service cells) plus light hover fades on project and service images.</action>
  <reason>Black headings read clearer on white; restrained motion adds polish without breaking the minimal look.</reason>
</decision>


## 2026-08-04T01:05:26+0600

<decision>
  <category>UI/UX</category>
  <context>Client wanted a second homepage direction inspired by greencompany.framer.website, as a simple HTML/CSS/JS prototype with light motion — separate from the Monocromo Framer build.</context>
  <action>Built `index.html` + `css/styles.css` + `js/main.js` with rounded hero shell, olive-green system, pill nav/CTAs, about stats, service cards, TLS approach band, portfolio, reviews, and contact form. Added scroll reveal + hover motion. Used Plus Jakarta Sans to match Green Company’s friendly marketing feel.</action>
  <reason>HTML prototype is easy to review offline and iterate before committing another Framer direction; Green Company’s structure fits a conversion-led landscaping pitch better than editorial Monocromo.</reason>
</decision>

## 2026-08-04T01:17:04+0600

<decision>
  <category>UI/UX</category>
  <context>HTML Green Company prototype still used pure-white section/card bands and photo service cards that did not match the template.</context>
  <action>Removed white section backgrounds (page tone only). Rebuilt Services as dark-green icon cards and Advantages as the asymmetric 2+feature+2 grid with surface cards instead of white. Alternating about stats use surface/green.</action>
  <reason>Closer 1:1 to greencompany.framer.website while honoring the request to eliminate white section backgrounds.</reason>
</decision>

## 2026-08-04T01:22:03+0600

<decision>
  <category>Code</category>
  <context>Card grid column rules needed a clearer count-based system across all Getwebfield sites.</context>
  <action>Desktop grid-cards: 1→1 col, 2→2 cols, 3/5/6/9→3 cols, all other counts→4 cols. Updated project tokens + getwebfield design-system skill.</action>
  <reason>Matches the requested 2x2 / 3x3 / 4x4 mapping for every card grid.</reason>
</decision>

## 2026-08-04T01:24:43+0600

<decision>
  <category>UI/UX</category>
  <context>Hero felt crowded: translucent nav over the photo plus badge rows competed with the main CTAs.</context>
  <action>Moved primary nav outside the hero into its own white rounded bar. Removed “Free cost estimate” / service-area badge rows and placed Request a Quote + View Portfolio buttons in that right-side slot.</action>
  <reason>Clearer hierarchy — nav reads as chrome, hero is photo + headline + buttons only.</reason>
</decision>

## 2026-08-04T01:27:00+0600

<decision>
  <category>UI/UX</category>
  <context>Primary CTAs needed a shared pill+arrow treatment with clear hover feedback across hero and sections.</context>
  <action>Standardized arrow buttons: light (white + green circle) on dark surfaces; opposite dark (green + white circle) on light sections. Hover fills the opposite color with a left-to-right wipe and swaps circle colors.</action>
  <reason>Matches the Request a Quote control, keeps contrast on green/dark panels, and gives every CTA the same motion language.</reason>
</decision>

## 2026-08-04T01:31:24+0600

<decision>
  <category>UI/UX</category>
  <context>Footer was a flat one-line bar and did not match the Green Company three-panel pattern.</context>
  <action>Rebuilt footer as a white rounded shell with three green cards: brand/copyright, contact + socials, page + legal links — TLS content.</action>
  <reason>Matches the reference footer composition while keeping real TLS phone, email, and Pilot Point address.</reason>
</decision>

## 2026-08-04T01:54:13+0600

<decision>
  <category>UI/UX</category>
  <context>Need a reusable “Our Service Areas” map block for Getwebfield sites, one country per market.</context>
  <action>Added a service-areas section with a US map highlighting Texas; stored US/UK/Canada/Australia SVG pack under assets/maps (and the design-system skill) for future sites to swap the matching country file and highlight class.</action>
  <reason>Matches the reference map look while keeping each website honest to its real geography.</reason>
</decision>

## 2026-08-04T01:57:08+0600

<decision>
  <category>UI/UX</category>
  <context>Service areas map sat on a white panel and the city list was incomplete vs the live TLS site.</context>
  <action>Removed map white background. Listed all TLS cities from txlandscapeservices.com (Frisco, Plano, McKinney, Denton, Prosper, Little Elm, Celina + surrounding North DFW). Logged the same complete-list + no-white-map rules in the design-system skill for every future site.</action>
  <reason>Matches the client’s real coverage and keeps the map aligned with the rest of the page tone.</reason>
</decision>

## 2026-08-04T02:00:59+0600

<decision>
  <category>CRO</category>
  <context>Prospects need quick answers before requesting a quote; the page had no FAQ.</context>
  <action>Added an accordion FAQ before contact covering service areas, commercial/residential, design collaboration, TLS Approach, water management, custom programs, and free estimates — answers pulled from live TLS messaging.</action>
  <reason>Reduces pre-quote friction and reinforces real service facts without inventing claims.</reason>
</decision>

## 2026-08-04T02:04:41+0600

<decision>
  <category>UI/UX</category>
  <context>FAQ was a stacked heading + list; needed a clearer horizontal reading pattern and exclusive open state.</context>
  <action>Rebuilt FAQ as a 12-column grid (copy 4 cols left, accordion 8 cols right). Only one FAQ item stays open at a time.</action>
  <reason>Keeps intro text anchored while questions scan as the interactive column; exclusive accordion avoids a wall of open answers.</reason>
</decision>

## 2026-08-04T02:13:59

<decision>
  <category>CRO</category>
  <context>Prospects should see proof of work before reading service offerings.</context>
  <action>Moved Portfolio (#works) above Services in page order, nav, and footer links.</action>
  <reason>Showing finished landscapes first builds trust before asking people to compare service types.</reason>
</decision>

## 2026-08-03T20:15:49Z

<decision>
  <category>UI/UX</category>
  <context>About stats cards sat directly on the soft gray section with no frame separating them from the background.</context>
  <action>Wrapped the four stat cards in a white rounded shell (.stats-shell) with 16–20px inner padding.</action>
  <reason>Creates a clear white frame around the alternating light/green cards and matches the rounded-panel language used elsewhere on the page.</reason>
</decision>

## 2026-08-03T20:17:30Z

<decision>
  <category>UI/UX</category>
  <context>About (and other section-head) description text sat in a narrow 42ch column with empty space to the right.</context>
  <action>Removed the max-width cap on .lead when it sits inside .section-head__row so copy fills the right grid column.</action>
  <reason>The two-column head already defines available width; an extra ch limit left unused space and made the intro feel cramped.</reason>
</decision>

## 2026-08-03T20:18:30Z

<decision>
  <category>UI/UX</category>
  <context>About intro copy was long enough to feel dense next to the display headline.</context>
  <action>Shortened the About lead to a tighter two-clause line covering estates, commercial, and turnkey care.</action>
  <reason>Keeps the right column to roughly 3–4 lines so the head reads as one calm composition.</reason>
</decision>

## 2026-08-03T20:22:00Z

<decision>
  <category>CRO</category>
  <context>Service cards showed redundant “Custom quote” label next to a weak “View Details” button.</context>
  <action>Removed the price label and changed each card CTA to “Get my custom quote” linking to #contact.</action>
  <reason>One clear action per card; quote language matches how these services are actually sold.</reason>
</decision>

## 2026-08-03T20:25:00Z

<decision>
  <category>UI/UX</category>
  <context>Service card quote buttons were content-width, so label and arrow sat tight together.</context>
  <action>Made service-card CTAs full width with space-between so label stays left and the arrow circle stays right.</action>
  <reason>Reads as a clear full-width action bar on each card instead of a compact chip.</reason>
</decision>

## 2026-08-04T04:00:53Z

<decision>
  <category>UI/UX</category>
  <context>Needed a second HTML direction after Green Company; Farmio (farmio.framer.website) was chosen as the visual reference.</context>
  <action>Shipped V2 as a Farmio-inspired layout (floating pill nav, full-bleed photo hero, cream panels, tall solution cards) using TLS green #3a4632 for accents, DM Sans for heading/body/buttons, IBM Plex Mono for taglines, and Farmio-scale display type (~62px / ~52px). Preserved Green Company as /v1/; root redirects to /v2/.</action>
  <reason>Keeps both variations comparable on getWebfield while making the new Farmio direction the default experience.</reason>
</decision>

## 2026-08-04T04:10:00Z

<decision>
  <category>UI/UX</category>
  <context>V2 was only loosely Farmio-inspired (TLS olive, DM Sans) and still felt like a different template; user asked for a 1:1 Farmio copy while keeping the map and removing cross-version footer links.</context>
  <action>Rebuilt /v2 to mirror Farmio’s system: lime #E7F352 CTAs, cream #E3E4D4 panels, ink #04303B, Inter body + BDO Grotesk display, floating pill nav, marquee about, tall solution cards, horizontal service panels, feature percentages, how-it-works steps, gallery, FAQ+image, join CTA. Kept US/Texas map. Removed V1↔V2 footer flip links.</action>
  <reason>V1 and V2 should read as two distinct looks; V2 should match the Farmio reference closely.</reason>
</decision>
