export function DocPageHeader({ title, intro, summary }) {
  return (
    <header className="doc-page-header">
      <span className="site-eyebrow">Reference</span>
      <h1>{title}</h1>
      <p>{intro}</p>
      <div className="doc-summary-grid">
        {summary.map((item) => (
          <article className="doc-summary-card" key={item}>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </header>
  );
}
