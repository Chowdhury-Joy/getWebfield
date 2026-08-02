# Bug History

## 2026-08-02

<bug>
 <category>UI/UX</category>
 <symptom>Roofer 2 hero headline extended wider than the paragraph below it, making the hero copy block look unbalanced.</symptom>
 <root_cause>`.hero-content .text-desc` had `max-width: 560px` but `.hero-content .type-h1` had no width cap.</root_cause>
 <prevention_rule>When a hero pairs a headline with a capped-width paragraph, apply the same max-width to the headline in the same selector block.</prevention_rule>
</bug>

<bug>
 <category>UI/UX</category>
 <symptom>Residential and commercial split-panel text sat at the bottom/center of image cards instead of the top as designed.</symptom>
 <root_cause>`.split-panel` used `justify-content: flex-end`; residential panel lacked a top gradient overlay for top-aligned white text.</root_cause>
 <prevention_rule>Split panels with top-aligned overlay text must use `justify-content: flex-start` and a top-dark gradient overlay on every panel with inverted text.</prevention_rule>
</bug>

<bug>
 <category>UI/UX</category>
 <symptom>Contact section background roofing photo was barely visible under an 88% white overlay.</symptom>
 <root_cause>`.contact-section__overlay` applied `background: rgba(255, 255, 255, 0.88)` over the full-bleed background image.</root_cause>
 <prevention_rule>Do not add full-section white overlays on photo-backed CTA bands unless copy contrast cannot be solved on the form/content layer alone.</prevention_rule>
</bug>

<bug>
 <category>Code</category>
 <symptom>Roofer 2 loaded large hero and section images from expiring Figma MCP CDN URLs.</symptom>
 <root_cause>Page was built from Figma export before local compression pipeline was applied to Roofer 2.</root_cause>
 <prevention_rule>Every roofer demo must use committed local JPG+WebP in its own `images/` folder — never ship Figma MCP asset URLs in HTML.</prevention_rule>
</bug>

<bug>
 <category>UI/UX</category>
 <symptom>FAQ items did not toggle open/closed reliably; closed answers used abrupt `display: none` with accordion closing all other items.</symptom>
 <root_cause>Accordion script closed every item before reopening one; answers were plain `<p>` tags without animated height wrapper or `hidden` attribute sync.</root_cause>
 <prevention_rule>FAQ accordions must toggle each item independently, sync `aria-expanded` and `hidden`, and use CSS grid-row animation for smooth open/close.</prevention_rule>
</bug>

<bug>
 <category>UI/UX</category>
 <symptom>Service grid image cards showed unrelated Unsplash stock (window cleaning, generic building) despite roofing alt text.</symptom>
 <root_cause>Original Unsplash URLs were swapped or pointed to wrong photos during bulk download.</root_cause>
 <prevention_rule>After swapping service-card images, visually verify each committed JPG matches its alt text before push.</prevention_rule>
</bug>
