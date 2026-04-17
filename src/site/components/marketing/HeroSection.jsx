import { Link } from 'react-router-dom';
import { heroMetrics } from '../../content/features';
import { useReveal } from '../../hooks/useReveal';

export function HeroSection() {
  const revealRef = useReveal('[data-reveal]');

  return (
    <section className="hero-section" ref={revealRef}>
      <div className="hero-section__content">
        <div className="hero-section__copy">
          <span className="site-eyebrow" data-reveal>
            Frontend framework
          </span>
          <h1 data-reveal>Build polished interfaces with an SCSS-first system that feels product-ready on day one.</h1>
          <p data-reveal>
            Pixorix combines premium defaults, scalable layout primitives, fluid typography, advanced components, dark
            mode, and pragmatic GSAP motion for teams shipping real interfaces.
          </p>
          <div className="hero-section__actions" data-reveal>
            <Link className="site-button site-button--primary" to="/get-started">
              Get started
            </Link>
            <Link className="site-button site-button--secondary" to="/examples">
              Explore examples
            </Link>
          </div>
        </div>
        <div className="hero-frame" data-reveal>
          <div className="hero-frame__toolbar">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-frame__grid">
            <article className="hero-frame__panel hero-frame__panel--lead">
              <strong>Premium UI defaults</strong>
              <p>Sharper spacing, deeper surfaces, and readable hierarchy.</p>
            </article>
            <article className="hero-frame__panel">
              <span>Themeable tokens</span>
              <strong>Dark mode included</strong>
            </article>
            <article className="hero-frame__panel">
              <span>Grid logic</span>
              <strong>Odd and even columns</strong>
            </article>
            <article className="hero-frame__panel">
              <span>Motion</span>
              <strong>GSAP-ready reveals</strong>
            </article>
          </div>
        </div>
      </div>
      <div className="hero-metrics">
        {heroMetrics.map((metric) => (
          <article className="hero-metric" key={metric.value} data-reveal>
            <strong>{metric.value}</strong>
            <p>{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
