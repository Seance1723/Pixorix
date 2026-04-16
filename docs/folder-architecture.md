# Pixorix Folder Architecture

## 1. Final folder tree

```text
Pixorix/
├── build/
│   ├── config/
│   │   ├── browserslist.cjs
│   │   ├── paths.cjs
│   │   ├── pixorix-banner.cjs
│   │   └── sass-load-paths.cjs
│   └── scripts/
│       ├── build-css.mjs
│       ├── build-js.mjs
│       ├── build-themes.mjs
│       ├── clean-dist.mjs
│       └── watch.mjs
├── dist/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── illustrations/
│   │   └── images/
│   ├── css/
│   ├── js/
│   └── themes/
├── docs/
│   ├── accessibility/
│   ├── advanced-components/
│   ├── browser-support/
│   ├── components/
│   ├── contributing/
│   ├── foundations/
│   ├── getting-started/
│   ├── javascript/
│   ├── layout/
│   ├── motion/
│   ├── theming/
│   ├── utilities/
│   ├── components.md
│   ├── folder-architecture.md
│   └── foundation.md
├── examples/
│   ├── admin/
│   │   ├── index.html
│   │   ├── app.js
│   │   └── app.scss
│   ├── auth/
│   │   ├── index.html
│   │   ├── app.js
│   │   └── app.scss
│   ├── dashboard/
│   │   ├── index.html
│   │   ├── app.js
│   │   └── app.scss
│   ├── docs-portal/
│   │   ├── index.html
│   │   ├── app.js
│   │   └── app.scss
│   ├── ecommerce/
│   │   ├── index.html
│   │   ├── app.js
│   │   └── app.scss
│   ├── marketing/
│   │   ├── index.html
│   │   ├── app.js
│   │   └── app.scss
│   └── playground/
│       ├── index.html
│       ├── app.js
│       └── app.scss
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── illustrations/
│   │   ├── images/
│   │   └── tokens/
│   │       ├── icons.json
│   │       └── illustrations.json
│   ├── js/
│   │   ├── advanced-components/
│   │   │   ├── command-menu.js
│   │   │   ├── data-grid.js
│   │   │   ├── date-picker.js
│   │   │   ├── drawer.js
│   │   │   ├── modal.js
│   │   │   ├── stepper.js
│   │   │   └── toast.js
│   │   ├── components/
│   │   │   ├── accordion.js
│   │   │   ├── dropdown.js
│   │   │   ├── navbar.js
│   │   │   ├── tabs.js
│   │   │   ├── theme-switch.js
│   │   │   └── tooltip.js
│   │   ├── core/
│   │   │   ├── app.js
│   │   │   ├── config.js
│   │   │   ├── defaults.js
│   │   │   ├── dom.js
│   │   │   ├── emitter.js
│   │   │   ├── feature-detect.js
│   │   │   └── registry.js
│   │   ├── motion/
│   │   │   ├── controller.js
│   │   │   ├── presets.js
│   │   │   ├── reveal.js
│   │   │   └── transition.js
│   │   ├── utils/
│   │   │   ├── a11y.js
│   │   │   ├── focus-trap.js
│   │   │   ├── media.js
│   │   │   ├── scroll-lock.js
│   │   │   └── selectors.js
│   │   └── index.js
│   └── scss/
│       ├── abstracts/
│       │   ├── _functions.scss
│       │   ├── _index.scss
│       │   ├── _maps.scss
│       │   ├── _mixins.scss
│       │   ├── _placeholders.scss
│       │   ├── _responsive.scss
│       │   ├── _states.scss
│       │   └── _tools.scss
│       ├── advanced-components/
│       │   ├── _command-menu.scss
│       │   ├── _data-grid.scss
│       │   ├── _date-picker.scss
│       │   ├── _drawer.scss
│       │   ├── _index.scss
│       │   ├── _modal.scss
│       │   ├── _stepper.scss
│       │   └── _toast.scss
│       ├── base/
│       │   ├── _accessibility.scss
│       │   ├── _forms.scss
│       │   ├── _index.scss
│       │   ├── _media.scss
│       │   ├── _normalize.scss
│       │   ├── _reset.scss
│       │   ├── _root.scss
│       │   └── _typography.scss
│       ├── components/
│       │   ├── _accordion.scss
│       │   ├── _alert.scss
│       │   ├── _badge.scss
│       │   ├── _breadcrumb.scss
│       │   ├── _button.scss
│       │   ├── _card.scss
│       │   ├── _dropdown.scss
│       │   ├── _form-control.scss
│       │   ├── _index.scss
│       │   ├── _input-group.scss
│       │   ├── _navbar.scss
│       │   ├── _pagination.scss
│       │   ├── _table.scss
│       │   ├── _tabs.scss
│       │   └── _tooltip.scss
│       ├── layout/
│       │   ├── _cluster.scss
│       │   ├── _container.scss
│       │   ├── _grid.scss
│       │   ├── _index.scss
│       │   ├── _section.scss
│       │   ├── _shell.scss
│       │   ├── _sidebar.scss
│       │   ├── _split.scss
│       │   └── _stack.scss
│       ├── themes/
│       │   ├── _brand.scss
│       │   ├── _dark.scss
│       │   ├── _density.scss
│       │   ├── _high-contrast.scss
│       │   ├── _index.scss
│       │   └── _light.scss
│       ├── tokens/
│       │   ├── _borders.scss
│       │   ├── _breakpoints.scss
│       │   ├── _colors.scss
│       │   ├── _density.scss
│       │   ├── _elevation.scss
│       │   ├── _index.scss
│       │   ├── _motion.scss
│       │   ├── _radii.scss
│       │   ├── _spacing.scss
│       │   ├── _typography.scss
│       │   └── _z-index.scss
│       ├── utilities/
│       │   ├── _accessibility.scss
│       │   ├── _display.scss
│       │   ├── _flex.scss
│       │   ├── _grid.scss
│       │   ├── _index.scss
│       │   ├── _overflow.scss
│       │   ├── _position.scss
│       │   ├── _spacing.scss
│       │   ├── _state.scss
│       │   ├── _typography.scss
│       │   └── _visibility.scss
│       ├── vendors/
│       │   ├── _gsap.scss
│       │   └── _index.scss
│       ├── pixorix-core.scss
│       ├── pixorix-utilities.scss
│       └── pixorix.scss
├── README.md
└── LICENSE
```

## 2. Explanation of what each folder contains

### `src/scss/abstracts`
- Authoring tools only: functions, mixins, placeholders, map helpers, responsive helpers, and state helpers.
- No direct rendered component selectors.

### `src/scss/tokens`
- SCSS maps for color, spacing, typography, breakpoints, radii, elevation, density, motion, borders, and z-index.
- The source of truth for CSS variable generation.

### `src/scss/base`
- Reset, normalize, root variables, typography defaults, media defaults, form baseline, and accessibility defaults.
- Global HTML element rules only.

### `src/scss/layout`
- Layout primitives such as container, shell, section, stack, cluster, split, sidebar, and grid.
- Grid rules here must support odd and even column counts from 1 to 12.

### `src/scss/utilities`
- Curated helper classes for spacing, display, flex, visibility, state, overflow, typography, position, grid, and accessibility.
- Utilities are secondary helpers, not the primary authoring model.

### `src/scss/components`
- Core reusable UI primitives.
- Buttons, cards, form controls, alerts, badges, tables, tabs, navbar, pagination, dropdowns, tooltips, and similar high-frequency components.

### `src/scss/advanced-components`
- Higher-complexity patterns with larger UX and JS contracts.
- Modal, drawer, toast, command menu, data grid, date picker, and stepper.

### `src/scss/themes`
- Theme override layers.
- Light, dark, density, high-contrast, and brand remapping partials.

### `src/scss/vendors`
- Third-party integration hooks only.
- Primarily a safe place for GSAP-related class hooks and future vendor bridges.

### `src/js/core`
- Bootstrap, registry, defaults, config, DOM helpers, event emitter, and feature detection.
- No component-specific behavior.

### `src/js/components`
- Behavior modules for common components.
- Each module owns init, events, teardown, and ARIA state synchronization.

### `src/js/advanced-components`
- Richer product behavior modules such as modal, drawer, toast, stepper, command menu, data grid, and date picker.

### `src/js/motion`
- GSAP integration, motion presets, reduced-motion orchestration, and reveal or transition helpers.
- Motion only enhances UX; it must never provide required functionality.

### `src/js/utils`
- Shared side-effect-light helpers such as focus trap, scroll lock, accessibility helpers, media helpers, and selector constants.

### `src/assets`
- Framework-controlled fonts, icons, illustrations, images, and asset metadata.

### `dist`
- Publishable output only: bundled CSS, JS, theme bundles, and copied public assets.

### `docs`
- Public documentation plus internal framework architecture rules.

### `examples`
- Real product-oriented validation apps, not throwaway demos.

### `build/config`
- Build-time paths, browser targets, Sass include paths, and packaging constants.

## 3. File naming conventions

- Use lowercase kebab-case for folders and JS files: `theme-switch.js`, `date-picker.js`.
- Use leading underscores for SCSS partials: `_button.scss`, `_grid.scss`.
- Use explicit non-underscored names for bundle entry files: `pixorix.scss`, `pixorix-core.scss`, `pixorix-utilities.scss`.
- Use singular names for single components and plural names for token families or grouped docs.

## 4. Partial naming standards

- One SCSS partial per concern.
- Component partials own base, variants, sizes, and states for that component.
- Use `_index.scss` only as a local aggregator.
- Avoid fragmenting components into files like `_button-primary.scss` or `_card-large.scss` in the first architecture phase.

## 5. Import strategy

Primary SCSS order:

1. `abstracts`
2. `tokens`
3. `base`
4. `layout`
5. `utilities`
6. `components`
7. `advanced-components`
8. `themes`
9. `vendors`

Bundle roles:

- `pixorix.scss`: full framework bundle
- `pixorix-core.scss`: foundations + base + layout + core components
- `pixorix-utilities.scss`: utility-only bundle

JavaScript strategy:

- `src/js/index.js` is the public entry.
- `core/app.js` boots the registry.
- Modules register through `registry.js`.
- Motion modules load only when enabled and supported.

## 6. Separation strategy between base, variants, sizes, states, motion, and JS-enhanced styles

- Base styles live in the owning component partial.
- Variants use modifier classes such as `.px-button--primary`.
- Sizes use modifier classes such as `.px-button--sm`.
- States prefer semantic selectors and ARIA first, then framework state classes when necessary.
- Motion-safe CSS stays with the owning component or in a component motion section.
- JS-enhanced selectors only add enhancement hooks such as `.has-js` or `[data-px-enhanced='true']`; they must not define baseline functionality.

## 7. Recommended dist outputs

- `dist/css/pixorix.css`
- `dist/css/pixorix.min.css`
- `dist/css/pixorix-core.css`
- `dist/css/pixorix-core.min.css`
- `dist/css/pixorix-utilities.css`
- `dist/css/pixorix-utilities.min.css`
- `dist/themes/pixorix-light.css`
- `dist/themes/pixorix-light.min.css`
- `dist/themes/pixorix-dark.css`
- `dist/themes/pixorix-dark.min.css`
- `dist/js/pixorix.js`
- `dist/js/pixorix.min.js`
- `dist/js/pixorix-core.js`
- `dist/js/pixorix-core.min.js`
- `dist/assets/*`

## 8. Recommended examples structure

Each example should contain:

- `index.html`
- `app.scss`
- `app.js`

Example roles:

- `playground/`: manual validation surface
- `dashboard/`: SaaS and analytics density validation
- `admin/`: tables, forms, shell, navigation
- `marketing/`: hero, sections, reveal motion
- `auth/`: compact form and validation flows
- `ecommerce/`: product grids, filters, checkout surfaces
- `docs-portal/`: long-form content and sidebar navigation

## 9. Recommended docs structure

- `getting-started/`: install, quick start, theming overview
- `foundations/`: tokens, typography, spacing, shadows, density, motion
- `layout/`: container, grid, stack, split, section, shell, sidebar
- `utilities/`: utility APIs and responsive behavior
- `components/`: core component docs
- `advanced-components/`: high-complexity component docs
- `theming/`: CSS variables, dark mode, brand theming
- `motion/`: GSAP architecture and reduced motion
- `javascript/`: module API and enhancement rules
- `accessibility/`: patterns and checklists
- `browser-support/`: matrix and fallbacks
- `contributing/`: architecture rules and release process

## 10. Suggested future-proof expansion strategy

- Keep `components` and `advanced-components` separate to prevent complexity drift.
- Add deeper per-component folders only when a component genuinely needs multiple internal files.
- Keep public entry files stable even if internal files deepen later.
- Reserve future integration layers for third-party bridges instead of mixing them into core runtime.
- Add testing beside source layers later rather than one oversized generic test tree.

## Starter filenames for the complete framework

The folder tree above is the canonical starter filename list for the first production-grade Pixorix scaffold.
