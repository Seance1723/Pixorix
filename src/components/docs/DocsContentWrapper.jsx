import { DocsBreadcrumbs } from './DocsBreadcrumbs';
import { DocsPrevNextNav } from './DocsPrevNextNav';

export function DocsContentWrapper({
  title,
  description,
  category,
  breadcrumbs,
  previousPage,
  nextPage,
  children
}) {
  return (
    <article className="docs-content">
      <div className="content-panel docs-content__panel">
        {breadcrumbs?.length ? <DocsBreadcrumbs items={breadcrumbs} /> : null}

        <header className="docs-content__header">
          {category ? <p className="eyebrow">{category}</p> : null}
          <h1>{title}</h1>
          {description ? <p className="lead">{description}</p> : null}
        </header>

        <div className="docs-content__body">{children}</div>

        <DocsPrevNextNav previousPage={previousPage} nextPage={nextPage} />
      </div>
    </article>
  );
}
