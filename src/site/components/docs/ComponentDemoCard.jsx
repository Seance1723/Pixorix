import { CodeBlock } from '../shared/CodeBlock';

export function ComponentDemoCard({ item }) {
  const Preview = item.preview;

  return (
    <section className="component-demo" id={item.slug}>
      <div className="component-demo__header">
        <div>
          <span className="site-eyebrow">{item.category}</span>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
        <div className="component-demo__review">
          <strong>Review</strong>
          <p>{item.review}</p>
        </div>
      </div>
      <div className="component-demo__preview">
        <div className="component-demo__preview-bar">
          <span>Live preview</span>
          <small>{item.previewLabel || 'Pixorix component'}</small>
        </div>
        <div className="component-demo__preview-body">
          <Preview />
        </div>
      </div>
      <div className="component-demo__notes">
        <article className="content-card">
          <h3>Usage notes</h3>
          <ul>
            {item.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </article>
        <article className="content-card">
          <h3>Accessibility review</h3>
          <p>{item.accessibility}</p>
        </article>
      </div>
      <CodeBlock code={item.code} label={`${item.title} markup`} />
    </section>
  );
}
