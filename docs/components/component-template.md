# Pixorix Component Doc Template

Use this file as the required structure for every public Pixorix component doc.

Component docs must stay HTML-first, framework-agnostic, and demo-ready.

## 1. Title

`Component name`

One-line purpose statement.

## 2. Purpose

- What the component is for
- Where it belongs in product UI
- What it should not be used for

## 3. UX Goal

- What user outcome the component supports
- How it should feel in use
- Why this component exists instead of a simpler primitive

## 4. Preview

Show:

- default example
- realistic product example
- variant gallery if needed

## 5. Structure

Document:

- root class
- public child elements
- required wrappers
- optional child elements
- semantic HTML recommendation

## 6. Visual Variants

Document supported variant axes:

- tone variants
- appearance variants
- structural variants if any
- shape variants if any
- when each supported variant should be used

## 7. Semantic Variants

- success if relevant
- warning if relevant
- danger if relevant
- info if relevant

If not relevant, explicitly say so.

## 8. Sizes

- `xs` if supported
- `sm` if supported
- default
- `lg` if supported
- `xl` if supported
- density notes if relevant

## 9. States

- default
- hover
- focus-visible
- active
- selected if relevant
- expanded or open if relevant
- disabled
- loading if relevant
- empty if relevant
- error, success, warning if relevant

## 10. Responsive Behavior

- mobile behavior
- tablet behavior
- desktop behavior
- overflow behavior if relevant
- layout adaptation notes

## 11. Dark Mode Behavior

- token inheritance
- component-specific compensation if any
- contrast notes

## 12. Accessibility Requirements

- required semantic structure
- ARIA requirements
- keyboard rules
- screen-reader notes
- hit area notes if relevant

### Accessibility Checklist

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

## 13. Cross-Browser Considerations

- browser-sensitive CSS
- browser-sensitive JS
- fallback notes

### Cross-Browser Checklist

- [ ] Chrome and Edge layout verified
- [ ] Firefox spacing and focus rendering verified
- [ ] Safari and iOS Safari overflow, sticky, and transform behavior verified
- [ ] Form-control appearance tested where native UI is involved
- [ ] Touch interaction verified on mobile browsers
- [ ] Reduced-motion fallback verified without GSAP enhancement
- [ ] No component behavior depends on unsupported selectors or APIs without fallback
- [ ] Visual regressions checked with dark mode enabled

## 14. HTML Usage

```html
<!-- minimal recommended example -->
```

Rules:

- use semantic elements first
- keep markup shallow
- preserve the documented Pixorix class and data hook contract

## 15. React Usage

```jsx
// className and data-px-* hooks should mirror the HTML API
```

Rules:

- preserve the same anatomy and hooks as the HTML example
- pass through `className`, `style`, `data-*`, and ARIA attributes

## 16. Angular Usage

```html
<!-- Angular template example using the same class and data hook contract -->
```

Rules:

- preserve the same anatomy and hooks as the HTML example
- map `@Input()` values to the same class and attribute contract

## 17. Vue Usage

```vue
<!-- Vue template example using the same class and data hook contract -->
```

Rules:

- preserve the same anatomy and hooks as the HTML example
- map props and slots to the same DOM contract

## 18. SCSS Architecture

Document:

- imported abstracts
- local CSS variables
- variant axes
- sizes
- states
- responsive overrides
- dark theme compensation if any

## 19. JS Architecture

- JS required or optional
- data attribute API
- lifecycle hooks
- emitted events
- destroy and re-init notes

## 20. GSAP Enhancement Hooks

- supported presets
- target hooks
- reduced-motion fallback

If not relevant, explicitly say the component ships without GSAP enhancement.

## 21. Developer Customization Hooks

- local CSS variables
- modifier classes
- data attributes
- utility pairing guidance

## 22. Lightweight Optimization Notes

- import guidance
- variant cost notes
- JS payload notes
- bloat avoidance notes

## 23. Related Components

- related component 1
- related component 2
