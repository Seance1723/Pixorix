import { Link } from 'react-router-dom';

export function CTABlock({ eyebrow, title, description, primary, secondary }) {
  return (
    <section className="cta-block" data-reveal>
      <div>
        <span className="site-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="cta-block__actions">
        <Link className="site-button site-button--primary" to={primary.href}>
          {primary.label}
        </Link>
        {secondary ? (
          <Link className="site-button site-button--secondary" to={secondary.href}>
            {secondary.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
