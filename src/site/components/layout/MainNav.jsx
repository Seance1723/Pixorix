import { NavLink } from 'react-router-dom';
import { mainNavItems } from '../../content/navigation';

export function MainNav({ onNavigate }) {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      {mainNavItems.map((item) => (
        <NavLink
          key={item.href}
          className={({ isActive }) => `site-nav__link px-navbar__link${isActive ? ' is-active' : ''}`}
          to={item.href}
          onClick={onNavigate}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
