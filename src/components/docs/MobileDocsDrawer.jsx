import { DocsSidebar } from '@/components/layout/DocsSidebar';

export function MobileDocsDrawer({ groups, currentPath, currentDocTitle, isOpen, onOpen, onClose }) {
  return (
    <div className="docs-drawer-mobile">
      <button
        type="button"
        className="docs-drawer-mobile__toggle"
        aria-expanded={isOpen}
        aria-controls="docs-mobile-drawer"
        onClick={onOpen}
      >
        <span className="docs-drawer-mobile__toggle-label">Browse docs</span>
        <strong>{currentDocTitle}</strong>
      </button>

      <div
        className={isOpen ? 'docs-drawer docs-drawer--open' : 'docs-drawer'}
        aria-hidden={isOpen ? 'false' : 'true'}
      >
        <button type="button" className="docs-drawer__backdrop" tabIndex={-1} aria-label="Close docs menu" onClick={onClose} />

        <div
          id="docs-mobile-drawer"
          className="docs-drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="docs-mobile-drawer-title"
        >
          <div className="docs-drawer__header">
            <div>
              <p className="eyebrow">Documentation</p>
              <h2 id="docs-mobile-drawer-title">Navigate docs</h2>
            </div>
            <button type="button" className="docs-drawer__close" onClick={onClose}>
              Close
            </button>
          </div>

          <DocsSidebar
            groups={groups}
            currentPath={currentPath}
            labelledBy="docs-mobile-drawer-title"
            onNavigate={onClose}
          />
        </div>
      </div>
    </div>
  );
}
