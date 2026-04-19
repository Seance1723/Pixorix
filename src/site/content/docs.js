const createDoc = (doc) => doc;

export const docsEntries = [
  createDoc({
    slug: 'index',
    path: '/docs',
    label: 'Docs Home',
    group: 'Foundations',
    title: 'Pixorix documentation',
    intro: 'Everything you need to launch product-grade interfaces with Pixorix, from installation to theming, layouts, forms, motion, and advanced components.',
    summary: [
      'Start with installation and quick start for the smallest useful setup.',
      'Move into layout, utilities, and components when building production screens.',
      'Use themes, dark mode, motion, and customization docs to shape a branded system.'
    ],
    sections: [
      {
        id: 'what-is-covered',
        title: 'What is covered',
        body: [
          'The docs portal is organized around the same way teams usually work: foundation first, then layout and utilities, then components and product polish.',
          'Each guide includes implementation notes, browser expectations, accessibility guidance, and starter patterns you can adapt quickly.'
        ],
        bullets: ['Installation and setup flow', 'Layout and responsive composition', 'Components, themes, motion, and customization']
      },
      {
        id: 'quick-links',
        title: 'Quick links',
        body: ['Use these starting points when you are setting up a new project or evaluating Pixorix for an existing product stack.'],
        bullets: ['Installation', 'Quick Start', 'Layout', 'Themes', 'JavaScript API']
      }
    ]
  }),
  createDoc({
    slug: 'installation',
    path: '/docs/installation',
    label: 'Installation',
    group: 'Foundations',
    title: 'Installation',
    intro: 'Add Pixorix as a styling and behavior layer, then wire its SCSS, JavaScript helpers, and theme attributes into your app shell.',
    summary: ['Install the package and choose your bundling strategy.', 'Import core styles before project overrides.', 'Initialize JS behavior only where you need it.'],
    sections: [
      {
        id: 'install-steps',
        title: 'Install steps',
        body: ['Install Pixorix with your package manager and keep your framework runtime separate from the styling layer.'],
        code: `npm install pixorix\n# or\npnpm add pixorix`,
        note: 'Start with the full bundle while evaluating. Split imports later if you need finer bundle control.',
        noteTone: 'tip'
      },
      {
        id: 'setup-flow',
        title: 'Setup flow',
        body: ['Import the compiled framework styles first, then your brand or application overrides.', 'Initialize Pixorix behaviors after the root document exists.'],
        code: `import 'pixorix/dist/pixorix.css';\nimport './app.scss';\n\nimport { initPixorix } from 'pixorix';\n\ninitPixorix(document);`
      },
      {
        id: 'starter-file-structure',
        title: 'Starter file structure',
        body: ['Keep framework setup explicit. Separate app-level styles from theme overrides and route-level composition.'],
        code: `src/\n  components/\n  routes/\n  styles/\n    app.scss\n    themes/\n  main.jsx`
      }
    ]
  }),
  createDoc({
    slug: 'quick-start',
    path: '/docs/quick-start',
    label: 'Quick Start',
    group: 'Foundations',
    title: 'Quick start',
    intro: 'The fastest path to a useful screen in Pixorix is a button, a card, a grid, and a theme toggle. That combination exposes the framework philosophy immediately.',
    summary: ['Compose with cards and grids, not one-off wrappers.', 'Use utility classes for rhythm, not for every visual choice.', 'Treat themes as an app shell concern.'],
    sections: [
      {
        id: 'minimal-setup',
        title: 'Minimal setup example',
        body: ['This markup creates a stable starting point with a container, hero block, and card cluster.'],
        code: `<main class="px-section">\n  <div class="px-container">\n    <div class="px-grid px-grid--cols-2 xl:px-grid--cols-3">\n      <article class="px-card">Build faster</article>\n      <article class="px-card">Theme once</article>\n      <article class="px-card">Ship polished UI</article>\n    </div>\n  </div>\n</main>`
      },
      {
        id: 'first-components',
        title: 'First button, card, and grid usage',
        body: ['Use expressive defaults first. Reach for variants only when the product genuinely needs a different emphasis pattern.'],
        bullets: ['Buttons for primary and secondary action weight', 'Cards for grouping and surface elevation', 'Grid utilities for balanced 2, 3, 4, 5, and 6-column compositions']
      },
      {
        id: 'first-theme',
        title: 'First theme usage',
        body: ['Themes are driven by data attributes and CSS variables, so changing visual mode stays predictable across routes and components.'],
        code: `document.documentElement.setAttribute('data-px-theme', 'dark');`
      }
    ]
  }),
  createDoc({
    slug: 'layout',
    path: '/docs/layout',
    label: 'Layout',
    group: 'System',
    title: 'Layout',
    intro: 'Pixorix layout primitives are designed for real product surfaces, not just symmetric marketing grids. Expect stable odd and even column handling, editorial splits, dashboard shells, sticky rails, and showcase-ready page patterns.',
    summary: ['Containers create predictable reading widths.', 'Grid patterns support 1 through 12 columns plus asymmetrical layouts.', 'Dashboard, settings, form, hero, and content-rail shells share the same structural logic.'],
    sections: [
      { id: 'containers', title: 'Containers', body: ['Use fixed, fluid, narrow, wide, or full-bleed containers to control reading comfort and edge alignment.', 'Combine containers with section wrappers instead of page-local spacing hacks.'] },
      { id: 'responsive-layouts', title: 'Responsive layouts and odd/even columns', body: ['Pixorix supports 1 through 12-column grids, auto-fit/fill helpers, odd and even shells, and asymmetrical editorial layouts without awkward last-row collapse.'], bullets: ['Balanced card grids', 'Asymmetrical editorial layouts', 'Nested and auto-fit product grids'] },
      { id: 'page-patterns', title: 'Showcase-ready page patterns', body: ['Use shared shells for marketing, dashboard, settings, form, content plus sidebar, and hero split layouts rather than reinventing page scaffolding each time.'] },
      { id: 'dashboard-layouts', title: 'Dashboard layouts and sticky rails', body: ['Use persistent nav, content rails, widget grids, and bounded sticky regions without creating overflow traps. Sticky helpers should become static on smaller screens.'] }
    ]
  }),
  createDoc({
    slug: 'utilities',
    path: '/docs/utilities',
    label: 'Utilities',
    group: 'System',
    title: 'Utilities',
    intro: 'Utilities in Pixorix are meant to accelerate composition while preserving the framework’s visual language. They should clarify structure, not replace design decisions.',
    summary: ['Spacing and display utilities for layout control.', 'Typography and color helpers for emphasis.', 'Grid and flex helpers for fast composition.'],
    sections: [
      { id: 'spacing', title: 'Spacing and display', body: ['Use spacing utilities to adjust local rhythm, especially inside cards, nav bars, and grouped controls.'] },
      { id: 'layout-helpers', title: 'Flex and grid', body: ['Flex utilities are ideal for inline alignment. Grid utilities handle structural composition and repeated content patterns.'] },
      { id: 'type-color', title: 'Typography, colors, and helpers', body: ['Typography and color utilities work best for emphasis, muted content, and state communication rather than wholesale restyling.'] }
    ]
  }),
  createDoc({
    slug: 'components',
    path: '/docs/components',
    label: 'Components',
    group: 'System',
    title: 'Components',
    intro: 'The core component set covers the recurring surfaces most teams need every week: buttons, cards, nav, overlays, and feedback states.',
    summary: ['Core components are intentionally broad and stable.', 'Most visual customization should happen through tokens and themes.', 'Components are designed to combine cleanly with utility classes.'],
    sections: [
      { id: 'overview', title: 'Overview of core components', body: ['Start with buttons, cards, badges, navigation, overlays, and feedback patterns before reaching for advanced components.'] },
      { id: 'buttons-cards', title: 'Buttons, cards, and badges', body: ['These primitives establish hierarchy quickly and keep surface composition consistent across product areas.'] },
      { id: 'navigation-feedback', title: 'Navigation, overlays, and feedback', body: ['Navigation and overlays prioritize focus order, scroll safety, and predictable layering.'] }
    ]
  }),
  createDoc({
    slug: 'advanced-components',
    path: '/docs/advanced-components',
    label: 'Advanced Components',
    group: 'System',
    title: 'Advanced components',
    intro: 'Advanced components cover the higher-order building blocks teams usually end up creating themselves: KPI cards, steppers, drawers, command patterns, and premium dashboard surfaces.',
    summary: ['Advanced components solve recurring product UX, not just decoration.', 'They are built to layer on top of the core system cleanly.', 'Use them when composition starts repeating.'],
    sections: [
      { id: 'kpi', title: 'KPI cards and premium blocks', body: ['Use KPI cards for fast scanning and premium blocks for narrative product sections that need stronger contrast and hierarchy.'] },
      { id: 'workflow', title: 'Steppers and drawers', body: ['Steppers support guided flows. Drawers handle contextual depth without forcing full-page context switches.'] },
      { id: 'tables', title: 'Advanced tables', body: ['Data-dense surfaces need steady vertical rhythm, restrained borders, and careful overflow handling.'] }
    ]
  }),
  createDoc({
    slug: 'forms',
    path: '/docs/forms',
    label: 'Forms',
    group: 'Experience',
    title: 'Forms',
    intro: 'Forms in Pixorix are designed for practical product work: strong labels, stable control sizing, clear states, and fewer fragile browser customizations.',
    summary: ['Input systems prioritize readability and consistent spacing.', 'Validation states are visible without overwhelming the form.', 'Accessibility is treated as part of the component contract.'],
    sections: [
      { id: 'input-system', title: 'Input system', body: ['Use labels, helper text, and grouped controls consistently. The framework expects explicit labeling and visible state changes.'] },
      { id: 'validation', title: 'Validation and states', body: ['Validation styles communicate severity clearly while keeping the overall form calm enough to continue working through.'] },
      { id: 'browser-accessibility', title: 'Accessibility and browser notes', body: ['Avoid replacing native form behavior unless the interaction gain is real. Respect mobile keyboards, autofill, and focus handling.'] }
    ]
  }),
  createDoc({
    slug: 'themes',
    path: '/docs/themes',
    label: 'Themes',
    group: 'Experience',
    title: 'Themes',
    intro: 'Pixorix theming is token-based and CSS-variable driven. That lets teams evolve brand and mode decisions centrally instead of patching components one by one.',
    summary: ['Theme tokens map directly to semantic UI roles.', 'Component surfaces inherit from theme variables.', 'Brand and density can evolve independently.'],
    sections: [
      { id: 'tokens', title: 'Token approach', body: ['Use semantic roles like surface, text, primary, and border as the main layer of abstraction.'] },
      { id: 'basics', title: 'Theming basics', body: ['Theme scopes can be global or local. Start globally, then scope only when a product area truly needs a separate tone.'] },
      { id: 'switching', title: 'Theme switching concept', body: ['Switching themes should be instant and stateful, usually via local storage or application settings.'] }
    ]
  }),
  createDoc({
    slug: 'dark-mode',
    path: '/docs/dark-mode',
    label: 'Dark Mode',
    group: 'Experience',
    title: 'Dark mode',
    intro: 'Dark mode in Pixorix is not a palette inversion. It is a surface and contrast system tuned for legibility, hierarchy, and comfortable product use.',
    summary: ['Dark surfaces preserve elevation cues.', 'Text contrast stays controlled rather than harsh.', 'Component states remain visible without over-bright accents.'],
    sections: [
      { id: 'how-it-works', title: 'How it works', body: ['The dark theme remaps semantic variables and updates shadows, overlays, and component surfaces to maintain depth.'] },
      { id: 'usage-guidance', title: 'Usage guidance', body: ['Use dark mode consistently across shell elements so the UI does not fragment between sections.'] },
      { id: 'design-notes', title: 'Design notes', body: ['Keep intense accent colors in check and preserve clear focus styles. Dark mode should feel deliberate, not neon.'] }
    ]
  }),
  createDoc({
    slug: 'motion',
    path: '/docs/motion',
    label: 'Motion',
    group: 'Experience',
    title: 'Motion',
    intro: 'Pixorix treats motion as a readability and hierarchy tool. GSAP adds polish where it clarifies entry, state change, and sequence timing without turning documentation into a demo reel.',
    summary: ['Use reveal timing for hierarchy, not spectacle.', 'Keep motion fast and restrained.', 'Always respect reduced motion preferences.'],
    sections: [
      { id: 'gsap-overview', title: 'GSAP integration overview', body: ['GSAP is optional. Use it for hero reveals, section entrances, and layered attention patterns that benefit from timing control.'] },
      { id: 'presets', title: 'Motion presets', body: ['Create a small preset library for reveal, stagger, and overlay transitions so motion stays consistent across the site.'] },
      { id: 'reduced-motion', title: 'Reduced motion guidance', body: ['When reduced motion is requested, skip translation-heavy timelines and keep only necessary state changes.'] }
    ]
  }),
  createDoc({
    slug: 'accessibility',
    path: '/docs/accessibility',
    label: 'Accessibility',
    group: 'Platform',
    title: 'Accessibility',
    intro: 'Accessibility in Pixorix covers semantics, navigation, focus visibility, motion choices, and form clarity. It is built into the design system contract, not added at the end.',
    summary: ['Keyboard navigation must remain complete.', 'Focus states need strong visual contrast.', 'Reduced motion and form accessibility are first-order concerns.'],
    sections: [
      { id: 'keyboard', title: 'Keyboard navigation and focus styles', body: ['Headers, sidebars, overlays, and docs navigation should all be reachable and understandable from the keyboard alone.'] },
      { id: 'semantic-usage', title: 'Semantic usage', body: ['Use landmark elements, clear heading hierarchy, and explicit labels to reduce cognitive load and assistive technology ambiguity.'] },
      { id: 'forms-motion', title: 'Reduced motion and form accessibility', body: ['Animation should never obscure content or delay form understanding. Preserve clear labels, errors, and helper text.'] }
    ]
  }),
  createDoc({
    slug: 'browser-support',
    path: '/docs/browser-support',
    label: 'Browser Support',
    group: 'Platform',
    title: 'Browser support',
    intro: 'Pixorix is built for modern browsers with a pragmatic fallback philosophy. Stable layout, readable typography, and usable interaction matter more than squeezing in fragile effects everywhere.',
    summary: ['Support targets modern evergreen browsers.', 'Fallbacks protect structure and readability.', 'Complex effects should degrade gracefully.'],
    sections: [
      { id: 'supported-browsers', title: 'Supported browsers', body: ['Chrome, Edge, Firefox, Safari, Opera, Android browsers, and iOS Safari are the main targets for framework validation.'] },
      { id: 'fallbacks', title: 'Fallback philosophy', body: ['Use CSS variables, transforms, and sticky positioning carefully. Decorative layers should be optional, not structural.'] },
      { id: 'practical-notes', title: 'Practical compatibility notes', body: ['Watch sticky sidebars, nested overflow regions, code blocks, and mobile drawers closely when testing.'] }
    ]
  }),
  createDoc({
    slug: 'customization',
    path: '/docs/customization',
    label: 'Customization',
    group: 'Platform',
    title: 'Customization',
    intro: 'Customization works best when you treat Pixorix as a layered system: tokens first, themes second, component overrides last.',
    summary: ['SCSS architecture should stay layered.', 'Variables and tokens control most brand changes.', 'Overrides should be scoped and documented.'],
    sections: [
      { id: 'scss-architecture', title: 'SCSS architecture', body: ['Keep abstracts, base, layout, components, utilities, and themes separate so overrides stay traceable.'] },
      { id: 'variables', title: 'Variables and tokens', body: ['Start with token overrides for brand, radius, spacing, and typography before touching component selectors.'] },
      { id: 'override-tips', title: 'Overrides and custom theme tips', body: ['When you override component styles, preserve state, contrast, and spacing logic so the system does not drift.'] }
    ]
  }),
  createDoc({
    slug: 'javascript-api',
    path: '/docs/javascript-api',
    label: 'JavaScript API',
    group: 'Platform',
    title: 'JavaScript API',
    intro: 'Pixorix JavaScript is organized around initialization helpers, component behaviors, motion utilities, and DOM-safe hooks. Use it to enhance interaction, not to compensate for weak markup.',
    summary: ['Initialize once at app startup.', 'Layer component behavior intentionally.', 'Use data attributes or clear JS hooks for activation.'],
    sections: [
      { id: 'init', title: 'Initialization patterns', body: ['Initialize globally for shared behaviors, then register page-level enhancements only where components exist.'], code: `import { initPixorix } from 'pixorix';\n\nconst app = initPixorix(document);` },
      { id: 'behaviors', title: 'Component behaviors', body: ['Overlays, drawers, motion helpers, and advanced components should expose predictable activation and teardown rules.'] },
      { id: 'hooks', title: 'Data attributes and JS hooks', body: ['Prefer explicit data attributes or named hook points instead of anonymous DOM traversal for component activation.'] }
    ]
  })
];

export const docsSidebarGroups = docsEntries.reduce((groups, entry) => {
  const group = groups.find((item) => item.title === entry.group);

  if (group) {
    group.items.push({ label: entry.label, href: entry.path });
    return groups;
  }

  groups.push({
    title: entry.group,
    items: [{ label: entry.label, href: entry.path }]
  });

  return groups;
}, []);

export const docsByPath = Object.fromEntries(docsEntries.map((entry) => [entry.path, entry]));
export const orderedDocs = docsEntries.map((entry, index) => ({
  ...entry,
  previous: index > 0 ? docsEntries[index - 1] : null,
  next: index < docsEntries.length - 1 ? docsEntries[index + 1] : null
}));
export const orderedDocsByPath = Object.fromEntries(orderedDocs.map((entry) => [entry.path, entry]));
