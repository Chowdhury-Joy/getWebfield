# Bug History

No bugs logged yet for this Framer rebuild.

## 2026-08-04T01:25:21+0600

<bug>
  <category>UI/UX</category>
  <symptom>Dark green about cards showed black/gray text and were hard to read.</symptom>
  <root_cause>`.stat-card h3/p` color rules came after `.stat-card--green` text colors and overrode them.</root_cause>
  <prevention_rule>Always place variant text-color overrides after the base component text rules.</prevention_rule>
</bug>

## 2026-08-04T04:52:19Z

<bug>
  <category>UI/UX</category>
  <symptom>Our solutions cards looked uneven (stair-step heights) and the Contact us button visually collided with the top of the first card.</symptom>
  <root_cause>Farmio SSR used different --repfbg gaps per card (179px / 261px / 490px) to invent staggered heights; title row align-items:flex-end plus tight section gap left the CTA sitting on the shortest card.</root_cause>
  <prevention_rule>Solution cards in a row must share one explicit height; never rely on unequal content gaps for “design,” and keep at least clear margin between the section CTA and the card tops.</prevention_rule>
</bug>

## 2026-08-04T04:59:16Z

<bug>
  <category>UI/UX</category>
  <symptom>After equalizing solution cards, the section lost the Farmio ascending stair-step look the user wanted to keep.</symptom>
  <root_cause>Equal-height fix removed the height rhythm entirely instead of replacing Farmio’s uneven gaps with a clear stepped scale.</root_cause>
  <prevention_rule>For solutions cards: desktop uses an explicit +120px height step (120/240/360 extras); mobile always forces equal height and full width.</prevention_rule>
</bug>

## 2026-08-04T05:54:29Z

<bug>
  <category>UI/UX</category>
  <symptom>Some sections still did not look like Geist even after a sitewide font override.</symptom>
  <root_cause>@font-face rules labeled “Geist Variable” still pointed at Framer’s Inter .woff2 files, so the browser served Inter under the Geist name.</root_cause>
  <prevention_rule>Never alias another foundry’s font files as Geist; load Geist only from Fontsource (or another real Geist source) and remove conflicting @font-face rules.</prevention_rule>
</bug>


## 2026-08-04T07:38:04Z

<bug>
  <category>UI/UX</category>
  <symptom>Service Areas eyebrow, heading, body, and city list did not render in Geist.</symptom>
  <root_cause>Inline style="...font-family:"Geist Variable"..." closed the HTML attribute early at the inner quote, so the font declaration never applied.</root_cause>
  <prevention_rule>Never nest double quotes inside a double-quoted style attribute; use single quotes for CSS font-family names in inline styles.</prevention_rule>
</bug>


## 2026-08-04T07:39:45Z

<bug>
  <category>UI/UX</category>
  <symptom>“Our Service Areas” heading looked a different weight than other section headlines.</symptom>
  <root_cause>A CSS override forced .tls-map-section h2 to font-weight 700 while Framer section titles use 1000.</root_cause>
  <prevention_rule>Custom section headings must use the same font-weight as Framer section titles (1000), never a one-off 700.</prevention_rule>
</bug>
