export function ComparisonBlock({ items }) {
  return (
    <div className="comparison-block">
      {items.map((item) => (
        <article className="comparison-block__row" key={item.problem} data-reveal>
          <div>
            <span className="site-eyebrow">Common limitation</span>
            <p>{item.problem}</p>
          </div>
          <div>
            <span className="site-eyebrow">Pixorix response</span>
            <p>{item.solution}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
