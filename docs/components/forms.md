# Pixorix Forms System

## 1. Title

Forms

Framework-level field, control, validation, and advanced input shells for product UI, settings pages, dashboards, onboarding, and dense admin workflows.

## 2. Purpose

- Provide one shared field contract for text inputs, selects, textareas, choices, uploads, grouped validation, and advanced shells.
- Keep form markup practical while still supporting premium surface treatment, responsive layout, and accessible status messaging.
- Reuse Pixorix tokens, labels, helper text, validation text, and shell wrappers instead of creating separate one-off control styles.

## 3. UX Goal

- Make form scanning, entry, and correction predictable.
- Keep label, helper, and validation placement stable across all controls.
- Support simple forms and advanced structured entry without bloating the CSS or JS layers.

## 4. Visual Variants

- default
- filled
- outline
- soft
- glass
- with icon
- without icon
- prefix
- suffix

Variant rules:

- Default is the general product baseline.
- Filled is for denser dashboards and settings forms.
- Outline is for lighter visual weight and neutral surfaces.
- Soft is for secondary or embedded surfaces.
- Glass is for premium overlays and elevated shells, not heavy data-entry pages.
- Icon, prefix, and suffix treatments should use shell slots rather than custom input padding hacks.

## 5. Semantic Variants

- success
- warning
- error
- valid
- invalid
- disabled
- read-only

Semantic state lives on `.px-field` or the control wrapper, then flows through shared variables.

## 6. Sizes

- `sm`
- `md`
- `lg`

Size classes are applied at the field level: `.px-field--sm`, `.px-field--md`, `.px-field--lg`.

## 7. States

- default
- hover
- focus-visible
- disabled
- read-only
- valid
- invalid
- success
- error
- warning

## 8. Included Controls

- form wrapper
- field wrapper
- label
- helper text
- validation text
- text input
- email input
- password input
- number input
- search input
- textarea
- select
- checkbox
- radio
- switch
- range slider
- file upload
- drag and drop upload
- input group
- floating label
- OTP shell
- date field wrapper
- multi-select shell
- autocomplete shell
- segmented input shell
- token/tag input shell

## 9. Responsive Behavior

- Use `.px-form--stacked` for vertical flow and `.px-form--inline` for compact action rows.
- Use `.px-form-grid--2`, `.px-form-grid--3`, or `.px-form-grid--responsive` for layout.
- Inline field layouts collapse to a single column below the large breakpoint.
- Inline forms and action rows stack on smaller screens.

## 10. Dark Mode Behavior

- Controls inherit theme tokens automatically.
- Glass fields rely on variable-driven surface and border tuning instead of alternate markup.
- Validation, helper, and choice states continue to use semantic tokens in both themes.

## 11. Accessibility Requirements

- Keep visible labels for all controls.
- Associate helper and validation text with `aria-describedby` where needed.
- Do not use placeholder text as the only label.
- Use `aria-invalid="true"` for invalid states.
- OTP and segmented inputs should announce a clear overall label.
- File uploads should preserve native input behavior even when enhanced with drag-and-drop.

### Accessibility Checklist

- [ ] Every input has a visible label
- [ ] Helper and validation text are programmatically associated
- [ ] Invalid fields expose `aria-invalid`
- [ ] Required fields use semantic required indicators
- [ ] Checkboxes, radios, and switches keep full clickable labels
- [ ] Range inputs expose a readable label and value context
- [ ] File upload can be used without drag-and-drop
- [ ] Autocomplete and multiselect shells keep keyboard reachable options
- [ ] OTP and segmented inputs have an overall label and predictable tab order
- [ ] Focus-visible treatment stays obvious across all field variants

## 12. Cross-Browser Considerations

- Preserve native behavior for selects, file inputs, range inputs, date inputs, and autofill.
- Safari and iOS Safari need special verification for date inputs, blur surfaces, and file upload interaction.
- Firefox needs explicit review for range thumb styling and overflow behavior in token shells.
- Do not over-normalize controls if it harms reliability.

### Cross-Browser Checklist

- [ ] Chromium form controls verified
- [ ] Firefox range, select, and overflow behavior verified
- [ ] Safari and iOS Safari date, select, blur, and file upload behavior verified
- [ ] Disabled and read-only visuals verified
- [ ] Keyboard focus order verified
- [ ] Validation states verified without relying only on color

## 13. HTML Usage

```html
<form class="px-form px-form--stacked">
  <div class="px-form-grid px-form-grid--2">
    <div class="px-field px-field--outline">
      <div class="px-field__head">
        <label class="px-label px-label--required" for="project-name">Project name</label>
        <p class="px-helper-text" id="project-help">Visible to your workspace team.</p>
      </div>
      <div class="px-field__control">
        <div class="px-field__shell">
          <span class="px-field__icon" aria-hidden="true">#</span>
          <input id="project-name" class="px-input" type="text" aria-describedby="project-help" placeholder="Pixorix control system" />
        </div>
      </div>
    </div>

    <div class="px-field px-field--filled is-error">
      <div class="px-field__head">
        <label class="px-label" for="project-email">Support email</label>
      </div>
      <div class="px-field__control">
        <div class="px-field__shell">
          <input id="project-email" class="px-input" type="email" aria-invalid="true" placeholder="team@pixorix.dev" />
          <span class="px-field__suffix">@</span>
        </div>
      </div>
      <div class="px-field__footer px-validation-group">
        <p class="px-validation px-validation--error">Enter a valid email address.</p>
      </div>
    </div>
  </div>

  <div class="px-field px-field--soft">
    <div class="px-field__head">
      <label class="px-label" for="workspace-notes">Workspace notes</label>
    </div>
    <textarea id="workspace-notes" class="px-textarea" placeholder="Add implementation notes for your team."></textarea>
  </div>
</form>
```

## 14. React Usage

```jsx
export function FormExample() {
  return (
    <form className="px-form px-form--stacked">
      <div className="px-field px-field--glass">
        <div className="px-field__head">
          <label className="px-label" htmlFor="query">Search workspace</label>
        </div>
        <div className="px-field__control">
          <div className="px-field__shell">
            <span className="px-field__icon" aria-hidden="true">/</span>
            <input id="query" className="px-search-input" type="search" placeholder="Search components" />
          </div>
        </div>
      </div>

      <div className="px-file-upload" data-px-file-upload>
        <label className="px-file-upload__dropzone">
          <input className="px-file-upload__input" type="file" multiple />
          <span className="px-file-upload__title">Upload design assets</span>
          <span className="px-file-upload__meta">Drag files here or browse from your device.</span>
        </label>
        <ul className="px-file-upload__list" />
      </div>
    </form>
  );
}
```

## 15. Angular Usage

```html
<form class="px-form px-form--inline">
  <div class="px-field px-field--sm">
    <label class="px-label" for="invite-email">Invite user</label>
    <div class="px-field__shell">
      <input id="invite-email" class="px-input" type="email" placeholder="user@pixorix.dev" />
    </div>
  </div>

  <div class="px-form-actions">
    <button class="px-button px-button--primary px-button--sm" type="submit">Send invite</button>
  </div>
</form>
```

## 16. Vue Usage

```vue
<template>
  <form class="px-form px-form--stacked">
    <div class="px-field px-field--outline">
      <label class="px-label" for="otp-code">Verification code</label>
      <div class="px-otp" data-px-otp>
        <input v-for="index in 6" :key="index" class="px-otp__input" inputmode="numeric" maxlength="1" />
      </div>
    </div>
  </form>
</template>
```

## 17. SCSS Architecture

- Core wrapper and state API: `src/scss/components/_forms.scss`
- Textual controls and advanced shells: `src/scss/components/_input.scss`
- Native select wrapper: `src/scss/components/_select.scss`
- Upload shell: `src/scss/components/_file-upload.scss`
- Floating label: `src/scss/components/_floating-label.scss`
- Input group: `src/scss/components/_input-group.scss`
- Validation text: `src/scss/components/_validation.scss`
- Choice controls remain in their own partials and inherit the same semantic state model

## 18. JS Architecture

- File: `src/js/components/form.js`
- Enhances upload drag state, file list rendering, OTP progression, segmented input progression, token removal/creation, autocomplete selection, and multiselect chip syncing
- Core forms remain usable without JS
- Behavior is activated only for opted-in shells through `data-px-*` hooks

## 19. GSAP Enhancement Hooks

- None required for form operation
- If a form step or grouped validation area is animated, the motion should stay on the owning feature shell
- Validation readability and focus order must never depend on motion

## 20. Developer Customization Hooks

- Field variables: `--px-field-bg`, `--px-field-border`, `--px-field-border-focus`, `--px-field-radius`, `--px-field-padding-x`
- Field modifiers: `.px-field--filled`, `.px-field--outline`, `.px-field--soft`, `.px-field--glass`, size and state classes
- Public slots: `.px-field__icon`, `.px-field__prefix`, `.px-field__suffix`, `.px-field__action`
- JS hooks: `data-px-file-upload`, `data-px-otp`, `data-px-segmented-input`, `data-px-token-input`, `data-px-autocomplete`, `data-px-multiselect`

## 21. Lightweight Optimization Notes

- One field API drives most control variants.
- Native controls stay native where reliability matters.
- Advanced shells are mostly composition around the same tokenized control surface.
- JS is opt-in and only attached to shells that benefit from enhancement.
- Validation and status styles reuse field variables instead of separate per-control themes.

## 22. Related Systems

- Alerts and form notices
- Buttons
- Badges and chips
- Typography
