# Pixorix Alert and Notice System

## 1. Title

Alert

Inline notices, banners, form guidance, and page-level messaging for system state, validation feedback, and contextual guidance.

## 2. Purpose

- Provide one framework-level notice API for inline alerts, banners, stacked notices, form notices, and page notices.
- Keep markup practical while supporting icons, actions, dismissal, compact density, and premium surface treatments.
- Separate semantic tone, visual treatment, and shell layout so Pixorix can scale the notice system without duplicate CSS.

## 3. UX Goal

- Surface important information quickly without overwhelming nearby content.
- Preserve readable hierarchy through title, description, icon, action, and dismiss affordances.
- Support both product-ready and docs-ready messaging patterns with calm but clear visual emphasis.
- Keep dismissal and motion enhancement optional and lightweight.

## 4. Preview

Show:

- inline alert
- dismissible alert
- icon alert
- no-icon alert
- compact alert
- banner
- stacked alerts
- inline form notice
- page notice

## 5. Structure

- Inline root: `.px-alert`
- Banner root: `.px-banner`
- Form notice root: `.px-form-notice`
- Page notice root: `.px-page-notice`
- Stack wrapper: `.px-alert-stack`
- Public elements: `__icon`, `__body`, `__title`, `__text`, `__actions`, `__dismiss`

Recommended semantics:

- Use `role="status"` for non-critical passive updates.
- Use `role="alert"` for urgent messages that should be announced immediately.
- Use visible titles for structured notices when message scanning matters.
- Dismiss buttons should be real `<button>` elements with an accessible label.

## 6. Visual Variants

Visual variants:

- `--solid`
- `--soft`
- `--outline`
- `--glass`
- `--elevated`
- `--minimal`

Visual rules:

- `solid` is for strong status messaging and top-priority notices.
- `soft` is the default product-safe treatment for most inline alerts.
- `outline` is for lightweight but clearly bounded informational messaging.
- `glass` is for premium overlays, hero surfaces, or layered product shells.
- `elevated` deepens hierarchy when a notice should sit above nearby content.
- `minimal` is for low-chrome inline notices inside dense forms or docs sections.

## 7. Semantic Variants

- `primary`
- `secondary`
- `success`
- `info`
- `warning`
- `danger`
- `neutral`

Semantic rules:

- `primary` is for branded guidance or first-party product messaging.
- `secondary` is for supporting product context that should remain visible but calm.
- `success` is for confirmations and completed actions.
- `info` is for neutral system guidance and contextual explanation.
- `warning` is for cautionary states that need attention but are recoverable.
- `danger` is for high-risk, blocking, or destructive issues.
- `neutral` is for low-semantic reminders or layout-level notices.

## 8. Sizes

- default
- `--compact`

Size rules:

- Default is best for most alerts, banners, and page notices.
- `compact` is best for dense tables, settings panels, and form-adjacent feedback.

## 9. States

- open
- closing
- closed
- closable
- static
- animated

State rules:

- Dismissal should never remove a notice before the user can understand it.
- `data-state='closing'` is for JS-managed exit transitions.
- `data-state='closed'` is the hidden terminal state.
- Static notices should remain fully usable without motion.

## 10. Responsive Behavior

- Inline alerts remain vertical and readable at all sizes.
- Banners and page notices collapse action layout on smaller screens.
- Alert stacks preserve consistent spacing without manual margins.
- Form notices stay compact and line-length controlled in narrow layouts.

## 11. Dark Mode Behavior

- Notices inherit semantic theme variables first.
- Glass notices receive local dark-mode compensation for border clarity and backdrop balance.
- Minimal notices maintain readable text contrast even without surface fill.
- Dark mode does not require alternate markup.

## 12. Accessibility Requirements

- Use `role="alert"` only when the content is truly urgent.
- Use `role="status"` for passive confirmation or informational updates.
- Keep dismiss buttons keyboard reachable and clearly labeled.
- Do not rely on icon or color alone to communicate severity.
- Closable notices should not trap focus or unexpectedly move focus.

### Accessibility Checklist

- [ ] Uses correct semantic role for the message urgency
- [ ] Dismiss control is keyboard reachable and clearly labeled
- [ ] Message meaning is perceivable without color alone
- [ ] Icon usage is decorative unless explicitly labeled
- [ ] Title and supporting text maintain clear reading order
- [ ] Motion honors `prefers-reduced-motion`
- [ ] Dismissal does not remove critical content before announcement or comprehension
- [ ] Action buttons remain semantically correct and clearly named
- [ ] Form notices stay associated with nearby field context when relevant
- [ ] Screen-reader behavior is correct for dynamic insertion and dismissal

## 13. Cross-Browser Considerations

- Glass notices degrade safely when `backdrop-filter` support differs across browsers.
- Exit transitions must not be required for functional dismissal.
- Safari and iOS Safari need verification for blur, border rendering, and stacked spacing.
- Long content and action wrapping need verification in Firefox.

### Cross-Browser Checklist

- [ ] Chrome and Edge layout verified
- [ ] Firefox spacing and wrapping verified
- [ ] Safari and iOS Safari blur and border rendering verified
- [ ] Dismiss behavior verified without animation dependency
- [ ] Touch interaction verified on mobile browsers
- [ ] Reduced-motion fallback verified
- [ ] Dark mode visual checks completed
- [ ] Action and dismiss alignment verified in compact layouts

## 14. HTML Usage

```html
<div class="px-alert px-alert--success px-alert--soft" role="status">
  <div class="px-alert__icon" aria-hidden="true">✓</div>
  <div class="px-alert__body">
    <p class="px-alert__title">Deployment ready</p>
    <p class="px-alert__text">Your latest build passed verification and is ready to publish.</p>
    <div class="px-alert__actions">
      <button class="px-button px-button--success px-button--soft px-button--sm" type="button">Review build</button>
    </div>
  </div>
</div>

<div class="px-alert px-alert--warning px-alert--outline px-alert--compact px-alert--no-icon" role="alert">
  <div class="px-alert__body">
    <p class="px-alert__title">Billing review required</p>
    <p class="px-alert__text">Update the workspace payment method before the next renewal.</p>
  </div>
</div>

<div class="px-banner px-banner--primary px-banner--glass px-banner--elevated px-banner--animated" data-px-alert data-px-component="alert" role="status">
  <div class="px-banner__icon" aria-hidden="true">i</div>
  <div class="px-banner__body">
    <p class="px-banner__title">New component standards available</p>
    <p class="px-banner__text">Pixorix now documents variant, size, motion, and framework usage contracts together.</p>
  </div>
  <div class="px-banner__actions">
    <a class="px-link-button px-button px-button--light px-button--soft px-button--sm" href="#read-more">Read guide</a>
    <button class="px-banner__dismiss" type="button" data-px-alert-close aria-label="Dismiss notice">×</button>
  </div>
</div>

<div class="px-alert-stack">
  <div class="px-form-notice px-form-notice--danger px-form-notice--minimal" role="alert">
    <div class="px-form-notice__icon" aria-hidden="true">!</div>
    <div class="px-form-notice__body">
      <p class="px-form-notice__title">Email address required</p>
      <p class="px-form-notice__text">Provide a valid address before continuing.</p>
    </div>
  </div>

  <section class="px-page-notice px-page-notice--neutral px-page-notice--soft" role="status">
    <div class="px-page-notice__icon" aria-hidden="true">•</div>
    <div class="px-page-notice__body">
      <p class="px-page-notice__title">Migration in progress</p>
      <p class="px-page-notice__text">Some workspaces may briefly show older component metadata during indexing.</p>
    </div>
    <div class="px-page-notice__actions">
      <button class="px-button px-button--neutral px-button--outline px-button--sm" type="button">View status</button>
    </div>
  </section>
</div>
```

## 15. React Usage

```jsx
export function AlertExamples() {
  return (
    <div className="px-alert-stack">
      <div className="px-alert px-alert--info px-alert--soft" role="status">
        <div className="px-alert__icon" aria-hidden="true">i</div>
        <div className="px-alert__body">
          <p className="px-alert__title">Documentation synced</p>
          <p className="px-alert__text">Examples and implementation notes now match the framework contract.</p>
        </div>
      </div>

      <div
        className="px-banner px-banner--warning px-banner--outline px-banner--animated"
        data-px-alert
        data-px-component="alert"
        role="alert"
      >
        <div className="px-banner__icon" aria-hidden="true">!</div>
        <div className="px-banner__body">
          <p className="px-banner__title">Action required</p>
          <p className="px-banner__text">Review the pending security settings before launch.</p>
        </div>
        <div className="px-banner__actions">
          <button className="px-banner__dismiss" type="button" data-px-alert-close aria-label="Dismiss alert">
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
```

## 16. Angular Usage

```html
<div class="px-form-notice px-form-notice--danger px-form-notice--minimal" role="alert">
  <div class="px-form-notice__icon" aria-hidden="true">!</div>
  <div class="px-form-notice__body">
    <p class="px-form-notice__title">Password is too short</p>
    <p class="px-form-notice__text">Use at least 12 characters for a stronger credential.</p>
  </div>
</div>
```

## 17. Vue Usage

```vue
<template>
  <section class="px-page-notice px-page-notice--primary px-page-notice--glass px-page-notice--elevated" role="status">
    <div class="px-page-notice__icon" aria-hidden="true">i</div>
    <div class="px-page-notice__body">
      <p class="px-page-notice__title">Workspace update available</p>
      <p class="px-page-notice__text">Refresh to load the latest dashboard modules and token overrides.</p>
    </div>
    <div class="px-page-notice__actions">
      <button class="px-button px-button--light px-button--soft px-button--sm" type="button">Refresh</button>
    </div>
  </section>
</template>
```

## 18. SCSS Architecture

- File: `src/scss/components/_alerts.scss`
- Uses shared Pixorix mixins and placeholders
- One token-driven base powers `.px-alert`, `.px-banner`, `.px-form-notice`, and `.px-page-notice`
- Semantic variants swap notice-local variables
- Visual variants stay additive
- Stack, compact, no-icon, closable, and motion behavior stay in the same partial

## 19. JS Architecture

- File: `src/js/components/alert.js`
- JS is optional and only needed for dismissible notices
- Root hook: `data-px-alert` or `data-px-component="alert"`
- Close hook: `data-px-alert-close`
- State hook: `data-state='open|closing|closed'`
- Emits `px:alert:before-close` and `px:alert:close`
- Honors reduced motion and closes instantly when animation is disabled

## 20. GSAP Enhancement Hooks

- Use `data-px-motion='alert'` to opt into animated entry and exit styling
- Use `data-px-motion='none'` for static notices
- Keep GSAP as enhancement only for premium page-notice or banner choreography
- Core dismissal and visibility must never depend on GSAP

## 21. Developer Customization Hooks

- Local variables such as `--px-alert-bg`, `--px-alert-border`, `--px-alert-accent`, and `--px-alert-shadow`
- Additive semantic and visual modifier classes
- Shell classes for `.px-alert`, `.px-banner`, `.px-form-notice`, `.px-page-notice`, and `.px-alert-stack`
- Optional dismiss behavior via `data-px-alert`
- Motion control via `data-px-motion`, `--animated`, and `--static`

## 22. Lightweight Optimization Notes

- One base selector powers the full notice system
- Semantic and visual variants are variable swaps, not duplicated component branches
- Dismiss JS initializes only when `data-px-alert` is present
- Form notices and page notices reuse the same anatomy instead of shipping separate one-off components
- No GSAP dependency is required for baseline UX

## 23. Related Components

- Validation
- Toast
- Banner
- Buttons
