import { NavLink } from 'react-router-dom';
import { docsSidebarGroups } from '../../content/docs';

export function DocsSidebar({ currentPath, onNavigate }) {
  return (
    <aside className="docs-sidebar" aria-label="Documentation navigation">
      <div className="docs-sidebar__intro">
        <span className="site-eyebrow">Documentation</span>
        <h2>Browse the framework</h2>
        <p>Navigate foundations, system layers, experience guides, and platform details.</p>
      </div>
      {docsSidebarGroups.map((group) => (
        <div className="docs-sidebar__group" key={group.title}>
          <h3>{group.title}</h3>
          <nav>
            {group.items.map((item) => (
              <NavLink
                key={item.href}
                className={`docs-sidebar__link${currentPath === item.href ? ' is-active' : ''}`}
                to={item.href}
                onClick={onNavigate}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
}
