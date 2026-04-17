import { Link } from 'react-router-dom';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { DemoShowcase } from '@/components/docs/DemoShowcase';
import { FrameworkTabs } from '@/components/docs/FrameworkTabs';
import { SectionHeader } from '@/components/landing/SectionHeader';
import { buttonFrameworkSnippets } from '@/data/frameworkSnippets';
import { landingPageContent } from '@/data/landingPage';
import { examples } from '@/data/examples';

export function HomePage() {
  const {
    hero,
    intro,
    reasons,
    solvedLimitations,
    features,
    compatibility,
    showcase,
    cta,
    footerCta
  } = landingPageContent;

  return (
    <div className="landing-page">
      <section className="landing-hero">
        <div className="landing-hero__content">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="landing-hero__title">{hero.title}</h1>
          <p className="landing-hero__summary">{hero.summary}</p>
          <p className="lead">{hero.supportingText}</p>

          <div className="landing-hero__actions">
            <Link className="site-button landing-hero__primary" to={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Link>
            <Link className="site-button site-button--ghost" to={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </Link>
          </div>

          <ul className="landing-hero__highlights" aria-label="Pixorix product highlights">
            {hero.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="landing-hero__aside">
          <CodeBlock
            title={hero.install.title}
            language={hero.install.language}
            filename={hero.install.filename}
            caption={hero.install.caption}
            code={hero.install.code}
          />

          <div className="landing-hero__signal-grid">
            {intro.stats.map((stat) => (
              <article key={stat.label} className="landing-signal-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section">
        <SectionHeader eyebrow={intro.eyebrow} title={intro.title} description={intro.description} />
        <div className="landing-intro-grid">
          {intro.points.map((point) => (
            <article key={point.title} className="landing-card">
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section">
        <SectionHeader eyebrow={reasons.eyebrow} title={reasons.title} description={reasons.description} />
        <div className="landing-card-grid">
          {reasons.items.map((reason) => (
            <article key={reason.title} className="landing-card landing-card--accent">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section">
        <SectionHeader
          eyebrow={solvedLimitations.eyebrow}
          title={solvedLimitations.title}
          description={solvedLimitations.description}
        />
        <div className="landing-comparison-list">
          {solvedLimitations.items.map((item) => (
            <article key={item.title} className="landing-comparison-item">
              <div>
                <p className="landing-comparison-item__label">Common issue</p>
                <h3>{item.title}</h3>
                <p>{item.problem}</p>
              </div>
              <div className="landing-comparison-item__solution">
                <p className="landing-comparison-item__label">Pixorix response</p>
                <p>{item.solution}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section">
        <SectionHeader eyebrow={features.eyebrow} title={features.title} description={features.description} />
        <div className="landing-card-grid">
          {features.items.map((feature) => (
            <article key={feature.title} className="landing-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section">
        <SectionHeader
          eyebrow={compatibility.eyebrow}
          title={compatibility.title}
          description={compatibility.description}
        />
        <div className="landing-compatibility">
          <div className="landing-compatibility__copy">
            <ul className="landing-compatibility__list">
              {compatibility.platforms.map((platform) => (
                <li key={platform.name}>
                  <strong>{platform.name}</strong>
                  <span>{platform.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="landing-compatibility__panel content-panel">
            <p className="eyebrow">Universal usage model</p>
            <h3>One design language, multiple implementation paths</h3>
            <p>
              Pixorix keeps tokens, layouts, utilities, and documentation stable across stacks so teams
              do not have to relearn a different design grammar per framework.
            </p>
          </div>
        </div>
      </section>

      <section className="landing-section">
        <SectionHeader eyebrow={showcase.eyebrow} title={showcase.title} description={showcase.description} />
        <DemoShowcase
          title={showcase.demoTitle}
          description={showcase.demoDescription}
          previewTitle="Rendered Output"
          previewDescription="Visual output remains consistent while code changes by framework."
          previewMinHeight="16rem"
          codePanel={<FrameworkTabs snippets={buttonFrameworkSnippets} title="Button Example" />}
        >
          <div className="landing-demo-preview">
            <div className="landing-demo-preview__stack">
              <button type="button" className="landing-demo-preview__button landing-demo-preview__button--primary">
                Start building
              </button>
              <button type="button" className="landing-demo-preview__button landing-demo-preview__button--secondary">
                View tokens
              </button>
            </div>
            <p className="landing-demo-preview__caption">
              The rendered component stays identical while the implementation adapts to HTML, React,
              Angular, or Vue.
            </p>
          </div>
        </DemoShowcase>
      </section>

      <section className="landing-section">
        <SectionHeader eyebrow="Examples" title="Production-minded starting points" description="Preview practical examples that show how Pixorix scales from marketing pages to application shells." />
        <div className="landing-card-grid">
          {examples.map((example) => (
            <article key={example.slug} className="landing-card landing-card--link">
              <p className="eyebrow">Example</p>
              <h3>{example.title}</h3>
              <p>{example.summary}</p>
              <Link className="inline-link" to={`/examples/${example.slug}`}>
                Open example
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section">
        <div className="landing-cta">
          <SectionHeader eyebrow={cta.eyebrow} title={cta.title} description={cta.description} />
          <div className="landing-cta__actions">
            <Link className="site-button landing-hero__primary" to={cta.primaryCta.href}>
              {cta.primaryCta.label}
            </Link>
            <Link className="site-button site-button--ghost" to={cta.secondaryCta.href}>
              {cta.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="landing-footer-cta">
        <div className="landing-footer-cta__inner">
          <div>
            <p className="eyebrow">{footerCta.eyebrow}</p>
            <h2>{footerCta.title}</h2>
            <p>{footerCta.description}</p>
          </div>
          <Link className="site-button landing-hero__primary" to={footerCta.cta.href}>
            {footerCta.cta.label}
          </Link>
        </div>
      </section>
    </div>
  );
}
