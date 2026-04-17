import { RouterProvider } from 'react-router-dom';
import { siteRouter } from './router/siteRouter';
import { ThemeProvider } from './hooks/useTheme.jsx';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={siteRouter} />
    </ThemeProvider>
  );
}

export default App;
