# Pixorix Layout and Grid System

## 1. Title

Layout and Grid

Framework-level layout primitives for containers, rows, columns, CSS grid composition, split layouts, sidebar rails, dashboard shells, and showcase-ready page patterns.

## 2. Purpose

- Provide one predictable composition system for marketing pages, dashboards, settings screens, forms, content rails, and editorial layouts.
- Keep containers, rows, grid spans, auto-fit/fill behavior, asymmetrical splits, and sticky regions on the same token-driven foundation.
- Support nested layout composition without forcing page-specific wrappers or one-off media-query patches.

## 3. UX Goal

- Make page structure readable and stable before visual styling is layered on top.
- Support balanced odd and even grids, asymmetrical content rails, and dashboard density without brittle breakpoint hacks.
- Keep layout primitives practical enough for daily use across HTML and frontend frameworks.

## 4. Included Primitives

- fixed container
- fluid container
- narrow container
- wide container
- full-bleed container
- row system
- column system
- CSS grid helpers
- stack layout
- cluster layout
- split layout
- sidebar/content layout
- dashboard layout
- widget grid
- card grid
- nested grid
- auto-fit grid
- auto-fill grid
- masonry-friendly shell
- sticky region helpers

## 5. Visual Variants

Layout primitives are mostly structural rather than visual. The meaningful layout variants are:

- fixed
- fluid
- narrow
- wide
- full bleed
- auto-fit
- auto-fill
- asymmetrical
- nested
- sticky-enabled

## 6. Semantic Variants

None by default. Semantic meaning should come from document structure such as `main`, `section`, `aside`, `header`, and `nav`, not color-coded layout wrappers.

## 7. Sizes

- Container sizes: narrow, fixed/default, wide, fluid, full bleed
- Column support: 1 through 12
- Row/flex spans: 1 through 12
- Grid spans: 1 through 12 plus full-span

## 8. States

Layout primitives are mostly static. Relevant stateful behavior is:

- sticky
- collapsed to single-column fallback
- dense dashboard grouping

## 9. Responsive Behavior

- Grid classes collapse to a single column on smaller screens where necessary.
- Auto-fit and auto-fill shells reduce overflow without special-case page CSS.
- Split, sidebar, hero, settings, and dashboard shells collapse to one column below large breakpoints.
- Sticky regions become static on smaller screens to avoid overflow traps.

## 10. Dark Mode Behavior

The layout system is structural and inherits theme behavior automatically. It does not need alternate dark-mode-specific markup.

## 11. Accessibility Requirements

- Layout wrappers should not replace semantic landmarks.
- Use `main`, `section`, `aside`, `header`, and `nav` where structure matters.
- Sticky rails must not trap keyboard users or obscure focused content.
- Grid and card wrappers should preserve underlying heading, list, and form semantics.

### Accessibility Checklist

- [ ] Landmarks are semantic and correctly ordered
- [ ] Sticky regions do not obscure focused content
- [ ] Layout collapse preserves source order and reading order
- [ ] Asymmetrical layouts remain understandable when stacked
- [ ] Nested grids do not create keyboard or scroll traps
- [ ] Content/sidebar layouts preserve useful heading hierarchy

## 12. Cross-Browser Considerations

- Verify sticky rails and sticky widgets in Safari and iOS Safari.
- Masonry-friendly shells should degrade gracefully rather than depend on unsupported browser features.
- Avoid relying on subgrid or unstable masonry implementations.
- Confirm full-bleed sections and viewport-based margins behave correctly on mobile browsers.

### Cross-Browser Checklist

- [ ] Chromium container and grid behavior verified
- [ ] Firefox sticky and nested grid behavior verified
- [ ] Safari and iOS Safari sticky rails and full-bleed behavior verified
- [ ] Layout collapse behavior verified at mobile breakpoints
- [ ] No layout depends on unsupported masonry or subgrid features

## 13. HTML Usage

```html
<main class="px-section">
  <div class="px-container">
    <div class="px-stack px-stack--section">
      <section class="px-split px-split--hero">
        <div class="px-stack">
          <h1>Hero split layout</h1>
          <p>Use split shells for high-value content and side panels that collapse cleanly on smaller screens.</p>
        </div>
        <aside class="px-card">Secondary hero surface</aside>
      </section>

      <section class="px-grid px-grid--12 px-grid--cards">
        <article class="px-card px-col-span-4">Card one</article>
        <article class="px-card px-col-span-4">Card two</article>
        <article class="px-card px-col-span-4">Card three</article>
      </section>
    </div>
  </div>
</main>
```

## 14. React Usage

```jsx
export function DashboardLayoutExample() {
  return (
    <div className="px-dashboard-layout">
      <aside className="px-sidebar__rail px-sticky-region">Sidebar rail</aside>
      <main className="px-dashboard__grid">
        <section className="px-card px-dashboard__widget px-dashboard__widget--lg">Revenue</section>
        <section className="px-card px-dashboard__widget px-dashboard__widget--sm">Conversion</section>
        <section className="px-card px-dashboard__widget px-dashboard__widget--sm">Retention</section>
      </main>
    </div>
  );
}
```

## 15. Angular Usage

```html
<section class="px-container px-stack">
  <div class="px-grid px-grid--auto-fit px-grid--cards">
    <article class="px-card">Auto-fit card</article>
    <article class="px-card">Auto-fit card</article>
    <article class="px-card">Auto-fit card</article>
  </div>
</section>
```

## 16. Vue Usage

```vue
<template>
  <section class="px-settings-layout">
    <aside class="px-sidebar__rail px-sticky-region">Settings nav</aside>
    <div class="px-stack">
      <section class="px-card">Profile settings</section>
      <section class="px-card">Notification settings</section>
    </div>
  </section>
</template>
```

## 17. SCSS Architecture

- `src/scss/layout/_containers.scss`: container widths and full-bleed shells
- `src/scss/layout/_flex.scss`: row and column system
- `src/scss/layout/_grid.scss`: CSS grid helpers, spans, auto-fit/fill, card/widget grids, sticky item helpers
- `src/scss/layout/_stack.scss`: vertical rhythm
- `src/scss/layout/_cluster.scss`: inline grouping
- `src/scss/layout/_split.scss`: hero and content split layouts
- `src/scss/layout/_sidebar.scss`: sidebar/content rail shells
- `src/scss/layout/_dashboard.scss`: dashboard and showcase page shells

## 18. JS Architecture

- None required
- Layout remains CSS-first and framework-agnostic
- Sticky behavior and responsive collapse are handled through CSS, not JS

## 19. GSAP Enhancement Hooks

- None required for layout structure
- Motion may enhance sections or card entry, but layout geometry must remain stable without GSAP

## 20. Developer Customization Hooks

- Container modifiers: `.px-container--narrow`, `.px-container--wide`, `.px-container--fluid`, `.px-container--full-bleed`
- Grid modifiers: `.px-grid--1` through `.px-grid--12`, `.px-grid--auto-fit`, `.px-grid--auto-fill`, asymmetrical variants
- Span helpers: `.px-col-span-*`, `.px-col-start-*`, `.px-col--*`
- Showcase shells: `.px-dashboard-layout`, `.px-settings-layout`, `.px-form-layout`, `.px-marketing-layout`, `.px-content-sidebar-layout`, `.px-hero-layout`
- Sticky helpers: `.px-grid__item--sticky`, `.px-sticky-region`, `.px-sticky-region--top`

## 21. Lightweight Optimization Notes

- Existing layout primitives were extended instead of replaced.
- Most variants are variable or template swaps rather than duplicate layout systems.
- No JS payload is introduced.
- Grid and row APIs stay shallow and composable so teams can opt into only the layout partials they need.

## 22. Related Systems

- Typography
- Cards
- Navigation
- Forms
