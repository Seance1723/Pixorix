import { Outlet } from 'react-router-dom';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

export function BaseLayout() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
