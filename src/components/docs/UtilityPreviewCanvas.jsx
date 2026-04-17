export function UtilityPreviewCanvas({ preview }) {
  switch (preview.type) {
    case 'spacing':
      return (
        <div className="utility-preview utility-preview--spacing">
          <div className="utility-preview__stack">
            <div className="utility-preview__surface">px-mb-2</div>
            <div className="utility-preview__surface">px-mb-4</div>
            <div className="utility-preview__surface">px-mb-6</div>
          </div>
        </div>
      );

    case 'display':
      return (
        <div className="utility-preview utility-preview--display">
          <div className="utility-preview__display-row">
            <span className="utility-preview__chip">block</span>
            <span className="utility-preview__chip">inline-flex</span>
            <span className="utility-preview__chip">hidden</span>
          </div>
        </div>
      );

    case 'flex':
      return (
        <div className="utility-preview__flex">
          <div className="utility-preview__surface">Start</div>
          <div className="utility-preview__surface">Center</div>
          <div className="utility-preview__surface">End</div>
        </div>
      );

    case 'grid':
      return (
        <div className="utility-preview__grid">
          <div className="utility-preview__surface">1</div>
          <div className="utility-preview__surface">2</div>
          <div className="utility-preview__surface">3</div>
          <div className="utility-preview__surface">4</div>
        </div>
      );

    case 'typography':
      return (
        <div className="utility-preview__typography">
          <h3>Display heading</h3>
          <p className="utility-preview__lead">Lead paragraph utility for readable introductions.</p>
          <p>Body copy utility for default content flow.</p>
        </div>
      );

    case 'colors':
      return (
        <div className="utility-preview__colors">
          <div className="utility-preview__swatch utility-preview__swatch--accent">Accent</div>
          <div className="utility-preview__swatch utility-preview__swatch--surface">Surface</div>
          <div className="utility-preview__swatch utility-preview__swatch--text">Text</div>
        </div>
      );

    case 'shadows':
      return (
        <div className="utility-preview__shadows">
          <div className="utility-preview__shadow utility-preview__shadow--sm">Shadow sm</div>
          <div className="utility-preview__shadow utility-preview__shadow--md">Shadow md</div>
          <div className="utility-preview__shadow utility-preview__shadow--lg">Shadow lg</div>
        </div>
      );

    case 'radius':
      return (
        <div className="utility-preview__radius">
          <div className="utility-preview__radius-box utility-preview__radius-box--sm">sm</div>
          <div className="utility-preview__radius-box utility-preview__radius-box--md">md</div>
          <div className="utility-preview__radius-box utility-preview__radius-box--lg">lg</div>
          <div className="utility-preview__radius-box utility-preview__radius-box--full">full</div>
        </div>
      );

    case 'visibility':
      return (
        <div className="utility-preview__visibility">
          <div className="utility-preview__surface">Visible on all sizes</div>
          <div className="utility-preview__surface utility-preview__surface--muted">
            Hide, show, and print utilities manage rendering context.
          </div>
        </div>
      );

    case 'helpers':
      return (
        <div className="utility-preview__helpers">
          <div className="utility-preview__surface">Truncate text</div>
          <div className="utility-preview__surface">Screen-reader text</div>
          <div className="utility-preview__surface">Overflow helpers</div>
        </div>
      );

    default:
      return <div className="utility-preview__surface">Preview unavailable.</div>;
  }
}
