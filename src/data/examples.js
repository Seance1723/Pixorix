export const examples = [
  {
    slug: 'marketing-landing',
    title: 'Marketing Landing',
    summary: 'Premium landing page starter using Pixorix layout, utilities, and theming primitives.',
    audience: 'Teams building product marketing pages in any frontend stack.',
    focus: 'Page composition, section rhythm, and framework-agnostic markup structure.'
  },
  {
    slug: 'dashboard-shell',
    title: 'Dashboard Shell',
    summary: 'Application shell example for side navigation, dense data regions, and token-driven styling.',
    audience: 'Product teams building internal tools and SaaS interfaces.',
    focus: 'Responsive shell patterns, layout reuse, and scalable navigation.'
  }
];

export const examplesBySlug = Object.fromEntries(examples.map((example) => [example.slug, example]));
