import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { initPixorix } from '../../js/pixorix.js';

export function AppShell() {
  const location = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      initPixorix(document);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <a className="site-skip-link" href="#site-content">
        Skip to content
      </a>
      <Header />
      <main id="site-content" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
