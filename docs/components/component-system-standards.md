# Pixorix Component System Standards

This document defines the framework-wide rules every Pixorix component must follow.

## 1. Component architecture philosophy

Pixorix components must be:

- token-driven first
- semantic in structure
- shallow in selector depth
- progressive-enhancement friendly
- modular to import
- framework-agnostic at the markup contract level

Architecture rules:

- One root class per component: `.px-component-name`
- One partial per component
- One optional JS module per interactive component
- One documentation page per public component
- Variants, sizes, and states belong to the component that owns them
- Components consume semantic tokens and shared mixins before defining local overrides
- Components must work in plain HTML before any framework wrapper exists
- GSAP is enhancement only, never a dependency for core usability

Authoring model:

1. Tokens define the design contract.
2. Mixins encode repeated framework behavior.
3. Component partials expose local CSS variable hooks.
4. Optional JS reads `data-px-*` hooks and ARIA state.
5. Optional GSAP hooks enhance transitions without changing semantics.

## 2. Variant naming strategy

Use BEM-style modifier classes on the component root.

Rules:

- Visual variant: `.px-button--primary`
- Surface variant: `.px-card--elevated`
- Layout variant: `.px-tabs--justified`
- Directional variant only when structural: `.px-stepper--vertical`

Allowed framework-wide visual variant names:

- `primary`
- `secondary`
- `soft`
- `ghost`
- `outline`
- `inverse`
- `accent`
- `success`
- `warning`
- `danger`
- `info`

Variant rules:

- Variants change visual treatment, not markup requirements
- Avoid inventing synonyms like `main`, `brand`, `alt`, `v2`
- Semantic variants should map to semantic tokens, not hardcoded colors
- Do not combine multiple visual variants on the same root

## 3. State naming strategy

Prefer native, semantic, or ARIA states first.

Priority order:

1. Native selectors: `:hover`, `:focus-visible`, `:active`, `:disabled`, `:checked`
2. ARIA and semantic attributes: `[aria-expanded='true']`, `[aria-selected='true']`, `[aria-current='page']`, `[data-state='open']`
3. Framework state classes when no semantic equivalent is enough

Approved framework state classes:

- `.is-active`
- `.is-current`
- `.is-selected`
- `.is-open`
- `.is-loading`
- `.is-disabled`
- `.is-invalid`
- `.is-valid`
- `.is-empty`
- `.is-sticky`

State rules:

- Use `.is-*` only for transient or JS-managed state
- Do not use variant-style state modifiers like `.px-button--active`
- If a state has accessibility meaning, mirror it in ARIA or native attributes
- Prefer `data-state='open|closed'`, `data-state='on|off'`, or `data-state='entering|exiting'` for JS lifecycle state

## 4. Size naming strategy

Component sizes must be shared across the framework.

Allowed size modifiers:

- `--xs`
- `--sm`
- default with no modifier
- `--lg`
- `--xl`

Rules:

- Size changes density, not semantic tone
- Size affects height, padding, gap, font size, icon size, and radius only as needed
- Avoid one-off sizes like `--compact`, `--huge`, `--tiny`
- Use density themes for system-wide compactness instead of multiplying component size variants

## 5. Responsive rules

Pixorix is mobile-first by default.

Rules:

- Base styles target mobile and small touch screens first
- Use shared breakpoint mixins from `src/scss/abstracts/_mixins.scss`
- Prefer fluid scales and layout adaptation before adding breakpoint overrides
- Variants must not fork into separate mobile-only versions
- Components must define behavior at minimum for mobile, tablet, and desktop

Responsive behavior standard:

- Mobile: stack, simplify spacing, reduce non-essential decoration
- Tablet: restore secondary layout affordances if space allows
- Desktop: enable richer spacing, alignment, and optional enhancement

Breakpoint authoring:

```scss
@include mixins.px-media-up(md) {
  // tablet and up
}

@include mixins.px-media-up(lg) {
  // desktop and up
}
```

## 6. Dark mode rules

Dark mode must be driven by theme variables first.

Rules:

- Default theme behavior lives in `src/scss/themes/`
- Components consume semantic CSS variables, not raw palette literals
- Local dark compensation is allowed only when variable remapping is not enough
- Theme selectors use `[data-px-theme='dark']`
- Contrast and focus visibility must remain explicit in dark mode

Allowed local compensation cases:

- hairline border clarity
- overlay backdrops
- elevated surface edge definition
- glow or shadow tuning
- media or illustration treatment

## 7. Accessibility checklist template

Every component doc must include this checklist.

```md
## Accessibility Checklist

- [ ] Uses correct semantic HTML for the component role
- [ ] Keyboard interaction is fully supported
- [ ] `:focus-visible` state is obvious and meets contrast expectations
- [ ] Interactive targets meet practical hit-area sizing
- [ ] Labels, descriptions, and status text are programmatically associated
- [ ] ARIA is used only where native semantics are insufficient
- [ ] State changes are exposed through native or ARIA attributes
- [ ] Disabled, loading, success, warning, and error states are perceivable beyond color alone
- [ ] Motion honors `prefers-reduced-motion`
- [ ] Screen-reader output is correct for dynamic behavior
```

## 8. Cross-browser checklist template

Every public component doc must include this checklist.

```md
## Cross-Browser Checklist

- [ ] Chrome and Edge layout verified
- [ ] Firefox spacing and focus rendering verified
- [ ] Safari and iOS Safari overflow, sticky, and transform behavior verified
- [ ] Form-control appearance tested where native UI is involved
- [ ] Touch interaction verified on mobile browsers
- [ ] Reduced-motion fallback verified without GSAP enhancement
- [ ] No component behavior depends on unsupported selectors or APIs without fallback
- [ ] Visual regressions checked with dark mode enabled
```

## 9. JS hook and data-attribute strategy

JS hooks must be declarative and predictable.

Rules:

- Root behavior hook: `data-px-component="modal"`
- Feature shortcut hook is allowed: `data-px-modal`
- Action hook: `data-px-toggle`, `data-px-close`, `data-px-trigger`
- State hook: `data-state="open"`
- Config hook: `data-px-placement="end"`, `data-px-delay="150"`
- Target hook: `data-px-target="#dialog-id"`

JS API rules:

- JS must never require brittle descendant selectors when a direct hook can exist
- Use `data-px-*` for JS-only intent
- Use classes for styling, not JS configuration
- Use ARIA and `data-state` together for interactive state when relevant
- Modules must support safe re-init and `destroy()`

Recommended root pattern:

```html
<div class="px-modal" data-px-component="modal" data-state="closed">
```

## 10. Animation hook strategy

Animation must be optional and token-aware.

Rules:

- Root opt-in hook: `data-px-motion`
- Preset hook: `data-px-motion="reveal"`
- Target hook: `data-px-motion-target="panel"`
- Phase hook: `data-px-motion-state="entering|entered|exiting"`
- Use GSAP only for enhancement tiers

Motion rules:

- Core visibility and interaction cannot depend on animation finishing
- Motion presets should map to framework tokens for duration and easing
- Reduced-motion must disable or simplify choreographed transforms
- Prefer transform and opacity, avoid layout-thrashing properties

## 11. Lightweight modular import strategy

Pixorix components must be shippable individually.

SCSS import levels:

- Full bundle: `src/scss/pixorix.scss`
- Core bundle: `src/scss/pixorix-core.scss`
- Utilities bundle: `src/scss/pixorix-utilities.scss`
- Component-level: `@use 'src/scss/components/buttons';`

JS import levels:

- App bootstrap: `initPixorix()`
- Per-module import: `import { createModal } from './components/modal.js';`
- Registration: `registerPixorixComponent('modal', { selector, init })`

Rules:

- Each interactive component JS module must be importable in isolation
- Avoid cross-component runtime dependencies unless truly shared
- Shared helpers belong in `src/js/core/` or `src/js/utils/`
- Shared SCSS logic belongs in `abstracts/`, never copied into component files

## 12. SCSS structure for component files

Every component partial should follow one stable section order.

```scss
@use '../abstracts/functions' as fn;
@use '../abstracts/mixins';
@use '../abstracts/placeholders';

.px-component {
  /* 1. Local CSS variables */

  /* 2. Structural layout */

  /* 3. Typography */

  /* 4. Interactive states */

  /* 5. Child elements */

  /* 6. Variants */

  /* 7. Sizes */

  /* 8. State classes and data-state rules */

  /* 9. Theme compensation */

  /* 10. Responsive overrides */
}
```

SCSS rules:

- Keep nesting shallow, ideally one level
- Prefer local CSS variables over repeated declarations
- Use logical properties where possible
- Avoid descendant chains longer than three parts
- Do not hardcode theme colors when semantic tokens exist

## 13. Recommended HTML structure standards

HTML must be practical, not wrapper-heavy.

Rules:

- Root class defines the component boundary
- Child elements use `__element` only when they are part of the public anatomy
- Avoid wrappers added only for styling if a pseudo-element or simpler layout can solve it
- Prefer semantic elements such as `button`, `nav`, `ul`, `label`, `input`, `dialog`, `section`
- Required wrappers must be documented explicitly

Recommended anatomy pattern:

```html
<button class="px-button px-button--primary">
  <span class="px-button__icon" aria-hidden="true"></span>
  <span class="px-button__label">Save changes</span>
</button>
```

## 14. Multi-framework usage pattern standards

The public contract is always HTML-first.

Rules:

- React, Vue, and Angular wrappers must preserve Pixorix class names and data hooks
- Framework wrappers may improve typing and prop ergonomics but must not redefine DOM semantics
- Document the same component contract for HTML, React, Angular, and Vue
- Avoid framework-specific slot or render-prop complexity in the core standard

Wrapper guidance:

- React: map props to classes, attributes, and children
- Vue: map props and slots to the same DOM contract
- Angular: map `@Input()` values to classes and attributes
- All wrappers should pass through `class`, `style`, `data-*`, and ARIA attributes

## 15. Default component documentation format

Every component doc must use this order:

1. Purpose
2. UX goal
3. Preview
4. Structure
5. Visual variants
6. Semantic variants if relevant
7. Sizes
8. States
9. Responsive behavior
10. Dark mode behavior
11. Accessibility requirements
12. Cross-browser considerations
13. HTML usage
14. React usage
15. Angular usage
16. Vue usage
17. SCSS architecture
18. JS architecture if needed
19. GSAP enhancement hooks if relevant
20. Developer customization hooks
21. Lightweight optimization notes

## 16. Token reuse rules

Every component must reuse the framework token system before introducing local values.

Rules:

- Use semantic CSS variables such as `--px-color-surface`, `--px-color-text`, `--px-space-4`
- Set component-local variables that point to framework variables
- Use token maps and helpers for compile-time generation
- Avoid raw hex, rgba, or fixed pixel values unless no token exists and the value is tightly scoped

Pattern:

```scss
.px-card {
  --px-card-bg: var(--px-color-surface);
  --px-card-border: var(--px-color-border);
  --px-card-radius: var(--px-radius-lg);
  --px-card-padding: var(--px-space-5);
}
```

## 17. Shared mixin reuse rules

Shared mixins are the first reuse layer for framework behavior.

Use shared mixins for:

- breakpoints
- focus ring
- typography roles
- interactive transitions
- truncation and line clamping
- elevation
- theme scoping
- utility generation

Rules:

- If two or more components repeat a behavior pattern, extract or reuse a mixin
- Mixins should encode behavior or pattern rules, not whole component skins
- Do not duplicate focus, hover, responsive, or visually-hidden logic in component files

## 18. How to avoid bloat

Rules:

- Support a controlled variant set
- Keep sizes shared across components
- Use CSS variables for variant deltas instead of duplicating full declarations
- Reuse mixins and placeholders for repeated interaction patterns
- Avoid utility-style explosion inside component partials
- Do not add component-specific helpers unless the pattern is reusable

## 19. How to keep component CSS light but still advanced

Rules:

- Use local CSS variables to centralize stylistic differences
- Compose depth with borders, shadows, gradients, and surface tokens instead of heavy DOM structure
- Prefer pseudo-elements to wrapper divs when decoration is purely visual
- Use one enhancement layer for motion and one for theme compensation
- Keep selectors shallow and modifier-based

## 20. How Pixorix should support many variants without becoming heavy

Strategy:

- Keep one structural base
- Define variants as variable swaps
- Keep semantic variants mapped to global semantic tokens
- Use density and theme systems to absorb broad visual changes
- Reserve structural variants for genuine layout differences

Variant model:

- Base component owns structure and interaction
- Variant modifiers swap component-local CSS variables
- Shared states continue to work across all variants
- Responsive behavior stays consistent unless structure genuinely changes

## 21. Naming rules summary

Classes:

- Root: `.px-component`
- Element: `.px-component__part`
- Modifier: `.px-component--primary`
- State: `.is-loading`

Data hooks:

- Component root: `data-px-component="component-name"`
- Feature shortcut: `data-px-component-name`
- Action: `data-px-close`
- Target: `data-px-target`
- State: `data-state="open"`
- Motion: `data-px-motion="reveal"`

Files:

- SCSS: `_component-name.scss`
- JS: `component-name.js`
- Docs: `component-name.md`

## 22. Recommended component file and folder structure

For public components:

```text
src/
  scss/
    components/
      _component-name.scss
  js/
    components/
      component-name.js
docs/
  components/
    component-name.md
examples/
  component-name/
    index.html
    app.scss
    app.js
```

For larger components with complex behavior:

```text
src/
  js/
    components/
      component-name.js
  js/
    utils/
      component-name-helpers.js
```

Rules:

- Do not create deep per-component folders unless the component is behavior-heavy
- Keep the default structure flat and easy to scan
- Group only when complexity justifies it

## 23. Starter component blueprint expectation

The starter blueprint for new components must include:

- a root class contract
- element naming guidance
- token-local CSS variables
- variant, size, and state placeholders
- responsive hooks
- dark mode compensation hook
- HTML example
- JS module skeleton
- documentation skeleton

See the starter files in `src/blueprints/component/` and the doc template in `docs/components/component-template.md`.
