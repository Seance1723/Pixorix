import { useOutletContext } from 'react-router-dom';
import { DocsContentWrapper } from '@/components/docs/DocsContentWrapper';
import { MotionDocSection } from '@/components/docs/motion/MotionDocSection';
import { getDocBreadcrumbs } from '@/data/docsNavigation';
import { motionDocSections } from '@/data/motionDocs';

export function MotionDocsPage() {
  const { currentDoc, adjacentDocs } = useOutletContext();

  return (
    <DocsContentWrapper
      title="Motion"
      description="Motion guidance for GSAP integration, preset patterns, reduced-motion support, and safe interaction polish across Pixorix documentation and product surfaces."
      category="Documentation"
      breadcrumbs={getDocBreadcrumbs(currentDoc)}
      previousPage={adjacentDocs?.previousPage}
      nextPage={adjacentDocs?.nextPage}
    >
      <div className="motion-docs-page">
        <section className="motion-docs-intro">
          <p>
            Pixorix uses motion as a supporting layer for hierarchy, interaction feedback, and section
            flow. The system stays framework-agnostic, and GSAP is introduced only where its sequencing
            and control meaningfully improve the result.
          </p>
        </section>

        {motionDocSections.map((section) => (
          <MotionDocSection key={section.id} section={section} />
        ))}
      </div>
    </DocsContentWrapper>
  );
}
