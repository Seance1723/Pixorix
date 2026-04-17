import { getStartedSnippets } from '../content/getStartedSnippets';
import { PageHeroBanner } from '../components/marketing/PageHeroBanner';
import { SectionWrapper } from '../components/marketing/SectionWrapper';
import { CodeBlock } from '../components/shared/CodeBlock';
import { CTABlock } from '../components/marketing/CTABlock';
import { useReveal } from '../hooks/useReveal';

export function GetStartedPage() {
  const revealRef = useReveal('[data-reveal]');

  return (
    <div className="content-page" ref={revealRef}>
      <PageHeroBanner
        eyebrow="Get Started"
        title="Set up Pixorix in a React project and reach a polished first screen quickly."
        description="This guide covers what Pixorix is, how to install it, where styles and scripts belong, and the first patterns worth trying."
        meta={[
          { value: 'React + Vite', label: 'Recommended setup' },
          { value: 'SCSS-first', label: 'Architecture model' },
          { value: 'GSAP optional', label: 'Motion layer' }
        ]}
      />

      <SectionWrapper eyebrow="Overview" title="What Pixorix is" description="Pixorix is a frontend framework for teams that want product-grade defaults instead of starting from raw primitives each time.">
        <div className="prose-block" data-reveal>
          <p>
            The framework combines SCSS tokens, composable utilities, premium UI components, a responsive layout
            system, dark mode support, advanced building blocks, and a JavaScript layer for interaction patterns.
          </p>
          <p>
            It is designed to help marketing pages, dashboards, forms, overlays, and editorial layouts feel cohesive
            without forcing the entire product through a single rigid pattern.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Setup" title="Installation methods" description="Start with the full package, then optimize import scope once the product shape is stable.">
        <div className="site-grid site-grid--two">
          <CodeBlock code={getStartedSnippets.install} label="Install packages" />
          <CodeBlock code={getStartedSnippets.include} label="Include CSS and JS" />
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Structure" title="File structure overview" description="Keep framework wiring explicit so theme overrides and route-level styles remain maintainable.">
        <div className="site-grid site-grid--two">
          <CodeBlock code={getStartedSnippets.structure} label="Suggested structure" />
          <div className="content-card" data-reveal>
            <h3>First setup steps</h3>
            <ol>
              <li>Install Pixorix and your React runtime dependencies.</li>
              <li>Import Pixorix core styles before your application overrides.</li>
              <li>Initialize framework behavior where interactive components are used.</li>
              <li>Start with a button, a card, a grid, and a theme toggle to validate your baseline.</li>
            </ol>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Examples" title="First examples worth building" description="The fastest way to understand Pixorix is to assemble a few representative product patterns.">
        <div className="site-grid site-grid--two">
          <CodeBlock code={getStartedSnippets.button} label="Button example" />
          <CodeBlock code={getStartedSnippets.grid} label="Grid example" />
          <CodeBlock code={getStartedSnippets.card} label="Card example" />
          <CodeBlock code={getStartedSnippets.form} label="Form example" />
          <CodeBlock code={getStartedSnippets.utility} label="Utility example" />
          <CodeBlock code={getStartedSnippets.theme} label="Theme example" />
        </div>
      </SectionWrapper>

      <SectionWrapper eyebrow="Motion" title="GSAP motion example" description="Use GSAP for measured reveals and sequence timing, not for decorative overload.">
        <div className="site-grid site-grid--two">
          <CodeBlock code={getStartedSnippets.motion} label="Motion example" />
          <div className="content-card" data-reveal>
            <h3>Next steps</h3>
            <p>Move into the docs portal for layout, utilities, components, themes, accessibility, browser support, and JavaScript API guidance.</p>
          </div>
        </div>
      </SectionWrapper>

      <CTABlock
        eyebrow="Continue"
        title="Move from setup to system design."
        description="Open the documentation portal for implementation details or browse the examples catalog for complete screen ideas."
        primary={{ label: 'Open docs', href: '/docs' }}
        secondary={{ label: 'Browse examples', href: '/examples' }}
      />
    </div>
  );
}
