import { useOutletContext } from 'react-router-dom';
import { DocsContentWrapper } from '@/components/docs/DocsContentWrapper';
import { UtilityDocSection } from '@/components/docs/UtilityDocSection';
import { getDocBreadcrumbs } from '@/data/docsNavigation';
import { utilityDocSections } from '@/data/utilitiesDocs';

export function UtilitiesDocsPage() {
  const { currentDoc, adjacentDocs } = useOutletContext();

  return (
    <DocsContentWrapper
      title="Utilities"
      description="Atomic utility helpers for spacing, display, flex, grid, typography, colors, shadows, radius, visibility, and common helper behaviors."
      category="Documentation"
      breadcrumbs={getDocBreadcrumbs(currentDoc)}
      previousPage={adjacentDocs?.previousPage}
      nextPage={adjacentDocs?.nextPage}
    >
      <div className="utilities-docs-page">
        <section className="utilities-docs-intro">
          <p>
            Pixorix utilities are designed to accelerate layout and styling decisions without replacing the
            broader design system. They work best as precise helpers layered on top of tokens and layout primitives.
          </p>
        </section>

        {utilityDocSections.map((section) => (
          <UtilityDocSection key={section.id} section={section} />
        ))}
      </div>
    </DocsContentWrapper>
  );
}
