import { Link, Navigate, useParams } from 'react-router-dom';
import { examples } from '../content/examples';
import { PageHeroBanner } from '../components/marketing/PageHeroBanner';
import { PreviewMockFrame } from '../components/marketing/PreviewMockFrame';
import { SectionWrapper } from '../components/marketing/SectionWrapper';
import { CTABlock } from '../components/marketing/CTABlock';
import { useReveal } from '../hooks/useReveal';

export function ExampleDetailPage() {
  const { slug } = useParams();
  const example = examples.find((entry) => entry.slug === slug);
  const revealRef = useReveal('[data-reveal]');

  if (!example) {
    return <Navigate to="/examples" replace />;
  }

  return (
    <div className="content-page" ref={revealRef}>
      <PageHeroBanner
        eyebrow={example.category}
        title={example.title}
        description={example.summary}
        meta={example.heroStats.map((item) => ({ value: item, label: 'Highlight' }))}
      />

      <SectionWrapper eyebrow="Preview" title="Hero preview block" description="This detail view summarizes how the example is intended to behave across layout, responsiveness, and browser support.">
        <div className="site-grid site-grid--split">
          <PreviewMockFrame title={`${example.title} preview`} lines={example.heroStats} />
          <div className="content-card" data-reveal>
            <h3>Screenshot and mock preview area</h3>
            <p>
              Use this section to attach actual preview images later. The route architecture is already set up for richer
              media, embedded demos, or future iframe-based previews.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Implementation" title="Components and layout notes" description="Understand which Pixorix building blocks are doing the work in this example.">
        <div className="site-grid site-grid--two">
          <div className="content-card" data-reveal>
            <h3>Components used</h3>
            <ul>
              {example.componentsUsed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="content-card" data-reveal>
            <h3>Layout notes</h3>
            <p>{example.layoutNotes}</p>
          </div>
          <div className="content-card" data-reveal>
            <h3>Responsive notes</h3>
            <p>{example.responsiveNotes}</p>
          </div>
          <div className="content-card" data-reveal>
            <h3>Browser notes</h3>
            <p>{example.browserNotes}</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Use cases" title="Where this example fits best" description="These examples are intended to show real product contexts rather than abstract component galleries.">
        <div className="site-grid site-grid--three">
          {example.useCases.map((useCase) => (
            <article className="content-card" data-reveal key={useCase}>
              <h3>{useCase}</h3>
              <p>Adapt this example as a starting point for a production-ready screen in the same product family.</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <div className="page-links" data-reveal>
        <Link className="site-button site-button--ghost" to="/examples">
          Back to examples
        </Link>
        <Link className="site-button site-button--secondary" to="/docs">
          Read the docs
        </Link>
      </div>

      <CTABlock
        eyebrow="Next exploration"
        title="Compare more demos or move into implementation guides."
        description="Use examples to study UI direction, then use docs to wire the same ideas into your codebase."
        primary={{ label: 'More examples', href: '/examples' }}
        secondary={{ label: 'Documentation', href: '/docs' }}
      />
    </div>
  );
}
