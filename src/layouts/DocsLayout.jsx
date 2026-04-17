import { Outlet } from 'react-router-dom';
import { DocsSidebar } from '@/components/layout/DocsSidebar';

export function DocsLayout() {
  return (
    <section className="docs-shell" aria-label="Documentation">
      <DocsSidebar />
      <div className="docs-shell__content">
        <Outlet />
      </div>
    </section>
  );
}
