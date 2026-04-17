import { useLocation, useOutletContext } from 'react-router-dom';
import { orderedDocsByPath } from '../../content/docs';
import { Breadcrumbs } from '../../components/shared/Breadcrumbs';
import { DocPageHeader } from '../../components/docs/DocPageHeader';
import { DocContentSection } from '../../components/docs/DocContentSection';
import { PrevNextDocNav } from '../../components/docs/PrevNextDocNav';
import { useReveal } from '../../hooks/useReveal';

export function DocPage() {
  const location = useLocation();
  const outletContext = useOutletContext();
  const currentDoc = outletContext?.currentDoc ?? orderedDocsByPath[location.pathname] ?? orderedDocsByPath['/docs'];
  const revealRef = useReveal('[data-reveal]');

  return (
    <div className="doc-page" ref={revealRef}>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Docs', href: '/docs' }, { label: currentDoc.label }]} />
      <DocPageHeader title={currentDoc.title} intro={currentDoc.intro} summary={currentDoc.summary} />
      <div className="doc-page__sections">
        {currentDoc.sections.map((section) => (
          <DocContentSection key={section.id} section={section} />
        ))}
      </div>
      <div className="doc-meta-grid">
        <article className="content-card" data-reveal>
          <h3>Responsive notes</h3>
          <p>Design sections to stack cleanly, keep sticky regions bounded, and preserve readable line lengths for content-heavy pages.</p>
        </article>
        <article className="content-card" data-reveal>
          <h3>Browser notes</h3>
          <p>Test sticky sidebars, code block overflow, and drawer behavior carefully across Safari, Firefox, and mobile browsers.</p>
        </article>
        <article className="content-card" data-reveal>
          <h3>Accessibility notes</h3>
          <p>Maintain heading order, visible focus, keyboard access for navigation, and reduced motion behavior for all animated surfaces.</p>
        </article>
      </div>
      <PrevNextDocNav previous={currentDoc.previous} next={currentDoc.next} />
    </div>
  );
}
