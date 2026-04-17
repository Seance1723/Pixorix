import { CodeBlock } from '../shared/CodeBlock';

export function ComponentInventoryCard({ item }) {
  return (
    <article className="inventory-card">
      <div className="inventory-card__head">
        <div>
          <h3>{item.name}</h3>
          <p>{item.classes}</p>
        </div>
        <span className="px-badge px-badge--outline">HTML</span>
      </div>
      <CodeBlock code={item.code} label={`${item.name} starter HTML`} />
    </article>
  );
}
