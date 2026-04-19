**Purpose**
Framework-level overlay primitives for interruptive dialogs, side panels, anchored help layers, command surfaces, and fullscreen task shells.

**UX Goal**
- Keep modal, drawer, offcanvas, sheet, popover, tooltip, and command interactions on one predictable contract.
- Support focused tasks without fragmenting markup, motion, or accessibility patterns across multiple overlay implementations.
- Keep overlays premium and layered, but still lightweight enough for daily product usage.

**Visual Variants**
- `standard`: default surface with border and elevation
- `compact`: smaller shell width or padding for short tasks
- `large`: wider desktop shell for richer workflows
- `fullscreen`: full-viewport work surface
- `glass`: translucent premium treatment for layered UIs
- `elevated`: stronger shadow and edge separation
- `blur backdrop`: default overlay backdrop behavior
- `no-blur fallback`: use `.px-overlay-backdrop--no-blur`

**Semantic Variants**
- Modal-like overlays: modal, search overlay, command palette, lightbox, fullscreen overlay
- Panel overlays: drawer, offcanvas, notification panel, bottom sheet, action sheet
- Anchored overlays: tooltip, popover

**Sizes**
- `compact`
- default
- `large`
- `fullscreen`

**States**
- `data-state="closed"`
- `data-state="open"`
- `data-state="loading"`
- dismissible via default runtime
- non-dismissible via `data-px-dismissible="false"`

**Responsive Behavior**
- Modals and search overlays become bottom-anchored sheets on small screens.
- Drawers and offcanvas panels cap width and expand to full width when needed on mobile.
- Bottom sheets and action sheets remain edge-anchored and avoid horizontal overflow.
- Popovers and tooltips stay anchored but should be avoided for critical content on small screens.

**Dark Mode Behavior**
- Overlay surfaces inherit the shared theme surface variables.
- `glass` remains readable in dark mode through token-driven border and highlight compensation.
- Backdrop blur is decorative. Use `no-blur` where browser support or density makes it undesirable.

**Accessibility Requirements**
- [ ] Use `role="dialog"` and `aria-modal="true"` for modal-like overlays
- [ ] Provide a visible title and connect it with `aria-labelledby`
- [ ] Provide description text with `aria-describedby` when useful
- [ ] Trap focus only for true modal interactions
- [ ] Restore focus to the trigger on close
- [ ] Escape closes dismissible overlays
- [ ] Close buttons have an explicit accessible label
- [ ] Tooltip and popover content is not the only source of critical information
- [ ] Search overlay and command palette remain keyboard reachable end-to-end

**Cross-Browser Considerations**
- [ ] Chrome and Edge layout verified
- [ ] Firefox overflow and focus handling verified
- [ ] Safari and iOS Safari scroll locking verified
- [ ] `backdrop-filter` degrades safely where blur support differs
- [ ] Reduced motion keeps open and close behavior understandable
- [ ] Bottom sheets and drawers avoid scroll-chain issues on touch devices

**HTML Usage**
```html
<div class="px-overlay-backdrop px-overlay-backdrop--blur" data-state="closed" aria-hidden="true"></div>
<div
  id="workspace-command"
  class="px-modal px-search-overlay px-search-overlay--glass px-search-overlay--large"
  data-px-search-overlay
  data-px-overlay="search-overlay"
  data-state="closed"
  data-px-component="modal"
  aria-hidden="true"
>
  <div class="px-search-overlay__dialog" role="dialog" aria-modal="true" aria-labelledby="workspace-command-title">
    <div class="px-search-overlay__header">
      <div>
        <h2 id="workspace-command-title" class="px-search-overlay__title">Search workspace</h2>
        <p class="px-search-overlay__description">Jump to pages, commands, or recent activity.</p>
      </div>
      <button class="px-button px-button--ghost px-button--sm" type="button" data-px-close aria-label="Close search overlay">Close</button>
    </div>
    <div class="px-search-overlay__body px-command-palette">
      <div class="px-command-palette__search">
        <input class="px-input" type="search" placeholder="Search commands..." />
      </div>
      <div class="px-command-palette__results">
        <div class="px-command-palette__group">
          <div class="px-command-palette__label">Quick actions</div>
          <button class="px-command-palette__item" type="button">
            <span>Create release note</span>
            <kbd>G R</kbd>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<button class="px-button px-button--primary" type="button" data-px-overlay-open="workspace-command" aria-controls="workspace-command" aria-expanded="false">
  Open search
</button>
```

**React Usage**
```jsx
<button
  className="px-button px-button--primary"
  type="button"
  data-px-overlay-open="settings-drawer"
  aria-controls="settings-drawer"
  aria-expanded="false"
>
  Open settings
</button>

<div className="px-overlay-backdrop" data-state="closed" aria-hidden="true" />
<aside
  id="settings-drawer"
  className="px-drawer px-drawer--end px-drawer--glass"
  data-px-drawer
  data-px-overlay="drawer"
  data-state="closed"
  aria-hidden="true"
>
  <div className="px-drawer__panel" role="dialog" aria-modal="true" aria-labelledby="settings-drawer-title">
    <div className="px-drawer__header">
      <h2 id="settings-drawer-title" className="px-drawer__title">Workspace settings</h2>
      <button className="px-button px-button--ghost px-button--sm" type="button" data-px-close aria-label="Close settings">
        Close
      </button>
    </div>
    <div className="px-drawer__body">Drawer content</div>
  </div>
</aside>
```

**Angular Usage**
```html
<button
  class="px-button px-button--secondary"
  type="button"
  data-px-overlay-open="mobile-actions"
  aria-controls="mobile-actions"
  aria-expanded="false"
>
  Open actions
</button>

<div class="px-overlay-backdrop px-overlay-backdrop--no-blur" data-state="closed" aria-hidden="true"></div>
<div
  id="mobile-actions"
  class="px-action-sheet px-action-sheet--compact"
  data-px-action-sheet
  data-px-overlay="action-sheet"
  data-state="closed"
  aria-hidden="true"
>
  <div class="px-action-sheet__panel" role="dialog" aria-modal="true" aria-labelledby="mobile-actions-title">
    <div class="px-action-sheet__handle" aria-hidden="true"></div>
    <h2 id="mobile-actions-title" class="px-modal__title">Quick actions</h2>
    <div class="px-action-sheet__actions">
      <button class="px-button px-button--ghost px-action-sheet__action" type="button">Duplicate</button>
      <button class="px-button px-button--danger px-button--soft px-action-sheet__action" type="button">Archive</button>
    </div>
  </div>
</div>
```

**Vue Usage**
```vue
<template>
  <span class="px-popover-shell" data-px-popover data-px-overlay="popover" data-state="closed" id="team-popover">
    <button
      class="px-button px-button--soft px-button--sm"
      type="button"
      data-px-overlay-trigger
      aria-controls="team-popover"
      aria-expanded="false"
    >
      Team options
    </button>
    <div class="px-popover px-popover--glass" role="dialog" aria-labelledby="team-popover-title">
      <strong id="team-popover-title" class="px-popover__title">Team options</strong>
      <div class="px-popover__body">Invite members, manage roles, or view pending requests.</div>
      <div class="px-popover__actions">
        <button class="px-button px-button--primary px-button--sm" type="button">Invite</button>
      </div>
    </div>
  </span>
</template>
```

**SCSS Architecture**
- `src/scss/components/_modal.scss`: modal, search overlay, lightbox, fullscreen overlay, backdrop
- `src/scss/components/_drawer.scss`: drawer and notification-panel shell behavior
- `src/scss/components/_offcanvas.scss`: offcanvas and side/bottom panel variants
- `src/scss/components/_popover.scss`: popover shell and anchored panel styling
- `src/scss/components/_tooltip.scss`: tooltip shell and anchored helper styling
- `src/scss/advanced-components/_command-palette.scss`: command palette content shell
- `src/scss/advanced-components/_bottom-sheet.scss`: bottom sheet and action sheet
- `src/scss/advanced-components/_notification-panel.scss`: notification list internals

**JS Architecture**
- File: `src/js/components/overlay.js`
- Shared controller for:
  - trigger lookup via `data-px-overlay-open`, `data-px-overlay-toggle`, `data-px-overlay-close`, and `data-px-overlay-trigger`
  - `open`, `close`, and `toggle` methods
  - escape close, outside-click close for anchored overlays, focus trap, and scroll lock for modal overlays
  - `px:overlay:open` and `px:overlay:close` events
- Compatibility wrappers remain available through:
  - `src/js/components/modal.js`
  - `src/js/components/drawer.js`

**GSAP Enhancement Hooks**
- Overlay runtime uses existing motion presets when animation is allowed.
- Set `data-px-overlay-motion="none"` for a non-animated version.
- Reduced-motion users automatically bypass animated transitions.

**Developer Customization Hooks**
- Root type hook: `data-px-overlay="modal|drawer|offcanvas|popover|tooltip|command-palette|search-overlay|lightbox|notification-panel|bottom-sheet|action-sheet|fullscreen-overlay"`
- Dismiss behavior: `data-px-dismissible="false"`
- Focus trap override: `data-px-trap-focus="false"`
- Scroll lock override: `data-px-lock-scroll="false"`
- External controls:
  - `data-px-overlay-open="overlay-id"`
  - `data-px-overlay-toggle="overlay-id"`
  - `data-px-overlay-close="overlay-id"`

**Lightweight Optimization Notes**
- Core runtime is shared across overlay types instead of shipping one controller per pattern.
- Styling is still modular because modal, drawer, popover, tooltip, and sheet layers remain in separate partials.
- Command palette and notification panel only add structure on top of the base overlay contract.
- Tooltip and popover stay intentionally simple and do not add heavyweight positioning logic.
