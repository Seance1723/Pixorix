import { DocsPageTemplate } from '@/components/docs/DocsPageTemplate';
import { docsPages } from '@/data/docsPages';

export function LayoutDocsPage() {
  return <DocsPageTemplate page={docsPages.layout} />;
}
