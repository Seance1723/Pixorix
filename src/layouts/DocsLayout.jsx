import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { DocsSidebar } from '@/components/layout/DocsSidebar';
import { MobileDocsDrawer } from '@/components/docs/MobileDocsDrawer';
import { docsNavigationGroups, getAdjacentDocsPages, getDocByPath } from '@/data/docsNavigation';

export function DocsLayout() {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const currentDoc = useMemo(() => getDocByPath(location.pathname), [location.pathname]);
  const adjacentDocs = useMemo(() => getAdjacentDocsPages(location.pathname), [location.pathname]);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isDrawerOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  return (
    <section className="docs-shell" aria-label="Documentation">
      <div className="docs-shell__sidebar">
        <DocsSidebar groups={docsNavigationGroups} currentPath={location.pathname} />
      </div>

      <MobileDocsDrawer
        groups={docsNavigationGroups}
        currentPath={location.pathname}
        currentDocTitle={currentDoc?.label ?? 'Documentation'}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      />

      <div className="docs-shell__content">
        <Outlet context={{ currentDoc, adjacentDocs }} />
      </div>
    </section>
  );
}
