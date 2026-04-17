export function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const className = align === 'center' ? 'landing-section-header landing-section-header--center' : 'landing-section-header';

  return (
    <header className={className}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}
