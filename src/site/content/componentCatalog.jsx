import { useState } from 'react';

function ButtonsPreview() {
  return (
    <div className="demo-stack">
      <div className="px-button-group px-button-group--responsive">
        <button className="px-button px-button--primary px-button--gradient" type="button">
          <span className="px-button__icon" aria-hidden="true">+</span>
          <span className="px-button__label">Create</span>
        </button>
        <button className="px-button px-button--secondary px-button--outline" type="button">Secondary</button>
        <button className="px-button px-button--success px-button--soft" type="button">Success</button>
        <button className="px-button px-button--neutral px-button--ghost" type="button">Ghost</button>
      </div>
      <div className="px-button-group">
        <div className="px-split-button" data-px-button-split data-state="closed">
          <button className="px-button px-button--dark px-button--elevated" type="button">Publish</button>
          <button
            className="px-button px-button--dark px-button--elevated px-split-button__toggle px-button--icon-only"
            type="button"
            data-px-button-toggle
            aria-label="Open publish options"
            aria-controls="catalog-publish-menu"
            aria-expanded="false"
          >
            <span className="px-button__icon" aria-hidden="true">▾</span>
          </button>
          <div id="catalog-publish-menu" hidden />
        </div>
        <button className="px-button px-button--danger px-button--soft px-button--sm" type="button">Delete</button>
        <button className="px-button px-button--primary px-button--pill px-fab px-button--icon-only" type="button" aria-label="Quick add">
          <span className="px-button__icon" aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  );
}

function BadgesPreview() {
  return (
    <div className="demo-inline">
      <span className="px-badge px-badge--primary">New</span>
      <span className="px-badge px-badge--success">Stable</span>
      <span className="px-badge px-badge--warning">Beta</span>
      <span className="px-badge px-badge--outline">Outline</span>
      <button className="px-chip px-chip--interactive" type="button">Themeable</button>
    </div>
  );
}

function AlertsPreview() {
  return (
    <div className="demo-stack">
      <div className="px-alert px-alert--info px-alert--soft" role="status">
        <div className="px-alert__icon" aria-hidden="true">i</div>
        <div className="px-alert__body">
          <strong className="px-alert__title">Docs-first release</strong>
          <p className="px-alert__text">Pixorix now documents live component previews alongside implementation notes.</p>
          <div className="px-alert__actions">
            <button className="px-button px-button--info px-button--soft px-button--sm" type="button">Review changes</button>
          </div>
        </div>
      </div>
      <div className="px-banner px-banner--success px-banner--glass px-banner--elevated px-banner--animated" data-px-alert data-px-component="alert" role="status">
        <div className="px-banner__icon" aria-hidden="true">✓</div>
        <div className="px-banner__body">
          <strong className="px-banner__title">Build verified</strong>
          <p className="px-banner__text">Framework classes are being used directly inside the documentation previews.</p>
        </div>
        <div className="px-banner__actions">
          <button className="px-button px-button--light px-button--soft px-button--sm" type="button">Review docs</button>
          <button className="px-banner__dismiss" type="button" data-px-alert-close aria-label="Dismiss alert">×</button>
        </div>
      </div>
      <div className="px-form-notice px-form-notice--warning px-form-notice--minimal" role="alert">
        <div className="px-form-notice__icon" aria-hidden="true">!</div>
        <div className="px-form-notice__body">
          <strong className="px-form-notice__title">Workspace name is required</strong>
          <p className="px-form-notice__text">Provide a project name before generating your starter files.</p>
        </div>
      </div>
    </div>
  );
}

function CardsPreview() {
  return (
    <article className="px-card px-card--interactive">
      <header className="px-card__header">
        <span className="px-card__eyebrow">Analytics kit</span>
        <h3 className="px-card__title">Product metrics card</h3>
        <p className="px-card__subtitle">Designed for dashboards, docs examples, and admin surfaces.</p>
      </header>
      <div className="px-card__body">
        Mix descriptive content, badges, and actions without losing vertical rhythm or surface hierarchy.
      </div>
      <footer className="px-card__footer">
        <span className="px-badge px-badge--primary">Responsive</span>
        <div className="px-card__actions">
          <button className="px-button px-button--secondary px-button--sm" type="button">Inspect</button>
          <button className="px-button px-button--primary px-button--sm" type="button">Use card</button>
        </div>
      </footer>
    </article>
  );
}

function BreadcrumbsPreview() {
  return (
    <ol className="px-breadcrumbs">
      <li className="px-breadcrumbs__item"><a className="px-breadcrumbs__link" href="#/">Docs</a></li>
      <li className="px-breadcrumbs__item"><a className="px-breadcrumbs__link" href="#/">Components</a></li>
      <li className="px-breadcrumbs__item" aria-current="page">Buttons</li>
    </ol>
  );
}

function TabsPreview() {
  const [active, setActive] = useState('preview');

  return (
    <div className="px-tabs">
      <div className="px-tabs__list" role="tablist" aria-label="Component tabs">
        {['preview', 'code', 'review'].map((tab) => (
          <button
            key={tab}
            className="px-tabs__tab"
            type="button"
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
          >
            {tab[0].toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="px-tabs__panel">
        {active === 'preview' && <p>Use tabs to switch between live component output, code, and implementation review.</p>}
        {active === 'code' && <p>Pixorix tabs support straightforward role and aria patterns without extra structural noise.</p>}
        {active === 'review' && <p>Best used where comparison or view switching is needed in-place, not for primary page navigation.</p>}
      </div>
    </div>
  );
}

function AccordionPreview() {
  const [open, setOpen] = useState('item-1');

  return (
    <div className="px-accordion">
      {[
        ['item-1', 'How should I use Pixorix accordions?', 'Use them for secondary details, FAQs, and documentation sections where progressive disclosure improves scanning.'],
        ['item-2', 'What about accessibility?', 'Maintain button triggers, aria-expanded state, and sensible heading hierarchy around each accordion item.']
      ].map(([id, title, content]) => (
        <div className="px-accordion__item" key={id}>
          <button
            className="px-accordion__trigger"
            type="button"
            aria-expanded={open === id}
            onClick={() => setOpen((current) => (current === id ? '' : id))}
          >
            {title}
            <span className="px-accordion__icon">⌄</span>
          </button>
          <div className="px-accordion__panel" hidden={open !== id}>
            {content}
          </div>
        </div>
      ))}
    </div>
  );
}

function TablePreview() {
  return (
    <div className="px-table-wrap">
      <table className="px-table px-table--responsive">
        <caption>Component usage snapshot</caption>
        <thead>
          <tr>
            <th>Component</th>
            <th>Status</th>
            <th>Best for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Component"><span className="px-table__cell-title">Buttons</span></td>
            <td data-label="Status"><span className="px-badge px-badge--success">Stable</span></td>
            <td data-label="Best for">Actions, CTAs, toolbars</td>
          </tr>
          <tr>
            <td data-label="Component"><span className="px-table__cell-title">Cards</span></td>
            <td data-label="Status"><span className="px-badge px-badge--primary">Core</span></td>
            <td data-label="Best for">Content grouping, dashboards</td>
          </tr>
          <tr>
            <td data-label="Component"><span className="px-table__cell-title">Forms</span></td>
            <td data-label="Status"><span className="px-badge px-badge--warning">Review</span></td>
            <td data-label="Best for">Inputs, settings, workflows</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function PaginationPreview() {
  return (
    <nav className="px-pagination" aria-label="Example pagination">
      <ul className="px-pagination__list">
        <li className="px-pagination__item"><a className="px-pagination__link" href="#/">1</a></li>
        <li className="px-pagination__item"><a className="px-pagination__link is-active" href="#/" aria-current="page">2</a></li>
        <li className="px-pagination__item"><a className="px-pagination__link" href="#/">3</a></li>
        <li className="px-pagination__item"><span className="px-pagination__ellipsis">…</span></li>
        <li className="px-pagination__item"><a className="px-pagination__link" href="#/">8</a></li>
      </ul>
    </nav>
  );
}

function ProgressPreview() {
  return (
    <div className="demo-stack">
      <div className="px-progress" style={{ '--px-progress-value': '72%' }}>
        <div className="px-progress__meta">
          <span className="px-progress__label">Docs completion</span>
          <span className="px-progress__value">72%</span>
        </div>
        <div className="px-progress__track"><div className="px-progress__bar" /></div>
      </div>
      <div className="px-progress px-progress--success px-progress--striped" style={{ '--px-progress-value': '48%' }}>
        <div className="px-progress__meta">
          <span className="px-progress__label">Release readiness</span>
          <span className="px-progress__value">48%</span>
        </div>
        <div className="px-progress__track"><div className="px-progress__bar" /></div>
      </div>
    </div>
  );
}

function FormFieldsPreview() {
  return (
    <form className="px-form px-form--compact">
      <div className="px-form-grid px-form-grid--2">
        <label className="px-field">
          <span className="px-label">Project name</span>
          <input className="px-input" type="text" placeholder="Pixorix docs" />
        </label>
        <label className="px-field">
          <span className="px-label">Theme mode</span>
          <span className="px-select-wrap">
            <select className="px-select" defaultValue="light">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </span>
        </label>
      </div>
      <label className="px-field">
        <span className="px-label">Notes</span>
        <textarea className="px-textarea" placeholder="Add implementation notes for your team." />
      </label>
    </form>
  );
}

function ChecksPreview() {
  return (
    <div className="demo-stack">
      <label className="px-check">
        <input className="px-check__input" type="checkbox" defaultChecked />
        <span className="px-check__body">
          <span className="px-check__label">Enable docs search</span>
          <span className="px-check__hint">Useful for larger component catalogs.</span>
        </span>
      </label>
      <label className="px-radio">
        <input className="px-radio__input" type="radio" name="density" defaultChecked />
        <span className="px-radio__body">
          <span className="px-radio__label">Comfortable density</span>
          <span className="px-radio__hint">Good default for docs-heavy pages.</span>
        </span>
      </label>
      <label className="px-switch">
        <input className="px-switch__input" type="checkbox" defaultChecked />
        <span className="px-switch__label">Enable reduced motion fallback</span>
      </label>
    </div>
  );
}

function OverlayPreview() {
  const [open, setOpen] = useState('');

  return (
    <div className="demo-stack">
      <div className="px-button-group">
        <button className="px-button px-button--primary" type="button" onClick={() => setOpen('modal')}>Open modal</button>
        <button className="px-button px-button--secondary" type="button" onClick={() => setOpen('drawer')}>Open drawer</button>
      </div>

      <div className="px-modal" data-state={open === 'modal' ? 'open' : 'closed'}>
        <div className="px-modal__dialog">
          <div className="px-modal__header">
            <div>
              <h3 className="px-modal__title">Component review modal</h3>
              <p className="px-modal__description">Use modals for focused tasks, not general reading.</p>
            </div>
            <button className="px-button px-button--ghost px-button--sm" type="button" onClick={() => setOpen('')}>Close</button>
          </div>
          <div className="px-modal__body">This preview uses Pixorix modal structure and state classes directly inside the docs page.</div>
        </div>
      </div>

      <div className="px-drawer px-drawer--end" data-state={open === 'drawer' ? 'open' : 'closed'}>
        <div className="px-drawer__panel">
          <div className="px-drawer__header">
            <h3 className="px-drawer__title">Drawer review</h3>
            <button className="px-button px-button--ghost px-button--sm" type="button" onClick={() => setOpen('')}>Close</button>
          </div>
          <div className="px-drawer__body">
            Drawers work well for settings, contextual inspection, and workflows that should not fully displace the current page.
          </div>
        </div>
      </div>
    </div>
  );
}

const buttonsCode = `<div class="px-button-group px-button-group--responsive">
  <button class="px-button px-button--primary px-button--gradient" type="button">
    <span class="px-button__icon" aria-hidden="true">+</span>
    <span class="px-button__label">Create</span>
  </button>
  <button class="px-button px-button--secondary px-button--outline" type="button">Secondary</button>
  <button class="px-button px-button--neutral px-button--ghost px-button--icon-only" type="button" aria-label="Open filters">
    <span class="px-button__icon" aria-hidden="true">≡</span>
  </button>
</div>`;

const cardsCode = `<article class="px-card px-card--interactive">
  <header class="px-card__header">
    <span class="px-card__eyebrow">Analytics kit</span>
    <h3 class="px-card__title">Product metrics card</h3>
  </header>
  <div class="px-card__body">Mix content and actions cleanly.</div>
</article>`;

const overlayCode = `<div class="px-modal" data-state="open">
  <div class="px-modal__dialog">
    <div class="px-modal__header">
      <h3 class="px-modal__title">Component review modal</h3>
    </div>
    <div class="px-modal__body">Focused content goes here.</div>
  </div>
</div>`;

export const componentCatalogSections = [
  {
    title: 'Actions and feedback',
    description: 'Core action and response components used across product UI, docs, and dashboards.',
    items: [
      {
        slug: 'buttons',
        category: 'Actions',
        title: 'Buttons',
        description: 'Tone, appearance, size, shape, split, loading, and floating action patterns built on one token-driven button contract.',
        review: 'The system is stronger now because tone and appearance are composable, which expands coverage without turning the button layer into a pile of one-off variants.',
        notes: ['Use one dominant tone in each action cluster.', 'Compose tone with appearance classes instead of inventing custom button copies.', 'Use icon-only, split, and FAB shells only when their interaction cost is justified.'],
        accessibility: 'Use real button elements for actions, keep icon-only buttons labelled, and expose loading or split-toggle state with the relevant ARIA attributes.',
        code: buttonsCode,
        preview: ButtonsPreview
      },
      {
        slug: 'badges',
        category: 'Status',
        title: 'Badges and chips',
        description: 'Compact labels for status, taxonomy, and lightweight interaction.',
        review: 'These work well for status communication and faceted UI without overwhelming nearby content.',
        notes: ['Prefer badges for status and chips for light interaction.', 'Keep wording short.', 'Avoid using color as the only status signal.'],
        accessibility: 'Ensure badge meaning is readable as text and do not rely solely on color tone for meaning.',
        code: `<span class="px-badge px-badge--success">Stable</span>`,
        preview: BadgesPreview
      },
      {
        slug: 'alerts',
        category: 'Feedback',
        title: 'Alerts and banners',
        description: 'Inline and wide-message feedback for system state, warnings, and confirmations.',
        review: 'The notice layer is stronger when alerts, banners, page notices, and form notices share one contract instead of drifting into unrelated one-off styles.',
        notes: ['Use inline alerts for contextual feedback.', 'Use banners and page notices for wider system messaging.', 'Use form notices for validation and field-adjacent guidance.'],
        accessibility: 'Important messages should use the correct live-region role, and dismiss controls should be clearly labelled and optional.',
        code: `<div class="px-alert px-alert--info px-alert--soft" role="status"><div class="px-alert__icon" aria-hidden="true">i</div><div class="px-alert__body"><strong class="px-alert__title">Docs-first release</strong><p class="px-alert__text">Pixorix now documents live component previews alongside implementation notes.</p></div></div>`,
        preview: AlertsPreview
      }
    ]
  },
  {
    title: 'Navigation and layout helpers',
    description: 'Supporting patterns for page path, section switching, disclosure, and dense data navigation.',
    items: [
      {
        slug: 'cards',
        category: 'Layout',
        title: 'Cards',
        description: 'Content grouping surfaces with headers, body content, and action or footer zones.',
        review: 'Cards are one of the framework’s strongest primitives because the spacing, border, and action regions are already disciplined.',
        notes: ['Use interactive cards only when the whole surface is a meaningful tap target.', 'Prefer header and footer sub-elements over ad hoc wrappers.', 'Use raised variants sparingly to preserve hierarchy.'],
        accessibility: 'Keep nested interactive elements clear and do not make the whole card clickable if it contains several independent controls.',
        code: cardsCode,
        preview: CardsPreview
      },
      {
        slug: 'breadcrumbs',
        category: 'Navigation',
        title: 'Breadcrumbs',
        description: 'Lightweight page-path navigation for docs, settings, and nested interfaces.',
        review: 'Pixorix breadcrumbs stay unobtrusive, which is exactly what they should do in a docs system.',
        notes: ['Use for hierarchy, not keyword stuffing.', 'Keep labels compact.', 'Current page should not be an active link.'],
        accessibility: 'Wrap breadcrumbs in a nav with an accessible label and mark the current item clearly.',
        code: `<ol class="px-breadcrumbs"><li class="px-breadcrumbs__item" aria-current="page">Buttons</li></ol>`,
        preview: BreadcrumbsPreview
      },
      {
        slug: 'tabs',
        category: 'Navigation',
        title: 'Tabs',
        description: 'In-place switching between related views such as preview, code, and review.',
        review: 'Tabs are effective when the content is closely related and switching does not disrupt user context.',
        notes: ['Use tabs for peer content only.', 'Avoid deep nesting of tabs inside tabs.', 'Keep labels short and parallel.'],
        accessibility: 'Use role tablist, tab, and tabpanel semantics with explicit selected state and keyboard support when fully interactive.',
        code: `<div class="px-tabs"><div class="px-tabs__list"><button class="px-tabs__tab" aria-selected="true">Preview</button></div></div>`,
        preview: TabsPreview
      },
      {
        slug: 'accordion',
        category: 'Disclosure',
        title: 'Accordion',
        description: 'Progressive disclosure for FAQs, spec details, and secondary implementation notes.',
        review: 'A good fit for docs where long pages need structure, but it should not hide primary information by default.',
        notes: ['Use when details are secondary to scanning.', 'Keep headings descriptive.', 'Do not bury required setup steps in collapsed panels.'],
        accessibility: 'Triggers should be buttons with an accurate aria-expanded state and clear panel association.',
        code: `<div class="px-accordion"><div class="px-accordion__item"><button class="px-accordion__trigger" aria-expanded="true">Question</button></div></div>`,
        preview: AccordionPreview
      }
    ]
  },
  {
    title: 'Data and forms',
    description: 'Components for settings, tables, long-form product screens, and dense information views.',
    items: [
      {
        slug: 'table',
        category: 'Data display',
        title: 'Tables',
        description: 'Responsive table wrapper and cell conventions for structured product data.',
        review: 'The responsive table treatment is practical because it shifts to labeled rows on small screens instead of simply overflowing forever.',
        notes: ['Use captions for context.', 'Test mobile row readability.', 'Prefer concise cell content and helper text for metadata.'],
        accessibility: 'Keep table semantics intact and preserve header association when collapsing for mobile layouts.',
        code: `<div class="px-table-wrap"><table class="px-table px-table--responsive">...</table></div>`,
        preview: TablePreview
      },
      {
        slug: 'pagination',
        category: 'Navigation',
        title: 'Pagination',
        description: 'Page navigation controls for tables, lists, and archives.',
        review: 'The visual treatment is clear without being oversized, which suits docs and admin interfaces well.',
        notes: ['Show current page clearly.', 'Pair with result counts when possible.', 'Avoid pagination for very small data sets.'],
        accessibility: 'Use a nav wrapper and aria-current on the active page.',
        code: `<nav class="px-pagination"><ul class="px-pagination__list"><li class="px-pagination__item"><a class="px-pagination__link is-active" aria-current="page">2</a></li></ul></nav>`,
        preview: PaginationPreview
      },
      {
        slug: 'progress',
        category: 'Feedback',
        title: 'Progress',
        description: 'Track completion, readiness, and other percent-based workflow states.',
        review: 'Useful in dashboards and setup flows because the component supports quiet, compact status reporting.',
        notes: ['Always pair the bar with a label or value.', 'Striped variants should remain decorative, not the only state signal.', 'Use indeterminate only when true completion is unknown.'],
        accessibility: 'Include text alternatives for value and label so the component is understandable without visual inspection.',
        code: `<div class="px-progress" style="--px-progress-value:72%"><div class="px-progress__track"><div class="px-progress__bar"></div></div></div>`,
        preview: ProgressPreview
      },
      {
        slug: 'form-fields',
        category: 'Forms',
        title: 'Inputs, select, and textarea',
        description: 'Structured field wrappers for common forms, settings pages, and content entry flows.',
        review: 'The field system is strong because labels, helpers, and control sizing already line up cleanly without custom hacks.',
        notes: ['Always keep visible labels.', 'Use select wrappers for native selects.', 'Reserve inline field layouts for wider screens only.'],
        accessibility: 'Labels and helper text should stay programmatically associated and visible at all sizes.',
        code: `<label class="px-field"><span class="px-label">Project name</span><input class="px-input" type="text" /></label>`,
        preview: FormFieldsPreview
      },
      {
        slug: 'checks',
        category: 'Forms',
        title: 'Checks, radios, and switches',
        description: 'Boolean and single-choice controls for settings and workflows.',
        review: 'These controls stay close to native behavior, which is a good cross-browser and accessibility tradeoff.',
        notes: ['Use checkboxes for independent toggles.', 'Use radios for one-of-many choices.', 'Use switches only for immediate on/off system state.'],
        accessibility: 'Do not replace labels with placeholders, and make the full text block clickable where possible.',
        code: `<label class="px-switch"><input class="px-switch__input" type="checkbox" /><span class="px-switch__label">Enable reduced motion fallback</span></label>`,
        preview: ChecksPreview
      },
      {
        slug: 'overlay',
        category: 'Overlays',
        title: 'Modal and drawer',
        description: 'Focused overlay patterns for confirmation, inspection, and side-panel workflows.',
        review: 'These are useful when you need contextual depth, but the docs should remind users not to overuse them for routine reading tasks.',
        notes: ['Use modals for focused interruption.', 'Use drawers for contextual editing or inspection.', 'Provide explicit close controls and escape behavior.'],
        accessibility: 'Focus management and escape handling are critical for both patterns.',
        code: overlayCode,
        preview: OverlayPreview
      }
    ]
  }
];
