import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="content-panel page-section">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="lead">The route does not exist in the starter map yet.</p>
      <Link className="inline-link" to="/">
        Return home
      </Link>
    </section>
  );
}
