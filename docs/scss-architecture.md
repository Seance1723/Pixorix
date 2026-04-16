# Pixorix SCSS Architecture

## 1. SCSS architecture philosophy

Pixorix SCSS should treat Sass as an authoring system, not as a place to dump final styling. SCSS is responsible for token organization, map-driven generation, mixins, compile-time logic, and component composition rules. CSS variables are responsible for runtime theming and contextual overrides. This split keeps Pixorix scalable, brandable, and production-safe.

The architecture should optimize for five outcomes:

- predictable import order
- low selector complexity
- minimal duplicate output
- stable component APIs
- easy theme and brand customization

Pixorix should be semantic-first, token-first, and mobile-first. Utilities exist to assist composition, not replace system design. Components should expose clean CSS variable hooks and modifier APIs so teams can customize without rewriting framework internals.

## 2. Partial organization strategy

- `abstracts/` contains non-rendering Sass tools only.
- `tokens/` contains token maps and semantic scales.
- `base/` contains element-level defaults and CSS variable output.
- `layout/` contains structural primitives.
- `utilities/` contains curated helper generation.
- `components/` contains common reusable primitives.
- `advanced-components/` contains behavior-heavy or product-heavy UI patterns.
- `themes/` contains mode and brand overrides.
- `vendors/` contains carefully isolated external integration hooks.

Each folder exposes a single `_index.scss` aggregator. Entry bundles import the layer aggregators in one canonical order so the public API stays stable even if internal files deepen later.

## 3. Relationship between tokens, functions, mixins, placeholders, base styles, layouts, utilities, components, and themes

- Tokens are the source of truth.
- Functions read and normalize tokens.
- Mixins apply token logic to selectors and generated CSS.
- Placeholders define rare structural reuse where duplication would be wasteful.
- Base styles turn semantic tokens into root CSS variables and consistent element defaults.
- Layouts consume tokens and mixins for structural primitives.
- Utilities consume tokens and mixins to generate a constrained helper layer.
- Components consume variables, tokens, and mixins to create stable UI APIs.
- Themes remap CSS variables and selected semantic tokens without rewriting component structure.

The dependency direction should always move downward:

`tokens -> abstracts -> base/layout/utilities/components -> themes`

Themes must not redefine component internals unless a component genuinely needs theme-specific compensation.

## 4. How Pixorix should avoid CSS bloat

- Generate only approved utility scales, not arbitrary infinite permutations.
- Keep variants, sizes, and states inside the component that owns them.
- Avoid deep nesting and descendant-heavy selectors.
- Use CSS variables for runtime changes instead of emitting duplicate themed component CSS.
- Prefer modifier classes over duplicate component copies.
- Keep placeholders rare and structural.
- Use one canonical component selector root per component.
- Ship bundle variants: full, core, and utilities-only.

## 5. How Pixorix should support modular imports

Pixorix should support three levels of consumption:

- full bundle import via `pixorix.scss`
- reduced bundle import via `pixorix-core.scss`
- utility-only import via `pixorix-utilities.scss`

Internal layers should use `@forward` from local `_index.scss` files. Public entrypoints should `@use` layers in order. This preserves namespacing and prevents global leakage while still allowing advanced consumers to import layers selectively.

## 6. How Pixorix should support runtime theming with CSS variables

Base root styles should emit semantic CSS variables such as:

- `--px-color-bg`
- `--px-color-surface`
- `--px-color-text`
- `--px-space-4`
- `--px-radius-md`
- `--px-shadow-md`
- `--px-motion-duration-fast`

Components should consume semantic variables, not raw palette values. This allows:

- dark mode switching
- brand theming
- density modes
- per-component overrides
- runtime theme toggles without recompiling Sass

Theme files should mostly override variables under selectors such as `[data-px-theme='dark']` or `:root`.

## 7. How Pixorix should support compile-time generation using SCSS maps

SCSS maps should define:

- breakpoints
- spacing scale
- type scale
- radii
- elevation
- density modes
- motion tokens
- feedback and semantic color roles

Compile-time generation should be used for:

- utility classes
- responsive helpers
- root CSS variable emission
- size modifiers
- state-aware token loops

Compile-time generation should not be used to emit large theme duplicates when CSS variable remapping can do the job.

## 8. Best practices for scalable component authoring

- One component root, one component file.
- Use explicit class prefixes such as `.px-button`.
- Define base, variants, sizes, states, and motion sections in a stable order.
- Prefer local CSS variables at component boundaries.
- Use semantic child elements only where structure is genuinely part of the API.
- Keep selectors shallow and modifier-driven.
- Document required markup and accessibility hooks alongside the component.
- Keep component files responsible for their own dark-mode adjustments only when variable remapping is not enough.

## 9. Best practices for variants, sizes, states

- Variants change tone and emphasis, not layout contract.
- Sizes change density metrics such as height, padding, gap, icon scale, and font size.
- States should prefer native and ARIA states first: `:disabled`, `[aria-expanded='true']`, `[aria-current='page']`.
- Framework state classes such as `.is-active` or `.is-loading` are acceptable where semantic selectors are insufficient.
- Variant and size naming should be consistent across the framework:
  `.px-button--primary`, `.px-button--soft`, `.px-button--sm`, `.px-button--lg`

## 10. Best practices for dark mode and theme overrides

- Dark mode should primarily remap semantic variables, not rebuild every component selector.
- Theme selectors should live in `themes/`, not be scattered across component files by default.
- Components may include local compensation only for cases like borders, overlays, or visual contrast details.
- Theme overrides should follow semantic roles, not hardcoded palette names.
- High-contrast and brand themes should inherit from the same semantic variable contract as light and dark modes.
