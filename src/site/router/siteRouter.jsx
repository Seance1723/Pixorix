import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from '../layouts/AppShell';
import { PublicLayout } from '../layouts/PublicLayout';
import { DocsLayout } from '../layouts/DocsLayout';
import { HomePage } from '../pages/HomePage';
import { GetStartedPage } from '../pages/GetStartedPage';
import { ExamplesPage } from '../pages/ExamplesPage';
import { ExampleDetailPage } from '../pages/ExampleDetailPage';
import { DocPage } from '../pages/docs/DocPage';
import { ComponentsCatalogPage } from '../pages/docs/ComponentsCatalogPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const siteRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'get-started', element: <GetStartedPage /> },
          { path: 'examples', element: <ExamplesPage /> },
          { path: 'examples/:slug', element: <ExampleDetailPage /> }
        ]
      },
      {
        path: 'docs',
        element: <DocsLayout />,
        children: [
          { index: true, element: <DocPage /> },
          { path: 'installation', element: <DocPage /> },
          { path: 'quick-start', element: <DocPage /> },
          { path: 'layout', element: <DocPage /> },
          { path: 'utilities', element: <DocPage /> },
          { path: 'components', element: <ComponentsCatalogPage /> },
          { path: 'advanced-components', element: <DocPage /> },
          { path: 'forms', element: <DocPage /> },
          { path: 'themes', element: <DocPage /> },
          { path: 'dark-mode', element: <DocPage /> },
          { path: 'motion', element: <DocPage /> },
          { path: 'accessibility', element: <DocPage /> },
          { path: 'browser-support', element: <DocPage /> },
          { path: 'customization', element: <DocPage /> },
          { path: 'javascript-api', element: <DocPage /> }
        ]
      },
      { path: '*', element: <NotFoundPage /> }
    ]
  }
]);
