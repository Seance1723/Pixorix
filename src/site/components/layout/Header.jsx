import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MainNav } from './MainNav';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner px-navbar">
        <Link className="site-brand px-navbar__brand" to="/">
          <span className="site-brand__mark">PX</span>
          <span className="site-brand__copy">
            <strong>Pixorix</strong>
            <small>Docs</small>
          </span>
        </Link>
        <div className="site-header__nav px-navbar__nav">
          <MainNav />
        </div>
        <div className="site-header__actions">
          <ThemeToggle />
          <Link className="px-button px-button--primary px-button--sm" to="/docs">
            Docs
          </Link>
          <button
            type="button"
            className="site-menu-button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </div>
      </div>
      <div className={`mobile-nav${menuOpen ? ' is-open' : ''}`} id="mobile-nav">
        <MainNav onNavigate={() => setMenuOpen(false)} />
        <div className="mobile-nav__actions">
          <Link className="px-button px-button--primary" to="/get-started" onClick={() => setMenuOpen(false)}>
            Start building
          </Link>
        </div>
      </div>
    </header>
  );
}
