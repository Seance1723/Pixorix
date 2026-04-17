import { NavLink } from 'react-router-dom';
import { docsNavigation } from '@/config/navigation';

export function DocsSidebar() {
  return (
    <aside className="docs-sidebar" aria-label="Documentation sections">
      <div className="docs-sidebar__panel">
        <p className="eyebrow">Documentation</p>
        <nav className="docs-sidebar__nav">
          {docsNavigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                isActive ? 'docs-sidebar__link docs-sidebar__link--active' : 'docs-sidebar__link'
              }
            >
              <span>{item.label}</span>
              <small>{item.description}</small>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
