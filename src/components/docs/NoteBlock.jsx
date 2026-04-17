const toneLabels = {
  note: 'Note',
  tip: 'Tip',
  warning: 'Warning'
};

export function NoteBlock({ tone = 'note', title, children, className = '' }) {
  const resolvedTitle = title ?? toneLabels[tone] ?? 'Note';
  const blockClassName = className ? `note-block note-block--${tone} ${className}` : `note-block note-block--${tone}`;

  return (
    <aside className={blockClassName} aria-label={resolvedTitle}>
      <div className="note-block__badge">{resolvedTitle}</div>
      <div className="note-block__content">{children}</div>
    </aside>
  );
}
