import { DemoShowcase } from './DemoShowcase';
import { FrameworkTabs } from './FrameworkTabs';
import { ThemePreviewCanvas } from './ThemePreviewCanvas';

export function ThemeDocSection({ section }) {
  return (
    <section id={section.id} className="theme-doc-section" aria-labelledby={`${section.id}-title`}>
      <header className="theme-doc-section__header">
        <div>
          <p className="eyebrow">Theme</p>
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
        <ThemePreviewCanvas preview={section.preview} />
      </DemoShowcase>
    </section>
  );
}
