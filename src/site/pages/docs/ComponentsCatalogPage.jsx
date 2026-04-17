import { Breadcrumbs } from '../../components/shared/Breadcrumbs';
import { DocPageHeader } from '../../components/docs/DocPageHeader';
import { ComponentDemoCard } from '../../components/docs/ComponentDemoCard';
import { componentCatalogSections } from '../../content/componentCatalog';
import { componentInventoryGroups } from '../../content/componentInventory';
import { ComponentInventoryCard } from '../../components/docs/ComponentInventoryCard';
import { useReveal } from '../../hooks/useReveal';

export function ComponentsCatalogPage() {
  const revealRef = useReveal('[data-reveal]');

  return (
    <div className="doc-page component-docs" ref={revealRef}>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Docs', href: '/docs' }, { label: 'Components' }]} />
      <DocPageHeader
        title="Pixorix components"
        intro="A documentation-first component catalog built from Pixorix classes. Every component entry below uses HTML-first starter markup so it can be copied into plain HTML, React, Vue, or any other frontend setup."
        summary={[
          'Complete core and advanced component inventory',
          'Copyable HTML starter snippets for non-React and React usage',
          'Detailed live demos for the most important UI building blocks'
        ]}
      />
      {componentInventoryGroups.map((group) => (
        <section key={group.title} className="component-docs__section">
          <div className="component-docs__intro">
            <span className="site-eyebrow">{group.title}</span>
            <p>{group.description}</p>
          </div>
          <div className="inventory-grid">
            {group.items.map((item) => (
              <ComponentInventoryCard key={`${group.title}-${item.name}`} item={item} />
            ))}
          </div>
        </section>
      ))}
      {componentCatalogSections.map((section) => (
        <section key={section.title} className="component-docs__section">
          <div className="component-docs__intro">
            <span className="site-eyebrow">{section.title}</span>
            <p>{section.description}</p>
          </div>
          <div className="component-docs__stack">
            {section.items.map((item) => (
              <ComponentDemoCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
