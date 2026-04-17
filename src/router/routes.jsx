import { BaseLayout } from '@/layouts/BaseLayout';
import { DocsLayout } from '@/layouts/DocsLayout';
import { HomePage } from '@/pages/HomePage';
import { GetStartedPage } from '@/pages/GetStartedPage';
import { ComponentsDocsPage } from '@/pages/docs/ComponentsDocsPage';
import { LayoutDocsPage } from '@/pages/docs/LayoutDocsPage';
import { UtilitiesDocsPage } from '@/pages/docs/UtilitiesDocsPage';
import { ThemesDocsPage } from '@/pages/docs/ThemesDocsPage';
import { MotionDocsPage } from '@/pages/docs/MotionDocsPage';
import { ExamplesPage } from '@/pages/ExamplesPage';
import { ExampleDetailPage } from '@/pages/ExampleDetailPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const routeTree = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'get-started', element: <GetStartedPage /> },
      {
        path: 'docs',
        element: <DocsLayout />,
        children: [
          { path: 'components', element: <ComponentsDocsPage /> },
          { path: 'layout', element: <LayoutDocsPage /> },
          { path: 'utilities', element: <UtilitiesDocsPage /> },
          { path: 'themes', element: <ThemesDocsPage /> },
          { path: 'motion', element: <MotionDocsPage /> }
        ]
      },
      { path: 'examples', element: <ExamplesPage /> },
      { path: 'examples/:slug', element: <ExampleDetailPage /> },
      { path: '*', element: <NotFoundPage /> }
    ]
  }
];
