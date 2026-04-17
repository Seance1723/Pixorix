import { useParams } from 'react-router-dom';
import { examplesBySlug } from '@/data/examples';

export function ExampleDetailPage() {
  const { slug } = useParams();
  const example = examplesBySlug[slug];

  if (!example) {
    return (
      <section className="content-panel page-section">
        <p className="eyebrow">Examples</p>
        <h1>Example not found</h1>
        <p className="lead">Create a matching record in `src/data/examples.js` when you add the example page.</p>
      </section>
    );
  }

  return (
    <section className="content-panel page-section">
      <p className="eyebrow">Example Detail</p>
      <h1>{example.title}</h1>
      <p className="lead">{example.summary}</p>
      <div className="content-grid">
        <article>
          <h2>Audience</h2>
          <p>{example.audience}</p>
        </article>
        <article>
          <h2>Planned focus</h2>
          <p>{example.focus}</p>
        </article>
      </div>
    </section>
  );
}
