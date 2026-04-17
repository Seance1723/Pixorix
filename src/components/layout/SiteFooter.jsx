import { NavLink } from 'react-router-dom';
import { footerLinkGroups } from '@/config/navigation';
import { siteConfig } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__intro">
          <NavLink className="site-brand site-brand--footer" to="/" aria-label={`${siteConfig.name} home`}>
            <span className="site-brand__mark" aria-hidden="true">
              <span className="site-brand__mark-core">P</span>
            </span>
            <span className="site-brand__copy">
              <strong>{siteConfig.name}</strong>
              <small>{siteConfig.tagline}</small>
            </span>
          </NavLink>
          <p>{siteConfig.description}</p>
          <p className="site-footer__caption">
            Built for HTML, React, Vue, Angular, and other frontend stacks.
          </p>
        </div>

        <div className="site-footer__links" aria-label="Footer links">
          {footerLinkGroups.map((group) => (
            <section key={group.title} className="site-footer__group" aria-labelledby={`footer-${group.title}`}>
              <h2 id={`footer-${group.title}`} className="site-footer__title">
                {group.title}
              </h2>
              <ul className="site-footer__list">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <NavLink className="site-footer__link" to={link.href}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </footer>
  );
}
