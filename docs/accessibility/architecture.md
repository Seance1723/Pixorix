# Pixorix Accessibility Architecture

Pixorix treats accessibility as a framework contract. Every base layer, utility, component, advanced component, and JS behavior module must preserve keyboard access, readable semantics, visible focus, robust naming, and reduced-motion safety without requiring developers to bolt those concerns on later.

## 1. Accessibility Rules By Category

### Focus-visible
- All interactive controls must expose a visible `:focus-visible` state.
- Pixorix focus styling must use a consistent token-driven ring, not ad hoc outlines per component.
- Focus rings must remain visible against light, dark, and high-contrast themes.
- Hover-only affordances are never sufficient.
- Components must not remove outlines unless they replace them with an equal or stronger visible treatment.

Framework rules:
- Global `:focus-visible` is defined in [src/scss/base/_accessibility.scss](/C:/Users/Rupak%20Biswas/.docker/cagent/working_directories/docker-gordon-v3/73a7504a-521c-46f9-9d24-edc86c81322c/default/apps/Pixorix/src/scss/base/_accessibility.scss).
- Shared focus treatment should use `@include px-focus-ring`.
- Interactive roots should also support `:focus-within` when the click target contains nested controls.

### Keyboard navigation
- Every interactive component must be fully operable by keyboard.
- Tab order must follow DOM order and visible reading order.
- Roving tabindex is allowed only for composite widgets like tabs, menus, and segmented controls.
- Escape must close dismissible overlays and return focus to the trigger.
- Keyboard interactions must not depend on pointer hover state.

Required keyboard contracts:
- Buttons, links, inputs: native keyboard behavior only.
- Tabs: Left/Right or Up/Down move focus, Home/End jump, Enter or Space activate when manual activation is used.
- Dropdowns and menus: Enter or Space opens, Up/Down navigates items, Escape closes.
- Accordions: Enter or Space toggles.
- Modals and drawers: Escape closes; Tab and Shift+Tab remain trapped inside while open.

### Skip links
- Pixorix should provide a visible-on-focus skip link pattern for `Skip to content`.
- Skip links must be the first focusable element in the page shell.
- Target containers should support `tabindex="-1"` when needed so focus can land safely on non-interactive main regions.

Recommended markup:
```html
<a class="px-skip-link" href="#main-content">Skip to content</a>
<main id="main-content" tabindex="-1">...</main>
```

### Screen-reader helpers and visually hidden helpers
- Pixorix must include a stable screen-reader-only helper and a reusable visually hidden placeholder/mixin.
- Hidden assistive text should remain available to accessibility APIs and keyboard users.
- Decorative icons must be `aria-hidden="true"` when nearby text already conveys meaning.
- Text must not be hidden with `display: none` when it is required as an accessible name.

### Accessible buttons and icon buttons
- Actions must use `<button>`, navigation must use `<a>`.
- Icon-only buttons must always include an accessible name via `aria-label` or visually hidden text.
- Disabled buttons should use the native `disabled` attribute when possible.
- `aria-disabled` is only for non-button interactive patterns that cannot be truly disabled.

### Modal accessibility
- Modals must use dialog semantics with a proper name.
- Focus must move inside on open and return to the invoker on close.
- Background content should be visually and functionally obscured while the modal is open.
- Escape must close unless the flow is intentionally blocking and the docs explicitly state that behavior.
- Critical dialogs should also support initial focus placement on the least destructive safe action when appropriate.

Required structure:
```html
<div class="px-modal" data-state="closed" aria-hidden="true">
  <div
    class="px-modal__dialog"
    role="dialog"
    aria-modal="true"
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
  >
    ...
  </div>
</div>
```

### Drawer accessibility
- Drawers that block the page act like dialogs and follow the same focus-trap rules.
- Non-modal side panels should not trap focus unless they visually and behaviorally function as an overlay.
- Focus should return to the launcher when the drawer closes.

### Dropdown accessibility
- Dropdown triggers must be real buttons.
- Triggers must communicate `aria-expanded` and optionally `aria-controls`.
- Menus should use list semantics or menu semantics depending on intent.
- Use menu roles only for application-style command menus, not for ordinary navigation lists.

### Tabs accessibility
- Tabs must follow the WAI-ARIA tabs pattern when they are JS-driven.
- Tabs require `role="tablist"`, each tab uses `role="tab"`, and each panel uses `role="tabpanel"`.
- Selected tab must be announced via `aria-selected="true"`.
- Panels hidden from view should use `[hidden]` or equivalent.

### Accordion accessibility
- Accordion headers must contain buttons.
- Buttons must use `aria-expanded` and `aria-controls`.
- Panels should reference their controlling header if needed for additional context.
- CSS-only accordion patterns are not acceptable when they break keyboard or screen-reader behavior.

### Form accessibility
- Every input must have a programmatic label.
- Placeholder text is not a label.
- Required state, error state, help text, and constraints must be exposed in text, not only color or iconography.
- Grouped inputs such as radio groups and checkbox groups should use `<fieldset>` and `<legend>` where applicable.
- Touch targets should remain comfortably large on mobile.

### Validation accessibility
- Error and validation messages must be connected with `aria-describedby`.
- Invalid controls should use `aria-invalid="true"` when the state is active.
- Async or live validation should use `aria-live="polite"` unless urgency truly requires assertive announcement.
- Success messaging should not interrupt screen-reader users unnecessarily.

### Color contrast strategy
- Text, icons, focus rings, borders, states, and charts must meet contrast requirements relative to their surfaces.
- Status meaning must not rely on color alone.
- Soft variants must be audited in both light and dark themes.
- High-contrast mode must strengthen borders, focus outlines, and remove low-contrast shadow-only separation.

### Disabled and read-only behavior
- Disabled means non-interactive and removed from the tab sequence where native semantics support it.
- Read-only means perceivable and focusable when appropriate, but not editable.
- Disabled styling must not reduce contrast below usable levels.
- Read-only inputs should still expose their value clearly.

### Reduced-motion support
- Reduced-motion is a framework-level requirement, not an optional enhancement.
- Motion must never be required to understand disclosure, state change, or progress.
- All Pixorix motion modules must respect `prefers-reduced-motion`.
- Reduced-motion fallbacks should render the final usable state immediately.

### ARIA guidance
- ARIA is additive, not a substitute for semantic HTML.
- Use native elements first.
- Only add ARIA attributes that reflect real component state.
- Do not assign widget roles to elements unless the keyboard behavior and state management match the role contract.

### Semantic HTML guidance
- Use semantic elements before generic div wrappers.
- Prefer `<main>`, `<nav>`, `<header>`, `<section>`, `<form>`, `<table>`, `<button>`, `<dialog>`-like structures, `<fieldset>`, and `<legend>` where appropriate.
- Card, grid, and dashboard wrappers should not erase the underlying semantics of headings, lists, tables, and controls.

## 2. Accessibility Checklist For Every Component

Every Pixorix component page and implementation review must answer these questions:

1. Does it use the most semantic native HTML available?
2. Does it have a visible `:focus-visible` state?
3. Can it be used fully by keyboard?
4. Does it expose the correct accessible name?
5. Does it expose the correct state through native semantics or ARIA?
6. Does it work in light, dark, and high-contrast modes?
7. Does it preserve sufficient color contrast?
8. Does it behave correctly with reduced motion?
9. Does it keep disabled and read-only behavior semantically accurate?
10. Does it avoid hover-only interaction or hover-only disclosure?
11. Does it preserve reading order and tab order on mobile and desktop?
12. Does it avoid trapping focus unless it is an intentional modal interaction?
13. Does it expose helper and validation text programmatically where needed?
14. Does it degrade safely without JavaScript if JS is not the primary requirement?

Component-specific additions:

### Buttons and icon buttons
- Uses `<button>` unless the action changes location.
- Icon-only variant has `aria-label` or equivalent text.
- Loading state keeps accessible name stable.

### Links
- Link text is meaningful out of context.
- Disabled-looking links are not used unless there is a documented inactive pattern with proper semantics.

### Modals and drawers
- `role="dialog"` and `aria-modal="true"` are present for modal overlays.
- Focus trap is active only while open.
- Initial focus target is intentional.
- Focus returns to the invoker on close.

### Dropdowns, menus, popovers
- Trigger reflects open state with `aria-expanded`.
- Escape closes.
- Focus order is predictable.
- Outside click close does not break keyboard support.

### Tabs
- Tablist, tab, and tabpanel roles are correct.
- Only the active panel is exposed as active content.

### Accordion and collapse
- Toggle is a button.
- Expanded state is announced.
- The panel remains readable when motion is disabled.

### Forms
- Every control has a label.
- Required and invalid state is both visible and announced.
- Instructions and errors are connected with `aria-describedby`.
- Group relationships use `fieldset` or equivalent semantic grouping when relevant.

### Tables and data displays
- Real tabular data uses `<table>`.
- Headers use `<th>` and `scope`.
- Sort state uses `aria-sort`.
- Responsive transformations do not destroy header relationships without a replacement strategy.

## 3. SCSS Helper Strategy

Pixorix SCSS accessibility helpers should stay small, reusable, and semantic:

### Existing global helpers
- Global focus ring in [src/scss/base/_accessibility.scss](/C:/Users/Rupak%20Biswas/.docker/cagent/working_directories/docker-gordon-v3/73a7504a-521c-46f9-9d24-edc86c81322c/default/apps/Pixorix/src/scss/base/_accessibility.scss)
- Reduced-motion global override in the same file
- `px-focus-ring` mixin in `abstracts/_mixins.scss`
- `px-visually-hidden` mixin and `%px-visually-hidden` placeholder
- `%px-focusable` placeholder in `abstracts/_placeholders.scss`

### Required helper patterns
- `.px-skip-link`
- `.px-sr-only` or `.px-visually-hidden`
- optional `.px-focus-ring` utility only if used for debug or custom host integration
- component-local `:focus-within` handling for wrappers like fields, cards, drawers, and composed controls

### SCSS rules
- Accessibility helpers should never depend on a specific component.
- Screen-reader and focus helpers belong in base/utilities, not inside one-off component files.
- Contrast-sensitive values should come from semantic theme tokens.
- Reduced-motion CSS must remain global and predictable.

Recommended skip-link helper shape:
```scss
.px-skip-link {
  position: absolute;
  inset-block-start: var(--px-space-3);
  inset-inline-start: var(--px-space-3);
  z-index: var(--px-z-toast);
  padding: var(--px-space-3) var(--px-space-4);
  border-radius: var(--px-radius-lg);
  background: var(--px-color-surface-inverse);
  color: var(--px-color-text-inverse);
  transform: translateY(-120%);
}

.px-skip-link:focus-visible {
  transform: translateY(0);
}
```

## 4. JS Helper Strategy

Pixorix JS accessibility helpers must centralize behavior contracts rather than duplicating logic in each component.

### Existing foundation
- Focus trap helper in [src/js/core/focus-trap.js](/C:/Users/Rupak%20Biswas/.docker/cagent/working_directories/docker-gordon-v3/73a7504a-521c-46f9-9d24-edc86c81322c/default/apps/Pixorix/src/js/core/focus-trap.js)
- Theme and motion infrastructure already respect reduced-motion and runtime state

### Required helper responsibilities
- Focus trap and focus restoration
- Escape-key close behavior
- Outside click handling for overlays and menus
- Roving tabindex for tabs, segmented controls, and command menus
- `aria-expanded`, `aria-selected`, `aria-hidden`, and `[hidden]` synchronization
- Live region helpers only when Pixorix introduces notification or async validation announcers

### JS rules
- JS helpers must update ARIA state whenever visual state changes.
- Helpers must prefer setting native properties like `hidden`, `disabled`, and `checked` before adding extra ARIA.
- Helpers must not trap focus for non-modal content.
- Helpers must be safe to initialize multiple times or on partial DOM updates.
- Reduced-motion logic must render the same state without timing-dependent behavior.

### Expected helper modules
- `focus-trap.js`
- future `roving-focus.js`
- future `dismissible.js`
- future `live-region.js`
- future `aria-sync.js` for common disclosure patterns if repetition grows

## 5. Testing Checklist

Every Pixorix component and example should be tested with this minimum checklist:

### Keyboard tests
- Tab through the entire component.
- Shift+Tab back through it.
- Verify focus visibility at each stop.
- Verify Enter and Space behavior for buttons and disclosures.
- Verify Escape for overlays.
- Verify arrow key behavior for composite widgets.

### Screen reader and naming tests
- Confirm every control has a meaningful accessible name.
- Confirm status and validation text is announced when relevant.
- Confirm headings and landmarks create a useful navigation outline.

### Visual and contrast tests
- Check light theme.
- Check dark theme.
- Check high-contrast mode.
- Check zoom at 200%.
- Check mobile viewport and desktop viewport.

### Motion and state tests
- Check reduced-motion mode.
- Check disabled and read-only states.
- Check loading and async states.
- Check JS-enhanced and baseline states when the component supports progressive enhancement.

### Content and semantics tests
- Confirm tables remain tables.
- Confirm lists remain lists.
- Confirm forms preserve labels and grouping.
- Confirm interactive cards do not hide the real actionable element.

### Recommended tooling
- Keyboard-only manual pass
- Browser accessibility tree inspection
- Lighthouse accessibility pass
- Axe or equivalent automated rule pass
- Real screen reader spot checks for critical components

## 6. Documentation Guidance

Every Pixorix component doc page must include an explicit accessibility section. That section should not be optional or buried.

Each component page should document:
- Required semantic structure
- Required ARIA attributes, if any
- Keyboard interaction table
- Focus behavior
- Screen-reader notes
- Reduced-motion behavior
- Dark/high-contrast notes when contrast-sensitive
- Common misuse examples

### Required documentation pattern
1. Purpose
2. Recommended markup
3. Variants and sizes
4. States
5. Responsive behavior
6. Accessibility
7. Motion behavior
8. Theming hooks
9. Browser notes

### Documentation rules
- If a component needs ARIA, show the exact attribute pattern.
- If a component needs JS for accessibility, say so directly.
- If a component should not use ARIA roles, say that directly too.
- Include “do” and “avoid” guidance for icon-only actions, hover-only patterns, validation, and composed widgets.

## Implementation Standard

Pixorix should consider a component incomplete until:
- semantic structure is defined
- keyboard behavior is implemented
- focus behavior is visible
- theme contrast is acceptable
- reduced-motion is safe
- docs include a concrete accessibility section

Accessibility in Pixorix is not a styling add-on. It is part of the framework API.
