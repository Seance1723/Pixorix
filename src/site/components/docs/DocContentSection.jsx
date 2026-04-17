import { CodeBlock } from '../shared/CodeBlock';

export function DocContentSection({ section }) {
  return (
    <section className="doc-section" id={section.id}>
      <div className="doc-section__header">
        <h2>{section.title}</h2>
      </div>
      <div className="doc-section__content">
        {section.body?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.bullets ? (
          <ul>
            {section.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
        {section.code ? <CodeBlock code={section.code} /> : null}
        {section.note ? <div className={`doc-callout doc-callout--${section.noteTone || 'note'}`}>{section.note}</div> : null}
      </div>
    </section>
  );
}
