export function ThemePreviewCanvas({ preview }) {
  switch (preview.type) {
    case 'tokens':
      return (
        <div className="theme-preview__tokens">
          <div className="theme-preview__token-card">
            <span>Surface token</span>
            <strong>--px-surface</strong>
          </div>
          <div className="theme-preview__token-card">
            <span>Accent token</span>
            <strong>--px-accent</strong>
          </div>
          <div className="theme-preview__token-card">
            <span>Radius token</span>
            <strong>--px-radius-md</strong>
          </div>
        </div>
      );

    case 'css-vars':
      return (
        <div className="theme-preview__vars">
          <div className="theme-preview__swatch theme-preview__swatch--accent">Accent</div>
          <div className="theme-preview__swatch theme-preview__swatch--surface">Surface</div>
          <div className="theme-preview__swatch theme-preview__swatch--border">Border</div>
        </div>
      );

    case 'scss-overrides':
      return (
        <div className="theme-preview__surface-grid">
          <article className="theme-preview__panel">Base theme</article>
          <article className="theme-preview__panel theme-preview__panel--brand">Override theme</article>
        </div>
      );

    case 'dark-mode':
      return (
        <div className="theme-preview__surface-grid">
          <article className="theme-preview__panel">
            <span>Light</span>
            <strong>Bright surface treatment</strong>
          </article>
          <article className="theme-preview__panel theme-preview__panel--dark">
            <span>Dark</span>
            <strong>High-contrast dark surface</strong>
          </article>
        </div>
      );

    case 'semantic':
      return (
        <div className="theme-preview__semantic">
          <div className="theme-preview__badge theme-preview__badge--info">Info</div>
          <div className="theme-preview__badge theme-preview__badge--success">Success</div>
          <div className="theme-preview__badge theme-preview__badge--warning">Warning</div>
        </div>
      );

    case 'branding':
      return (
        <div className="theme-preview__branding">
          <div className="theme-preview__brand theme-preview__brand--default">
            <strong>Pixorix Core</strong>
          </div>
          <div className="theme-preview__brand theme-preview__brand--custom">
            <strong>Custom Brand</strong>
          </div>
        </div>
      );

    default:
      return <div className="theme-preview__panel">Preview unavailable.</div>;
  }
}
