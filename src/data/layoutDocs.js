function buildLayoutSnippets({ title, html, react, angular, vue }) {
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

export const layoutDocSections = [
  {
    id: 'containers',
    title: 'Containers',
    description: 'Containers define readable widths and page rhythm for documentation, marketing, and product surfaces.',
    demoDescription: 'Use container variants to control line length and layout density without rebuilding the page shell.',
    previewDescription: 'Three container widths showing narrow, default, and wide composition.',
    preview: { type: 'containers' },
    responsiveNotes: [
      'Scale container width by breakpoint rather than fixed pixel locks.',
      'Keep comfortable inline padding on mobile so content does not touch the viewport edge.'
    ],
    browserNotes: [
      'Containers should render consistently in Chromium browsers, Firefox, Safari, and iOS Safari.',
      'Avoid relying on newer viewport units alone for horizontal sizing.'
    ],
    snippets: buildLayoutSnippets({
      title: 'Containers',
      html: `<section class="px-container px-container--wide">\n  <div class="px-surface">Wide layout content</div>\n</section>`,
      react: `<section className="px-container px-container--wide">\n  <div className="px-surface">Wide layout content</div>\n</section>`,
      angular: `<section class="px-container px-container--wide">\n  <div class="px-surface">Wide layout content</div>\n</section>`,
      vue: `<template>\n  <section class="px-container px-container--wide">\n    <div class="px-surface">Wide layout content</div>\n  </section>\n</template>`
    })
  },
  {
    id: 'grid',
    title: 'Grid',
    description: 'Grid layouts are the default choice for cards, doc tiles, metrics, and multi-panel content.',
    demoDescription: 'Use grid when content should distribute into repeatable tracks with predictable wrapping.',
    previewDescription: 'A simple six-cell responsive grid.',
    preview: { type: 'grid' },
    responsiveNotes: [
      'Shift from multi-column grids to fewer columns progressively across breakpoints.',
      'Use auto-fit or explicit breakpoints depending on content density and predictability.'
    ],
    browserNotes: [
      'CSS Grid is stable across modern browsers, but test gap behavior and minmax usage on Safari variants.',
      'Provide overflow strategies when content widths exceed expected grid tracks.'
    ],
    snippets: buildLayoutSnippets({
      title: 'Grid',
      html: `<section class="px-grid px-grid--3">\n  <article class="px-card">One</article>\n  <article class="px-card">Two</article>\n  <article class="px-card">Three</article>\n</section>`,
      react: `<section className="px-grid px-grid--3">\n  <article className="px-card">One</article>\n  <article className="px-card">Two</article>\n  <article className="px-card">Three</article>\n</section>`,
      angular: `<section class="px-grid px-grid--3">\n  <article class="px-card">One</article>\n  <article class="px-card">Two</article>\n  <article class="px-card">Three</article>\n</section>`,
      vue: `<template>\n  <section class="px-grid px-grid--3">\n    <article class="px-card">One</article>\n    <article class="px-card">Two</article>\n    <article class="px-card">Three</article>\n  </section>\n</template>`
    })
  },
  {
    id: 'stack-layout',
    title: 'Stack Layout',
    description: 'Stack layout is ideal for vertical rhythm, form sections, article content, and content-first product screens.',
    demoDescription: 'Use stack patterns when vertical spacing matters more than horizontal distribution.',
    previewDescription: 'A simple vertical stack with three surfaces.',
    preview: { type: 'stack' },
    responsiveNotes: [
      'Stack layouts are naturally mobile friendly and often need only spacing adjustments.',
      'Reduce spacing density for smaller screens if content height becomes excessive.'
    ],
    browserNotes: [
      'Use stable block flow and gap-based spacing to avoid margin collapse issues.',
      'Ensure spacing utilities do not conflict with browser default margins.'
    ],
    snippets: buildLayoutSnippets({
      title: 'Stack Layout',
      html: `<section class="px-stack px-stack--lg">\n  <article class="px-surface">Header block</article>\n  <article class="px-surface">Content block</article>\n</section>`,
      react: `<section className="px-stack px-stack--lg">\n  <article className="px-surface">Header block</article>\n  <article className="px-surface">Content block</article>\n</section>`,
      angular: `<section class="px-stack px-stack--lg">\n  <article class="px-surface">Header block</article>\n  <article class="px-surface">Content block</article>\n</section>`,
      vue: `<template>\n  <section class="px-stack px-stack--lg">\n    <article class="px-surface">Header block</article>\n    <article class="px-surface">Content block</article>\n  </section>\n</template>`
    })
  },
  {
    id: 'split-layout',
    title: 'Split Layout',
    description: 'Split layouts balance primary and secondary regions, often for hero sections, docs panels, or detail views.',
    demoDescription: 'Use split layouts when one region should lead while another supports it without equal weight.',
    previewDescription: 'A primary and secondary split composition.',
    preview: { type: 'split' },
    responsiveNotes: [
      'Collapse split layouts into one column on smaller screens while preserving reading order.',
      'Keep primary content first in source order for accessibility and responsive behavior.'
    ],
    browserNotes: [
      'Flex and grid split patterns are stable across major browsers when widths stay explicit.',
      'Avoid brittle percentage math that can break under intrinsic content pressure.'
    ],
    snippets: buildLayoutSnippets({
      title: 'Split Layout',
      html: `<section class="px-split">\n  <article class="px-surface">Primary content</article>\n  <aside class="px-surface">Secondary content</aside>\n</section>`,
      react: `<section className="px-split">\n  <article className="px-surface">Primary content</article>\n  <aside className="px-surface">Secondary content</aside>\n</section>`,
      angular: `<section class="px-split">\n  <article class="px-surface">Primary content</article>\n  <aside class="px-surface">Secondary content</aside>\n</section>`,
      vue: `<template>\n  <section class="px-split">\n    <article class="px-surface">Primary content</article>\n    <aside class="px-surface">Secondary content</aside>\n  </section>\n</template>`
    })
  },
  {
    id: 'dashboard-layout',
    title: 'Dashboard Layout',
    description: 'Dashboard layouts combine side navigation, dense content panels, and responsive metric regions.',
    demoDescription: 'Use dashboard layouts for product applications, internal tools, and admin interfaces.',
    previewDescription: 'A sidebar plus dense main region with stats and primary content.',
    preview: { type: 'dashboard' },
    responsiveNotes: [
      'Collapse fixed sidebars into drawers on tablet and mobile.',
      'Preserve high-priority panels above dense secondary metrics in smaller viewports.'
    ],
    browserNotes: [
      'Sticky panels and overflow regions need testing on Safari and iOS Safari.',
      'Avoid nested scrolling traps where touch behavior becomes unpredictable.'
    ],
    snippets: buildLayoutSnippets({
      title: 'Dashboard Layout',
      html: `<section class="px-dashboard">\n  <aside class="px-sidebar">Sidebar</aside>\n  <main class="px-main-grid">Main content</main>\n</section>`,
      react: `<section className="px-dashboard">\n  <aside className="px-sidebar">Sidebar</aside>\n  <main className="px-main-grid">Main content</main>\n</section>`,
      angular: `<section class="px-dashboard">\n  <aside class="px-sidebar">Sidebar</aside>\n  <main class="px-main-grid">Main content</main>\n</section>`,
      vue: `<template>\n  <section class="px-dashboard">\n    <aside class="px-sidebar">Sidebar</aside>\n    <main class="px-main-grid">Main content</main>\n  </section>\n</template>`
    })
  },
  {
    id: 'odd-even-columns',
    title: 'Odd And Even Columns',
    description: 'Pixorix layout utilities should support even grids, odd counts, and asymmetrical compositions without requiring one-off CSS each time.',
    demoDescription: 'This example explicitly shows 2, 3, 4, and 5 column layouts plus an asymmetrical variant.',
    previewDescription: 'Use these patterns for card groups, content hubs, media layouts, and flexible dashboard regions.',
    preview: { type: 'odd-even' },
    responsiveNotes: [
      'Odd column counts should collapse predictably as viewports narrow rather than leaving broken final rows.',
      'Asymmetrical layouts should revert to a linear stack when there is not enough inline space.'
    ],
    browserNotes: [
      'Test fractional track distribution in Safari and Firefox when using asymmetrical grid spans.',
      'Keep column gap values consistent to prevent visual jitter across engines.'
    ],
    snippets: buildLayoutSnippets({
      title: 'Odd Even Columns',
      html: `<section class="px-grid px-grid--5">\n  <article class="px-card">A</article>\n  <article class="px-card">B</article>\n  <article class="px-card">C</article>\n  <article class="px-card">D</article>\n  <article class="px-card">E</article>\n</section>\n\n<section class="px-grid px-grid--asym">\n  <article class="px-card px-col-span-2">Primary</article>\n  <article class="px-card">Meta</article>\n  <article class="px-card">Meta</article>\n</section>`,
      react: `<section className="px-grid px-grid--5">\n  <article className="px-card">A</article>\n  <article className="px-card">B</article>\n  <article className="px-card">C</article>\n  <article className="px-card">D</article>\n  <article className="px-card">E</article>\n</section>\n\n<section className="px-grid px-grid--asym">\n  <article className="px-card px-col-span-2">Primary</article>\n  <article className="px-card">Meta</article>\n  <article className="px-card">Meta</article>\n</section>`,
      angular: `<section class="px-grid px-grid--5">\n  <article class="px-card">A</article>\n  <article class="px-card">B</article>\n  <article class="px-card">C</article>\n  <article class="px-card">D</article>\n  <article class="px-card">E</article>\n</section>\n\n<section class="px-grid px-grid--asym">\n  <article class="px-card px-col-span-2">Primary</article>\n  <article class="px-card">Meta</article>\n  <article class="px-card">Meta</article>\n</section>`,
      vue: `<template>\n  <section class="px-grid px-grid--5">\n    <article class="px-card">A</article>\n    <article class="px-card">B</article>\n    <article class="px-card">C</article>\n    <article class="px-card">D</article>\n    <article class="px-card">E</article>\n  </section>\n\n  <section class="px-grid px-grid--asym">\n    <article class="px-card px-col-span-2">Primary</article>\n    <article class="px-card">Meta</article>\n    <article class="px-card">Meta</article>\n  </section>\n</template>`
    })
  },
  {
    id: 'responsive-behavior',
    title: 'Responsive Behavior',
    description: 'Responsive behavior is the connective tissue across all layout primitives, not a separate afterthought.',
    demoDescription: 'Think in terms of priority, collapse strategy, and spacing shifts as the viewport narrows.',
    previewDescription: 'A simple progression from desktop to tablet to mobile layout intent.',
    preview: { type: 'responsive' },
    responsiveNotes: [
      'Move from multi-column to single-column patterns based on readability, not arbitrary device classes.',
      'Preserve source order so assistive technologies and mobile layouts follow the same content hierarchy.'
    ],
    browserNotes: [
      'Check viewport unit behavior on mobile browsers, especially iOS Safari.',
      'Test overflow, fixed regions, and sticky behavior across Chromium, Firefox, Safari, and Android browsers.'
    ],
    snippets: buildLayoutSnippets({
      title: 'Responsive Behavior',
      html: `@media (max-width: 960px) {\n  .px-split,\n  .px-dashboard,\n  .px-grid--asym {\n    grid-template-columns: 1fr;\n  }\n}`,
      react: `@media (max-width: 960px) {\n  .px-split,\n  .px-dashboard,\n  .px-grid--asym {\n    grid-template-columns: 1fr;\n  }\n}`,
      angular: `@media (max-width: 960px) {\n  .px-split,\n  .px-dashboard,\n  .px-grid--asym {\n    grid-template-columns: 1fr;\n  }\n}`,
      vue: `@media (max-width: 960px) {\n  .px-split,\n  .px-dashboard,\n  .px-grid--asym {\n    grid-template-columns: 1fr;\n  }\n}`
    })
  }
];
