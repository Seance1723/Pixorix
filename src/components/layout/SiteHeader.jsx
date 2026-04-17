import { NavLink } from 'react-router-dom';
import { primaryNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="site-brand" to="/">
          <span className="site-brand__mark" aria-hidden="true">
            P
          </span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.tagline}</small>
          </span>
        </NavLink>

        <nav className="site-nav" aria-label="Primary">
          {primaryNavigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
