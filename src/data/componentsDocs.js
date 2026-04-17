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
    id: 'buttons',
    title: 'Buttons',
    description: 'Buttons provide high-clarity actions for forms, page flows, and product navigation.',
    demoDescription: 'Buttons should communicate action priority clearly without relying on framework-specific behavior.',
    previewDescription: 'A starter button set showing primary, secondary, and ghost actions.',
    preview: { type: 'buttons' },
    variants: ['Primary', 'Secondary', 'Ghost', 'Destructive'],
    sizes: ['Small', 'Default', 'Large'],
    states: ['Default', 'Hover', 'Focus-visible', 'Disabled', 'Loading'],
    accessibilityNotes: [
      'Use real button elements for in-page actions.',
      'Ensure visible focus styles remain intact.',
      'Provide accessible names that describe the action clearly.'
    ],
    browserNotes: [
      'Button styling should be normalized across Chrome, Edge, Firefox, Safari, Opera, and mobile browsers.',
      'Avoid removing native button semantics while styling.'
    ],
    responsiveNotes: [
      'Allow buttons to wrap or stack in narrow layouts.',
      'Preserve a minimum tap target size on touch devices.'
    ],
    snippets: buildSnippets({
      title: 'Button',
      html: `<button class="px-button px-button--primary">Primary</button>`,
      react: `<button className="px-button px-button--primary">Primary</button>`,
      angular: `<button class="px-button px-button--primary">Primary</button>`,
      vue: `<template>\n  <button class="px-button px-button--primary">Primary</button>\n</template>`
    })
  },
  {
    id: 'cards',
    title: 'Cards',
    description: 'Cards group related content, metadata, and actions inside a stable surface.',
    demoDescription: 'Use cards when content needs a distinct container with hierarchy and spacing.',
    previewDescription: 'A starter card surface for marketing and product content.',
    preview: { type: 'card' },
    variants: ['Default', 'Elevated', 'Outlined', 'Feature'],
    sizes: ['Compact', 'Default', 'Expanded'],
    states: ['Resting', 'Hover', 'Selected', 'Interactive'],
    accessibilityNotes: [
      'Keep semantic headings and content order intact within the card.',
      'Only add interactive semantics when the full card is clickable.'
    ],
    browserNotes: [
      'Shadows and borders should degrade gracefully where backdrop or blur effects differ.',
      'Use clear borders so the surface remains readable in lower-contrast environments.'
    ],
    responsiveNotes: [
      'Cards should expand naturally within grid layouts.',
      'Long text should wrap without collapsing internal spacing.'
    ],
    snippets: buildSnippets({
      title: 'Card',
      html: `<article class="px-card">\n  <p class="px-eyebrow">Starter card</p>\n  <h3>Card title</h3>\n  <p>Use cards to group content and actions.</p>\n</article>`,
      react: `<article className="px-card">\n  <p className="px-eyebrow">Starter card</p>\n  <h3>Card title</h3>\n  <p>Use cards to group content and actions.</p>\n</article>`,
      angular: `<article class="px-card">\n  <p class="px-eyebrow">Starter card</p>\n  <h3>Card title</h3>\n  <p>Use cards to group content and actions.</p>\n</article>`,
      vue: `<template>\n  <article class="px-card">\n    <p class="px-eyebrow">Starter card</p>\n    <h3>Card title</h3>\n    <p>Use cards to group content and actions.</p>\n  </article>\n</template>`
    })
  },
  {
    id: 'badges',
    title: 'Badges',
    description: 'Badges highlight compact status, state, or categorization information.',
    demoDescription: 'Badges are best kept short, semantic, and visually restrained.',
    previewDescription: 'A compact set of badges for success, information, and beta states.',
    preview: { type: 'badge' },
    variants: ['Neutral', 'Success', 'Info', 'Warning'],
    sizes: ['Small', 'Default'],
    states: ['Static', 'Emphasized', 'Muted'],
    accessibilityNotes: [
      'Do not rely on color alone to communicate badge meaning.',
      'Keep badge text concise and understandable in isolation.'
    ],
    browserNotes: [
      'Rounded pill shapes should render consistently across modern browsers.',
      'Spacing should remain readable even with system font substitution.'
    ],
    responsiveNotes: [
      'Badges can wrap inside dense layouts without losing legibility.',
      'Use compact spacing when multiple badges appear in one row.'
    ],
    snippets: buildSnippets({
      title: 'Badge',
      html: `<span class="px-badge px-badge--success">Stable</span>`,
      react: `<span className="px-badge px-badge--success">Stable</span>`,
      angular: `<span class="px-badge px-badge--success">Stable</span>`,
      vue: `<template>\n  <span class="px-badge px-badge--success">Stable</span>\n</template>`
    })
  },
  {
    id: 'alerts',
    title: 'Alerts',
    description: 'Alerts provide contextual feedback for updates, warnings, and system status.',
    demoDescription: 'Use alerts to surface important information inline without interrupting the entire workflow.',
    previewDescription: 'A success alert surface with heading and supporting message.',
    preview: { type: 'alert' },
    variants: ['Info', 'Success', 'Warning', 'Critical'],
    sizes: ['Compact', 'Default'],
    states: ['Inline', 'Dismissible', 'Persistent'],
    accessibilityNotes: [
      'Use appropriate live region semantics for dynamic alerts.',
      'Critical content should not disappear before assistive tech can announce it.'
    ],
    browserNotes: [
      'Avoid depending on unsupported animation behavior for visibility.',
      'Maintain readable color contrast across browser color rendering differences.'
    ],
    responsiveNotes: [
      'Stack alert content vertically on smaller screens.',
      'Keep dismiss controls easy to reach on touch devices.'
    ],
    snippets: buildSnippets({
      title: 'Alert',
      html: `<div class="px-alert px-alert--success" role="status">\n  <strong>Deployment ready</strong>\n  <p>Your Pixorix starter tokens are loaded.</p>\n</div>`,
      react: `<div className="px-alert px-alert--success" role="status">\n  <strong>Deployment ready</strong>\n  <p>Your Pixorix starter tokens are loaded.</p>\n</div>`,
      angular: `<div class="px-alert px-alert--success" role="status">\n  <strong>Deployment ready</strong>\n  <p>Your Pixorix starter tokens are loaded.</p>\n</div>`,
      vue: `<template>\n  <div class="px-alert px-alert--success" role="status">\n    <strong>Deployment ready</strong>\n    <p>Your Pixorix starter tokens are loaded.</p>\n  </div>\n</template>`
    })
  },
  {
    id: 'forms',
    title: 'Forms',
    description: 'Form controls should provide clear labels, comfortable input spacing, and stable validation patterns.',
    demoDescription: 'Pixorix form fields are designed for onboarding flows, account settings, and product forms.',
    previewDescription: 'A simple stacked field preview for email and project naming inputs.',
    preview: { type: 'form' },
    variants: ['Default field', 'Filled field', 'Validation states'],
    sizes: ['Small', 'Default', 'Large'],
    states: ['Resting', 'Focus', 'Error', 'Disabled', 'Read-only'],
    accessibilityNotes: [
      'Always pair inputs with visible labels.',
      'Use helper text and error text that can be announced by assistive technologies.'
    ],
    browserNotes: [
      'Native form controls vary slightly across browsers; preserve usability over pixel-perfect sameness.',
      'Do not remove platform-specific focus behavior without replacing it accessibly.'
    ],
    responsiveNotes: [
      'Fields should stretch to container width cleanly.',
      'Multi-column forms should collapse gracefully on smaller screens.'
    ],
    snippets: buildSnippets({
      title: 'Form Input',
      html: `<label class="px-field">\n  <span>Email address</span>\n  <input type="email" placeholder="team@pixorix.dev" />\n</label>`,
      react: `<label className="px-field">\n  <span>Email address</span>\n  <input type="email" placeholder="team@pixorix.dev" />\n</label>`,
      angular: `<label class="px-field">\n  <span>Email address</span>\n  <input type="email" placeholder="team@pixorix.dev" />\n</label>`,
      vue: `<template>\n  <label class="px-field">\n    <span>Email address</span>\n    <input type="email" placeholder="team@pixorix.dev" />\n  </label>\n</template>`
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
