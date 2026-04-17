export function HighlightStatBlock({ eyebrow, title, description }) {
  return (
    <article className="highlight-block" data-reveal>
      <span className="site-eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
