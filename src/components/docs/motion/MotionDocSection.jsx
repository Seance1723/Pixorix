import { DemoShowcase } from '../DemoShowcase';
import { FrameworkTabs } from '../FrameworkTabs';
import { NoteBlock } from '../NoteBlock';
import { MotionPreviewBlock } from './MotionPreviewBlock';

export function MotionDocSection({ section }) {
  return (
    <section id={section.id} className="motion-doc-section" aria-labelledby={`${section.id}-title`}>
      <header className="motion-doc-section__header">
        <div>
          <p className="eyebrow">Motion</p>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
        </div>
        <p>{section.description}</p>
      </header>

      <DemoShowcase
        title={`${section.title} example`}
        description={section.demoDescription}
        previewTitle="Rendered output"
        previewDescription={section.previewDescription}
        previewMinHeight={section.previewMinHeight ?? '16rem'}
        codePanel={<FrameworkTabs snippets={section.snippets} title={section.title} />}
      >
        {section.preview ? <MotionPreviewBlock variant={section.preview.type} /> : <div className="motion-preview__static">{section.previewText}</div>}
      </DemoShowcase>

      {section.note ? (
        <NoteBlock tone={section.note.tone} title={section.note.title}>
          <p>{section.note.body}</p>
        </NoteBlock>
      ) : null}
    </section>
  );
}
