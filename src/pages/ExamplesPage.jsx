import { examples } from '@/data/examples';
import { Link } from 'react-router-dom';

export function ExamplesPage() {
  return (
    <section className="content-panel page-section">
      <p className="eyebrow">Examples</p>
      <h1>Example index placeholder</h1>
      <p className="lead">Starter collection for future showcase pages and implementation recipes.</p>
      <div className="content-grid">
        {examples.map((example) => (
          <article key={example.slug} className="example-card">
            <h2>{example.title}</h2>
            <p>{example.summary}</p>
            <Link className="inline-link" to={`/examples/${example.slug}`}>
              Open example
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
