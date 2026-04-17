import { Link } from 'react-router-dom';
import { footerLinkGroups } from '../../content/navigation';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__intro">
          <h2>Pixorix</h2>
          <p>SCSS-first frontend framework with documentation, examples, and a component catalog built from the framework itself.</p>
        </div>
        <div className="site-footer__grid">
          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>Pixorix is built for product teams that care about scalable CSS architecture and durable UI decisions.</p>
        <span>Version 0.1.0</span>
      </div>
    </footer>
  );
}
