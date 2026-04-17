import { Link } from 'react-router-dom';

export function PrevNextDocNav({ previous, next }) {
  return (
    <nav className="doc-pagination" aria-label="Documentation pagination">
      {previous ? (
        <Link className="doc-pagination__card" to={previous.path}>
          <span>Previous</span>
          <strong>{previous.label}</strong>
        </Link>
      ) : (
        <div className="doc-pagination__card is-empty" />
      )}
      {next ? (
        <Link className="doc-pagination__card" to={next.path}>
          <span>Next</span>
          <strong>{next.label}</strong>
        </Link>
      ) : (
        <div className="doc-pagination__card is-empty" />
      )}
    </nav>
  );
}
