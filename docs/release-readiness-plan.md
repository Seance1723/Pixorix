# Pixorix Release Readiness Plan

Pixorix should launch like a real public framework product: stable bundle structure, predictable versioning, clear package contents, example coverage, accessibility and browser validation, and a disciplined release sequence. The goal is not to ship the maximum number of files first. The goal is to ship a version that teams can trust for daily work.

## 1. Build Strategy

Pixorix should ship with a layered build pipeline:

- SCSS build for full bundle, core bundle, utility bundle, and theme bundles
- JS build for full framework runtime and optional lighter core runtime
- asset copy pipeline for fonts, icons, illustrations, and example assets
- docs/example build pipeline for preview and validation surfaces

Build principles:
- deterministic outputs
- zero manual dist editing
- one command for clean build
- one command for watch/dev
- clear source-to-dist mapping
- no bundler lock-in in the public API

Recommended build stages:
1. clean `dist/`
2. compile SCSS entry files
3. autoprefix and minify CSS
4. build JS entry files
5. minify JS
6. copy static assets
7. build example surfaces
8. run smoke validation on output structure

Recommended build commands:
- `build:css`
- `build:js`
- `build:themes`
- `build:examples`
- `build`
- `watch`
- `clean`

## 2. Dist Output Strategy

Pixorix dist output should be explicit and predictable.

Recommended structure:

```text
dist/
├── css/
│   ├── pixorix.css
│   ├── pixorix.min.css
│   ├── pixorix-core.css
│   ├── pixorix-core.min.css
│   ├── pixorix-utilities.css
│   └── pixorix-utilities.min.css
├── js/
│   ├── pixorix.js
│   ├── pixorix.min.js
│   ├── pixorix-core.js
│   └── pixorix-core.min.js
├── themes/
│   ├── pixorix-light.css
│   ├── pixorix-light.min.css
│   ├── pixorix-dark.css
│   ├── pixorix-dark.min.css
│   ├── pixorix-contrast.css
│   └── pixorix-contrast.min.css
└── assets/
    ├── fonts/
    ├── icons/
    ├── illustrations/
    └── images/
```

Dist rules:
- no source partials in `dist/`
- no ambiguous filenames
- minified and non-minified outputs always shipped together
- theme outputs separated from main bundle for clarity

## 3. Minified CSS/JS Output Plan

Minified output is mandatory for public release.

### CSS minification plan
- generate minified output from the compiled production CSS
- keep source maps optional but available for debug builds
- preserve license banner in public files
- do not collapse readability-critical custom property names

### JS minification plan
- minify after bundling
- preserve public export names where needed for ESM usage
- strip dead internal debug code
- preserve license header

### Source map policy
- publish source maps for non-sensitive public packages
- allow opt-out if package size or CDN strategy requires a separate debug package

## 4. Source File Strategy

Pixorix should publish both authoring sources and compiled outputs where practical.

Recommended approach:
- publish `src/scss/` because SCSS framework users need source partial access
- publish `src/js/` only if the package supports import-level consumption and tree-aware usage
- publish `dist/` for immediate adoption
- exclude internal build-only scripts unless needed by contributors

Package-facing rule:
- `dist/` is the stable consumption surface
- `src/` is the advanced customization surface

## 5. Versioning Strategy

Pixorix should use semantic versioning from the first public release.

Recommended policy:
- `0.x` while API, class naming, and package structure are still shifting
- `1.0.0` only after the class model, theme API, and JS lifecycle are stable

Version rules:
- patch: bug fixes, small docs fixes, non-breaking polish
- minor: new components, new utilities, additive theme or JS APIs
- major: renamed classes, removed bundles, changed import order, changed JS lifecycle contracts

Pre-release tags:
- `alpha` for internal framework hardening
- `beta` for public feedback period
- `rc` only when release-blocking issues are mostly resolved

## 6. Changelog Strategy

Changelog must be curated for framework users, not copied from commit logs.

Required release sections:
- Summary
- Added
- Changed
- Fixed
- Deprecated
- Removed
- Migration Notes

Changelog rules:
- every breaking change gets migration guidance
- class and token renames are called out explicitly
- accessibility and browser support changes are called out explicitly
- examples and docs additions are secondary to API-impacting changes

## 7. npm Package Readiness

Pixorix npm readiness means the package can be consumed by:
- plain HTML projects
- Sass-based projects
- bundler-based apps
- teams that only want CSS
- teams that want CSS plus JS

Minimum package requirements:
- clean `package.json`
- `exports` map
- `files` whitelist
- `sideEffects` policy
- license metadata
- repository metadata
- homepage and bugs URLs
- keywords for discoverability

Recommended package surface:
- `style`: main CSS bundle
- `module`: ESM JS bundle
- `exports` for CSS, JS, and theme entry points

Recommended package validation:
1. install into a plain Vite app
2. import compiled CSS only
3. import SCSS source entry
4. import JS runtime
5. validate theme switching

## 8. CDN Readiness

Pixorix should be CDN-ready from the first public release.

CDN requirements:
- stable dist filenames
- minified bundles
- predictable asset paths
- versioned tag usage
- no runtime dependency on build-time module resolution

CDN examples should be documented for:
- full CSS only
- full CSS plus JS
- dark theme bundle
- no-build prototype usage

CDN readiness rules:
- do not require complex post-build steps
- keep public asset paths relative and robust
- ensure JS bundle runs without Node-specific assumptions

## 9. Starter Template Packaging

Pixorix should launch with starter templates that prove real-world viability.

Recommended starter set for first public release:
- landing page starter
- auth starter
- admin dashboard starter
- analytics dashboard starter

Template packaging options:
- included in `examples/`
- downloadable starter archives
- optional separate starter packages later

Starter rules:
- minimal fake complexity
- real theme toggle
- responsive validation included
- examples use only public APIs

## 10. License and README Structure

### License
- use a standard open-source license
- include full `LICENSE` file in repo root
- ensure npm metadata matches

### README structure
The README should be short, credible, and conversion-oriented.

Recommended README order:
1. Pixorix one-line pitch
2. Why Pixorix
3. Core features
4. Install
5. Quick start
6. CSS and JS bundle options
7. Theme switching preview
8. Documentation links
9. Example links
10. Browser support summary
11. Contribution link
12. License

README rule:
- keep deep architecture in docs, not in the README

## 11. Public Launch Checklist

### Product checklist
- core CSS bundles compile cleanly
- JS runtime initializes cleanly
- theme switching works
- motion layer degrades safely without GSAP
- examples cover main product use cases

### API checklist
- naming is stable enough for public use
- bundle entrypoints are finalized
- component doc templates are applied to key components
- no known structural class naming conflicts remain

### Docs checklist
- introduction and installation pages exist
- theming, layout, utilities, components, motion, accessibility, and JS API docs exist
- examples are documented
- changelog and roadmap structure exist

### Packaging checklist
- npm package contents validated
- CDN usage validated
- license and readme finalized
- dist structure finalized

### Quality checklist
- browser smoke tests complete
- accessibility smoke tests complete
- performance budgets reviewed
- launch blockers triaged

## 12. Testing Strategy

Pixorix should use layered testing rather than relying on only visual spot checks.

### Core testing layers
- SCSS compilation validation
- JS initialization smoke tests
- example page smoke tests
- accessibility automation
- manual keyboard testing
- browser matrix smoke testing

### What to test first
- theme switching
- layout/grid behavior
- forms
- tables and dashboard shells
- overlays and focus trap behavior
- motion fallback behavior

## 13. Browser Testing Strategy

Pixorix target browsers:
- Chrome
- Edge
- Firefox
- Safari
- Opera
- Android browsers
- iOS Safari

Browser strategy:
- maintain a documented support matrix
- run smoke tests against real responsive breakpoints
- prioritize Safari and iOS for layout, forms, sticky, overflow, and theme checks

High-priority browser validation areas:
- grid and odd-column layouts
- sticky headers/side panels
- form controls and autofill
- overflow containers and tables
- modal/drawer focus and scroll behavior
- dark mode and color-scheme behavior

## 14. Accessibility Testing Strategy

Accessibility must be a release gate, not an optional review item.

Required checks:
- keyboard-only pass on core examples
- visible focus audit
- screen-reader naming checks on core forms and overlays
- validation/error messaging checks
- contrast checks in light, dark, and high-contrast modes
- reduced-motion validation

Minimum release criteria:
- no critical keyboard blockers
- no hidden primary actions
- no missing labels on framework-controlled controls
- no severe contrast failures in shipped defaults

## 15. Performance Testing Strategy

Pixorix should ship with practical performance budgets.

### CSS performance goals
- avoid unnecessary utility explosion
- avoid repeated themed component duplication
- keep selectors shallow

### JS performance goals
- small core bootstrap
- no eager initialization of unused components
- no layout-thrashing motion defaults
- delegated events where appropriate

### Example performance checks
- landing page first render
- dashboard initial JS cost
- theme switch responsiveness
- motion-off behavior under reduced motion

## 16. MVP vs Full Version Roadmap

### MVP release
The MVP should prove that Pixorix is usable for real product work.

MVP should include:
- token system
- base layer
- layout/grid system
- utilities
- buttons, cards, alerts, avatars, badges
- forms system
- table and data-display shell
- navigation basics
- modal and drawer
- theme system
- motion system
- accessibility architecture
- core JS architecture
- 4 strong example templates
- public docs foundation

### Full version direction
The full version can expand after API hardening.

Later additions:
- richer date and scheduling components
- deeper command/menu/search ecosystems
- richer data-table behaviors
- plugin ecosystem
- starter template packages
- docs site polish and interactive playgrounds
- broader enterprise example set

## 17. Component Release Sequencing

Release sequencing should follow product usefulness, not novelty.

### Phase 1: Foundation release
- tokens
- base
- layout
- utilities
- theme system
- JS core

### Phase 2: Essential UI primitives
- buttons
- badges
- cards
- avatars
- alerts
- loaders
- empty states

### Phase 3: Forms and navigation
- forms system
- breadcrumbs
- pagination
- tabs
- accordion
- nav and sidebar
- dropdown basics

### Phase 4: Product and dashboard essentials
- tables
- data-display shell
- KPI/stat/analytics cards
- activity feed
- settings panel
- dashboard examples

### Phase 5: Overlay and advanced interaction
- modal
- drawer
- offcanvas
- command palette
- toast
- bottom sheet

### Phase 6: Premium differentiation layer
- pricing cards
- hero and feature sections
- AI chat shell
- Kanban shell
- calendar shell
- premium UI patterns

### Phase 7: Full ecosystem hardening
- starter packs
- plugin-ready APIs
- broader docs coverage
- migration discipline

## Recommended Launch Path

Pixorix should launch publicly in this order:

1. Internal alpha
2. Closed beta with example validation
3. Public beta with docs and npm package
4. Release candidate after browser and accessibility stabilization
5. `1.0.0` only after API naming, theming, and JS lifecycle contracts stop moving

## Release Gate Summary

Pixorix is ready for public beta when:
- the build is deterministic
- dist outputs are stable
- npm package shape is validated
- CDN usage is documented
- core examples work
- dark mode works
- reduced motion works
- accessibility blockers are cleared
- docs support first-time adoption

Pixorix is ready for `1.0.0` when:
- breaking class and token renames are no longer likely
- major component categories are covered
- migration discipline is in place
- contributors can extend the framework without guessing architecture
