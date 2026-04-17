export function PageHeroBanner({ eyebrow, title, description, meta }) {
  return (
    <section className="page-hero" data-reveal>
      <div className="page-hero__copy">
        <span className="site-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {meta ? (
        <div className="page-hero__meta">
          {meta.map((item) => (
            <article key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
