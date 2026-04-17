import { DocsPageTemplate } from '@/components/docs/DocsPageTemplate';
import { docsPages } from '@/data/docsPages';

export function UtilitiesDocsPage() {
  return <DocsPageTemplate page={docsPages.utilities} />;
}
