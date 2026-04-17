import { useEffect } from 'react';
import { DocsSidebar } from './DocsSidebar';

export function MobileDocsDrawer({ open, currentPath, onClose }) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('drawer-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('drawer-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <div className={`docs-drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
      <button className="docs-drawer__backdrop" type="button" aria-label="Close documentation navigation" onClick={onClose} />
      <div className="docs-drawer__panel" role="dialog" aria-modal="true" aria-label="Documentation navigation">
        <div className="docs-drawer__header">
          <h2>Docs navigation</h2>
          <button className="site-button site-button--ghost" type="button" onClick={onClose}>
            Close
          </button>
        </div>
        <DocsSidebar currentPath={currentPath} onNavigate={onClose} />
      </div>
    </div>
  );
}
