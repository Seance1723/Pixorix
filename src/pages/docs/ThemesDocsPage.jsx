import { DocsPageTemplate } from '@/components/docs/DocsPageTemplate';
import { docsPages } from '@/data/docsPages';

export function ThemesDocsPage() {
  return <DocsPageTemplate page={docsPages.themes} />;
}
