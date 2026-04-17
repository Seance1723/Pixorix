import { Outlet, useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { DocsSidebar } from '../components/docs/DocsSidebar';
import { MobileDocsDrawer } from '../components/docs/MobileDocsDrawer';
import { DocsToc } from '../components/docs/DocsToc';
import { orderedDocsByPath } from '../content/docs';
import { componentCatalogSections } from '../content/componentCatalog';

export function DocsLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const currentDoc = orderedDocsByPath[location.pathname] ?? orderedDocsByPath['/docs'];
  const tocItems = useMemo(
    () =>
      location.pathname === '/docs/components'
        ? componentCatalogSections.flatMap((section) => section.items.map((item) => ({ id: item.slug, label: item.title })))
        : currentDoc.sections.map((section) => ({ id: section.id, label: section.title })),
    [currentDoc, location.pathname]
  );

  return (
    <div className="docs-layout">
      <div className="docs-layout__sidebar">
        <DocsSidebar currentPath={location.pathname} />
      </div>
      <div className="docs-layout__content">
        <div className="docs-layout__mobile">
          <button className="site-button site-button--ghost" type="button" onClick={() => setDrawerOpen(true)}>
            Browse docs
          </button>
        </div>
        <Outlet context={{ currentDoc }} />
      </div>
      <div className="docs-layout__toc">
        <DocsToc items={tocItems} />
      </div>
      <MobileDocsDrawer open={drawerOpen} currentPath={location.pathname} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
