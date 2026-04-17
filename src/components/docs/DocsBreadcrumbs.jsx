import { Link } from 'react-router-dom';

export function DocsBreadcrumbs({ items }) {
  return (
    <nav className="docs-breadcrumbs" aria-label="Breadcrumb">
      <ol className="docs-breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="docs-breadcrumbs__item">
              {isLast ? (
                <span className="docs-breadcrumbs__current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.href} className="docs-breadcrumbs__link">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
