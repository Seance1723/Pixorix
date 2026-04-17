function buildUtilitySnippets({ title, html, react, angular, vue }) {
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

export const utilityDocSections = [
  {
    id: 'spacing',
    title: 'Spacing',
    description: 'Spacing utilities control margin, padding, and stack rhythm without needing bespoke CSS for every layout.',
    demoDescription: 'Use spacing utilities to tune vertical rhythm and composition density quickly.',
    previewDescription: 'A simple stack of surfaces showing spacing progression.',
    preview: { type: 'spacing' },
    snippets: buildUtilitySnippets({
      title: 'Spacing',
      html: `<div class="px-stack px-gap-4">\n  <section class="px-surface px-p-4">First block</section>\n  <section class="px-surface px-p-4">Second block</section>\n</div>`,
      react: `<div className="px-stack px-gap-4">\n  <section className="px-surface px-p-4">First block</section>\n  <section className="px-surface px-p-4">Second block</section>\n</div>`,
      angular: `<div class="px-stack px-gap-4">\n  <section class="px-surface px-p-4">First block</section>\n  <section class="px-surface px-p-4">Second block</section>\n</div>`,
      vue: `<template>\n  <div class="px-stack px-gap-4">\n    <section class="px-surface px-p-4">First block</section>\n    <section class="px-surface px-p-4">Second block</section>\n  </div>\n</template>`
    })
  },
  {
    id: 'display',
    title: 'Display',
    description: 'Display utilities switch structural behavior quickly for block, inline, flex, grid, and hidden states.',
    demoDescription: 'Use display utilities for rapid layout changes without rewriting component markup.',
    previewDescription: 'Representative display values for common utility usage.',
    preview: { type: 'display' },
    snippets: buildUtilitySnippets({
      title: 'Display',
      html: `<div class="px-d-flex px-gap-3">\n  <span class="px-d-inline-flex">inline-flex</span>\n  <span class="px-d-block">block</span>\n</div>`,
      react: `<div className="px-d-flex px-gap-3">\n  <span className="px-d-inline-flex">inline-flex</span>\n  <span className="px-d-block">block</span>\n</div>`,
      angular: `<div class="px-d-flex px-gap-3">\n  <span class="px-d-inline-flex">inline-flex</span>\n  <span class="px-d-block">block</span>\n</div>`,
      vue: `<template>\n  <div class="px-d-flex px-gap-3">\n    <span class="px-d-inline-flex">inline-flex</span>\n    <span class="px-d-block">block</span>\n  </div>\n</template>`
    })
  },
  {
    id: 'flex',
    title: 'Flex',
    description: 'Flex utilities help align, distribute, and reorder content in one-dimensional layouts.',
    demoDescription: 'Flex is useful for button groups, toolbars, nav rows, and compact alignment problems.',
    previewDescription: 'A horizontal flex row showing distributed content blocks.',
    preview: { type: 'flex' },
    snippets: buildUtilitySnippets({
      title: 'Flex',
      html: `<div class="px-d-flex px-justify-between px-align-center px-gap-3">\n  <div>Start</div>\n  <div>Center</div>\n  <div>End</div>\n</div>`,
      react: `<div className="px-d-flex px-justify-between px-align-center px-gap-3">\n  <div>Start</div>\n  <div>Center</div>\n  <div>End</div>\n</div>`,
      angular: `<div class="px-d-flex px-justify-between px-align-center px-gap-3">\n  <div>Start</div>\n  <div>Center</div>\n  <div>End</div>\n</div>`,
      vue: `<template>\n  <div class="px-d-flex px-justify-between px-align-center px-gap-3">\n    <div>Start</div>\n    <div>Center</div>\n    <div>End</div>\n  </div>\n</template>`
    })
  },
  {
    id: 'grid',
    title: 'Grid',
    description: 'Grid utilities create multi-column layouts for cards, dashboards, examples, and documentation tiles.',
    demoDescription: 'Use grid utilities when repeated tracks and predictable wrapping matter more than inline alignment.',
    previewDescription: 'A simple four-cell grid surface.',
    preview: { type: 'grid' },
    snippets: buildUtilitySnippets({
      title: 'Grid Utility',
      html: `<div class="px-grid px-grid--2 px-gap-4">\n  <div class="px-surface">One</div>\n  <div class="px-surface">Two</div>\n  <div class="px-surface">Three</div>\n  <div class="px-surface">Four</div>\n</div>`,
      react: `<div className="px-grid px-grid--2 px-gap-4">\n  <div className="px-surface">One</div>\n  <div className="px-surface">Two</div>\n  <div className="px-surface">Three</div>\n  <div className="px-surface">Four</div>\n</div>`,
      angular: `<div class="px-grid px-grid--2 px-gap-4">\n  <div class="px-surface">One</div>\n  <div class="px-surface">Two</div>\n  <div class="px-surface">Three</div>\n  <div class="px-surface">Four</div>\n</div>`,
      vue: `<template>\n  <div class="px-grid px-grid--2 px-gap-4">\n    <div class="px-surface">One</div>\n    <div class="px-surface">Two</div>\n    <div class="px-surface">Three</div>\n    <div class="px-surface">Four</div>\n  </div>\n</template>`
    })
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Typography utilities control scale, emphasis, alignment, weight, and text rhythm for content surfaces.',
    demoDescription: 'Use typography utilities for headings, lead text, captions, and alignment without fragmenting text styling rules.',
    previewDescription: 'A small text stack showing heading, lead, and body patterns.',
    preview: { type: 'typography' },
    snippets: buildUtilitySnippets({
      title: 'Typography',
      html: `<h2 class="px-text-display">Display heading</h2>\n<p class="px-text-lead">Lead paragraph utility.</p>\n<p class="px-text-body">Body copy utility.</p>`,
      react: `<h2 className="px-text-display">Display heading</h2>\n<p className="px-text-lead">Lead paragraph utility.</p>\n<p className="px-text-body">Body copy utility.</p>`,
      angular: `<h2 class="px-text-display">Display heading</h2>\n<p class="px-text-lead">Lead paragraph utility.</p>\n<p class="px-text-body">Body copy utility.</p>`,
      vue: `<template>\n  <h2 class="px-text-display">Display heading</h2>\n  <p class="px-text-lead">Lead paragraph utility.</p>\n  <p class="px-text-body">Body copy utility.</p>\n</template>`
    })
  },
  {
    id: 'colors',
    title: 'Colors',
    description: 'Color utilities apply brand, semantic, and surface values consistently for text, fills, and backgrounds.',
    demoDescription: 'Use color utilities to prototype quickly and reinforce token-driven semantics.',
    previewDescription: 'Three small color surfaces for accent, surface, and text emphasis.',
    preview: { type: 'colors' },
    snippets: buildUtilitySnippets({
      title: 'Colors',
      html: `<div class="px-bg-accent px-text-on-accent px-p-4">Accent</div>\n<div class="px-bg-surface px-text-default px-p-4">Surface</div>`,
      react: `<div className="px-bg-accent px-text-on-accent px-p-4">Accent</div>\n<div className="px-bg-surface px-text-default px-p-4">Surface</div>`,
      angular: `<div class="px-bg-accent px-text-on-accent px-p-4">Accent</div>\n<div class="px-bg-surface px-text-default px-p-4">Surface</div>`,
      vue: `<template>\n  <div class="px-bg-accent px-text-on-accent px-p-4">Accent</div>\n  <div class="px-bg-surface px-text-default px-p-4">Surface</div>\n</template>`
    })
  },
  {
    id: 'shadows',
    title: 'Shadows',
    description: 'Shadow utilities control elevation and surface depth across cards, overlays, and floating UI.',
    demoDescription: 'Use shadow utilities sparingly to reinforce hierarchy rather than decorate every surface.',
    previewDescription: 'A quick shadow scale with small, medium, and large elevation.',
    preview: { type: 'shadows' },
    snippets: buildUtilitySnippets({
      title: 'Shadows',
      html: `<div class="px-shadow-sm px-surface px-p-4">Shadow sm</div>\n<div class="px-shadow-md px-surface px-p-4">Shadow md</div>`,
      react: `<div className="px-shadow-sm px-surface px-p-4">Shadow sm</div>\n<div className="px-shadow-md px-surface px-p-4">Shadow md</div>`,
      angular: `<div class="px-shadow-sm px-surface px-p-4">Shadow sm</div>\n<div class="px-shadow-md px-surface px-p-4">Shadow md</div>`,
      vue: `<template>\n  <div class="px-shadow-sm px-surface px-p-4">Shadow sm</div>\n  <div class="px-shadow-md px-surface px-p-4">Shadow md</div>\n</template>`
    })
  },
  {
    id: 'radius',
    title: 'Radius',
    description: 'Radius utilities standardize corners across surfaces, pills, fields, modals, and overlays.',
    demoDescription: 'Use radius utilities to keep a consistent shape language across the system.',
    previewDescription: 'A simple radius scale from small to fully rounded.',
    preview: { type: 'radius' },
    snippets: buildUtilitySnippets({
      title: 'Radius',
      html: `<div class="px-radius-sm px-surface px-p-4">sm</div>\n<div class="px-radius-full px-surface px-p-4">full</div>`,
      react: `<div className="px-radius-sm px-surface px-p-4">sm</div>\n<div className="px-radius-full px-surface px-p-4">full</div>`,
      angular: `<div class="px-radius-sm px-surface px-p-4">sm</div>\n<div class="px-radius-full px-surface px-p-4">full</div>`,
      vue: `<template>\n  <div class="px-radius-sm px-surface px-p-4">sm</div>\n  <div class="px-radius-full px-surface px-p-4">full</div>\n</template>`
    })
  },
  {
    id: 'visibility',
    title: 'Visibility',
    description: 'Visibility utilities manage hidden, visible, print-only, and breakpoint-specific display behavior.',
    demoDescription: 'Use visibility utilities when content needs contextual rendering rules across screen sizes or media types.',
    previewDescription: 'A lightweight reminder that visibility utilities control context, not content meaning.',
    preview: { type: 'visibility' },
    snippets: buildUtilitySnippets({
      title: 'Visibility',
      html: `<div class="px-hide-mobile">Visible above mobile breakpoint</div>\n<div class="px-show-mobile">Visible on mobile</div>`,
      react: `<div className="px-hide-mobile">Visible above mobile breakpoint</div>\n<div className="px-show-mobile">Visible on mobile</div>`,
      angular: `<div class="px-hide-mobile">Visible above mobile breakpoint</div>\n<div class="px-show-mobile">Visible on mobile</div>`,
      vue: `<template>\n  <div class="px-hide-mobile">Visible above mobile breakpoint</div>\n  <div class="px-show-mobile">Visible on mobile</div>\n</template>`
    })
  },
  {
    id: 'helper-utilities',
    title: 'Helper Utilities',
    description: 'Helper utilities cover common one-off behaviors such as truncation, overflow, accessibility-only text, and interaction shortcuts.',
    demoDescription: 'Helpers should stay small and composable so they solve narrow problems without becoming hidden layout systems.',
    previewDescription: 'Representative helper categories for truncation, assistive text, and overflow handling.',
    preview: { type: 'helpers' },
    snippets: buildUtilitySnippets({
      title: 'Helper Utilities',
      html: `<p class="px-truncate">This line truncates when space is constrained.</p>\n<span class="px-sr-only">Screen reader only text</span>`,
      react: `<p className="px-truncate">This line truncates when space is constrained.</p>\n<span className="px-sr-only">Screen reader only text</span>`,
      angular: `<p class="px-truncate">This line truncates when space is constrained.</p>\n<span class="px-sr-only">Screen reader only text</span>`,
      vue: `<template>\n  <p class="px-truncate">This line truncates when space is constrained.</p>\n  <span class="px-sr-only">Screen reader only text</span>\n</template>`
    })
  }
];
