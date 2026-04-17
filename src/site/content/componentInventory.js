const html = (code) => code.trim();

export const componentInventoryGroups = [
  {
    title: 'Core components',
    description: 'All first-party UI components available in the main Pixorix component layer.',
    items: [
      { name: 'Accordion', classes: '.px-accordion', code: html(`<div class="px-accordion"><div class="px-accordion__item"><button class="px-accordion__trigger" aria-expanded="false">Section</button><div class="px-accordion__panel" hidden>Content</div></div></div>`) },
      { name: 'Alerts', classes: '.px-alert, .px-banner', code: html(`<div class="px-alert px-alert--info"><div class="px-alert__body"><strong class="px-alert__title">Info</strong><p class="px-alert__text">Alert content.</p></div></div>`) },
      { name: 'Avatars', classes: '.px-avatar', code: html(`<span class="px-avatar">PX</span>`) },
      { name: 'Badges', classes: '.px-badge, .px-chip, .px-tag', code: html(`<span class="px-badge px-badge--primary">New</span>`) },
      { name: 'Breadcrumbs', classes: '.px-breadcrumbs', code: html(`<ol class="px-breadcrumbs"><li class="px-breadcrumbs__item"><a class="px-breadcrumbs__link" href="/">Docs</a></li><li class="px-breadcrumbs__item" aria-current="page">Components</li></ol>`) },
      { name: 'Buttons', classes: '.px-button, .px-split-button, .px-button-group, .px-fab', code: html(`<button class="px-button px-button--primary px-button--gradient" type="button"><span class="px-button__icon" aria-hidden="true">+</span><span class="px-button__label">Primary action</span></button>`) },
      { name: 'Cards', classes: '.px-card', code: html(`<article class="px-card"><header class="px-card__header"><h3 class="px-card__title">Card title</h3></header><div class="px-card__body">Card content.</div></article>`) },
      { name: 'Checkbox', classes: '.px-check', code: html(`<label class="px-check"><input class="px-check__input" type="checkbox" /><span class="px-check__body"><span class="px-check__label">Enable option</span></span></label>`) },
      { name: 'Drawer', classes: '.px-drawer', code: html(`<div class="px-drawer px-drawer--end" data-state="closed"><div class="px-drawer__panel"><div class="px-drawer__header"><h3 class="px-drawer__title">Drawer</h3></div><div class="px-drawer__body">Drawer content.</div></div></div>`) },
      { name: 'Dropdown', classes: '.px-dropdown', code: html(`<div class="px-dropdown"><ul class="px-dropdown__menu"><li class="px-dropdown__item"><a class="px-dropdown__link" href="/">Profile</a></li></ul></div>`) },
      { name: 'Empty State', classes: '.px-empty-state', code: html(`<section class="px-empty-state"><div class="px-empty-state__visual">+</div><h3 class="px-empty-state__title">Nothing here yet</h3><p class="px-empty-state__text">Add your first item.</p></section>`) },
      { name: 'File Upload', classes: '.px-file-upload', code: html(`<label class="px-file-upload"><input class="px-file-upload__input" type="file" /><span class="px-file-upload__body">Upload file</span></label>`) },
      { name: 'Floating Label', classes: '.px-floating-label', code: html(`<label class="px-floating-label"><input class="px-input" placeholder=" " type="text" /><span class="px-floating-label__text">Email</span></label>`) },
      { name: 'Forms', classes: '.px-form, .px-field', code: html(`<form class="px-form"><label class="px-field"><span class="px-label">Name</span><input class="px-input" type="text" /></label></form>`) },
      { name: 'Input', classes: '.px-input, .px-textarea', code: html(`<input class="px-input" type="text" placeholder="Input value" />`) },
      { name: 'Input Group', classes: '.px-input-group', code: html(`<div class="px-input-group"><span class="px-input-group__addon">@</span><input class="px-input" type="text" placeholder="username" /></div>`) },
      { name: 'List Group', classes: '.px-list-group', code: html(`<ul class="px-list-group"><li class="px-list-group__item"><a class="px-list-group__link" href="/">Inbox</a></li></ul>`) },
      { name: 'Loaders', classes: '.px-loader', code: html(`<span class="px-loader" aria-label="Loading"></span>`) },
      { name: 'Modal', classes: '.px-modal', code: html(`<div class="px-modal" data-state="closed"><div class="px-modal__dialog"><div class="px-modal__header"><h3 class="px-modal__title">Modal</h3></div><div class="px-modal__body">Content</div></div></div>`) },
      { name: 'Navigation', classes: '.px-navbar', code: html(`<nav class="px-navbar"><a class="px-navbar__brand" href="/">Pixorix</a><div class="px-navbar__nav"><a class="px-navbar__link" href="/">Docs</a></div></nav>`) },
      { name: 'Offcanvas', classes: '.px-offcanvas', code: html(`<aside class="px-offcanvas" data-state="closed"><div class="px-offcanvas__panel">Panel content</div></aside>`) },
      { name: 'Pagination', classes: '.px-pagination', code: html(`<nav class="px-pagination"><ul class="px-pagination__list"><li class="px-pagination__item"><a class="px-pagination__link is-active" href="/" aria-current="page">1</a></li></ul></nav>`) },
      { name: 'Popover', classes: '.px-popover', code: html(`<div class="px-popover"><strong class="px-popover__title">Popover</strong><div class="px-popover__body">Supporting detail.</div></div>`) },
      { name: 'Progress', classes: '.px-progress', code: html(`<div class="px-progress" style="--px-progress-value:64%"><div class="px-progress__track"><div class="px-progress__bar"></div></div></div>`) },
      { name: 'Radio', classes: '.px-radio', code: html(`<label class="px-radio"><input class="px-radio__input" type="radio" name="plan" /><span class="px-radio__body"><span class="px-radio__label">Starter</span></span></label>`) },
      { name: 'Range', classes: '.px-range', code: html(`<label class="px-range"><input class="px-range__input" type="range" min="0" max="100" value="40" /></label>`) },
      { name: 'Select', classes: '.px-select', code: html(`<span class="px-select-wrap"><select class="px-select"><option>Default</option></select></span>`) },
      { name: 'Sidebar', classes: '.px-sidebar', code: html(`<aside class="px-sidebar"><nav class="px-sidebar__nav"><a class="px-sidebar__link" href="/">Overview</a></nav></aside>`) },
      { name: 'Switch', classes: '.px-switch', code: html(`<label class="px-switch"><input class="px-switch__input" type="checkbox" /><span class="px-switch__label">Enable</span></label>`) },
      { name: 'Table', classes: '.px-table', code: html(`<div class="px-table-wrap"><table class="px-table"><thead><tr><th>Name</th></tr></thead><tbody><tr><td>Item</td></tr></tbody></table></div>`) },
      { name: 'Tabs', classes: '.px-tabs', code: html(`<div class="px-tabs"><div class="px-tabs__list"><button class="px-tabs__tab" aria-selected="true">Preview</button></div><div class="px-tabs__panel">Panel content</div></div>`) },
      { name: 'Timeline', classes: '.px-timeline', code: html(`<ol class="px-timeline"><li class="px-timeline__item"><div class="px-timeline__title">Started</div></li></ol>`) },
      { name: 'Toast', classes: '.px-toast', code: html(`<div class="px-toast px-toast--success"><div class="px-toast__body"><strong class="px-toast__title">Saved</strong><div class="px-toast__text">Changes were stored.</div></div></div>`) },
      { name: 'Tooltip', classes: '.px-tooltip', code: html(`<div class="px-tooltip">Helpful text</div>`) },
      { name: 'Validation', classes: '.px-validation', code: html(`<p class="px-validation px-validation--danger">This field is required.</p>`) }
    ]
  },
  {
    title: 'Advanced components',
    description: 'Higher-order UI patterns from the advanced Pixorix layer.',
    items: [
      { name: 'Bottom Sheet', classes: '.px-bottom-sheet', code: html(`<div class="px-bottom-sheet" data-state="closed"><div class="px-bottom-sheet__panel">Bottom sheet content</div></div>`) },
      { name: 'Command Palette', classes: '.px-command-palette', code: html(`<div class="px-command-palette" data-px-command-palette><input class="px-input" type="search" placeholder="Search commands" /></div>`) },
      { name: 'Data Display', classes: '.px-kpi-card, .px-stat', code: html(`<article class="px-kpi-card"><strong>24.8%</strong><span>Conversion</span></article>`) },
      { name: 'Date Picker', classes: '.px-date-picker', code: html(`<div class="px-date-picker"><input class="px-date-field" type="text" placeholder="Pick a date" /></div>`) },
      { name: 'Marketing Blocks', classes: '.px-marketing-*', code: html(`<section class="px-marketing-hero"><h1>Marketing block</h1></section>`) },
      { name: 'Mega Menu', classes: '.px-mega-menu', code: html(`<div class="px-mega-menu"><div class="px-mega-menu__panel">Mega menu content</div></div>`) },
      { name: 'Notification Panel', classes: '.px-notification-panel', code: html(`<aside class="px-notification-panel"><h3>Notifications</h3></aside>`) },
      { name: 'Premium UI', classes: '.px-premium-*', code: html(`<section class="px-premium-panel"><h3>Premium surface</h3></section>`) },
      { name: 'Stepper', classes: '.px-stepper', code: html(`<ol class="px-stepper"><li class="px-stepper__item is-active">Profile</li></ol>`) },
      { name: 'Workspace', classes: '.px-workspace', code: html(`<div class="px-workspace"><aside>Sidebar</aside><main>Workspace</main></div>`) },
      { name: 'Advanced Toast', classes: '.px-toast-stack', code: html(`<div class="px-toast-stack"><div class="px-toast"><div class="px-toast__body"><strong class="px-toast__title">Heads up</strong></div></div></div>`) }
    ]
  }
];
