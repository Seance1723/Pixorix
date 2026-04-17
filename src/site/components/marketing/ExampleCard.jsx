import { Link } from 'react-router-dom';

export function ExampleCard({ example }) {
  return (
    <article className="example-card" data-reveal>
      <span className="example-card__category">{example.category}</span>
      <h3>{example.title}</h3>
      <p>{example.summary}</p>
      <div className="example-card__stats">
        {example.heroStats.slice(0, 2).map((stat) => (
          <span key={stat}>{stat}</span>
        ))}
      </div>
      <Link className="site-button site-button--ghost" to={`/examples/${example.slug}`}>
        View example
      </Link>
    </article>
  );
}
