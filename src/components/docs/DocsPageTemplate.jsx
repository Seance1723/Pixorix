import { Link } from 'react-router-dom';

export function DocsPageTemplate({ page }) {
  return (
    <article className="content-panel docs-page">
      <header className="docs-page__header">
        <p className="eyebrow">{page.category}</p>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </header>

      <section className="docs-page__section">
        <h2>Planned coverage</h2>
        <ul className="docs-page__list">
          {page.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      <section className="docs-page__section">
        <h2>Expansion notes</h2>
        <p>{page.notes}</p>
      </section>

      <section className="docs-page__section">
        <h2>Related routes</h2>
        <div className="docs-page__links">
          {page.relatedRoutes.map((item) => (
            <Link key={item.href} to={item.href} className="inline-link">
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
