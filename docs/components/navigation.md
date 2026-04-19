# Pixorix Navigation System

## 1. Title

Navigation

Framework-level navigation primitives for app chrome, section switching, menu disclosure, hierarchy paths, and mobile-aware product navigation.

## 2. Purpose

- Provide one shared navigation contract for navbar, topbar, sidebar, breadcrumbs, tabs, segmented nav, pagination, stepper navigation, menus, and mobile nav shells.
- Keep surface style, active state, disclosure behavior, keyboard support, icon slots, and badge support consistent across navigation patterns.
- Reuse Pixorix tokens and shared mixins instead of shipping unrelated nav treatments.

## 3. UX Goal

- Make navigation feel cohesive across dashboard, docs, product, and admin contexts.
- Support strong hover, focus-visible, active, selected, expanded, and collapsed states without heavy markup.
- Keep mobile collapse and disclosure predictable while preserving accessible keyboard behavior.

## 4. Included Patterns

- navbar
- topbar
- sidebar
- breadcrumb
- tabs
- tab pills
- segmented nav
- pagination
- stepper navigation
- dropdown menu
- mega menu
- context menu
- subnav
- anchor nav
- bottom mobile nav

## 5. Visual Variants

- default
- soft
- outline
- glass
- elevated
- compact
- comfortable
- dark aware

Variant rules:

- `default` is the standard app shell baseline.
- `soft` is for quieter internal navigation.
- `outline` is for low-chrome shells or content-heavy layouts.
- `glass` is for premium layered app bars and overlay menus.
- `elevated` is for sticky or high-priority navigation surfaces.
- `compact` is for denser dashboards and admin layouts.
- `comfortable` is for marketing, onboarding, and touch-heavier flows.

## 6. Semantic Variants

Navigation is primarily structural. Semantic emphasis should usually come from badges, icons, or companion status components rather than custom nav color variants.

## 7. Sizes

- compact
- default
- comfortable

Tabs, nav links, and shell heights inherit the surrounding nav size modifier.

## 8. States

- active
- hover
- focus-visible
- disabled
- selected
- expanded
- collapsed

## 9. Responsive Behavior

- Navbar and topbar support collapse via `data-px-nav-collapse`.
- Sidebar sections can collapse through the same pattern.
- Bottom mobile nav is available for dense app destinations on smaller screens.
- Mega menus compress to a single column on narrower screens.
- Tabs and segmented nav wrap without forcing unusable horizontal overflow.

## 10. Dark Mode Behavior

- All nav surfaces inherit theme variables automatically.
- Glass menus and nav shells rely on token-driven surface and border variables rather than hard-coded light values.
- Active and hover treatments remain readable in both themes.

## 11. Accessibility Requirements

- Use landmarks such as `nav`, `header`, and `aside` appropriately.
- Tabs should follow the WAI-ARIA tabs pattern when JS-driven.
- Use menu roles only for actual command menus, not plain site navigation.
- Ensure mobile collapse buttons reflect `aria-expanded` and `aria-controls`.
- Breadcrumb current item should not be an active link.

### Accessibility Checklist

- [ ] Navigation landmarks are used correctly
- [ ] Current page or active item is exposed programmatically
- [ ] Collapse toggles reflect expanded state
- [ ] Tabs use `role="tablist"`, `role="tab"`, and `role="tabpanel"` when interactive
- [ ] Dropdown, mega, and context menus are keyboard reachable
- [ ] Disabled nav items are not focus traps
- [ ] Bottom mobile nav still has visible labels or clear accessible names
- [ ] Breadcrumb current item is identified clearly
- [ ] Focus-visible styling remains obvious across all nav shells

## 12. Cross-Browser Considerations

- Sticky anchor nav and bottom mobile nav should be verified in Safari and iOS Safari.
- Glass nav shells must degrade cleanly where blur support differs.
- Menu positioning and focus handoff should be checked in Chromium, Firefox, and Safari.
- Tabs and collapse behavior must remain usable without motion.

### Cross-Browser Checklist

- [ ] Chromium nav shells and menus verified
- [ ] Firefox tab and menu keyboard behavior verified
- [ ] Safari and iOS Safari sticky and blur behavior verified
- [ ] Mobile collapse behavior verified
- [ ] Reduced-motion fallback verified

## 13. HTML Usage

```html
<nav class="px-navbar px-navbar--glass px-navbar--elevated" data-px-nav-collapse>
  <div class="px-navbar__surface">
    <a class="px-navbar__brand" href="/">
      <span class="px-navbar__icon" aria-hidden="true">PX</span>
      <span>Pixorix</span>
    </a>

    <button class="px-button px-button--ghost px-button--sm px-navbar__toggle" type="button" data-px-nav-toggle aria-expanded="false">
      Menu
    </button>

    <div class="px-navbar__panel" data-px-nav-panel hidden>
      <ul class="px-navbar__menu">
        <li><a class="px-navbar__link" href="/">Overview</a></li>
        <li><a class="px-navbar__link is-active" href="/components" aria-current="page">Components</a></li>
        <li><a class="px-navbar__link" href="/themes">Themes</a></li>
      </ul>
      <div class="px-navbar__actions">
        <a class="px-navbar__link" href="/notifications">
          <span>Notifications</span>
          <span class="px-badge px-badge--danger px-badge--solid px-navbar__badge">3</span>
        </a>
      </div>
    </div>
  </div>
</nav>
```

## 14. React Usage

```jsx
export function NavigationExample() {
  return (
    <div className="px-tabs" data-px-tabs>
      <div className="px-tabs__list" role="tablist" aria-label="Navigation tabs">
        <button className="px-tabs__tab" role="tab" aria-selected="true" aria-controls="nav-panel-overview" type="button">Overview</button>
        <button className="px-tabs__tab" role="tab" aria-selected="false" aria-controls="nav-panel-api" type="button">API</button>
      </div>
      <section id="nav-panel-overview" className="px-tabs__panel" role="tabpanel">Overview content.</section>
      <section id="nav-panel-api" className="px-tabs__panel" role="tabpanel" hidden>API content.</section>
    </div>
  );
}
```

## 15. Angular Usage

```html
<nav class="px-segmented-nav px-segmented-nav--soft">
  <div class="px-segmented-nav__surface">
    <a class="px-segmented-nav__link is-active" href="/" aria-current="page">Preview</a>
    <a class="px-segmented-nav__link" href="/code">Code</a>
    <a class="px-segmented-nav__link" href="/review">Review</a>
  </div>
</nav>
```

## 16. Vue Usage

```vue
<template>
  <div class="px-dropdown" data-px-dropdown>
    <button class="px-button px-button--outline px-button--sm" type="button" data-px-menu-trigger aria-expanded="false">
      Open menu
    </button>
    <div class="px-dropdown__panel" data-px-menu-panel hidden>
      <ul class="px-dropdown__menu" role="menu">
        <li class="px-dropdown__item"><button class="px-dropdown__link" type="button" role="menuitem">Profile</button></li>
        <li class="px-dropdown__item"><button class="px-dropdown__link" type="button" role="menuitem">Settings</button></li>
      </ul>
    </div>
  </div>
</template>
```

## 17. SCSS Architecture

- `src/scss/components/_nav.scss`: navbar, topbar, subnav, anchor nav, bottom nav, segmented nav
- `src/scss/components/_sidebar.scss`: sidebar navigation
- `src/scss/components/_breadcrumbs.scss`: breadcrumb
- `src/scss/components/_tabs.scss`: tabs and tab pills
- `src/scss/components/_pagination.scss`: pagination
- `src/scss/components/_dropdown.scss`: dropdown, mega menu, context menu
- Stepper navigation reuses the existing stepper partial in `src/scss/advanced-components/_stepper.scss`

## 18. JS Architecture

- File: `src/js/components/navigation.js`
- Handles collapse nav, tabs keyboard navigation, dropdown/mega disclosure, and context menu behavior
- Registered through the shared Pixorix app registry
- Activated only through explicit `data-px-*` hooks

## 19. GSAP Enhancement Hooks

- None required for operation
- Nav motion should stay subtle and optional
- Reduced motion must preserve immediate access to content and menus

## 20. Developer Customization Hooks

- Shared nav variables: `--px-nav-bg`, `--px-nav-border`, `--px-nav-link-hover-bg`, `--px-nav-link-active-bg`, `--px-nav-accent`
- State hooks: `.is-active`, `[aria-current]`, `[aria-selected]`, `data-state="expanded|collapsed"`
- JS hooks: `data-px-nav-collapse`, `data-px-tabs`, `data-px-tab-pills`, `data-px-dropdown`, `data-px-mega-menu`, `data-px-context-menu`, `data-px-sidebar-nav`

## 21. Lightweight Optimization Notes

- Shared nav variables keep many patterns on one styling contract.
- Runtime is opt-in and only attached where disclosure or keyboard behavior is needed.
- Plain links remain plain links for static navigation.
- Stepper stays reusable rather than duplicating a second step navigation implementation.

## 22. Related Systems

- Buttons
- Badges
- Drawer
- Typography
