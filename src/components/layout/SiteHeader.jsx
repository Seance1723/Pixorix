import { useEffect, useId, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { headerMeta, primaryNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brand-row">
          <NavLink className="site-brand" to="/" aria-label={`${siteConfig.name} home`}>
            <span className="site-brand__mark" aria-hidden="true">
              <span className="site-brand__mark-core">P</span>
            </span>
            <span className="site-brand__copy">
              <strong>{siteConfig.name}</strong>
              <small>{siteConfig.tagline}</small>
            </span>
          </NavLink>

          <div className="site-header__meta">
            <span className="site-badge" aria-label={`Current version ${headerMeta.version}`}>
              {headerMeta.version}
            </span>
            <a
              className="site-button site-button--ghost site-button--github"
              href={headerMeta.githubHref}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <button
              type="button"
              className="site-menu-toggle"
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div
          id={menuId}
          className={isMenuOpen ? 'site-header__nav-wrap site-header__nav-wrap--open' : 'site-header__nav-wrap'}
        >
          <nav className="site-nav" aria-label="Primary">
            {primaryNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  isActive || item.match.some((path) => location.pathname.startsWith(path))
                    ? 'site-nav__link site-nav__link--active'
                    : 'site-nav__link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-header__actions site-header__actions--mobile">
            <span className="site-badge" aria-label={`Current version ${headerMeta.version}`}>
              {headerMeta.version}
            </span>
            <a
              className="site-button site-button--github"
              href={headerMeta.githubHref}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
