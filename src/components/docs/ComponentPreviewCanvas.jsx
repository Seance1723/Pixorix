export function ComponentPreviewCanvas({ preview }) {
  switch (preview.type) {
    case 'buttons':
      return (
        <div className="component-preview component-preview--buttons">
          <button type="button" className="component-preview__button component-preview__button--primary">
            Primary
          </button>
          <button type="button" className="component-preview__button component-preview__button--secondary">
            Secondary
          </button>
          <button type="button" className="component-preview__button component-preview__button--ghost">
            Ghost
          </button>
        </div>
      );

    case 'card':
      return (
        <article className="component-preview__card">
          <p className="eyebrow">Starter card</p>
          <h3>Card title</h3>
          <p>Use cards to group content, metadata, and actions inside a clean elevated surface.</p>
        </article>
      );

    case 'badge':
      return (
        <div className="component-preview component-preview--badges">
          <span className="component-preview__badge component-preview__badge--success">Stable</span>
          <span className="component-preview__badge component-preview__badge--info">New</span>
          <span className="component-preview__badge component-preview__badge--warning">Beta</span>
        </div>
      );

    case 'alert':
      return (
        <div className="component-preview__alert" role="status">
          <strong>Deployment ready</strong>
          <p>Your Pixorix setup is active and the starter tokens are loaded.</p>
        </div>
      );

    case 'typography':
      return (
        <section className="px-content-section px-prose px-prose--dashboard">
          <p className="px-overline">Content primitive</p>
          <h3 className="px-section-title">Readable hierarchy</h3>
          <p className="px-section-intro">
            Pixorix keeps body copy, dashboard metrics, lists, and code shells on one token-driven typography layer.
          </p>
          <p className="px-dashboard-label">Workspace health</p>
          <p className="px-dashboard-metric">98.4%</p>
        </section>
      );

    case 'navigation':
      return (
        <nav className="px-navbar px-navbar--soft">
          <div className="px-navbar__surface">
            <a className="px-navbar__brand" href="#/">Pixorix</a>
            <ul className="px-navbar__menu">
              <li><a className="px-navbar__link is-active" href="#/" aria-current="page">Overview</a></li>
              <li><a className="px-navbar__link" href="#/">Components</a></li>
              <li><a className="px-navbar__link" href="#/">Themes</a></li>
            </ul>
          </div>
        </nav>
      );

    case 'form':
      return (
        <form className="px-form px-form--compact">
          <div className="px-field px-field--outline px-field--sm">
            <label className="px-label" htmlFor="preview-email">Email address</label>
            <div className="px-field__shell">
              <span className="px-field__icon" aria-hidden="true">@</span>
              <input id="preview-email" className="px-input" type="email" placeholder="team@pixorix.dev" />
            </div>
          </div>
          <div className="px-field px-field--filled px-field--sm is-error">
            <label className="px-label" htmlFor="preview-name">Project name</label>
            <div className="px-field__shell">
              <input id="preview-name" className="px-input" type="text" aria-invalid="true" placeholder="Pixorix starter" />
            </div>
            <p className="px-validation px-validation--error">Required field.</p>
          </div>
        </form>
      );

    case 'tabs':
      return (
        <div className="component-preview__tabs">
          <div className="component-preview__tablist">
            <button type="button" className="component-preview__tab component-preview__tab--active">
              Overview
            </button>
            <button type="button" className="component-preview__tab">
              API
            </button>
            <button type="button" className="component-preview__tab">
              Examples
            </button>
          </div>
          <div className="component-preview__surface">Tabs help organize dense documentation or settings content.</div>
        </div>
      );

    case 'modal':
      return (
        <div className="component-preview__overlay">
          <div className="component-preview__modal">
            <p className="eyebrow">Modal</p>
            <h3>Confirm action</h3>
            <p>Use modals for short, focused decisions that need interruption and explicit confirmation.</p>
          </div>
        </div>
      );

    case 'drawer':
      return (
        <div className="component-preview__drawer-frame">
          <aside className="component-preview__drawer">
            <h3>Navigation drawer</h3>
            <ul>
              <li>Overview</li>
              <li>Components</li>
              <li>Themes</li>
            </ul>
          </aside>
          <div className="component-preview__surface">Drawers work well for navigation, filters, and secondary controls.</div>
        </div>
      );

    case 'overlay':
      return (
        <div className="component-preview__surface" style={{ display: 'grid', gap: '1rem' }}>
          <div className="component-preview__overlay">
            <div className="component-preview__modal">
              <p className="eyebrow">Overlay system</p>
              <h3>Shared modal, drawer, sheet, and popover rules</h3>
              <p>Pixorix overlays reuse one runtime for focus, dismiss, keyboard access, and motion.</p>
            </div>
          </div>
          <div className="component-preview component-preview--badges">
            <span className="component-preview__badge component-preview__badge--info">Modal</span>
            <span className="component-preview__badge component-preview__badge--success">Drawer</span>
            <span className="component-preview__badge component-preview__badge--warning">Popover</span>
            <span className="component-preview__badge">Sheet</span>
          </div>
        </div>
      );

    case 'table':
      return (
        <div className="component-preview__table-wrap">
          <table className="component-preview__table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Status</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Button</td>
                <td>Stable</td>
                <td>Actions</td>
              </tr>
              <tr>
                <td>Card</td>
                <td>Stable</td>
                <td>Content grouping</td>
              </tr>
            </tbody>
          </table>
        </div>
      );

    case 'toast':
      return (
        <div className="component-preview component-preview--toast">
          <div className="component-preview__toast">
            <strong>Saved successfully</strong>
            <p>Your theme settings were updated.</p>
          </div>
        </div>
      );

    default:
      return <div className="component-preview__surface">Preview unavailable.</div>;
  }
}
