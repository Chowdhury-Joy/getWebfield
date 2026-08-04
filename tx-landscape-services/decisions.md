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

## 2026-08-04T04:20:00Z

<decision>
  <category>UI/UX</category>
  <context>Previous V2 was only Farmio-inspired and not close enough; user required a 1:1 clone, without the hero video.</context>
  <action>Rebuilt /v2 from Farmio’s extracted Framer SSR HTML + CSS (content swapped to TLS), forced appear/opacity states visible without Framer JS, replaced hero video with the main heading, inserted the US/Texas map section, and removed cross-version footer links.</action>
  <reason>Only reusing Farmio’s actual structure/styles gets a true 1:1 look; video removed per request with heading in its place.</reason>
</decision>

## 2026-08-04T04:25:00Z

<decision>
  <category>UI/UX</category>
  <context>Framer SSR clone was fragile: hero heading broken, services/testimonials non-functional, Farmio filler content, unwanted team section.</context>
  <action>Rebuilt V2 as a clean Farmio-look page with real TLS copy (from txlandscapeservices.com), removed Our Team, added working testimonial scroller with arrows, Texas/landscape gallery images, a simple working services card grid, and a clarified hero (brand title + tagline card, no video).</action>
  <reason>Farmio supplies the look only; content and working sections must come from TLS.</reason>
</decision>

## 2026-08-04T04:52:19Z

<decision>
  <category>UI/UX</category>
  <context>Our solutions cards stepped up left→right with no clear rhythm, and the Contact us pill sat on top of the shortest (first) card.</context>
  <action>Equalized all three solution cards to a shared fixed height (560px desktop / 480 tablet / 420 mobile). Replaced Farmio’s per-card content gaps (--repfbg 179/261/490) with space-between so title stays top and tags stay bottom. Increased title-row → cards spacing and top-aligned the Contact us button so it no longer clashes with card 1.</action>
  <reason>Consistency reads cleaner than Farmio’s intentional stair-step; equal height + breathing room keeps the section tidy without redesigning the Farmio card look.</reason>
</decision>

## 2026-08-04T04:59:16Z

<decision>
  <category>UI/UX</category>
  <context>User wanted the Farmio stair-step solutions look back, but with clear math — not random heights — and equal cards on mobile.</context>
  <action>Desktop/tablet: bottom-aligned cards stepping +120px each time via extras 120 / 240 / 360 (total heights 420 / 540 / 660 desktop; 360 / 480 / 600 tablet). Mobile: stacked, full width, all 420px tall.</action>
  <reason>Mimics Farmio’s ascending row while making the rhythm obvious (clean +120 steps) and keeping mobile tidy and consistent.</reason>
</decision>

## 2026-08-04T05:06:04Z

<decision>
  <category>UI/UX</category>
  <context>Stair-step still started on card 1; user wanted the first card flat (no extra) and the step to begin on card 2.</context>
  <action>Set solution card extras to 0 / 120 / 240 (desktop totals 360 / 480 / 600). Mobile stays equal height/width.</action>
  <reason>Keeps the ascending Farmio rhythm while anchoring card 1 as the baseline.</reason>
</decision>


## 2026-08-04T05:47:52Z

<decision>
  <category>UI/UX</category>
  <context>Our solutions header still had a Contact us pill that competed with the cards and wasn’t needed in that section.</context>
  <action>Removed the Contact us button from the Our solutions Title & Button row; left the section heading and cards.</action>
  <reason>Contact lives elsewhere (nav / contact section); clearing this CTA reduces clutter above the stair-step cards.</reason>
</decision>

## 2026-08-04T05:54:29Z

<decision>
  <category>UI/UX</category>
  <context>Some sections still looked unlike Geist because Framer’s Inter font files had been renamed to “Geist Variable,” so the browser loaded Inter while CSS asked for Geist.</context>
  <action>Removed the 43 Framer/Inter @font-face aliases, dropped Inter Placeholder, pointed Framer font CSS variables at real Geist from Fontsource, and strengthened the sitewide Geist override across sections/text presets.</action>
  <reason>One real Geist source end-to-end so every section matches.</reason>
</decision>


## 2026-08-04T07:38:04Z

<decision>
  <category>Code</category>
  <context>Service Areas text still looked like a system sans even though Geist was named in the markup.</context>
  <action>Fixed broken inline style attributes that nested double quotes inside font-family (which truncated the style), and added a dedicated .tls-map-section Geist !important rule.</action>
  <reason>Nested quotes made the browser ignore the font declaration; single-quoted family names inside double-quoted style attrs load Geist correctly.</reason>
</decision>


## 2026-08-04T07:42:47Z

<decision>
  <category>UI/UX</category>
  <context>Section headings were rendering too heavy (Framer black / weight 1000); user wants medium weight.</context>
  <action>Set all heading levels (h1–h6), Framer heading presets, Service Areas title, and TLS custom titles to font-weight 500 (medium).</action>
  <reason>Matches the intended lighter headline feel across the page.</reason>
</decision>


## 2026-08-04T07:45:40Z

<decision>
  <category>UI/UX</category>
  <context>User asked to use getWebfield’s font system at the Large typography scale for the full V2 site (instead of ad-hoc Geist overrides).</context>
  <action>Added v2/css/design-tokens.css; loaded Hanken Grotesk + IBM Plex Mono (Bunny); set html data-type-scale="large"; mapped sitewide headings/body/buttons/taglines to Large token sizes and medium heading weight (500).</action>
  <reason>Aligns TLS V2 with the shared getWebfield design system so type is consistent with other client sites.</reason>
</decision>


## 2026-08-04T07:49:30Z

<decision>
  <category>UI/UX</category>
  <context>User wants Geist on TLS and as the getWebfield design-system default (replacing Hanken Grotesk / IBM Plex Mono).</context>
  <action>Set --font-heading/--font-body to Geist Variable and --font-tagline to Geist Mono in the getwebfield-design-system skill tokens, TLS v2 design-tokens + page bridge, and texas-lawn-legends design-tokens. Kept Large type scale and medium heading weight (500). TLS loads Geist via Fontsource.</action>
  <reason>One shared default type kit across getWebfield client sites; TLS matches that kit.</reason>
</decision>


## 2026-08-04T07:52:32Z

<decision>
  <category>UI/UX</category>
  <context>User asked to switch the type kit from Geist to Inter.</context>
  <action>Set getWebfield design-system defaults and TLS V2 (Large scale) to Inter for heading/body/button/tagline; load Inter from Bunny. Updated skill docs and texas-lawn-legends tokens to match.</action>
  <reason>Inter is now the shared default font across getWebfield client sites.</reason>
</decision>


## 2026-08-04T07:55:16Z

<decision>
  <category>UI/UX</category>
  <context>Headings felt too loose; user asked to tighten them.</context>
  <action>Tightened Large-scale heading tracking and leading: H1/H2 to -0.08em / 80% line-height; H3 to -0.07em / 92%; H4/H5 to -0.045em / 92%. Updated getWebfield design-tokens and TLS overrides.</action>
  <reason>Closer letter-spacing and line-height make Inter headlines feel denser and more intentional.</reason>
</decision>


## 2026-08-04T08:10:30Z

<decision>
  <category>UI/UX</category>
  <context>Service card titles and how-it-works step titles were mixed heading levels (h3/h5); user asked to make those card headings h4.</context>
  <action>Converted tls-service-card titles from h3→h4 and the three how-it-works step titles from h5→h4 (with h4/gc3dxx preset).</action>
  <reason>Keeps card-level titles on one consistent h4 tier in the type scale.</reason>
</decision>


## 2026-08-04T08:12:54Z

<decision>
  <category>UI/UX</category>
  <context>User wanted h4 titles at a fixed 24px with tighter tracking/leading.</context>
  <action>Set .type-h4 / site h4 to 24px at all breakpoints, line-height 85%, letter-spacing -0.06em in getWebfield tokens and TLS overrides.</action>
  <reason>Card-level titles stay consistent and denser than the previous stepped 20/24/28 scale.</reason>
</decision>


## 2026-08-04T10:35:16Z

<decision>
  <category>UI/UX</category>
  <context>Our solutions cards felt too close together.</context>
  <action>Increased the horizontal gap between solution cards from 24px to 64px.</action>
  <reason>Gives each card more breathing room in the stair-step row.</reason>
</decision>


## 2026-08-04T10:36:46Z

<decision>
  <category>UI/UX</category>
  <context>User wanted more space between the Our solutions headline and the card row — not between the cards themselves.</context>
  <action>Reverted card-to-card gap to 24px. Set the section container gap (headline → cards) to 64px.</action>
  <reason>Separates the title block from the stair-step cards without widening the card gutters.</reason>
</decision>
