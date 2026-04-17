export const primaryNavigation = [
  {
    label: 'Docs',
    href: '/docs/components',
    match: ['/docs/components', '/docs/layout', '/docs/utilities', '/docs/motion']
  },
  { label: 'Examples', href: '/examples', match: ['/examples'] },
  { label: 'Get Started', href: '/get-started', match: ['/get-started'] },
  { label: 'Themes', href: '/docs/themes', match: ['/docs/themes'] }
];

export const headerMeta = {
  version: 'v0.1.0',
  githubHref: 'https://github.com/pixorix/pixorix'
};

export const footerLinkGroups = [
  {
    title: 'Documentation',
    links: [
      { label: 'Components', href: '/docs/components' },
      { label: 'Layout', href: '/docs/layout' },
      { label: 'Utilities', href: '/docs/utilities' },
      { label: 'Motion', href: '/docs/motion' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Get Started', href: '/get-started' },
      { label: 'Examples', href: '/examples' },
      { label: 'Themes', href: '/docs/themes' }
    ]
  },
  {
    title: 'Platform',
    links: [
      { label: 'HTML', href: '/get-started' },
      { label: 'React', href: '/get-started' },
      { label: 'Vue', href: '/get-started' },
      { label: 'Angular', href: '/get-started' }
    ]
  }
];
