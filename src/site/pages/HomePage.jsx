import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { CodeBlock } from '../components/shared/CodeBlock';
import { SectionWrapper } from '../components/marketing/SectionWrapper';
import { examples } from '../content/examples';

const quickStartCode = `npm install pixorix

import 'pixorix/dist/pixorix.css';
import { initPixorix } from 'pixorix';

initPixorix(document);`;

export function HomePage() {
  const revealRef = useReveal('[data-reveal]');

  return (
    <div className="home-page home-page--docs" ref={revealRef}>
      <section className="intro-hero" data-reveal>
        <span className="site-eyebrow">Getting started</span>
        <h1>Build with Pixorix, an SCSS-first frontend framework for product-grade interfaces.</h1>
        <p>
          Pixorix gives you a responsive layout system, component primitives, advanced UI patterns, dark mode, theming,
          and motion hooks without forcing a generic look.
        </p>
        <div className="px-button-group">
          <Link className="px-button px-button--primary" to="/docs/installation">
            Read installation
          </Link>
          <Link className="px-button px-button--secondary" to="/docs/components">
            Browse components
          </Link>
        </div>
      </section>

      <div className="docs-home-layout">
        <div className="docs-home-layout__main">
          <SectionWrapper
            eyebrow="Quick start"
            title="Start with the compiled CSS, then layer in the JavaScript helpers you actually use."
            description="This structure is intentionally close to a classic framework docs introduction page: concise setup first, then next steps."
          >
            <CodeBlock code={quickStartCode} label="Quick start" />
          </SectionWrapper>

          <SectionWrapper
            eyebrow="Why Pixorix"
            title="Designed for teams that want stronger defaults and less CSS drift"
            description="Pixorix focuses on the parts of frontend work that usually fragment over time: layout rhythm, component consistency, theming, and practical responsiveness."
          >
            <div className="docs-intro-grid">
              <article className="content-card" data-reveal>
                <h3>SCSS-first architecture</h3>
                <p>Tokens, layers, and overrides stay explicit, which makes long-term maintenance more predictable.</p>
              </article>
              <article className="content-card" data-reveal>
                <h3>Product-ready components</h3>
                <p>Buttons, cards, forms, tables, overlays, and navigation patterns start from a more polished baseline.</p>
              </article>
              <article className="content-card" data-reveal>
                <h3>Responsive grid logic</h3>
                <p>Even and odd layouts hold together better across 2, 3, 4, 5, and 6-column compositions.</p>
              </article>
            </div>
          </SectionWrapper>

          <SectionWrapper
            eyebrow="Next steps"
            title="Move from setup to implementation"
            description="Use the docs the way most teams adopt a framework: install, learn the layout system, inspect the components, then adapt examples."
          >
            <div className="docs-intro-list">
              <Link className="content-card docs-link-card" to="/docs/layout" data-reveal>
                <h3>Layout</h3>
                <p>Containers, grid behavior, odd and even columns, and dashboard shells.</p>
              </Link>
              <Link className="content-card docs-link-card" to="/docs/components" data-reveal>
                <h3>Components</h3>
                <p>Live component previews, code samples, and review notes on the same page.</p>
              </Link>
              <Link className="content-card docs-link-card" to="/examples" data-reveal>
                <h3>Examples</h3>
                <p>Browse higher-level screen patterns built with the same framework primitives.</p>
              </Link>
            </div>
          </SectionWrapper>
        </div>

        <aside className="docs-home-layout__side">
          <div className="content-card" data-reveal>
            <h3>On this page</h3>
            <ul>
              <li>Quick start</li>
              <li>Why Pixorix</li>
              <li>Next steps</li>
            </ul>
          </div>
          <div className="content-card" data-reveal>
            <h3>Examples</h3>
            <ul>
              {examples.slice(0, 4).map((example) => (
                <li key={example.slug}>
                  <Link to={`/examples/${example.slug}`}>{example.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
