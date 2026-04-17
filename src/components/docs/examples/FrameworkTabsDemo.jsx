import { DemoShowcase } from '../DemoShowcase';
import { FrameworkTabs } from '../FrameworkTabs';
import { buttonFrameworkSnippets } from '@/data/frameworkSnippets';

export function FrameworkTabsDemo() {
  return (
    <DemoShowcase
      title="Multi-framework button example"
      description="Rendered output stays in the preview area while code tabs switch between HTML, React, Angular, and Vue snippets."
      previewTitle="Rendered Output"
      previewDescription="One visual reference, multiple framework implementations."
      previewMinHeight="14rem"
      codePanel={<FrameworkTabs snippets={buttonFrameworkSnippets} title="Button Example" />}
    >
      <div className="framework-demo-preview">
        <button type="button" className="framework-demo-preview__button">
          Launch demo
        </button>
        <p className="framework-demo-preview__caption">
          Pixorix docs can keep the UI output stable while framework tabs change only the code implementation.
        </p>
      </div>
    </DemoShowcase>
  );
}
