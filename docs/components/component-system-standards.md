# Pixorix Master Component Rules

This document is the framework-level contract for every public Pixorix component.

Pixorix components must be:

- HTML-first
- token-driven
- shallow in markup
- modular to import
- accessible by default
- dark-mode ready
- responsive by default
- framework-agnostic
- GSAP-enhanceable without depending on GSAP for core UX

## 1. Component Architecture Philosophy

Pixorix uses a layered authoring model:

1. Tokens define the visual contract.
2. Mixins and placeholders encode repeated behavior.
3. Component SCSS defines one structural base with local CSS variables.
4. Optional JavaScript reads `data-px-*`, `data-state`, and ARIA state.
5. Optional GSAP enhancement adds motion without changing semantics or usability.

Core architecture rules:

- One component root class per component: `.px-component-name`
- One SCSS partial per public component
- One optional JS module per interactive component
- One public documentation page per component
- One realistic example surface for demo and regression validation
- Structure is owned by the base component, not by variants
- Variants swap variables, not anatomy
- Framework wrappers must preserve the same DOM contract as plain HTML

Authoring priorities:

1. Reuse tokens
2. Reuse shared mixins and placeholders
3. Expose local CSS variables
4. Add controlled variants and sizes
5. Add JS hooks only where behavior requires them

## 2. Variant Naming Strategy

Variants are split into distinct, composable axes.

### Variant Axes

- Tone: communicates meaning or brand emphasis
- Appearance: communicates surface treatment
- Structure: changes layout or anatomy only when necessary
- Shape: modifies silhouette only when reusable across the component family

### Standard Naming

- Tone: `.px-button--primary`
- Appearance: `.px-button--soft`
- Structure: `.px-tabs--vertical`
- Shape: `.px-button--pill`

### Framework-Wide Tone Names

- `primary`
- `secondary`
- `neutral`
- `accent`
- `success`
- `warning`
- `danger`
- `info`
- `inverse`

### Framework-Wide Appearance Names

- `solid`
- `soft`
- `outline`
- `ghost`
- `text`
- `glass`
- `gradient`
- `elevated`

### Rules

- Never invent ad hoc names such as `alt`, `main`, `v2`, `special`, or `new`
- Tone and appearance may compose when the component explicitly supports both axes
- Structural variants are not visual shortcuts; they must represent real layout changes
- Do not create separate markup contracts for visual variants
- A component should document which variant axes are supported and which are intentionally omitted

## 3. State Naming Strategy

Pixorix states must prefer native and semantic state first.

### Priority Order

1. Native selectors: `:hover`, `:focus-visible`, `:active`, `:disabled`, `:checked`
2. ARIA and semantic attributes: `[aria-expanded='true']`, `[aria-selected='true']`, `[aria-current='page']`
3. Lifecycle attributes: `[data-state='open']`, `[data-state='loading']`
4. Framework state classes for JS-managed state only

### Approved Framework State Classes

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

### Rules

- State classes always use the `.is-*` prefix
- Never represent state as a visual modifier such as `.px-modal--open`
- If state has accessibility meaning, reflect it in ARIA or native attributes
- Use `data-state` for finite lifecycle values such as `open`, `closed`, `loading`, `entering`, `entered`, `exiting`
- Keep state naming stable across components so docs and JS APIs stay predictable

## 4. Size Naming Strategy

Size is a shared framework axis. It should affect density, not intent.

### Standard Sizes

- `xs`
- `sm`
- default with no size modifier
- `lg`
- `xl`

### Optional Support

- A component may expose only the subset it can support well
- If a default `md` alias is needed for API clarity, it should map to the base size, not become a second default

### Rules

- Size modifiers only change dimensions, spacing, type scale, icon scale, and radius where relevant
- Avoid local names such as `compact`, `dense`, `huge`, or `tiny` unless the component family has a documented structural need
- Use theme density controls for system-wide compression instead of multiplying component-only sizes

## 5. Responsive Rules

Pixorix is mobile-first.

### Responsive Contract

- Mobile is the base authoring target
- Tablet and desktop add space and secondary affordances
- Components should adapt layout before introducing alternate variants
- A component must describe mobile, tablet, and desktop behavior in its docs

### Responsive Authoring Rules

- Use shared breakpoint mixins from `src/scss/abstracts/_mixins.scss`
- Prefer fluid typography, gap, and sizing tokens before adding hard breakpoint jumps
- Avoid separate mobile-only component variants
- Keep interactions usable across touch and pointer devices

### Standard Authoring Pattern

```scss
@include mixins.px-media-up(md) {
  // tablet and up
}

@include mixins.px-media-up(lg) {
  // desktop and up
}
```

## 6. Dark Mode Rules

Dark mode is token-driven first and component-local second.

### Rules

- Theme remapping belongs in `src/scss/themes/`
- Components consume semantic CSS variables, not palette literals
- Use `[data-px-theme='dark']` for scoped dark compensation
- Local dark-mode rules should only correct places where token remapping alone is insufficient

### Allowed Local Compensation

- border clarity
- elevated surface separation
- backdrop tuning
- glass treatment tuning
- shadow or glow balance
- media contrast correction

### Prohibited Pattern

- Hardcoded full dark themes inside component partials

## 7. Accessibility Checklist Template

Every public component doc must include this section.

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

## 8. Cross-Browser Checklist Template

Every public component doc must include this section.

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

## 9. JS Hook and Data-Attribute Strategy

JS hooks must be declarative, stable, and styling-independent.

### Standard Hooks

- Root behavior hook: `data-px-component="modal"`
- Shortcut root hook when useful: `data-px-modal`
- Action hooks: `data-px-trigger`, `data-px-toggle`, `data-px-close`
- Target hook: `data-px-target="#dialog-id"`
- Config hooks: `data-px-placement="end"`, `data-px-delay="150"`
- Lifecycle state: `data-state="open"`

### Rules

- JS must not depend on brittle styling selectors
- Use classes for CSS and `data-px-*` for behavior
- Mirror behavioral state into ARIA when relevant
- Modules must support safe re-init
- Modules must return a `destroy()` method when they bind listeners or observers

### Recommended Root Pattern

```html
<section class="px-component-name" data-px-component="component-name" data-state="idle">
```

## 10. Animation Hook Strategy

Motion is optional, progressive enhancement only.

### Standard Hooks

- Root opt-in: `data-px-motion`
- Preset: `data-px-motion="reveal"`
- Motion target: `data-px-motion-target="panel"`
- Motion phase: `data-px-motion-state="entering"`

### Rules

- Core visibility and interaction cannot depend on animation completion
- Motion presets must map to Pixorix motion tokens
- Reduced-motion must simplify or disable choreographed transforms
- Prefer opacity and transform over layout-affecting properties
- GSAP is enhancement only and must degrade gracefully to CSS or instant state change

## 11. Lightweight Modular Import Strategy

Pixorix components must be importable at multiple scopes without forcing the full framework.

### SCSS Import Levels

- Full bundle: `src/scss/pixorix.scss`
- Core bundle: `src/scss/pixorix-core.scss`
- Utilities bundle: `src/scss/pixorix-utilities.scss`
- Component-level partials from `src/scss/components/` or `src/scss/advanced-components/`

### JS Import Levels

- Full bootstrap: `initPixorix()`
- Per-module import: `import { createModal } from './components/modal.js';`
- Registry-based init via `registerPixorixComponent()`

### Rules

- Each interactive module must be importable on its own
- Cross-component runtime dependencies should stay in `src/js/core/` or `src/js/utils/`
- Shared SCSS behavior belongs in `abstracts/`, not duplicated into component partials
- Heavy enhancement logic must stay optional

## 12. SCSS Structure for Component Files

Every component partial should follow one stable section order.

```scss
@use '../abstracts/functions' as fn;
@use '../abstracts/mixins';
@use '../abstracts/placeholders';

.px-component-name {
  /* 1. Local CSS variables */

  /* 2. Base structure and layout */

  /* 3. Typography and content flow */

  /* 4. Interactive states */

  /* 5. Public child elements */

  /* 6. Tone and appearance variants */

  /* 7. Sizes and shape modifiers */

  /* 8. State classes and data-state handling */

  /* 9. Theme compensation */

  /* 10. Responsive overrides */
}
```

### SCSS Rules

- Keep nesting shallow, ideally one level
- Prefer local CSS variables over repeated declarations
- Use logical properties where possible
- Avoid descendant chains longer than three parts
- Prefer pseudo-elements over extra wrappers for pure decoration
- Do not hardcode colors when semantic tokens exist

## 13. Recommended HTML Structure Standards

HTML must stay practical and not wrapper-heavy.

### Rules

- The root class defines the component boundary
- Public anatomy uses `__element` only for meaningful, reusable parts
- Avoid wrappers that exist only to paint a surface or separator
- Prefer semantic elements such as `button`, `nav`, `ul`, `label`, `input`, `section`, `dialog`
- Required wrappers must be documented explicitly

### Recommended Pattern

```html
<button class="px-button px-button--primary">
  <span class="px-button__icon" aria-hidden="true"></span>
  <span class="px-button__label">Save changes</span>
</button>
```

## 14. Multi-Framework Usage Pattern Standards

The component contract is HTML-first and wrapper-compatible.

### Rules

- React, Vue, and Angular wrappers must preserve Pixorix classes and hooks
- Wrappers may improve props and typing but must not change semantics
- The same public anatomy and data hooks must appear in every framework example
- Always pass through `class`, `style`, `data-*`, and ARIA attributes
- Avoid wrapper APIs that hide the underlying DOM contract

### Wrapper Guidance

- React: map props to `className`, `data-*`, ARIA, and children
- Vue: map props and slots to the same DOM contract
- Angular: map `@Input()` values to the same class and attribute contract

## 15. Default Component Documentation Format

Every public component doc must use this order:

1. Title
2. Purpose
3. UX goal
4. Preview
5. Structure
6. Visual variants
7. Semantic variants if relevant
8. Sizes
9. States
10. Responsive behavior
11. Dark mode behavior
12. Accessibility requirements
13. Cross-browser considerations
14. HTML usage
15. React usage
16. Angular usage
17. Vue usage
18. SCSS architecture
19. JS architecture if needed
20. GSAP enhancement hooks if relevant
21. Developer customization hooks
22. Lightweight optimization notes
23. Related components

## 16. How All Components Reuse Tokens

Every component must define a local variable layer that points at framework tokens.

### Token Reuse Rules

- Use semantic CSS variables such as `--px-color-surface`, `--px-color-text`, `--px-space-4`
- Map those values into component-local variables such as `--px-card-bg`, `--px-card-border`, `--px-card-gap`
- Prefer token maps and framework helpers at compile time
- Avoid raw hex, ad hoc rgba, or isolated pixel literals unless the value is tiny, local, and not worth tokenizing

### Required Pattern

```scss
.px-card {
  --px-card-bg: var(--px-color-surface);
  --px-card-border: var(--px-color-border);
  --px-card-radius: var(--px-radius-lg);
  --px-card-padding: var(--px-space-5);
}
```

### Token Layer Rule

- Variants change component-local variables first, not raw properties

## 17. How All Components Reuse Shared Mixins

Shared mixins are the first reuse layer for repeated framework behavior.

### Use Shared Mixins For

- breakpoints
- focus ring
- typography roles
- elevation
- interactive transitions
- truncation and line clamping
- theme scope
- utility generation

### Rules

- If a behavior appears in two or more components, it should be shared
- Mixins encode patterns and behavior, not full component skins
- Components should not duplicate focus, disabled, responsive, or visually-hidden logic

## 18. How Pixorix Avoids Bloat

### Rules

- Keep one structural base per component
- Keep variant names controlled and shared
- Keep sizes shared across the system
- Prefer variable swaps over duplicated rule blocks
- Keep advanced behavior optional
- Do not create one-off page-only component styles unless there is no reusable abstraction
- Promote repeated patterns into tokens, mixins, placeholders, or utilities

### Bloat Tests

- Can this be solved with a token swap instead of a new variant?
- Is this a density concern that belongs in theming?
- Is this a structural difference or just visual dressing?
- Is this used by at least two real product surfaces?

## 19. How To Keep Component CSS Light but Still Advanced

### Rules

- Centralize styling through local CSS variables
- Use subtle gradients, borders, elevation, and backdrop treatment instead of extra wrappers
- Use pseudo-elements for visual flourishes
- Keep interaction polish in shared mixins and small state sections
- Separate structural CSS from motion-enhanced CSS

### Pixorix Visual Direction

- soft depth
- layered surfaces
- subtle gradients where useful
- premium spacing
- fluid typography
- polished hover, focus, and active states
- expressive but controlled motion
- futuristic but usable

## 20. How Pixorix Supports Many Variants Without Becoming Heavy

Pixorix supports breadth by separating variant concerns into reusable axes.

### Variant Model

- Base owns structure and anatomy
- Tone controls semantic color intent
- Appearance controls surface treatment
- Size controls density
- Shape modifies silhouette only when broadly reusable
- State remains independent and works across all variants

### Scaling Rules

- Prefer two-axis composition over one huge matrix of prebuilt combinations
- Reserve structural variants for real layout changes
- Put global feel changes into themes and density layers
- Keep unsupported combinations intentionally undocumented rather than trying to support everything

## 21. Naming Rules Summary

### Classes

- Root: `.px-component-name`
- Element: `.px-component-name__element`
- Modifier: `.px-component-name--primary`
- State: `.is-loading`

### Data Hooks

- Root: `data-px-component="component-name"`
- Shortcut root: `data-px-component-name`
- Action: `data-px-trigger`
- Toggle: `data-px-toggle`
- Target: `data-px-target`
- State: `data-state="open"`
- Motion: `data-px-motion="reveal"`

### Files

- SCSS: `_component-name.scss`
- JS: `component-name.js`
- Docs: `component-name.md`
- Example: `examples/component-name/index.html`

## 22. Recommended Component File and Folder Structure

### Standard Public Component

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

### Advanced Component

```text
src/
  scss/
    advanced-components/
      _component-name.scss
  js/
    advanced-components/
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

### Structure Rules

- Default to a flat structure
- Add helper modules only when behavior complexity justifies them
- Do not split components into many micro-files for tone, size, or state

## 23. Starter Component Blueprint Template

New components should begin from the Pixorix starter blueprint in `src/blueprints/component/`.

The blueprint must include:

- root class contract
- local token variable layer
- public anatomy guidance
- variant placeholders
- size placeholders
- state placeholders
- responsive hooks
- dark-mode compensation hook
- HTML example
- JS module skeleton
- documentation skeleton

### Starter Build Order

1. Copy the SCSS template
2. Define the root class and local CSS variable contract
3. Add the minimal semantic HTML pattern
4. Add only the supported variant axes
5. Add optional JS only if the component has real behavior
6. Document HTML, React, Angular, and Vue usage with the same contract
