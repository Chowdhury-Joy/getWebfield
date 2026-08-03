# Bug History

No bugs logged yet for this Framer rebuild.

## 2026-08-04T01:25:21+0600

<bug>
  <category>UI/UX</category>
  <symptom>Dark green about cards showed black/gray text and were hard to read.</symptom>
  <root_cause>`.stat-card h3/p` color rules came after `.stat-card--green` text colors and overrode them.</root_cause>
  <prevention_rule>Always place variant text-color overrides after the base component text rules.</prevention_rule>
</bug>
