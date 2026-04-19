# Pixorix Typography and Content Primitive System

## 1. Title

Typography and Content Primitives

Framework-level text and content shells for headings, body copy, dashboard labels, inline code, code blocks, lists, dividers, links, and prose layout.

## 2. Purpose

- Provide one token-driven text system for product UI, docs, dashboards, settings pages, and content-heavy surfaces.
- Keep semantic HTML useful by styling elements directly while also exposing reusable classes for framework usage.
- Let teams scale rich content formatting without turning typography into one-off page CSS.

## 3. UX Goal

- Maintain strong hierarchy, generous readability, and dense-data support inside the same system.
- Keep content blocks practical and responsive by default.
- Support premium but controlled visual treatments such as gradient text, refined code shells, and polished section intros.

## 4. Visual Variants

- default
- muted
- strong
- emphasis
- gradient text
- semantic text styles
- dashboard text styles
- data-dense text styles

Variant rules:

- `default` is the base readable content tone.
- `muted` is for supporting copy, timestamps, and lower-priority metadata.
- `strong` increases emphasis through color and weight instead of larger font jumps.
- `emphasis` is for selective accent copy, not whole paragraphs.
- `gradient text` is decorative and should be reserved for short headings or key value statements.
- `dashboard` and `data-dense` styles prioritize scanning, alignment, and compact rhythm.

## 5. Semantic Variants

- `.px-text-primary`
- `.px-text-secondary`
- `.px-text-success`
- `.px-text-info`
- `.px-text-warning`
- `.px-text-danger`
- `.px-text-neutral`

Semantic color should reinforce meaning, not replace readable labels or icons.

## 6. Sizes

- Heading scale: `display`, `h1` through `h6`
- Body scale: `lead`, `body-lg`, `body`, `body-sm`, `section-intro`
- UI scale: `label`, `label-strong`, `small`, `helper`, `caption`, `overline`
- Data scale: `data-value`, `data-label`, `data-dense`, `dashboard-metric`, `dashboard-label`, `dashboard-note`

All sizes are clamp-driven through Pixorix typography tokens.

## 7. States

Typography primitives are mostly static. Relevant interaction states are:

- link hover
- link focus-visible
- semantic emphasis
- muted vs strong priority

Do not simulate component-like state classes for plain text unless the owning interactive component requires it.

## 8. Responsive Behavior

- Typography scales fluidly from tokenized clamp values.
- `.px-prose` constrains reading width automatically.
- `.px-prose--wide`, `.px-prose--dense`, and `.px-prose--dashboard` adjust reading rhythm without alternate markup.
- Inline lists and code-block headers compress on smaller screens without needing custom page styles.

## 9. Dark Mode Behavior

- Text, code, divider, and blockquote surfaces inherit theme variables automatically.
- Gradient text keeps a plain color fallback when text clipping support is limited.
- Code shells and muted text rely on theme tokens instead of hard-coded light values.

## 10. Accessibility Requirements

- Use semantic elements first: `h1` through `h6`, `p`, `ul`, `ol`, `blockquote`, `code`, `pre`, `hr`.
- Do not use heading classes to fake document structure when the semantic heading level matters.
- Ensure semantic color classes are not the only signal for status.
- Preserve visible focus styles for links.
- Keep code blocks scrollable and readable without trapping keyboard focus.

### Accessibility Checklist

- [ ] Heading order is logical
- [ ] Long-form content uses readable line length
- [ ] Link focus-visible remains obvious
- [ ] Gradient text is not used for critical-only messaging
- [ ] Semantic text colors are not the only status signal
- [ ] Inline code and code blocks retain sufficient contrast
- [ ] Lists remain semantic rather than div-based
- [ ] Blockquotes are not used only for visual decoration
- [ ] Divider usage does not interrupt heading hierarchy
- [ ] Dense dashboard text remains legible at small sizes

## 11. Cross-Browser Considerations

- Clamp-based typography should be checked in Chromium, Firefox, Safari, and iOS Safari.
- Gradient text must degrade to a plain readable color where text clipping differs.
- Code-block overflow and custom scrollbar styling need Safari and Firefox review.
- `text-wrap: balance` and `text-wrap: pretty` enhance layout but should not be required for readability.

### Cross-Browser Checklist

- [ ] Chromium rendering verified
- [ ] Firefox list, code, and overflow rendering verified
- [ ] Safari and iOS Safari heading wrapping verified
- [ ] Gradient text fallback verified
- [ ] Code block horizontal scroll verified
- [ ] Dark mode contrast verified
- [ ] Reduced-motion behavior unchanged because typography has no required motion dependency

## 12. HTML Usage

```html
<section class="px-content-section px-prose">
  <p class="px-overline">Content primitive</p>
  <h2 class="px-section-title">Readable content without one-off page CSS</h2>
  <p class="px-section-intro">
    Pixorix typography primitives handle hierarchy, prose width, dense dashboard labels,
    links, lists, quotes, and code shells from one token-driven layer.
  </p>

  <p class="px-lead">Use semantic elements first, then apply Pixorix classes when you need stronger control.</p>

  <ul class="px-list">
    <li>Fluid heading and body scaling</li>
    <li>Dashboard and data-dense text roles</li>
    <li>Code blocks and blockquotes with shared surface tokens</li>
  </ul>

  <pre class="px-code-block"><code>npm install pixorix</code></pre>
</section>
```

## 13. React Usage

```jsx
export function TypographyExample() {
  return (
    <article className="px-prose px-prose--dashboard">
      <p className="px-dashboard-label">Workspace health</p>
      <p className="px-dashboard-metric">98.4%</p>
      <p className="px-dashboard-note">Healthy deployments across the active project grid.</p>
      <a className="px-link" href="#details">Review deployment details</a>
    </article>
  );
}
```

## 14. Angular Usage

```html
<section class="px-prose">
  <p class="px-caption px-text-muted">System note</p>
  <h3 class="px-heading-3">Framework typography scales automatically</h3>
  <p class="px-text-body">
    Use content primitives for product UI, docs, and admin surfaces without adding page-only text rules.
  </p>
</section>
```

## 15. Vue Usage

```vue
<template>
  <section class="px-content-section">
    <p class="px-overline">Developer note</p>
    <h2 class="px-section-title px-text-gradient">Premium hierarchy, practical defaults</h2>
    <p class="px-section-intro">
      Typography classes stay framework-agnostic and pair cleanly with semantic HTML.
    </p>
  </section>
</template>
```

## 16. SCSS Architecture

- Tokens live in `src/scss/tokens/_typography.scss`
- Base element and primitive classes live in `src/scss/base/_typography.scss`
- Tone and atomic helper hooks live in `src/scss/utilities/_typography.scss`
- No dedicated JS module is required

## 17. JS Architecture

- None required
- Typography primitives are CSS-first and semantic HTML-first
- Any motion or copy swapping should be owned by the parent component, not the typography system itself

## 18. GSAP Enhancement Hooks

- No required GSAP hooks
- If headings are animated, use parent-owned hooks such as `data-px-motion="none"` or section-level reveal attributes
- Motion must never be required for readability or hierarchy

## 19. Developer Customization Hooks

- Theme variables: `--px-type-*`, `--px-font-*`, `--px-line-height-*`, `--px-letter-spacing-*`
- Content shells: `.px-prose`, `.px-content-section`, `.px-code-block`, `.px-blockquote`
- Tone helpers: `.px-text-muted`, `.px-text-strong`, `.px-text-emphasis`, semantic text classes
- Role classes: `.px-heading-*`, `.px-subheading`, `.px-lead`, `.px-caption`, `.px-overline`, `.px-dashboard-*`

## 20. Lightweight Optimization Notes

- The system extends existing base typography instead of adding a separate component payload.
- New primitives reuse typography tokens and shared mixins instead of hard-coded font declarations.
- No JS bundle cost is introduced.
- Content variants are mostly variable and role swaps rather than isolated implementations.
- Prose, code, list, and divider shells stay shallow and markup-light.

## 21. Related Systems

- Buttons
- Cards
- Alerts
- Badges
- Utilities
