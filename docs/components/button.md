# Pixorix Button System

## 1. Title

Button

Premium action controls for primary workflows, secondary actions, dense toolbars, floating entry points, and auth or integration shells.

## 2. Purpose

- Provide one framework-level button API for product UI, dashboards, docs, marketing surfaces, and admin flows.
- Keep markup lean while supporting standard, icon-only, split, grouped, floating, loading, and social-shell patterns.
- Separate tone, appearance, size, shape, and shell composition so Pixorix can scale variants without duplicating CSS.

## 3. UX Goal

- Make action priority obvious at a glance.
- Keep hit areas comfortable on touch and dense but usable in dashboard contexts.
- Preserve strong hover, focus-visible, active, and loading feedback without visual noise.
- Support premium treatments such as glass, gradient, and elevation without breaking the core button contract.

## 4. Preview

Show:

- standard primary button
- secondary outline button
- ghost icon button
- split button
- loading button
- social shell
- floating action button

## 5. Structure

- Root class: `.px-button`
- Optional alias roots: `.px-link-button`, `.px-icon-button`
- Public elements: `.px-button__icon`, `.px-button__icon--end`, `.px-button__label`
- Group shell: `.px-button-group`
- Split shell: `.px-split-button`
- Floating shell: `.px-fab`
- Social shell: `.px-social-button`, `.px-social-button__meta`, `.px-social-button__title`, `.px-social-button__text`

Recommended semantics:

- Use `<button>` for in-page actions.
- Use `<a>` with `.px-link-button` only for navigation destinations.
- Use plain `.px-button__icon` before the label for icon-left patterns.
- Use `.px-button__icon--end` for icon-right patterns.
- Use split-button secondary triggers as real buttons with `aria-expanded`.

## 6. Visual Variants

Appearance variants:

- `--solid`
- `--soft`
- `--outline`
- `--ghost`
- `--text`
- `--glass`
- `--gradient`
- `--elevated`
- `--pill`
- `--square`

Tone variants:

- `--primary`
- `--secondary`
- `--success`
- `--warning`
- `--danger`
- `--neutral`
- `--dark`
- `--light`

Variant composition rules:

- Combine one tone and one appearance when you need a specific treatment, for example `.px-button--success.px-button--soft`.
- Shape modifiers such as `--pill` and `--square` are additive.
- `elevated` is additive and deepens an existing surface treatment.

Variant usage rules:

- `solid` is the default production-safe surface for primary and high-commitment actions.
- `soft` is best for secondary emphasis, dashboards, filters, and low-noise action clusters.
- `outline` keeps actions distinct without becoming the dominant object in the layout.
- `ghost` is for toolbars, cards, tables, and inline utility controls.
- `text` is for dense content zones and docs contexts where background fill would add clutter.
- `glass` is for premium hero, overlay, or elevated product surfaces where translucency adds value.
- `gradient` is for hero CTAs, launch surfaces, and premium product actions where extra energy is intentional.
- `elevated` should be used sparingly so depth remains meaningful.
- `pill` softens silhouette for CTA, auth, and consumer-facing actions.
- `square` tightens silhouette for dense admin and utility controls.

## 7. Semantic Variants

- `primary` is for the main positive path in the current action group.
- `secondary` is for visible but lower-emphasis support actions.
- `success` is for confirm, publish, enable, or complete actions.
- `warning` is for cautionary actions that are still recoverable.
- `danger` is for destructive or irreversible actions.
- `neutral` is for utility, toolbar, and low-semantic controls.
- `dark` is for inverse emphasis on light surfaces.
- `light` is for dark sections, overlays, and inverse layouts.

## 8. Sizes

- `--xs`
- `--sm`
- `--md`
- `--lg`
- `--xl`
- `--compact`

Size rules:

- `xs` is for dense table rows, compact controls, and embedded utilities.
- `sm` is for secondary actions and dense dashboard surfaces.
- `md` is the default.
- `lg` is for stronger page actions and roomy form layouts.
- `xl` is for prominent marketing and onboarding flows.
- `compact` is additive and intended for toolbars or constrained admin surfaces.

## 9. States

- default
- hover
- focus-visible
- active
- disabled
- loading via `.is-loading`, `[aria-busy='true']`, or `[data-state='loading']`

State rules:

- Hover should increase clarity, not create surprise.
- Focus-visible must remain obvious across all tones and appearances.
- Active should feel pressed and stable rather than dramatic.
- Disabled removes affordance without collapsing legibility.
- Loading keeps layout stable, blocks repeat activation, and should be paired with meaningful label text when possible.

## 10. Responsive Behavior

- Buttons remain single-line and touch-friendly by default.
- Use `.px-button--block` or `.px-button--full` for narrow layouts.
- Use `.px-button-group--block` when grouped actions should share horizontal space.
- Use `.px-button-group--responsive` or `data-px-stack='mobile'` to stack button groups on small screens.
- Use `.px-split-button--responsive`, `.px-split-button--full`, or `data-px-stack='mobile'` to let split buttons expand full width on mobile.
- Fixed FAB offsets compress slightly on mobile to preserve safe edge spacing.

## 11. Dark Mode Behavior

- Buttons inherit theme variables first.
- Light and glass appearances include local dark-mode compensation.
- Soft appearances slightly reduce highlight intensity in dark mode to avoid chalky surfaces.
- Dark mode does not require alternate markup.

## 12. Accessibility Requirements

- Use real button semantics for actions.
- Icon-only buttons require an accessible name via `aria-label`.
- Loading buttons should use `aria-busy='true'` when an async action is in progress.
- Split-button toggles need `aria-expanded` and `aria-controls`.
- Use `aria-haspopup='menu'` when the split-button toggle controls a menu.
- Do not rely on color alone for destructive or positive meaning.
- Text buttons must keep a visible focus state even when their surface is transparent.

### Accessibility Checklist

- [ ] Uses correct semantic HTML for the action type
- [ ] Keyboard interaction is fully supported
- [ ] `:focus-visible` remains visible in every tone and appearance
- [ ] Icon-only usage includes an accessible name
- [ ] Loading state is communicated programmatically where relevant
- [ ] Split-button toggles expose expanded state correctly
- [ ] Disabled state is not represented by color alone
- [ ] Motion honors `prefers-reduced-motion`
- [ ] Hit area remains usable on touch screens
- [ ] Visible text stays concise and specific

## 13. Cross-Browser Considerations

- `backdrop-filter` in glass buttons degrades gracefully to a translucent surface.
- Hover effects must not be required for meaning on touch devices.
- Safari and iOS Safari need verification for blur, fixed FAB placement, and focus ring rendering.
- Attached groups need verification for border overlap and focus stacking in Safari and Firefox.
- Buttons continue working without GSAP enhancement.

### Cross-Browser Checklist

- [ ] Chrome and Edge layout verified
- [ ] Firefox spacing and focus rendering verified
- [ ] Safari and iOS Safari blur and fixed positioning verified
- [ ] Form-button normalization remains intact
- [ ] Touch interaction verified on mobile browsers
- [ ] Reduced-motion fallback verified
- [ ] Dark mode visual checks completed
- [ ] Split-button toggle state verified with keyboard and pointer

## 14. HTML Usage

```html
<div class="px-button-group px-button-group--responsive">
  <button class="px-button px-button--primary px-button--gradient px-button--md px-button--animated" type="button">
    <span class="px-button__icon" aria-hidden="true">+</span>
    <span class="px-button__label">Create project</span>
  </button>

  <button class="px-button px-button--secondary px-button--outline px-button--md" type="button">
    View docs
  </button>

  <button class="px-button px-button--neutral px-button--ghost px-button--icon-only px-button--static" type="button" aria-label="Open filters">
    <span class="px-button__icon" aria-hidden="true">=</span>
  </button>
</div>

<div class="px-split-button px-split-button--responsive" data-px-button-split data-state="closed">
  <button class="px-button px-button--dark px-button--elevated" type="button">Publish</button>
  <button
    class="px-button px-button--dark px-button--elevated px-split-button__toggle px-button--icon-only"
    type="button"
    data-px-button-toggle
    aria-label="Open publish options"
    aria-haspopup="menu"
    aria-controls="publish-menu"
    aria-expanded="false"
  >
    <span class="px-button__icon" aria-hidden="true">v</span>
  </button>
  <div id="publish-menu" hidden></div>
</div>

<button class="px-button px-button--success px-button--soft is-loading" type="button" aria-busy="true">
  <span class="px-button__label">Saving</span>
</button>

<button class="px-button px-button--warning px-button--soft px-button--lg" type="button">
  <span class="px-button__label">Review changes</span>
  <span class="px-button__icon px-button__icon--end" aria-hidden="true">-></span>
</button>

<a class="px-link-button px-button px-button--light px-button--glass px-social-button px-button--block" href="#signin-google">
  <span class="px-button__icon" aria-hidden="true">G</span>
  <span class="px-social-button__meta">
    <span class="px-social-button__title">Continue with Google</span>
    <span class="px-social-button__text">Use your workspace account</span>
  </span>
</a>

<button class="px-button px-button--primary px-button--gradient px-button--pill px-fab px-fab--fixed px-button--icon-only" type="button" aria-label="Create">
  <span class="px-button__icon" aria-hidden="true">+</span>
</button>
```

## 15. React Usage

```jsx
export function ButtonExamples() {
  return (
    <div className="px-button-group px-button-group--responsive">
      <button className="px-button px-button--primary px-button--gradient px-button--animated" type="button">
        <span className="px-button__icon" aria-hidden="true">+</span>
        <span className="px-button__label">Create project</span>
      </button>

      <button
        className="px-button px-button--neutral px-button--ghost px-button--icon-only px-button--static"
        type="button"
        aria-label="Open filters"
      >
        <span className="px-button__icon" aria-hidden="true">=</span>
      </button>

      <button className="px-button px-button--success px-button--soft is-loading" type="button" aria-busy="true">
        <span className="px-button__label">Saving</span>
      </button>
    </div>
  );
}
```

## 16. Angular Usage

```html
<div class="px-split-button px-split-button--full" data-px-button-split data-state="closed">
  <button class="px-button px-button--secondary px-button--outline" type="button">
    <span class="px-button__label">Export report</span>
  </button>
  <button
    class="px-button px-button--secondary px-button--outline px-split-button__toggle px-button--icon-only"
    type="button"
    data-px-button-toggle
    aria-label="Open export options"
    aria-haspopup="menu"
    aria-controls="export-menu"
    aria-expanded="false"
  >
    <span class="px-button__icon" aria-hidden="true">v</span>
  </button>
</div>
<div id="export-menu" hidden></div>
```

## 17. Vue Usage

```vue
<template>
  <a class="px-link-button px-button px-button--light px-button--glass px-social-button" href="#signin-github">
    <span class="px-button__icon" aria-hidden="true">GH</span>
    <span class="px-social-button__meta">
      <span class="px-social-button__title">Continue with GitHub</span>
      <span class="px-social-button__text">Use your repository identity</span>
    </span>
  </a>
</template>
```

## 18. SCSS Architecture

- File: `src/scss/components/_buttons.scss`
- Uses shared Pixorix mixins and placeholders
- One root button contract with local CSS variables
- Tone modifiers define semantic intent
- Appearance modifiers swap the local variable contract
- Shape, size, state, and motion controls remain additive
- Group, split, FAB, and social shells compose the same base button contract instead of creating parallel components

## 19. JS Architecture

- Standard, icon, loading, group, FAB, and social buttons require no JS
- Optional split-button enhancement lives in `src/js/components/button.js`
- Root hook: `data-px-button-split`
- Toggle hook: `data-px-button-toggle`
- Optional target hook: `data-px-target`
- State hook: `data-state='open|closed'`
- The helper manages split-button state, `aria-expanded`, menu visibility, escape handling, outside click handling, and emits `px:button:toggle`

## 20. GSAP Enhancement Hooks

- Use `data-px-hover='lift'` for elevated hover treatment
- Use `data-px-motion='button'` for stronger motion-enabled hover translation
- Use `data-px-motion='none'` to force static behavior
- Prefer CSS-first hover polish; GSAP should only intensify premium surfaces
- GSAP is enhancement only and never required for button usability

## 21. Developer Customization Hooks

- Local variables such as `--px-button-bg`, `--px-button-border`, `--px-button-shadow`, and `--px-button-height`
- Additive classes for tone, appearance, size, shape, and behavior
- Public shell classes for `.px-button-group`, `.px-split-button`, `.px-fab`, and `.px-social-button`
- Group-level responsive hook via `.px-button-group--responsive`
- Split-button JS hook via `data-px-button-split`
- Motion control via `.px-button--animated`, `.px-button--static`, or `data-px-motion`

## 22. Lightweight Optimization Notes

- One base selector powers all button styles
- Variants are token swaps, not duplicated component copies
- Split buttons compose existing button classes instead of shipping a second button primitive
- Social, icon-only, grouped, and FAB patterns are shells over the same button contract
- Optional JS only initializes when `data-px-button-split` is present
- No GSAP dependency is required

## 23. Related Components

- Dropdown
- Pagination
- Tabs
- Navigation
