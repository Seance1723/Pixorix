import { useOutletContext } from 'react-router-dom';
import { DocsContentWrapper } from '@/components/docs/DocsContentWrapper';
import { ThemeDocSection } from '@/components/docs/ThemeDocSection';
import { getDocBreadcrumbs } from '@/data/docsNavigation';
import { themeDocSections } from '@/data/themesDocs';

export function ThemesDocsPage() {
  const { currentDoc, adjacentDocs } = useOutletContext();

  return (
    <DocsContentWrapper
      title="Themes"
      description="Theme architecture for tokens, CSS variables, SCSS overrides, dark mode behavior, semantic tokens, and branding customization."
      category="Documentation"
      breadcrumbs={getDocBreadcrumbs(currentDoc)}
      previousPage={adjacentDocs?.previousPage}
      nextPage={adjacentDocs?.nextPage}
    >
      <div className="themes-docs-page">
        <section className="themes-docs-intro">
          <p>
            Pixorix themes should stay framework-agnostic and token-first. These examples show how branding,
            semantic meaning, runtime variables, and dark mode all fit together without locking the system to one stack.
          </p>
        </section>

        {themeDocSections.map((section) => (
          <ThemeDocSection key={section.id} section={section} />
        ))}
      </div>
    </DocsContentWrapper>
  );
}
