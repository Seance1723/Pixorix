export function PreviewBlock({
  title = 'Preview',
  description,
  minHeight = '12rem',
  tone = 'default',
  className = '',
  children
}) {
  const blockClassName = className ? `preview-block preview-block--${tone} ${className}` : `preview-block preview-block--${tone}`;

  return (
    <section className={blockClassName}>
      <header className="preview-block__header">
        <div>
          <h2 className="preview-block__title">{title}</h2>
          {description ? <p className="preview-block__description">{description}</p> : null}
        </div>
      </header>

      <div className="preview-block__canvas" style={{ minHeight }}>
        {children}
      </div>
    </section>
  );
}
