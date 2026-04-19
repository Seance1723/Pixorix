# Pixorix Badge, Chip, and Tag System

## 1. Title

Badge

Compact status, metadata, filter, selection, and notification primitives for product UI, dashboards, and docs.

## 2. Purpose

- Provide one framework-level micro-component system for badges, chips, and tags.
- Support both static labeling and lightweight interaction without creating separate one-off primitives.
- Keep markup compact while supporting icons, dots, counts, removal, selection, and notification positioning.

## 3. UX Goal

- Surface small but important signals without adding layout weight.
- Keep interactive chips obvious and easy to scan in dense product interfaces.
- Support premium visual treatment while staying compact and practical.
- Scale status, filters, tags, and counters through one token-driven contract.

## 4. Preview

Show:

- basic badge
- pill badge
- icon badge
- dot badge
- removable chip
- filter chip
- selectable chip
- status chip
- counter badge
- notification badge

## 5. Structure

- Static roots: `.px-badge`, `.px-tag`
- Interactive root: `.px-chip`
- Group wrappers: `.px-badge-group`, `.px-chip-group`, `.px-tag-group`
- Public elements: `__icon`, `__dot`, `__label`, `__count`, `__remove`

Recommended semantics:

- Use `<span>` for passive badges and metadata tags.
- Use `<button>` for interactive chips.
- Use a nested remove button only when the chip is actually dismissible.
- Use notification badges as a positioned child inside a relatively positioned parent shell.

## 6. Visual Variants

- `--solid`
- `--soft`
- `--outline`
- `--glass`
- `--tonal`

Visual rules:

- `solid` is for strong status emphasis and counters that must stand out.
- `soft` is the default product-safe treatment for most labels and chips.
- `outline` is best for lightweight metadata and low-emphasis filtering.
- `glass` is for premium product surfaces and overlay contexts.
- `tonal` is for layered but still restrained emphasis in dashboards and cards.

## 7. Semantic Variants

- `primary`
- `secondary`
- `success`
- `info`
- `warning`
- `danger`
- `neutral`

Semantic rules:

- `primary` is for first-party emphasis and product-owned taxonomy.
- `secondary` is for supporting labels and lower-priority metadata.
- `success` is for positive status and completed states.
- `info` is for neutral system context.
- `warning` is for cautionary but recoverable state.
- `danger` is for destructive or blocking state.
- `neutral` is for general metadata and quiet tags.

## 8. Sizes

- `--xs`
- `--sm`
- `--md`
- `--lg`

Size rules:

- `xs` is for dense tables, avatars, and notification counters.
- `sm` is for metadata clusters and status rows.
- `md` is the default.
- `lg` is for larger filters and more prominent interactive chips.

## 9. States

- default
- hover
- active
- selected
- removable
- disabled

State rules:

- Passive badges should not imply interaction through hover styling.
- Chips may use hover and active states when interactive.
- Selected chips should reflect the state through both class and ARIA when appropriate.
- Removable chips should animate out only as enhancement.

## 10. Responsive Behavior

- Badges, chips, and tags wrap cleanly inside groups.
- Long labels truncate within their own max width instead of breaking row rhythm.
- Notification badges stay compact and should be attached to a relatively positioned parent.
- Large chip groups should be allowed to wrap instead of forcing horizontal overflow by default.

## 11. Dark Mode Behavior

- Components inherit semantic theme variables first.
- Glass variants receive local dark-mode compensation for border and backdrop balance.
- Solid and tonal treatments remain readable without needing alternate markup.
- Dark mode does not require a separate badge API.

## 12. Accessibility Requirements

- Use visible text whenever possible; color alone is not enough.
- Interactive chips should use real buttons.
- Selectable chips should expose state via `aria-pressed` or `aria-selected`.
- Remove controls need an accessible label that identifies the action.
- Notification badges should not be the only place where critical counts are exposed.

### Accessibility Checklist

- [ ] Badge meaning is perceivable without color alone
- [ ] Interactive chips use button semantics
- [ ] Selectable state is exposed through ARIA when relevant
- [ ] Remove controls are clearly labeled and keyboard reachable
- [ ] Dot badges are paired with adjacent readable text when meaning matters
- [ ] Counter badges are not the only place critical counts are communicated
- [ ] Motion honors `prefers-reduced-motion`
- [ ] Disabled interactive chips are clearly non-interactive
- [ ] Long labels remain readable or intentionally truncated
- [ ] Notification placement does not hide essential context

## 13. Cross-Browser Considerations

- Glass badges degrade safely when `backdrop-filter` support differs across browsers.
- Truncation and wrapping should be verified in Firefox and Safari.
- Removal behavior must work even when transitions are disabled.
- Absolute notification badges need verification in different font-rendering environments.

### Cross-Browser Checklist

- [ ] Chrome and Edge layout verified
- [ ] Firefox wrapping and truncation verified
- [ ] Safari and iOS Safari backdrop and border rendering verified
- [ ] Interactive chip focus rendering verified
- [ ] Remove behavior verified without animation dependency
- [ ] Touch interaction verified on mobile browsers
- [ ] Reduced-motion fallback verified
- [ ] Dark mode visual checks completed

## 14. HTML Usage

```html
<div class="px-badge-group">
  <span class="px-badge px-badge--primary px-badge--soft px-badge--md">
    <span class="px-badge__label">New</span>
  </span>

  <span class="px-badge px-badge--success px-badge--solid px-badge--pill">
    <span class="px-badge__icon" aria-hidden="true">+</span>
    <span class="px-badge__label">Stable</span>
  </span>

  <span class="px-badge px-badge--warning px-badge--outline px-badge--dot">
    <span class="px-badge__dot" aria-hidden="true"></span>
    <span class="px-badge__label">Beta</span>
  </span>

  <span class="px-badge px-badge--danger px-badge--solid px-badge--counter">12</span>
</div>

<div class="px-chip-group">
  <button class="px-chip px-chip--info px-chip--tonal px-chip--sm" type="button" data-px-chip data-px-selectable aria-pressed="false">
    <span class="px-chip__label">Selectable chip</span>
  </button>

  <button class="px-chip px-chip--primary px-chip--outline px-chip--md" type="button" data-px-chip data-px-filter-chip aria-pressed="true">
    <span class="px-chip__icon" aria-hidden="true">#</span>
    <span class="px-chip__label">Filter chip</span>
  </button>

  <button class="px-chip px-chip--neutral px-chip--soft px-chip--md" type="button" data-px-chip>
    <span class="px-chip__label">Removable chip</span>
    <span class="px-chip__remove" data-px-chip-remove aria-label="Remove chip">x</span>
  </button>
</div>

<div style="position: relative; display: inline-flex;">
  <button class="px-button px-button--secondary px-button--outline px-button--icon-only" type="button" aria-label="Notifications">
    <span class="px-button__icon" aria-hidden="true">*</span>
  </button>
  <span class="px-badge px-badge--danger px-badge--solid px-badge--notification">3</span>
</div>
```

## 15. React Usage

```jsx
export function BadgeExamples() {
  return (
    <div className="px-chip-group">
      <button
        className="px-chip px-chip--success px-chip--soft"
        type="button"
        data-px-chip
        data-px-selectable
        aria-pressed="false"
      >
        <span className="px-chip__label">Status chip</span>
      </button>

      <button className="px-chip px-chip--neutral px-chip--outline" type="button" data-px-chip>
        <span className="px-chip__label">Removable chip</span>
        <span className="px-chip__remove" data-px-chip-remove aria-label="Remove chip">x</span>
      </button>
    </div>
  );
}
```

## 16. Angular Usage

```html
<button class="px-chip px-chip--warning px-chip--tonal px-chip--sm" type="button" data-px-chip data-px-selectable aria-pressed="true">
  <span class="px-chip__dot" aria-hidden="true"></span>
  <span class="px-chip__label">Selected filter</span>
</button>
```

## 17. Vue Usage

```vue
<template>
  <span class="px-tag px-tag--secondary px-tag--glass px-tag--lg">
    <span class="px-tag__icon" aria-hidden="true">#</span>
    <span class="px-tag__label">Design system</span>
  </span>
</template>
```

## 18. SCSS Architecture

- File: `src/scss/components/_badges.scss`
- Uses shared Pixorix mixins and placeholders
- One base token layer powers `.px-badge`, `.px-chip`, and `.px-tag`
- Semantic and visual modifiers stay additive
- Size, dot, icon, counter, notification, removable, and selected states live in the same partial
- Groups reuse simple flex-wrap containers instead of adding a second layout abstraction

## 19. JS Architecture

- File: `src/js/components/badge.js`
- JS is optional and only needed for selectable or removable chips and tags
- Root hooks: `data-px-chip`, `data-px-filter-chip`, `data-px-selectable`
- Remove hook: `data-px-chip-remove`
- State hook: `data-state='default|selected|removing'`
- Emits `px:badge:select`, `px:badge:before-remove`, and `px:badge:remove`

## 20. GSAP Enhancement Hooks

- Keep baseline motion CSS-only
- Use `data-px-motion='none'` on removable chips to force static behavior
- GSAP should only be used for premium staggered filter-bar choreography, not for required selection behavior
- Core chip selection and removal must never depend on GSAP

## 21. Developer Customization Hooks

- Local variables such as `--px-badge-bg`, `--px-badge-border`, `--px-badge-color`, and `--px-badge-radius`
- Additive modifiers for semantic tone, visual treatment, size, and special behavior
- Group wrappers for badge, chip, and tag clusters
- Optional JS behavior via `data-px-chip`, `data-px-filter-chip`, and `data-px-selectable`

## 22. Lightweight Optimization Notes

- One token-driven base powers all badge, chip, and tag patterns
- Variants are local variable swaps rather than duplicated components
- Removable and selectable behavior initialize only when corresponding hooks are present
- Notification and counter badges reuse the same core primitive instead of shipping separate components
- No GSAP dependency is required

## 23. Related Components

- Buttons
- Alerts
- Filters
- Pagination
