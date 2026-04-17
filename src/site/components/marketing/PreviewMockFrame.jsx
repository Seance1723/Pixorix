export function PreviewMockFrame({ title, lines }) {
  return (
    <div className="preview-frame" data-reveal>
      <div className="preview-frame__header">
        <strong>{title}</strong>
        <span>Preview</span>
      </div>
      <div className="preview-frame__body">
        {lines.map((line) => (
          <div className="preview-frame__line" key={line}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
