import { useId, useState } from 'react';
import { CodeBlock } from './CodeBlock';
import { PreviewBlock } from './PreviewBlock';

const tabs = [
  { id: 'preview', label: 'Preview' },
  { id: 'code', label: 'Code' }
];

export function DemoShowcase({
  title,
  description,
  code,
  codePanel,
  language = 'html',
  filename,
  caption,
  previewTitle = 'Rendered Output',
  previewDescription,
  previewMinHeight,
  mode = 'split',
  defaultTab = 'preview',
  children
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const tabListId = useId();

  const handleKeyDown = (event) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setActiveTab(tabs[(currentIndex + 1) % tabs.length].id);
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setActiveTab(tabs[(currentIndex - 1 + tabs.length) % tabs.length].id);
    }
  };

  return (
    <section className={`demo-showcase demo-showcase--${mode}`}>
      {title || description ? (
        <header className="demo-showcase__header">
          {title ? <h2 className="demo-showcase__title">{title}</h2> : null}
          {description ? <p className="demo-showcase__description">{description}</p> : null}
        </header>
      ) : null}

      {mode === 'tabs' ? (
        <>
          <div
            className="demo-showcase__tablist"
            role="tablist"
            aria-label="Demo views"
            onKeyDown={handleKeyDown}
          >
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`${tabListId}-${tab.id}-tab`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`${tabListId}-${tab.id}-panel`}
                  tabIndex={isSelected ? 0 : -1}
                  className={isSelected ? 'demo-showcase__tab demo-showcase__tab--active' : 'demo-showcase__tab'}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            id={`${tabListId}-preview-panel`}
            role="tabpanel"
            aria-labelledby={`${tabListId}-preview-tab`}
            hidden={activeTab !== 'preview'}
            className="demo-showcase__tabpanel"
          >
            <PreviewBlock
              title={previewTitle}
              description={previewDescription}
              minHeight={previewMinHeight}
            >
              {children}
            </PreviewBlock>
          </div>

          <div
            id={`${tabListId}-code-panel`}
            role="tabpanel"
            aria-labelledby={`${tabListId}-code-tab`}
            hidden={activeTab !== 'code'}
            className="demo-showcase__tabpanel"
          >
            {codePanel ?? (
              <CodeBlock
                code={code}
                language={language}
                title={title}
                filename={filename}
                caption={caption}
              />
            )}
          </div>
        </>
      ) : (
        <div className="demo-showcase__split">
          <PreviewBlock
            title={previewTitle}
            description={previewDescription}
            minHeight={previewMinHeight}
          >
            {children}
          </PreviewBlock>

          {codePanel ?? (
            <CodeBlock
              code={code}
              language={language}
              title={title}
              filename={filename}
              caption={caption}
            />
          )}
        </div>
      )}
    </section>
  );
}
