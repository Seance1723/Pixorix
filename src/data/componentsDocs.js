function buildSnippets({ title, html, react, angular, vue }) {
  return {
    html: {
      title,
      language: 'html',
      filename: `${title.toLowerCase().replace(/\s+/g, '-')}.html`,
      code: html
    },
    react: {
      title,
      language: 'jsx',
      filename: `${title.replace(/\s+/g, '')}Example.jsx`,
      code: react
    },
    angular: {
      title,
      language: 'html',
      filename: `${title.toLowerCase().replace(/\s+/g, '-')}.component.html`,
      code: angular
    },
    vue: {
      title,
      language: 'vue',
      filename: `${title.replace(/\s+/g, '')}Example.vue`,
      code: vue
    }
  };
}

export const componentsDocSections = [
  {
    id: 'navigation',
    title: 'Navigation',
    description: 'Navigation provides shared shells and disclosure behavior for navbar, topbar, sidebar, breadcrumbs, tabs, menus, pagination, and mobile-aware navigation.',
    demoDescription: 'Pixorix navigation uses one token-driven surface and active-state system so menus, tabs, and app chrome feel consistent without duplicating styles.',
    previewDescription: 'A framework-ready navigation layer covering app bars, tabs, breadcrumbs, and menus.',
    preview: { type: 'navigation' },
    variants: ['Default', 'Soft', 'Outline', 'Glass', 'Elevated', 'Compact', 'Comfortable', 'Dark aware'],
    sizes: ['Compact', 'Default', 'Comfortable'],
    states: ['Active', 'Hover', 'Focus-visible', 'Disabled', 'Selected', 'Expanded', 'Collapsed'],
    accessibilityNotes: [
      'Use correct landmarks and expose current page, selected tab, or expanded menu state programmatically.',
      'Menu roles should be reserved for command-style menus, not ordinary site navigation.',
      'Keyboard support is required for JS-driven tabs and menus.'
    ],
    browserNotes: [
      'Verify sticky nav, blur, and menu positioning in Safari and iOS Safari.',
      'Tabs and collapse behavior should remain usable without motion or hover-specific assumptions.'
    ],
    responsiveNotes: [
      'Navbar and topbar can collapse through `data-px-nav-collapse`.',
      'Bottom nav and segmented patterns help reduce mobile overflow for dense destinations.'
    ],
    snippets: buildSnippets({
      title: 'Navigation',
      html: `<nav class="px-navbar px-navbar--glass" data-px-nav-collapse>
  <div class="px-navbar__surface">
    <a class="px-navbar__brand" href="/">Pixorix</a>
    <button class="px-button px-button--ghost px-button--sm px-navbar__toggle" type="button" data-px-nav-toggle aria-expanded="false">Menu</button>
    <div class="px-navbar__panel" data-px-nav-panel hidden>
      <ul class="px-navbar__menu">
        <li><a class="px-navbar__link is-active" href="/" aria-current="page">Overview</a></li>
        <li><a class="px-navbar__link" href="/components">Components</a></li>
      </ul>
    </div>
  </div>
</nav>`,
      react: `<nav className="px-navbar px-navbar--glass" data-px-nav-collapse>
  <div className="px-navbar__surface">
    <a className="px-navbar__brand" href="/">Pixorix</a>
    <button className="px-button px-button--ghost px-button--sm px-navbar__toggle" type="button" data-px-nav-toggle aria-expanded="false">Menu</button>
    <div className="px-navbar__panel" data-px-nav-panel hidden>
      <ul className="px-navbar__menu">
        <li><a className="px-navbar__link is-active" href="/" aria-current="page">Overview</a></li>
        <li><a className="px-navbar__link" href="/components">Components</a></li>
      </ul>
    </div>
  </div>
</nav>`,
      angular: `<nav class="px-navbar px-navbar--glass" data-px-nav-collapse>
  <div class="px-navbar__surface">
    <a class="px-navbar__brand" href="/">Pixorix</a>
    <button class="px-button px-button--ghost px-button--sm px-navbar__toggle" type="button" data-px-nav-toggle aria-expanded="false">Menu</button>
    <div class="px-navbar__panel" data-px-nav-panel hidden>
      <ul class="px-navbar__menu">
        <li><a class="px-navbar__link is-active" href="/" aria-current="page">Overview</a></li>
        <li><a class="px-navbar__link" href="/components">Components</a></li>
      </ul>
    </div>
  </div>
</nav>`,
      vue: `<template>
  <nav class="px-navbar px-navbar--glass" data-px-nav-collapse>
    <div class="px-navbar__surface">
      <a class="px-navbar__brand" href="/">Pixorix</a>
      <button class="px-button px-button--ghost px-button--sm px-navbar__toggle" type="button" data-px-nav-toggle aria-expanded="false">Menu</button>
      <div class="px-navbar__panel" data-px-nav-panel hidden>
        <ul class="px-navbar__menu">
          <li><a class="px-navbar__link is-active" href="/" aria-current="page">Overview</a></li>
          <li><a class="px-navbar__link" href="/components">Components</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>`
    })
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Typography and content primitives provide fluid headings, prose shells, dashboard text roles, code shells, lists, dividers, and semantic text treatment.',
    demoDescription: 'Pixorix typography extends semantic HTML with reusable role classes so docs, dashboards, and product screens share the same reading rhythm.',
    previewDescription: 'A framework-ready content primitive layer for headings, intro copy, code, lists, quotes, and dashboard text.',
    preview: { type: 'typography' },
    variants: ['Default', 'Muted', 'Strong', 'Emphasis', 'Gradient', 'Semantic text', 'Data-dense', 'Dashboard'],
    sizes: ['Display', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Lead', 'Body', 'Small', 'Caption', 'Overline'],
    states: ['Default', 'Link hover', 'Link focus-visible', 'Muted', 'Strong'],
    accessibilityNotes: [
      'Use semantic headings, paragraphs, lists, blockquotes, and code elements before relying on class-only hierarchy.',
      'Semantic text colors should support meaning, not replace labels or icons.',
      'Keep link focus-visible treatment intact and maintain readable line length for prose.'
    ],
    browserNotes: [
      'Gradient text must degrade to a plain readable color when text clipping differs across browsers.',
      'Clamp typography, balanced wrapping, and code-block overflow need verification in Safari and Firefox.'
    ],
    responsiveNotes: [
      'Heading and body scales are clamp-driven by default.',
      'Use `.px-prose`, `.px-prose--dense`, or `.px-prose--dashboard` to tune rhythm without page-only media queries.'
    ],
    snippets: buildSnippets({
      title: 'Typography',
      html: `<section class="px-content-section px-prose">
  <p class="px-overline">Content primitive</p>
  <h2 class="px-section-title">Readable hierarchy with lightweight markup</h2>
  <p class="px-section-intro">Pixorix typography gives headings, intros, dashboard metrics, links, lists, and code shells one shared token-driven contract.</p>
  <p class="px-text-body">Use semantic elements first and layer Pixorix classes where stronger control is useful.</p>
  <pre class="px-code-block"><code>npm install pixorix</code></pre>
</section>`,
      react: `<section className="px-content-section px-prose">
  <p className="px-overline">Content primitive</p>
  <h2 className="px-section-title">Readable hierarchy with lightweight markup</h2>
  <p className="px-section-intro">Pixorix typography gives headings, intros, dashboard metrics, links, lists, and code shells one shared token-driven contract.</p>
  <p className="px-text-body">Use semantic elements first and layer Pixorix classes where stronger control is useful.</p>
  <pre className="px-code-block"><code>npm install pixorix</code></pre>
</section>`,
      angular: `<section class="px-content-section px-prose">
  <p class="px-overline">Content primitive</p>
  <h2 class="px-section-title">Readable hierarchy with lightweight markup</h2>
  <p class="px-section-intro">Pixorix typography gives headings, intros, dashboard metrics, links, lists, and code shells one shared token-driven contract.</p>
  <p class="px-text-body">Use semantic elements first and layer Pixorix classes where stronger control is useful.</p>
  <pre class="px-code-block"><code>npm install pixorix</code></pre>
</section>`,
      vue: `<template>
  <section class="px-content-section px-prose">
    <p class="px-overline">Content primitive</p>
    <h2 class="px-section-title">Readable hierarchy with lightweight markup</h2>
    <p class="px-section-intro">Pixorix typography gives headings, intros, dashboard metrics, links, lists, and code shells one shared token-driven contract.</p>
    <p class="px-text-body">Use semantic elements first and layer Pixorix classes where stronger control is useful.</p>
    <pre class="px-code-block"><code>npm install pixorix</code></pre>
  </section>
</template>`
    })
  },
  {
    id: 'buttons',
    title: 'Buttons',
    description: 'Buttons provide a token-driven action system for standard, icon-only, grouped, split, loading, floating, and social-shell patterns.',
    demoDescription: 'Pixorix buttons separate tone, appearance, size, and shape so teams can scale variants without bloating CSS or markup.',
    previewDescription: 'A framework-ready button set showing tone, appearance, size, and shell composition patterns.',
    preview: { type: 'buttons' },
    variants: ['Primary', 'Secondary', 'Success', 'Warning', 'Danger', 'Neutral', 'Dark', 'Light', 'Solid', 'Soft', 'Outline', 'Ghost', 'Text', 'Glass', 'Gradient', 'Elevated', 'Pill', 'Square'],
    sizes: ['XS', 'SM', 'MD', 'LG', 'XL', 'Compact'],
    states: ['Default', 'Hover', 'Focus-visible', 'Active', 'Disabled', 'Loading'],
    accessibilityNotes: [
      'Use real button elements for in-page actions and add `aria-label` for icon-only usage.',
      'Expose loading with `aria-busy="true"` when an async action is in progress.',
      'Split-button toggles should reflect `aria-expanded` and `aria-controls` correctly.'
    ],
    browserNotes: [
      'Glass buttons degrade safely when `backdrop-filter` support differs across browsers.',
      'Verify floating action button placement, blur, and focus rendering in Safari and iOS Safari.'
    ],
    responsiveNotes: [
      'Use `.px-button-group--responsive` or `data-px-stack="mobile"` to stack actions on smaller screens.',
      'Block, full-width, compact, and split-button responsive shells keep actions usable on mobile.'
    ],
    snippets: buildSnippets({
      title: 'Button',
      html: `<div class="px-button-group px-button-group--responsive">
  <button class="px-button px-button--primary px-button--gradient px-button--md" type="button">
    <span class="px-button__icon" aria-hidden="true">+</span>
    <span class="px-button__label">Create workspace</span>
  </button>
  <button class="px-button px-button--secondary px-button--outline px-button--md" type="button">Secondary action</button>
  <button class="px-button px-button--neutral px-button--ghost px-button--icon-only" type="button" aria-label="Open filters">
    <span class="px-button__icon" aria-hidden="true">≡</span>
  </button>
</div>`,
      react: `<div className="px-button-group px-button-group--responsive">
  <button className="px-button px-button--primary px-button--gradient px-button--md" type="button">
    <span className="px-button__icon" aria-hidden="true">+</span>
    <span className="px-button__label">Create workspace</span>
  </button>
  <button className="px-button px-button--secondary px-button--outline px-button--md" type="button">Secondary action</button>
  <button
    className="px-button px-button--neutral px-button--ghost px-button--icon-only"
    type="button"
    aria-label="Open filters"
  >
    <span className="px-button__icon" aria-hidden="true">≡</span>
  </button>
</div>`,
      angular: `<div class="px-button-group px-button-group--responsive">
  <button class="px-button px-button--primary px-button--gradient px-button--md" type="button">
    <span class="px-button__icon" aria-hidden="true">+</span>
    <span class="px-button__label">Create workspace</span>
  </button>
  <button class="px-button px-button--secondary px-button--outline px-button--md" type="button">Secondary action</button>
  <button class="px-button px-button--neutral px-button--ghost px-button--icon-only" type="button" aria-label="Open filters">
    <span class="px-button__icon" aria-hidden="true">≡</span>
  </button>
</div>`,
      vue: `<template>
  <div class="px-button-group px-button-group--responsive">
    <button class="px-button px-button--primary px-button--gradient px-button--md" type="button">
      <span class="px-button__icon" aria-hidden="true">+</span>
      <span class="px-button__label">Create workspace</span>
    </button>
    <button class="px-button px-button--secondary px-button--outline px-button--md" type="button">Secondary action</button>
    <button class="px-button px-button--neutral px-button--ghost px-button--icon-only" type="button" aria-label="Open filters">
      <span class="px-button__icon" aria-hidden="true">≡</span>
    </button>
  </div>
</template>`
    })
  },
  {
    id: 'cards',
    title: 'Cards',
    description: 'Cards provide a reusable surface system for content grouping, metrics, pricing, testimonials, media, and spotlight layouts.',
    demoDescription: 'Pixorix cards use one token-driven structure with stable areas for header, body, meta, actions, and footer so teams can scale variants without reinventing layout shells.',
    previewDescription: 'A framework-ready card surface showing premium grouping, media, meta, and action handling.',
    preview: { type: 'card' },
    variants: ['Basic', 'Elevated', 'Outlined', 'Soft', 'Glass', 'Feature', 'Media', 'Profile', 'Stats', 'KPI', 'Pricing', 'Testimonial', 'Spotlight', 'Gradient border', 'Interactive'],
    sizes: ['Default', 'Dense content', 'Expanded feature'],
    states: ['Default', 'Hover-lift', 'Selected', 'Clickable', 'Loading', 'Skeleton-ready', 'Disabled'],
    accessibilityNotes: [
      'Keep semantic headings and content order intact within the card.',
      'Only make a whole card clickable when the entire surface represents one action target.'
    ],
    browserNotes: [
      'Glass and gradient-border treatments should degrade cleanly where blur or compositing differs.',
      'Overflow clipping and footer wrapping need verification in Safari and Firefox.'
    ],
    responsiveNotes: [
      'Cards should expand naturally within grid layouts.',
      'Footer actions stack on smaller screens instead of collapsing into cramped rows.'
    ],
    snippets: buildSnippets({
      title: 'Card',
      html: `<article class="px-card px-card--elevated">
  <header class="px-card__header">
    <p class="px-card__eyebrow">Starter card</p>
    <h3 class="px-card__title">Product metrics card</h3>
    <p class="px-card__subtitle">Use cards to group content, media, and actions cleanly.</p>
  </header>
  <div class="px-card__body">
    Balanced spacing, rounded surfaces, and stable content rhythm.
  </div>
</article>`,
      react: `<article className="px-card px-card--elevated">
  <header className="px-card__header">
    <p className="px-card__eyebrow">Starter card</p>
    <h3 className="px-card__title">Product metrics card</h3>
    <p className="px-card__subtitle">Use cards to group content, media, and actions cleanly.</p>
  </header>
  <div className="px-card__body">
    Balanced spacing, rounded surfaces, and stable content rhythm.
  </div>
</article>`,
      angular: `<article class="px-card px-card--elevated">
  <header class="px-card__header">
    <p class="px-card__eyebrow">Starter card</p>
    <h3 class="px-card__title">Product metrics card</h3>
    <p class="px-card__subtitle">Use cards to group content, media, and actions cleanly.</p>
  </header>
  <div class="px-card__body">
    Balanced spacing, rounded surfaces, and stable content rhythm.
  </div>
</article>`,
      vue: `<template>
  <article class="px-card px-card--elevated">
    <header class="px-card__header">
      <p class="px-card__eyebrow">Starter card</p>
      <h3 class="px-card__title">Product metrics card</h3>
      <p class="px-card__subtitle">Use cards to group content, media, and actions cleanly.</p>
    </header>
    <div class="px-card__body">
      Balanced spacing, rounded surfaces, and stable content rhythm.
    </div>
  </article>
</template>`
    })
  },
  {
    id: 'badges',
    title: 'Badges',
    description: 'Badges, chips, and tags provide compact status, metadata, selection, filtering, counters, and notification patterns.',
    demoDescription: 'Pixorix badges separate static labeling from lightweight chip interaction while still sharing one token-driven contract.',
    previewDescription: 'A compact framework-ready set of badges, chips, tags, counters, and notification markers.',
    preview: { type: 'badge' },
    variants: ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger', 'Neutral', 'Solid', 'Soft', 'Outline', 'Glass', 'Tonal'],
    sizes: ['XS', 'SM', 'MD', 'LG'],
    states: ['Default', 'Hover', 'Active', 'Selected', 'Removable', 'Disabled'],
    accessibilityNotes: [
      'Do not rely on color alone to communicate badge meaning.',
      'Interactive chips should use button semantics and expose selected state through ARIA.'
    ],
    browserNotes: [
      'Glass badges should degrade safely when backdrop blur support differs across browsers.',
      'Wrapping and truncation need verification in Safari and Firefox.'
    ],
    responsiveNotes: [
      'Badge, chip, and tag groups should wrap instead of forcing overflow by default.',
      'Notification badges should stay compact and attached to a relatively positioned parent.'
    ],
    snippets: buildSnippets({
      title: 'Badge',
      html: `<div class="px-badge-group">
  <span class="px-badge px-badge--success px-badge--soft">
    <span class="px-badge__icon" aria-hidden="true">+</span>
    <span class="px-badge__label">Stable</span>
  </span>
  <button class="px-chip px-chip--primary px-chip--outline" type="button" data-px-chip data-px-selectable aria-pressed="false">
    <span class="px-chip__label">Filter chip</span>
  </button>
</div>`,
      react: `<div className="px-badge-group">
  <span className="px-badge px-badge--success px-badge--soft">
    <span className="px-badge__icon" aria-hidden="true">+</span>
    <span className="px-badge__label">Stable</span>
  </span>
  <button className="px-chip px-chip--primary px-chip--outline" type="button" data-px-chip data-px-selectable aria-pressed="false">
    <span className="px-chip__label">Filter chip</span>
  </button>
</div>`,
      angular: `<div class="px-badge-group">
  <span class="px-badge px-badge--success px-badge--soft">
    <span class="px-badge__icon" aria-hidden="true">+</span>
    <span class="px-badge__label">Stable</span>
  </span>
  <button class="px-chip px-chip--primary px-chip--outline" type="button" data-px-chip data-px-selectable aria-pressed="false">
    <span class="px-chip__label">Filter chip</span>
  </button>
</div>`,
      vue: `<template>
  <div class="px-badge-group">
    <span class="px-badge px-badge--success px-badge--soft">
      <span class="px-badge__icon" aria-hidden="true">+</span>
      <span class="px-badge__label">Stable</span>
    </span>
    <button class="px-chip px-chip--primary px-chip--outline" type="button" data-px-chip data-px-selectable aria-pressed="false">
      <span class="px-chip__label">Filter chip</span>
    </button>
  </div>
</template>`
    })
  },
  {
    id: 'alerts',
    title: 'Alerts',
    description: 'Alerts and notices provide contextual feedback for inline messaging, form validation guidance, banners, stacked system notices, and page-level announcements.',
    demoDescription: 'Pixorix alerts separate semantic tone, visual treatment, and shell layout so teams can scale notices without duplicating styles or markup.',
    previewDescription: 'A framework-ready notice system showing inline alerts, banners, form notices, and stacked messaging.',
    preview: { type: 'alert' },
    variants: ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger', 'Neutral', 'Solid', 'Soft', 'Outline', 'Glass', 'Elevated', 'Minimal'],
    sizes: ['Compact', 'Default'],
    states: ['Open', 'Closing', 'Closed', 'Dismissible', 'Animated', 'Static'],
    accessibilityNotes: [
      'Use `role="status"` for passive updates and `role="alert"` only for urgent messaging.',
      'Dismiss controls should be clearly labeled and should not remove critical content before users can understand it.'
    ],
    browserNotes: [
      'Glass notices degrade safely when `backdrop-filter` support differs across browsers.',
      'Dismissal behavior must continue working when animation or transition behavior varies across browsers.'
    ],
    responsiveNotes: [
      'Banners and page notices wrap actions cleanly on smaller screens.',
      'Alert stacks preserve rhythm without requiring manual margins.'
    ],
    snippets: buildSnippets({
      title: 'Alert',
      html: `<div class="px-alert px-alert--success px-alert--soft" role="status">
  <div class="px-alert__icon" aria-hidden="true">✓</div>
  <div class="px-alert__body">
    <p class="px-alert__title">Deployment ready</p>
    <p class="px-alert__text">Your Pixorix starter tokens and shell are wired correctly.</p>
  </div>
</div>`,
      react: `<div className="px-alert px-alert--success px-alert--soft" role="status">
  <div className="px-alert__icon" aria-hidden="true">✓</div>
  <div className="px-alert__body">
    <p className="px-alert__title">Deployment ready</p>
    <p className="px-alert__text">Your Pixorix starter tokens and shell are wired correctly.</p>
  </div>
</div>`,
      angular: `<div class="px-alert px-alert--success px-alert--soft" role="status">
  <div class="px-alert__icon" aria-hidden="true">✓</div>
  <div class="px-alert__body">
    <p class="px-alert__title">Deployment ready</p>
    <p class="px-alert__text">Your Pixorix starter tokens and shell are wired correctly.</p>
  </div>
</div>`,
      vue: `<template>
  <div class="px-alert px-alert--success px-alert--soft" role="status">
    <div class="px-alert__icon" aria-hidden="true">✓</div>
    <div class="px-alert__body">
      <p class="px-alert__title">Deployment ready</p>
      <p class="px-alert__text">Your Pixorix starter tokens and shell are wired correctly.</p>
    </div>
  </div>
</template>`
    })
  },
  {
    id: 'forms',
    title: 'Forms',
    description: 'Forms provide one field contract for text controls, choices, uploads, validation messaging, grouped layout, and advanced entry shells.',
    demoDescription: 'Pixorix forms separate field shell, visual treatment, size, and semantic status so product teams can scale complex forms without rewriting control styles.',
    previewDescription: 'A framework-ready field system showing shell variants, validation, and grouped form layout.',
    preview: { type: 'form' },
    variants: ['Default', 'Filled', 'Outline', 'Soft', 'Glass', 'With icon', 'Prefix', 'Suffix'],
    sizes: ['SM', 'MD', 'LG'],
    states: ['Default', 'Focus-visible', 'Disabled', 'Read-only', 'Valid', 'Invalid', 'Success', 'Error', 'Warning'],
    accessibilityNotes: [
      'Always pair controls with visible labels and programmatically associated helper or validation text.',
      'Use `aria-invalid` for invalid states and preserve native control behavior where reliability matters.',
      'Advanced shells such as OTP, token input, and upload still need a clear overall label and keyboard path.'
    ],
    browserNotes: [
      'Preserve native behavior for select, range, file, and date controls instead of over-normalizing them.',
      'Verify Safari and Firefox for range styling, date input behavior, blur treatments, and overflow shells.'
    ],
    responsiveNotes: [
      'Use `.px-form-grid--responsive` for adaptive layout without page-only media queries.',
      'Inline forms and grouped actions stack automatically on smaller screens.'
    ],
    snippets: buildSnippets({
      title: 'Form Input',
      html: `<form class="px-form px-form--stacked">
  <div class="px-form-grid px-form-grid--2">
    <div class="px-field px-field--outline">
      <label class="px-label" for="form-email">Email address</label>
      <div class="px-field__shell">
        <span class="px-field__icon" aria-hidden="true">@</span>
        <input id="form-email" class="px-input" type="email" placeholder="team@pixorix.dev" />
      </div>
    </div>
    <div class="px-field px-field--filled is-error">
      <label class="px-label" for="form-name">Project name</label>
      <div class="px-field__shell">
        <input id="form-name" class="px-input" type="text" aria-invalid="true" placeholder="Pixorix docs" />
      </div>
      <p class="px-validation px-validation--error">Project name is required.</p>
    </div>
  </div>
</form>`,
      react: `<form className="px-form px-form--stacked">
  <div className="px-form-grid px-form-grid--2">
    <div className="px-field px-field--outline">
      <label className="px-label" htmlFor="form-email">Email address</label>
      <div className="px-field__shell">
        <span className="px-field__icon" aria-hidden="true">@</span>
        <input id="form-email" className="px-input" type="email" placeholder="team@pixorix.dev" />
      </div>
    </div>
    <div className="px-field px-field--filled is-error">
      <label className="px-label" htmlFor="form-name">Project name</label>
      <div className="px-field__shell">
        <input id="form-name" className="px-input" type="text" aria-invalid="true" placeholder="Pixorix docs" />
      </div>
      <p className="px-validation px-validation--error">Project name is required.</p>
    </div>
  </div>
</form>`,
      angular: `<form class="px-form px-form--stacked">
  <div class="px-form-grid px-form-grid--2">
    <div class="px-field px-field--outline">
      <label class="px-label" for="form-email">Email address</label>
      <div class="px-field__shell">
        <span class="px-field__icon" aria-hidden="true">@</span>
        <input id="form-email" class="px-input" type="email" placeholder="team@pixorix.dev" />
      </div>
    </div>
    <div class="px-field px-field--filled is-error">
      <label class="px-label" for="form-name">Project name</label>
      <div class="px-field__shell">
        <input id="form-name" class="px-input" type="text" aria-invalid="true" placeholder="Pixorix docs" />
      </div>
      <p class="px-validation px-validation--error">Project name is required.</p>
    </div>
  </div>
</form>`,
      vue: `<template>
  <form class="px-form px-form--stacked">
    <div class="px-form-grid px-form-grid--2">
      <div class="px-field px-field--outline">
        <label class="px-label" for="form-email">Email address</label>
        <div class="px-field__shell">
          <span class="px-field__icon" aria-hidden="true">@</span>
          <input id="form-email" class="px-input" type="email" placeholder="team@pixorix.dev" />
        </div>
      </div>
      <div class="px-field px-field--filled is-error">
        <label class="px-label" for="form-name">Project name</label>
        <div class="px-field__shell">
          <input id="form-name" class="px-input" type="text" aria-invalid="true" placeholder="Pixorix docs" />
        </div>
        <p class="px-validation px-validation--error">Project name is required.</p>
      </div>
    </div>
  </form>
</template>`
    })
  },
  {
    id: 'tabs',
    title: 'Tabs',
    description: 'Tabs divide related content into manageable panels without leaving the current context.',
    demoDescription: 'Use tabs for settings panes, documentation subsections, and compact information architecture.',
    previewDescription: 'A basic tab row and active panel preview.',
    preview: { type: 'tabs' },
    variants: ['Underline', 'Pill', 'Segmented'],
    sizes: ['Small', 'Default'],
    states: ['Active', 'Hover', 'Focus-visible', 'Disabled'],
    accessibilityNotes: [
      'Implement tabs with correct tablist, tab, and tabpanel semantics.',
      'Support arrow-key navigation between tabs.'
    ],
    browserNotes: [
      'Focus management must work consistently across Safari, Chromium browsers, and Firefox.',
      'Avoid custom keyboard behavior that breaks expected tab semantics.'
    ],
    responsiveNotes: [
      'Tab rows may scroll horizontally on narrow screens.',
      'Keep labels concise to avoid layout collapse.'
    ],
    snippets: buildSnippets({
      title: 'Tabs',
      html: `<div class="px-tablist" role="tablist">\n  <button class="px-tab px-tab--active" role="tab" aria-selected="true">Overview</button>\n  <button class="px-tab" role="tab" aria-selected="false">API</button>\n</div>`,
      react: `<div className="px-tablist" role="tablist">\n  <button className="px-tab px-tab--active" role="tab" aria-selected="true">Overview</button>\n  <button className="px-tab" role="tab" aria-selected="false">API</button>\n</div>`,
      angular: `<div class="px-tablist" role="tablist">\n  <button class="px-tab px-tab--active" role="tab" aria-selected="true">Overview</button>\n  <button class="px-tab" role="tab" aria-selected="false">API</button>\n</div>`,
      vue: `<template>\n  <div class="px-tablist" role="tablist">\n    <button class="px-tab px-tab--active" role="tab" aria-selected="true">Overview</button>\n    <button class="px-tab" role="tab" aria-selected="false">API</button>\n  </div>\n</template>`
    })
  },
  {
    id: 'modals',
    title: 'Modals',
    description: 'Modals temporarily interrupt the page flow for focused tasks or confirmations.',
    demoDescription: 'Use modals sparingly for short tasks that should block the underlying context.',
    previewDescription: 'A centered modal surface inside a dimmed overlay.',
    preview: { type: 'modal' },
    variants: ['Confirmation', 'Form modal', 'Information modal'],
    sizes: ['Small', 'Default', 'Wide'],
    states: ['Open', 'Closing', 'Blocked', 'Dismissed'],
    accessibilityNotes: [
      'Trap focus while the modal is open.',
      'Restore focus to the trigger when the modal closes.'
    ],
    browserNotes: [
      'Body scroll locking must be reliable on iOS Safari and Android browsers.',
      'Overlay stacking should remain stable with nested app shells.'
    ],
    responsiveNotes: [
      'Use smaller max-width values on mobile and allow internal scrolling.',
      'Keep primary actions visible without forcing excessive vertical travel.'
    ],
    snippets: buildSnippets({
      title: 'Modal',
      html: `<div class="px-modal-backdrop">\n  <div class="px-modal" role="dialog" aria-modal="true">\n    <h3>Confirm action</h3>\n    <p>Use modals for short, focused decisions.</p>\n  </div>\n</div>`,
      react: `<div className="px-modal-backdrop">\n  <div className="px-modal" role="dialog" aria-modal="true">\n    <h3>Confirm action</h3>\n    <p>Use modals for short, focused decisions.</p>\n  </div>\n</div>`,
      angular: `<div class="px-modal-backdrop">\n  <div class="px-modal" role="dialog" aria-modal="true">\n    <h3>Confirm action</h3>\n    <p>Use modals for short, focused decisions.</p>\n  </div>\n</div>`,
      vue: `<template>\n  <div class="px-modal-backdrop">\n    <div class="px-modal" role="dialog" aria-modal="true">\n      <h3>Confirm action</h3>\n      <p>Use modals for short, focused decisions.</p>\n    </div>\n  </div>\n</template>`
    })
  },
  {
    id: 'drawers',
    title: 'Drawers',
    description: 'Drawers reveal navigation, filters, or secondary workflows without navigating away.',
    demoDescription: 'Drawers work especially well for mobile navigation and dense app control panels.',
    previewDescription: 'A simple side drawer pattern beside application content.',
    preview: { type: 'drawer' },
    variants: ['Left drawer', 'Right drawer', 'Bottom sheet'],
    sizes: ['Narrow', 'Default', 'Wide'],
    states: ['Closed', 'Open', 'Pinned', 'Dismissed'],
    accessibilityNotes: [
      'Treat modal drawers like dialogs with focus management.',
      'Ensure the trigger and close actions are keyboard reachable.'
    ],
    browserNotes: [
      'Touch scrolling and overscroll behavior need attention on mobile Safari.',
      'Use robust stacking and backdrop handling in Chromium browsers and Firefox.'
    ],
    responsiveNotes: [
      'Collapse large desktop sidebars into drawers on smaller screens.',
      'Keep drawer width within a comfortable mobile viewport range.'
    ],
    snippets: buildSnippets({
      title: 'Drawer',
      html: `<aside class="px-drawer">\n  <h3>Navigation drawer</h3>\n  <ul>\n    <li>Overview</li>\n    <li>Components</li>\n    <li>Themes</li>\n  </ul>\n</aside>`,
      react: `<aside className="px-drawer">\n  <h3>Navigation drawer</h3>\n  <ul>\n    <li>Overview</li>\n    <li>Components</li>\n    <li>Themes</li>\n  </ul>\n</aside>`,
      angular: `<aside class="px-drawer">\n  <h3>Navigation drawer</h3>\n  <ul>\n    <li>Overview</li>\n    <li>Components</li>\n    <li>Themes</li>\n  </ul>\n</aside>`,
      vue: `<template>\n  <aside class="px-drawer">\n    <h3>Navigation drawer</h3>\n    <ul>\n      <li>Overview</li>\n      <li>Components</li>\n      <li>Themes</li>\n    </ul>\n  </aside>\n</template>`
    })
  },
  {
    id: 'tables',
    title: 'Tables',
    description: 'Tables present structured data with stable alignment and readable scanning patterns.',
    demoDescription: 'Use tables when row and column relationships matter more than freeform layout.',
    previewDescription: 'A simple three-column table for component status and usage mapping.',
    preview: { type: 'table' },
    variants: ['Default', 'Striped', 'Dense', 'Interactive'],
    sizes: ['Compact', 'Default'],
    states: ['Sorted', 'Hovered row', 'Selected row', 'Empty'],
    accessibilityNotes: [
      'Use proper table semantics with column headers and row relationships.',
      'Avoid replacing tables with div layouts when tabular structure matters.'
    ],
    browserNotes: [
      'Horizontal overflow handling is important on mobile browsers.',
      'Sticky headers should degrade safely where supported behavior varies.'
    ],
    responsiveNotes: [
      'Wrap tables in horizontal overflow containers on small screens.',
      'Keep cell content concise or provide truncation strategies.'
    ],
    snippets: buildSnippets({
      title: 'Table',
      html: `<table class="px-table">\n  <thead>\n    <tr><th>Component</th><th>Status</th><th>Usage</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Button</td><td>Stable</td><td>Actions</td></tr>\n  </tbody>\n</table>`,
      react: `<table className="px-table">\n  <thead>\n    <tr><th>Component</th><th>Status</th><th>Usage</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Button</td><td>Stable</td><td>Actions</td></tr>\n  </tbody>\n</table>`,
      angular: `<table class="px-table">\n  <thead>\n    <tr><th>Component</th><th>Status</th><th>Usage</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Button</td><td>Stable</td><td>Actions</td></tr>\n  </tbody>\n</table>`,
      vue: `<template>\n  <table class="px-table">\n    <thead>\n      <tr><th>Component</th><th>Status</th><th>Usage</th></tr>\n    </thead>\n    <tbody>\n      <tr><td>Button</td><td>Stable</td><td>Actions</td></tr>\n    </tbody>\n  </table>\n</template>`
    })
  },
  {
    id: 'toasts',
    title: 'Toasts',
    description: 'Toasts communicate transient system feedback without taking over the page.',
    demoDescription: 'Use toasts for confirmations and short status updates that do not require an immediate decision.',
    previewDescription: 'A compact toast message positioned as an overlay surface.',
    preview: { type: 'toast' },
    variants: ['Success', 'Info', 'Warning', 'Error'],
    sizes: ['Compact', 'Default'],
    states: ['Queued', 'Visible', 'Dismissing'],
    accessibilityNotes: [
      'Use polite live regions for non-blocking status messages.',
      'Allow enough time for users to read content before auto-dismiss.'
    ],
    browserNotes: [
      'Animation timing and overlay stacking should remain predictable across major browsers.',
      'Avoid positioning logic that conflicts with mobile safe areas.'
    ],
    responsiveNotes: [
      'Reposition or widen toasts on smaller screens for readability.',
      'Keep stacks shallow on mobile to avoid obscuring critical content.'
    ],
    snippets: buildSnippets({
      title: 'Toast',
      html: `<div class="px-toast" role="status">\n  <strong>Saved successfully</strong>\n  <p>Your theme settings were updated.</p>\n</div>`,
      react: `<div className="px-toast" role="status">\n  <strong>Saved successfully</strong>\n  <p>Your theme settings were updated.</p>\n</div>`,
      angular: `<div class="px-toast" role="status">\n  <strong>Saved successfully</strong>\n  <p>Your theme settings were updated.</p>\n</div>`,
      vue: `<template>\n  <div class="px-toast" role="status">\n    <strong>Saved successfully</strong>\n    <p>Your theme settings were updated.</p>\n  </div>\n</template>`
    })
  }
];
