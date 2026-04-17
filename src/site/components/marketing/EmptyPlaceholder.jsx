export function EmptyPlaceholder({ title, description }) {
  return (
    <div className="empty-placeholder">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
