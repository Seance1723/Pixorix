import { useId, useMemo, useState } from 'react';
import { CodeBlock } from './CodeBlock';

const frameworkOrder = ['html', 'react', 'angular', 'vue'];

const frameworkLabels = {
  html: 'HTML',
  react: 'React',
  angular: 'Angular',
  vue: 'Vue'
};

export function FrameworkTabs({
  snippets,
  defaultFramework = 'html',
  title,
  caption,
  className = ''
}) {
  const availableFrameworks = useMemo(
    () => frameworkOrder.filter((framework) => snippets?.[framework]),
    [snippets]
  );

  const initialFramework =
    availableFrameworks.find((framework) => framework === defaultFramework) ?? availableFrameworks[0];

  const [activeFramework, setActiveFramework] = useState(initialFramework);
  const tabsId = useId();

  if (!availableFrameworks.length) {
    return null;
  }

  const activeSnippet = snippets[activeFramework];

  const handleKeyDown = (event) => {
    const currentIndex = availableFrameworks.indexOf(activeFramework);

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setActiveFramework(availableFrameworks[(currentIndex + 1) % availableFrameworks.length]);
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setActiveFramework(
        availableFrameworks[(currentIndex - 1 + availableFrameworks.length) % availableFrameworks.length]
      );
    }

    if (event.key === 'Home') {
      event.preventDefault();
      setActiveFramework(availableFrameworks[0]);
    }

    if (event.key === 'End') {
      event.preventDefault();
      setActiveFramework(availableFrameworks[availableFrameworks.length - 1]);
    }
  };

  const rootClassName = className ? `framework-tabs ${className}` : 'framework-tabs';

  return (
    <section className={rootClassName}>
      <div
        className="framework-tabs__tablist"
        role="tablist"
        aria-label="Framework-specific code examples"
        onKeyDown={handleKeyDown}
      >
        {availableFrameworks.map((framework) => {
          const isSelected = activeFramework === framework;

          return (
            <button
              key={framework}
              id={`${tabsId}-${framework}-tab`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`${tabsId}-${framework}-panel`}
              tabIndex={isSelected ? 0 : -1}
              className={
                isSelected
                  ? 'framework-tabs__tab framework-tabs__tab--active'
                  : 'framework-tabs__tab'
              }
              onClick={() => setActiveFramework(framework)}
            >
              {frameworkLabels[framework]}
            </button>
          );
        })}
      </div>

      {availableFrameworks.map((framework) => {
        const snippet = snippets[framework];
        const isSelected = activeFramework === framework;

        return (
          <div
            key={framework}
            id={`${tabsId}-${framework}-panel`}
            role="tabpanel"
            aria-labelledby={`${tabsId}-${framework}-tab`}
            hidden={!isSelected}
            className="framework-tabs__panel"
          >
            <CodeBlock
              code={snippet.code}
              language={snippet.language}
              title={title ?? snippet.title ?? frameworkLabels[framework]}
              filename={snippet.filename}
              caption={caption ?? snippet.caption}
              className="framework-tabs__code"
            />
          </div>
        );
      })}
    </section>
  );
}
