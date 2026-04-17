export function CodeBlock({
  code,
  language = 'html',
  title,
  filename,
  caption,
  className = ''
}) {
  const blockClassName = className ? `code-block ${className}` : 'code-block';

  return (
    <figure className={blockClassName}>
      {title || filename || language ? (
        <figcaption className="code-block__header">
          <div className="code-block__meta">
            {title ? <strong className="code-block__title">{title}</strong> : null}
            {filename ? <span className="code-block__filename">{filename}</span> : null}
          </div>
          <span className="code-block__language" aria-label={`Code language ${language}`}>
            {language}
          </span>
        </figcaption>
      ) : null}

      <pre className="code-block__body">
        <code>{code}</code>
      </pre>

      {caption ? <p className="code-block__caption">{caption}</p> : null}
    </figure>
  );
}
