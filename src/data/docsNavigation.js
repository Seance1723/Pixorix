const docsEntries = [
  {
    id: 'components',
    label: 'Components',
    href: '/docs/components',
    description: 'Core UI building blocks',
    group: 'Foundations'
  },
  {
    id: 'layout',
    label: 'Layout',
    href: '/docs/layout',
    description: 'Containers, grids, and shells',
    group: 'Foundations'
  },
  {
    id: 'utilities',
    label: 'Utilities',
    href: '/docs/utilities',
    description: 'Single-purpose helper classes',
    group: 'Foundations'
  },
  {
    id: 'themes',
    label: 'Themes',
    href: '/docs/themes',
    description: 'Tokens, schemes, and branding',
    group: 'Customization'
  },
  {
    id: 'motion',
    label: 'Motion',
    href: '/docs/motion',
    description: 'Animation guidance and reduced motion',
    group: 'Customization'
  }
];

export const docsNavigationGroups = [
  {
    title: 'Foundations',
    slug: 'foundations',
    items: docsEntries.filter((item) => item.group === 'Foundations')
  },
  {
    title: 'Customization',
    slug: 'customization',
    items: docsEntries.filter((item) => item.group === 'Customization')
  }
];

export const docsNavigationItems = docsEntries;

export function getDocByPath(pathname) {
  return docsEntries.find((item) => item.href === pathname) ?? null;
}

export function getAdjacentDocsPages(pathname) {
  const currentIndex = docsEntries.findIndex((item) => item.href === pathname);

  if (currentIndex === -1) {
    return {
      previousPage: null,
      nextPage: null
    };
  }

  return {
    previousPage: docsEntries[currentIndex - 1] ?? null,
    nextPage: docsEntries[currentIndex + 1] ?? null
  };
}

export function getDocBreadcrumbs(currentDoc) {
  if (!currentDoc) {
    return [];
  }

  return [
    { label: 'Home', href: '/' },
    { label: 'Docs', href: '/docs/components' },
    { label: currentDoc.label, href: currentDoc.href }
  ];
}
