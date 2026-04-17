import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="not-found-page">
      <span className="site-eyebrow">Not found</span>
      <h1>That route is not part of the Pixorix portal yet.</h1>
      <p>Use the docs or examples navigation to continue exploring the framework.</p>
      <Link className="site-button site-button--primary" to="/">
        Return home
      </Link>
    </section>
  );
}
