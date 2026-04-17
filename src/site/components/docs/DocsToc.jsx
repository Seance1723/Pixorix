export function DocsToc({ items }) {
  return (
    <aside className="docs-toc" aria-label="Table of contents">
      <span className="site-eyebrow">On this page</span>
      <nav>
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
