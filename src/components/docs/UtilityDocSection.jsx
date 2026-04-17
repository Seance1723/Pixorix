import { DemoShowcase } from './DemoShowcase';
import { FrameworkTabs } from './FrameworkTabs';
import { UtilityPreviewCanvas } from './UtilityPreviewCanvas';

export function UtilityDocSection({ section }) {
  return (
    <section id={section.id} className="utility-doc-section" aria-labelledby={`${section.id}-title`}>
      <header className="utility-doc-section__header">
        <div>
          <p className="eyebrow">Utility</p>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
        </div>
        <p>{section.description}</p>
      </header>

      <DemoShowcase
        title={`${section.title} example`}
        description={section.demoDescription}
        previewTitle="Rendered output"
        previewDescription={section.previewDescription}
        previewMinHeight={section.previewMinHeight ?? '14rem'}
        codePanel={<FrameworkTabs snippets={section.snippets} title={section.title} />}
      >
        <UtilityPreviewCanvas preview={section.preview} />
      </DemoShowcase>
    </section>
  );
}
