# Pixorix Card System

## 1. Title

Card

Flexible surface containers for content grouping, product summaries, analytics, pricing, media, testimonials, and spotlight layouts.

## 2. Purpose

- Provide one framework-level surface system for basic, feature, media, profile, stats, KPI, pricing, testimonial, and spotlight cards.
- Keep card anatomy predictable while allowing rich visual treatment and varied content density.
- Support premium interaction polish without forcing wrapper-heavy markup or JS.

## 3. UX Goal

- Create clear visual grouping and hierarchy without making every surface feel heavy.
- Support dashboard-ready and product-ready cards with clean headers, content flow, metadata, and actions.
- Keep hover, selection, loading, and skeleton states polished but controlled.

## 4. Preview

Show:

- basic card
- elevated card
- outlined card
- soft card
- glass card
- feature card
- media card
- profile card
- stats card
- KPI card
- pricing card
- testimonial card
- spotlight card
- gradient border card
- interactive/clickable card

## 5. Structure

- Root class: `.px-card`
- Optional aliases: `.px-feature-card`, `.px-media-card`, `.px-profile-card`, `.px-stats-card`, `.px-kpi-card`, `.px-pricing-card`, `.px-testimonial-card`, `.px-spotlight-card`
- Public areas: `__header`, `__eyebrow`, `__media`, `__body`, `__meta`, `__actions`, `__footer`

Recommended semantics:

- Use `<article>` for standalone card content.
- Use `<section>` when the card is a meaningful page subsection.
- Use `<a>` or a button-like interactive wrapper only when the entire card represents one action target.
- Keep internal actions explicit when the card itself is not the only interactive target.

## 6. Visual Variants

- base
- `--elevated`
- `--outlined`
- `--soft`
- `--glass`
- `--feature`
- `--media`
- `--profile`
- `--stats`
- `--kpi`
- `--pricing`
- `--testimonial`
- `--spotlight`
- `--gradient-border`

Variant rules:

- `elevated` is for stronger surface hierarchy and important dashboard content.
- `outlined` is for quieter grouping where shadow is unnecessary.
- `soft` is for muted panels and secondary surfaces.
- `glass` is for premium or layered product surfaces.
- `feature` is for marketing and high-value overview blocks.
- `media` is for image-first content.
- `profile` is for person-centric summary cards.
- `stats` and `kpi` are for compact metric presentation.
- `pricing` is for plan comparison surfaces.
- `testimonial` is for quote-led content with supporting attribution.
- `spotlight` is for hero-like highlight surfaces.
- `gradient-border` is additive and should be used selectively so accent treatment stays meaningful.

## 7. Semantic Variants

Semantic tone is usually carried by the content inside the card rather than a root semantic modifier.

If a semantic card treatment is needed, pair card structure with badges, alerts, icons, or action tone instead of creating many card color variants.

## 8. Sizes

- default
- compact patterns through content density

Size rules:

- Default card sizing should handle most use cases.
- Dense analytics or stats cards should reduce internal content rather than invent separate one-off size modifiers unless a system-wide size scale is required later.

## 9. States

- default
- hover-lift
- selected
- clickable
- loading
- skeleton-ready
- disabled if relevant

State rules:

- Use `--interactive` or `--clickable` only when the card itself is a meaningful target.
- `--hover-lift` should be additive and restrained.
- Selected cards should expose clear border and focus treatment.
- Loading should preserve layout and avoid large reflow.
- Skeleton-ready styling should remain optional and content-safe.

## 10. Responsive Behavior

- Cards should expand naturally inside grid and split layouts.
- Footer actions stack on smaller screens instead of collapsing awkwardly.
- Media remains clipped and rounded without adding nested wrappers.
- Spotlight, feature, and pricing cards should rely on content flow rather than alternate mobile-specific markup.

## 11. Dark Mode Behavior

- Cards inherit semantic theme variables first.
- Glass cards receive local dark-mode compensation for border clarity and backdrop balance.
- Soft cards reduce sheen intensity in dark mode to avoid chalky surfaces.
- Dark mode does not require alternate markup.

## 12. Accessibility Requirements

- Keep semantic heading order intact inside cards.
- Do not make a whole card clickable if it contains several independent interactive controls.
- Loading and skeleton states should not hide important labels from assistive technology without an accessible alternative.
- Selected state should be communicated programmatically when the card participates in a selectable pattern.

### Accessibility Checklist

- [ ] Card semantics match its role in the layout
- [ ] Heading hierarchy remains correct
- [ ] Whole-card click behavior is only used when appropriate
- [ ] Focus-visible state is obvious for interactive cards
- [ ] Selected state is exposed programmatically when relevant
- [ ] Loading or skeleton states do not remove critical context without an accessible fallback
- [ ] Internal action buttons remain individually reachable
- [ ] Media has meaningful alt text when informative
- [ ] Motion honors `prefers-reduced-motion`
- [ ] Contrast remains clear across card variants

## 13. Cross-Browser Considerations

- Glass and gradient-border cards must degrade cleanly where blur differs.
- Interactive lift should not be required for understanding content.
- Safari and Firefox need verification for overflow clipping, shadow rendering, and border treatments.
- Skeleton styling should remain stable even when gradients render slightly differently.

### Cross-Browser Checklist

- [ ] Chrome and Edge layout verified
- [ ] Firefox overflow and wrapping verified
- [ ] Safari and iOS Safari blur, clipping, and border rendering verified
- [ ] Interactive focus and hover rendering verified
- [ ] Skeleton-ready treatment verified without layout shift
- [ ] Reduced-motion fallback verified
- [ ] Dark mode visual checks completed
- [ ] Footer action wrapping verified on smaller screens

## 14. HTML Usage

```html
<article class="px-card px-card--elevated px-card--interactive px-card--hover-lift">
  <header class="px-card__header">
    <p class="px-card__eyebrow">Analytics kit</p>
    <h3 class="px-card__title">Revenue snapshot</h3>
    <p class="px-card__subtitle">Designed for dashboards, docs examples, and admin surfaces.</p>
  </header>

  <div class="px-card__media">
    <img src="/placeholder-card.jpg" alt="" />
  </div>

  <div class="px-card__body">
    <p>Mix descriptive content, metrics, and actions without losing vertical rhythm or surface hierarchy.</p>
  </div>

  <div class="px-card__meta">
    <span class="px-badge px-badge--success px-badge--soft"><span class="px-badge__label">+18.4%</span></span>
    <span>Compared to last month</span>
  </div>

  <footer class="px-card__footer">
    <div class="px-card__actions">
      <button class="px-button px-button--secondary px-button--sm" type="button">Inspect</button>
      <button class="px-button px-button--primary px-button--sm" type="button">Use card</button>
    </div>
  </footer>
</article>
```

## 15. React Usage

```jsx
export function CardExample() {
  return (
    <article className="px-card px-card--feature px-card--gradient-border">
      <header className="px-card__header">
        <p className="px-card__eyebrow">Feature surface</p>
        <h3 className="px-card__title">Build premium dashboards faster</h3>
      </header>
      <div className="px-card__body">
        <p>Use one card contract for KPI summaries, product content, and spotlight modules.</p>
      </div>
      <div className="px-card__actions">
        <button className="px-button px-button--primary px-button--sm" type="button">Get started</button>
      </div>
    </article>
  );
}
```

## 16. Angular Usage

```html
<article class="px-card px-card--pricing">
  <header class="px-card__header">
    <p class="px-card__eyebrow">Pro plan</p>
    <h3 class="px-card__title">$29 / month</h3>
    <p class="px-card__subtitle">For teams shipping product UI at scale.</p>
  </header>
  <div class="px-card__body">
    Includes advanced components, docs-ready examples, and theming support.
  </div>
</article>
```

## 17. Vue Usage

```vue
<template>
  <article class="px-card px-card--testimonial px-card--soft">
    <div class="px-card__body">
      <p>"Pixorix helped us standardize dashboards and documentation without losing visual personality."</p>
    </div>
    <div class="px-card__meta">
      <span>Product design lead</span>
    </div>
  </article>
</template>
```

## 18. SCSS Architecture

- File: `src/scss/components/_cards.scss`
- Uses shared Pixorix mixins
- One token-driven card base powers all card families
- Area classes stay stable across all variants
- Feature, pricing, media, profile, KPI, testimonial, and spotlight variants are additive shell treatments
- Interactive, selected, loading, and skeleton-ready states stay in the same partial

## 19. JS Architecture

- Cards ship without required JS
- Selection, loading, or lazy-media behavior should be handled by the owning feature layer when needed
- The base card system remains HTML-first and framework-agnostic

## 20. GSAP Enhancement Hooks

- Use `data-px-motion='none'` when hover or spotlight choreography should stay static
- GSAP may enhance spotlight or testimonial entrance sequences
- Core card readability, selection, and clickability must never depend on GSAP

## 21. Developer Customization Hooks

- Local variables such as `--px-card-bg`, `--px-card-border`, `--px-card-shadow`, and `--px-card-radius`
- Public area classes for header, eyebrow, media, body, meta, actions, and footer
- Additive classes for variant, interaction, and state
- Skeleton-ready hook via `--skeleton` or `data-px-skeleton='true'`

## 22. Lightweight Optimization Notes

- One card base powers the full card family
- Variants are local variable swaps and light structural adjustments
- No card JS payload is required
- Alias classes reuse the same contract instead of shipping isolated card implementations
- Loading and skeleton states stay CSS-first

## 23. Related Components

- Badges
- Buttons
- Alerts
- Layout grid
