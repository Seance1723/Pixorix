import { useOutletContext } from 'react-router-dom';
import { DocsContentWrapper } from '@/components/docs/DocsContentWrapper';
import { LayoutDocSection } from '@/components/docs/LayoutDocSection';
import { getDocBreadcrumbs } from '@/data/docsNavigation';
import { layoutDocSections } from '@/data/layoutDocs';

export function LayoutDocsPage() {
  const { currentDoc, adjacentDocs } = useOutletContext();

  return (
    <DocsContentWrapper
      title="Layout"
      description="Layout primitives for containers, grids, stacks, split views, dashboards, odd and even column counts, and responsive adaptation patterns."
      category="Documentation"
      breadcrumbs={getDocBreadcrumbs(currentDoc)}
      previousPage={adjacentDocs?.previousPage}
      nextPage={adjacentDocs?.nextPage}
    >
      <div className="layout-docs-page">
        <section className="layout-docs-intro">
          <p>
            Pixorix layout patterns are documented as reusable structural systems, not one-off page recipes.
            These examples show how the same mental model applies across HTML, React, Angular, and Vue.
          </p>
        </section>

        {layoutDocSections.map((section) => (
          <LayoutDocSection key={section.id} section={section} />
        ))}
      </div>
    </DocsContentWrapper>
  );
}
