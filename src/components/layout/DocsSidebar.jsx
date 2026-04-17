import { NavLink } from 'react-router-dom';

export function DocsSidebar({ groups, currentPath, labelledBy = 'docs-sidebar-title', onNavigate }) {
  return (
    <aside className="docs-sidebar" aria-labelledby={labelledBy}>
      <div className="docs-sidebar__panel">
        <div className="docs-sidebar__intro">
          <p className="eyebrow">Documentation</p>
          <h2 id={labelledBy} className="docs-sidebar__title">
            Browse Pixorix docs
          </h2>
          <p className="docs-sidebar__caption">
            Framework-agnostic guidance for layout, utilities, themes, components, and motion.
          </p>
        </div>

        <div className="docs-sidebar__groups">
          {groups.map((group) => (
            <section key={group.title} className="docs-sidebar__group" aria-labelledby={`docs-group-${group.slug}`}>
              <h3 id={`docs-group-${group.slug}`} className="docs-sidebar__group-title">
                {group.title}
              </h3>
              <nav className="docs-sidebar__nav" aria-label={group.title}>
                {group.items.map((item) => {
                  const isCurrent = currentPath === item.href;

                  return (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      onClick={onNavigate}
                      className={isCurrent ? 'docs-sidebar__link docs-sidebar__link--active' : 'docs-sidebar__link'}
                      aria-current={isCurrent ? 'page' : undefined}
                    >
                      <span>{item.label}</span>
                      <small>{item.description}</small>
                    </NavLink>
                  );
                })}
              </nav>
            </section>
          ))}
        </div>
      </div>
    </aside>
  );
}
