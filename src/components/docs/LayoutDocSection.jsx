import { DemoShowcase } from './DemoShowcase';
import { FrameworkTabs } from './FrameworkTabs';
import { NoteBlock } from './NoteBlock';
import { LayoutPreviewCanvas } from './LayoutPreviewCanvas';

export function LayoutDocSection({ section }) {
  return (
    <section id={section.id} className="layout-doc-section" aria-labelledby={`${section.id}-title`}>
      <header className="layout-doc-section__header">
        <div>
          <p className="eyebrow">Layout</p>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
        </div>
        <p>{section.description}</p>
      </header>

      <DemoShowcase
        title={`${section.title} example`}
        description={section.demoDescription}
        previewTitle="Rendered output"
        previewDescription={section.previewDescription}
        previewMinHeight={section.previewMinHeight ?? '18rem'}
        codePanel={<FrameworkTabs snippets={section.snippets} title={section.title} />}
      >
        <LayoutPreviewCanvas preview={section.preview} />
      </DemoShowcase>

      <div className="layout-doc-section__notes">
        <NoteBlock tone="tip" title="Responsive notes">
          <ul className="layout-doc-section__note-list">
            {section.responsiveNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </NoteBlock>

        <NoteBlock tone="note" title="Browser notes">
          <ul className="layout-doc-section__note-list">
            {section.browserNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </NoteBlock>
      </div>
    </section>
  );
}
