import { Link, useOutletContext } from 'react-router-dom';
import { DocsContentWrapper } from './DocsContentWrapper';
import { getDocBreadcrumbs } from '@/data/docsNavigation';

export function DocsPageTemplate({ page }) {
  const { currentDoc, adjacentDocs } = useOutletContext();

  return (
    <DocsContentWrapper
      title={page.title}
      description={page.description}
      category={page.category}
      breadcrumbs={getDocBreadcrumbs(currentDoc)}
      previousPage={adjacentDocs?.previousPage}
      nextPage={adjacentDocs?.nextPage}
    >
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
    </DocsContentWrapper>
  );
}
