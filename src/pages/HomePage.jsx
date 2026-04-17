import { siteConfig } from '@/config/site';

export function HomePage() {
  return (
    <section className="content-panel page-section">
      <p className="eyebrow">Official website</p>
      <h1>{siteConfig.name}</h1>
      <p className="lead">
        Modern documentation shell for a framework-agnostic frontend system. This starter keeps the
        website structured like a premium framework site without locking Pixorix to React.
      </p>
      <div className="content-grid">
        <article>
          <h2>Universal positioning</h2>
          <p>Use this surface to explain how Pixorix works across plain HTML, React, Vue, Angular, and other stacks.</p>
        </article>
        <article>
          <h2>Docs-first architecture</h2>
          <p>Routes, navigation, and shared docs metadata are separated so the documentation area can grow without router churn.</p>
        </article>
      </div>
    </section>
  );
}
