export function GetStartedSection({ eyebrow, title, description, children }) {
  return (
    <section className="get-started-section">
      <header className="get-started-section__header">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </header>
      <div className="get-started-section__body">{children}</div>
    </section>
  );
}
