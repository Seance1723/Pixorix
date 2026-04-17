export function LayoutPreviewCanvas({ preview }) {
  switch (preview.type) {
    case 'containers':
      return (
        <div className="layout-preview layout-preview--container">
          <div className="layout-preview__container layout-preview__container--wide">
            <span>Wide container</span>
          </div>
          <div className="layout-preview__container layout-preview__container--default">
            <span>Default container</span>
          </div>
          <div className="layout-preview__container layout-preview__container--narrow">
            <span>Narrow container</span>
          </div>
        </div>
      );

    case 'grid':
      return (
        <div className="layout-preview__grid">
          <article className="layout-preview__cell">1</article>
          <article className="layout-preview__cell">2</article>
          <article className="layout-preview__cell">3</article>
          <article className="layout-preview__cell">4</article>
          <article className="layout-preview__cell">5</article>
          <article className="layout-preview__cell">6</article>
        </div>
      );

    case 'stack':
      return (
        <div className="layout-preview__stack">
          <article className="layout-preview__surface">Header block</article>
          <article className="layout-preview__surface">Content block</article>
          <article className="layout-preview__surface">Supporting block</article>
        </div>
      );

    case 'split':
      return (
        <div className="layout-preview__split">
          <article className="layout-preview__surface layout-preview__surface--lead">Primary content</article>
          <aside className="layout-preview__surface">Secondary content</aside>
        </div>
      );

    case 'dashboard':
      return (
        <div className="layout-preview__dashboard">
          <aside className="layout-preview__surface layout-preview__surface--sidebar">Sidebar</aside>
          <div className="layout-preview__dashboard-main">
            <article className="layout-preview__surface">Toolbar</article>
            <div className="layout-preview__grid layout-preview__grid--tight">
              <article className="layout-preview__cell">Stat</article>
              <article className="layout-preview__cell">Stat</article>
              <article className="layout-preview__cell">Stat</article>
            </div>
            <article className="layout-preview__surface">Primary panel</article>
          </div>
        </div>
      );

    case 'odd-even':
      return (
        <div className="layout-preview__odd-even">
          <section>
            <p className="layout-preview__label">2 columns</p>
            <div className="layout-preview__columns layout-preview__columns--2">
              <article className="layout-preview__cell">A</article>
              <article className="layout-preview__cell">B</article>
            </div>
          </section>

          <section>
            <p className="layout-preview__label">3 columns</p>
            <div className="layout-preview__columns layout-preview__columns--3">
              <article className="layout-preview__cell">A</article>
              <article className="layout-preview__cell">B</article>
              <article className="layout-preview__cell">C</article>
            </div>
          </section>

          <section>
            <p className="layout-preview__label">4 columns</p>
            <div className="layout-preview__columns layout-preview__columns--4">
              <article className="layout-preview__cell">A</article>
              <article className="layout-preview__cell">B</article>
              <article className="layout-preview__cell">C</article>
              <article className="layout-preview__cell">D</article>
            </div>
          </section>

          <section>
            <p className="layout-preview__label">5 columns</p>
            <div className="layout-preview__columns layout-preview__columns--5">
              <article className="layout-preview__cell">A</article>
              <article className="layout-preview__cell">B</article>
              <article className="layout-preview__cell">C</article>
              <article className="layout-preview__cell">D</article>
              <article className="layout-preview__cell">E</article>
            </div>
          </section>

          <section>
            <p className="layout-preview__label">Asymmetrical layout</p>
            <div className="layout-preview__columns layout-preview__columns--asym">
              <article className="layout-preview__cell layout-preview__cell--hero">Primary</article>
              <article className="layout-preview__cell">Meta</article>
              <article className="layout-preview__cell">Meta</article>
            </div>
          </section>
        </div>
      );

    case 'responsive':
      return (
        <div className="layout-preview__responsive">
          <article className="layout-preview__surface">
            <strong>Desktop</strong>
            <p>Multi-column composition with generous horizontal rhythm.</p>
          </article>
          <article className="layout-preview__surface">
            <strong>Tablet</strong>
            <p>Columns compress and priority panels stay visible.</p>
          </article>
          <article className="layout-preview__surface">
            <strong>Mobile</strong>
            <p>Stacks collapse into one flow with preserved spacing and order.</p>
          </article>
        </div>
      );

    default:
      return <div className="layout-preview__surface">Preview unavailable.</div>;
  }
}
