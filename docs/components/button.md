# Pixorix Button System

## 1. Title

Button

Premium action controls for primary workflows, secondary actions, dense toolbars, and floating entry points.

## 2. Purpose

- Provide a single framework-level button API for product UI, dashboards, docs, marketing surfaces, and admin flows.
- Keep markup lean while supporting standard, icon-only, split, grouped, floating, loading, and social-shell patterns.
- Separate tone, appearance, size, and shape so Pixorix can support many variants without duplicating CSS.

## 3. UX Goal

- Make action priority obvious at a glance.
- Keep hit areas comfortable on touch and dense but usable in dashboard contexts.
- Preserve strong hover, focus-visible, active, and loading feedback without visual noise.

## 4. Preview

Show:

- standard primary button
- secondary outline button
- ghost icon button
- split button
- floating action button
- social shell

## 5. Structure

- Root class: `.px-button`
- Optional alias root: `.px-icon-button`
- Public elements: `.px-button__icon`, `.px-button__icon--end`, `.px-button__label`
- Group shell: `.px-button-group`
- Split shell: `.px-split-button`
- Floating shell: `.px-fab`
- Social shell: `.px-social-button`

Recommended semantics:

- Use `<button>` for in-page actions
- Use `<a>` with `.px-link-button` only for navigation destinations
- Use split-button secondary trigger as a real button with `aria-expanded`

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

Variant composition rule:

- Combine one tone and one appearance when you need a specific treatment, for example `.px-button--success.px-button--soft`
- Shape modifiers such as `--pill` and `--square` are additive

## 7. Semantic Variants

- `success` for positive confirmation or completion
- `warning` for cautionary but recoverable actions
- `danger` for destructive or high-risk actions
- `secondary` and `neutral` for lower-emphasis actions

## 8. Sizes

- `--xs`
- `--sm`
- `--md`
- `--lg`
- `--xl`
- `--compact` for denser toolbars

## 9. States

- default
- hover
- focus-visible
- active
- disabled
- loading via `.is-loading`, `[aria-busy='true']`, or `[data-state='loading']`

## 10. Responsive Behavior

- Buttons remain single-line and touch-friendly by default
- Use `.px-button--block` or `.px-button--full` for narrow layouts
- Use `.px-button-group--responsive` or `data-px-stack='mobile'` to stack button groups on small screens
- Use `.px-split-button--responsive` to let split buttons expand full width on mobile

## 11. Dark Mode Behavior

- Buttons inherit theme variables first
- Light and glass appearances include local dark-mode compensation
- Dark mode does not require alternate markup

## 12. Accessibility Requirements

- Use real button semantics for actions
- Icon-only buttons require an accessible name via `aria-label`
- Loading buttons should use `aria-busy='true'` when the action is in progress
- Split-button toggles need `aria-expanded` and `aria-controls`
- Do not rely on color alone for destructive or positive meaning

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

- `backdrop-filter` in glass buttons degrades gracefully to a translucent surface
- Hover effects must not be required for meaning on touch devices
- Safari and iOS Safari need verification for backdrop blur, fixed-position FAB placement, and focus ring rendering
- Buttons avoid unsupported CSS dependencies and continue working without GSAP

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
<div class="px-button-group">
  <button class="px-button px-button--primary px-button--solid" type="button">
    <span class="px-button__icon" aria-hidden="true">+</span>
    <span class="px-button__label">Create project</span>
  </button>

  <button class="px-button px-button--secondary px-button--outline" type="button">
    View docs
  </button>

  <button class="px-button px-button--neutral px-button--ghost px-button--icon-only" type="button" aria-label="Open filters">
    <span class="px-button__icon" aria-hidden="true">≡</span>
  </button>
</div>

<div class="px-split-button px-split-button--responsive" data-px-button-split data-state="closed">
  <button class="px-button px-button--primary px-button--elevated" type="button">Publish</button>
  <button
    class="px-button px-button--primary px-button--elevated px-split-button__toggle px-button--icon-only"
    type="button"
    data-px-button-toggle
    aria-label="Open publish options"
    aria-controls="publish-menu"
    aria-expanded="false"
  >
    <span class="px-button__icon" aria-hidden="true">▾</span>
  </button>
</div>

<button class="px-button px-button--success px-button--soft is-loading" type="button" aria-busy="true">
  <span class="px-button__label">Saving</span>
</button>

<button class="px-button px-button--primary px-button--gradient px-button--pill px-fab px-fab--fixed px-button--icon-only" type="button" aria-label="Create">
  <span class="px-button__icon" aria-hidden="true">+</span>
</button>
```

## 15. React Usage

```jsx
export function ButtonExamples() {
  return (
    <>
      <button className="px-button px-button--primary px-button--solid" type="button">
        <span className="px-button__icon" aria-hidden="true">+</span>
        <span className="px-button__label">Create project</span>
      </button>

      <button
        className="px-button px-button--neutral px-button--ghost px-button--icon-only"
        type="button"
        aria-label="Open filters"
      >
        <span className="px-button__icon" aria-hidden="true">≡</span>
      </button>
    </>
  );
}
```

## 16. Angular Usage

```html
<button class="px-button px-button--warning px-button--soft" type="button">
  <span class="px-button__icon" aria-hidden="true">!</span>
  <span class="px-button__label">Review changes</span>
</button>
```

## 17. Vue Usage

```vue
<template>
  <button class="px-button px-button--secondary px-button--outline px-button--lg" type="button">
    <span class="px-button__label">Open workspace</span>
    <span class="px-button__icon px-button__icon--end" aria-hidden="true">→</span>
  </button>
</template>
```

## 18. SCSS Architecture

- File: `src/scss/components/_buttons.scss`
- Uses shared Pixorix functions, mixins, and placeholders
- One root button contract with local CSS variables
- Tone modifiers define semantic intent
- Appearance modifiers swap the local variable contract
- Size, shape, loading, grouping, split, FAB, and social shells stay in the same partial

## 19. JS Architecture

- Standard, icon, loading, group, FAB, and social buttons require no JS
- Optional split-button enhancement lives in `src/js/components/button.js`
- Root hook: `data-px-button-split`
- Toggle hook: `data-px-button-toggle`
- State hook: `data-state='open|closed'`
- The helper only manages split-button open and close state and optional controlled menu visibility

## 20. GSAP Enhancement Hooks

- Use `data-px-hover='lift'` for elevated hover treatment
- Use `data-px-motion='button'` for stronger motion-enabled hover translation
- Use `data-px-motion='none'` to force static behavior
- GSAP is enhancement only and never required for button usability

## 21. Developer Customization Hooks

- Local variables such as `--px-button-bg`, `--px-button-border`, `--px-button-shadow`, and `--px-button-height`
- Additive classes for tone, appearance, size, shape, and behavior
- Group-level responsive hook via `.px-button-group--responsive`
- Split-button JS hook via `data-px-button-split`

## 22. Lightweight Optimization Notes

- One base selector powers all button styles
- Variants are token swaps, not duplicated component copies
- Split buttons compose existing button classes instead of shipping a second button primitive
- Optional JS only initializes when `data-px-button-split` is present
- No GSAP dependency is required

## 23. Related Components

- Dropdown
- Button group
- Pagination
- Tabs
