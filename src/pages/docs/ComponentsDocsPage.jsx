import { DocsPageTemplate } from '@/components/docs/DocsPageTemplate';
import { docsPages } from '@/data/docsPages';

export function ComponentsDocsPage() {
  return <DocsPageTemplate page={docsPages.components} />;
}
