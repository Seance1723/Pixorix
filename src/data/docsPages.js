export const docsPages = {
  components: {
    category: 'Documentation',
    title: 'Components',
    description:
      'Starter placeholder for component docs, usage guidance, API tables, anatomy notes, and live examples.',
    topics: ['Component overview', 'Variants and states', 'Composition guidance', 'Accessibility notes'],
    notes:
      'Keep future component docs data-driven so framework-specific examples can be swapped without changing route structure.',
    relatedRoutes: [
      { label: 'Layout', href: '/docs/layout' },
      { label: 'Utilities', href: '/docs/utilities' }
    ]
  },
  layout: {
    category: 'Documentation',
    title: 'Layout',
    description:
      'Starter placeholder for grids, shells, spacing systems, responsive containers, and page scaffolding.',
    topics: ['Container system', 'Grid primitives', 'Sidebar patterns', 'Responsive rules'],
    notes:
      'This route should eventually map layout recipes to both CSS utility usage and framework wrappers where relevant.',
    relatedRoutes: [
      { label: 'Components', href: '/docs/components' },
      { label: 'Themes', href: '/docs/themes' }
    ]
  },
  utilities: {
    category: 'Documentation',
    title: 'Utilities',
    description:
      'Starter placeholder for atomic helpers covering spacing, display, visibility, alignment, and responsive modifiers.',
    topics: ['Spacing utilities', 'Display utilities', 'Responsive helpers', 'Utility authoring rules'],
    notes:
      'Organize utility docs by category and generate navigation from shared config once coverage expands.',
    relatedRoutes: [
      { label: 'Layout', href: '/docs/layout' },
      { label: 'Motion', href: '/docs/motion' }
    ]
  },
  themes: {
    category: 'Documentation',
    title: 'Themes',
    description:
      'Starter placeholder for tokens, brand theming, color modes, density settings, and customization APIs.',
    topics: ['Design tokens', 'Theme API', 'Brand overrides', 'Contrast and accessibility'],
    notes:
      'Theme docs should stay framework-agnostic and document both CSS variable usage and JS integration hooks only when needed.',
    relatedRoutes: [
      { label: 'Utilities', href: '/docs/utilities' },
      { label: 'Motion', href: '/docs/motion' }
    ]
  },
  motion: {
    category: 'Documentation',
    title: 'Motion',
    description:
      'Starter placeholder for transitions, reveal patterns, reduced-motion rules, and selective GSAP guidance.',
    topics: ['Motion principles', 'Reduced motion support', 'GSAP usage boundaries', 'Page transition patterns'],
    notes:
      'Keep GSAP optional and document progressive enhancement first so the site remains stable across browsers and device classes.',
    relatedRoutes: [
      { label: 'Themes', href: '/docs/themes' },
      { label: 'Examples', href: '/examples' }
    ]
  }
};
