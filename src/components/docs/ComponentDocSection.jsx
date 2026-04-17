import { DemoShowcase } from './DemoShowcase';
import { FrameworkTabs } from './FrameworkTabs';
import { NoteBlock } from './NoteBlock';
import { ComponentPreviewCanvas } from './ComponentPreviewCanvas';

export function ComponentDocSection({ component }) {
  return (
    <section id={component.id} className="component-doc-section" aria-labelledby={`${component.id}-title`}>
      <header className="component-doc-section__header">
        <div>
          <p className="eyebrow">Component</p>
          <h2 id={`${component.id}-title`}>{component.title}</h2>
        </div>
        <p>{component.description}</p>
      </header>

      <DemoShowcase
        title={`${component.title} example`}
        description={component.demoDescription}
        previewTitle="Rendered output"
        previewDescription={component.previewDescription}
        previewMinHeight={component.previewMinHeight ?? '16rem'}
        codePanel={<FrameworkTabs snippets={component.snippets} title={component.title} />}
      >
        <ComponentPreviewCanvas preview={component.preview} />
      </DemoShowcase>

      <div className="component-doc-section__meta-grid">
        <article className="component-meta-card">
          <h3>Variants</h3>
          <ul>
            {component.variants.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="component-meta-card">
          <h3>Sizes</h3>
          <ul>
            {component.sizes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="component-meta-card">
          <h3>States</h3>
          <ul>
            {component.states.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="component-doc-section__notes">
        <NoteBlock tone="tip" title="Accessibility notes">
          <ul className="component-doc-section__note-list">
            {component.accessibilityNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </NoteBlock>

        <NoteBlock tone="note" title="Browser notes">
          <ul className="component-doc-section__note-list">
            {component.browserNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </NoteBlock>

        <NoteBlock tone="note" title="Responsive notes">
          <ul className="component-doc-section__note-list">
            {component.responsiveNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </NoteBlock>
      </div>
    </section>
  );
}
