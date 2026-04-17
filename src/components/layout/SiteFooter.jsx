import { siteConfig } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>{siteConfig.description}</p>
        <p>
          Universal frontend framework docs scaffold for HTML, React, Vue, Angular, and more.
        </p>
      </div>
    </footer>
  );
}
