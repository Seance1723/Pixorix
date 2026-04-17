export function SectionWrapper({ eyebrow, title, description, children, className = '' }) {
  return (
    <section className={`site-section ${className}`.trim()}>
      <div className="site-section__heading">
        {eyebrow ? <span className="site-eyebrow">{eyebrow}</span> : null}
        {title ? <h2>{title}</h2> : null}
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
