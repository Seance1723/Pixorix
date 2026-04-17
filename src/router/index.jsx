import { createBrowserRouter } from 'react-router-dom';
import { routeTree } from './routes';

export const router = createBrowserRouter(routeTree, {
  future: {
    v7_normalizeFormMethod: true
  }
});
