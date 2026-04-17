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

    case 'form':
      return (
        <form className="component-preview__form">
          <label className="component-preview__field">
            <span>Email address</span>
            <input type="email" placeholder="team@pixorix.dev" />
          </label>
          <label className="component-preview__field">
            <span>Project name</span>
            <input type="text" placeholder="Pixorix starter" />
          </label>
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
