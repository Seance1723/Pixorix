import { DocsPageTemplate } from '@/components/docs/DocsPageTemplate';
import { docsPages } from '@/data/docsPages';

export function MotionDocsPage() {
  return <DocsPageTemplate page={docsPages.motion} />;
}
