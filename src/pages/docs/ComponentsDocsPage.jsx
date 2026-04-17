import { useOutletContext } from 'react-router-dom';
import { DocsContentWrapper } from '@/components/docs/DocsContentWrapper';
import { ComponentDocSection } from '@/components/docs/ComponentDocSection';
import { getDocBreadcrumbs } from '@/data/docsNavigation';
import { componentsDocSections } from '@/data/componentsDocs';

export function ComponentsDocsPage() {
  const { currentDoc, adjacentDocs } = useOutletContext();

  return (
    <DocsContentWrapper
      title="Components"
      description="Core UI components for actions, content grouping, feedback, overlays, navigation, and data display. Each section includes framework-specific code plus rendered output guidance."
      category="Documentation"
      breadcrumbs={getDocBreadcrumbs(currentDoc)}
      previousPage={adjacentDocs?.previousPage}
      nextPage={adjacentDocs?.nextPage}
    >
      <div className="components-docs-page">
        <section className="components-docs-intro">
          <p>
            Pixorix components are documented as framework-agnostic patterns first. HTML shows the baseline
            contract, while React, Angular, and Vue snippets mirror the same visual behavior.
          </p>
        </section>

        {componentsDocSections.map((component) => (
          <ComponentDocSection key={component.id} component={component} />
        ))}
      </div>
    </DocsContentWrapper>
  );
}
