import { Link } from 'react-router-dom';

export function DocsPrevNextNav({ previousPage, nextPage }) {
  if (!previousPage && !nextPage) {
    return null;
  }

  return (
    <nav className="docs-prev-next" aria-label="Previous and next documentation pages">
      {previousPage ? (
        <Link className="docs-prev-next__link" to={previousPage.href}>
          <span className="docs-prev-next__meta">Previous</span>
          <strong>{previousPage.label}</strong>
        </Link>
      ) : (
        <div />
      )}

      {nextPage ? (
        <Link className="docs-prev-next__link docs-prev-next__link--next" to={nextPage.href}>
          <span className="docs-prev-next__meta">Next</span>
          <strong>{nextPage.label}</strong>
        </Link>
      ) : null}
    </nav>
  );
}
