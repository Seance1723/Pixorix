import { Link } from 'react-router-dom';
import { DocsContentWrapper } from '@/components/docs/DocsContentWrapper';
import { DemoShowcase } from '@/components/docs/DemoShowcase';
import { FrameworkTabs } from '@/components/docs/FrameworkTabs';
import { NoteBlock } from '@/components/docs/NoteBlock';
import { GetStartedSection } from '@/components/get-started/GetStartedSection';
import { getStartedContent } from '@/data/getStartedPage';
import {
  alertExampleSnippets,
  badgeExampleSnippets,
  buttonExampleSnippets,
  cardExampleSnippets,
  formInputExampleSnippets,
  gridExampleSnippets,
  quickStartSnippets,
  starterSetupSnippets,
  themeModeSnippets
} from '@/data/getStartedSnippets';

export function GetStartedPage() {
  return (
    <DocsContentWrapper
      title={getStartedContent.title}
      description={getStartedContent.description}
      category="Get Started"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Get Started', href: '/get-started' }
      ]}
    >
      <div className="get-started-page">
        <GetStartedSection
          eyebrow={getStartedContent.introduction.eyebrow}
          title={getStartedContent.introduction.title}
          description={getStartedContent.introduction.description}
        >
          <div className="get-started-intro-grid">
            {getStartedContent.introduction.points.map((item) => (
              <article key={item.title} className="get-started-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </GetStartedSection>

        <GetStartedSection
          eyebrow={getStartedContent.installation.eyebrow}
          title={getStartedContent.installation.title}
          description={getStartedContent.installation.description}
        >
          <div className="get-started-method-grid">
            {getStartedContent.installation.methods.map((method) => (
              <article key={method.title} className="get-started-card get-started-card--soft">
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </article>
            ))}
          </div>

          <DemoShowcase
            title="Install and import"
            description="Start from the HTML-first mental model, then adapt the same structure to React, Angular, or Vue."
            previewTitle="Installation guidance"
            previewDescription="Choose the setup path that matches your stack and build pipeline."
            previewMinHeight="12rem"
            codePanel={<FrameworkTabs snippets={quickStartSnippets} title="Install and import" />}
          >
            <div className="get-started-preview get-started-preview--install">
              <div className="get-started-install-list">
                <span>CDN or static HTML</span>
                <span>Bundler or package manager</span>
                <span>Framework app integration</span>
                <span>Design-system extension path</span>
              </div>
            </div>
          </DemoShowcase>
        </GetStartedSection>

        <GetStartedSection
          eyebrow={getStartedContent.quickStart.eyebrow}
          title={getStartedContent.quickStart.title}
          description={getStartedContent.quickStart.description}
        >
          <DemoShowcase
            title="Quick start shell"
            description="A small starter surface showing how Pixorix frames the first screen and first action."
            previewTitle="Starter shell"
            previewDescription="The preview is intentionally framework-neutral and focused on the design output."
            previewMinHeight="16rem"
            codePanel={<FrameworkTabs snippets={starterSetupSnippets} title="Starter shell" />}
          >
            <div className="get-started-preview get-started-preview--shell">
              <div className="get-started-shell-card">
                <p className="eyebrow">Pixorix starter</p>
                <h3>Build a polished frontend surface faster</h3>
                <p>Use shared tokens, consistent layout primitives, and framework-aware docs from day one.</p>
                <button type="button" className="get-started-demo-button">
                  Launch project
                </button>
              </div>
            </div>
          </DemoShowcase>

          <NoteBlock tone="tip" title="Starter setup guidance">
            <p>
              Keep your initial setup HTML-first conceptually even when using React, Angular, or Vue. That
              preserves a stable design vocabulary across frameworks.
            </p>
          </NoteBlock>
        </GetStartedSection>

        <GetStartedSection
          eyebrow={getStartedContent.firstComponents.eyebrow}
          title={getStartedContent.firstComponents.title}
          description={getStartedContent.firstComponents.description}
        >
          <DemoShowcase
            title="Button"
            description="Primary action styling with a straightforward markup contract."
            previewTitle="Button preview"
            previewMinHeight="12rem"
            codePanel={<FrameworkTabs snippets={buttonExampleSnippets} title="Button" />}
          >
            <div className="get-started-preview">
              <button type="button" className="get-started-demo-button">
                Launch demo
              </button>
            </div>
          </DemoShowcase>

          <DemoShowcase
            title="Card"
            description="A simple content container for marketing or product surfaces."
            previewTitle="Card preview"
            previewMinHeight="16rem"
            codePanel={<FrameworkTabs snippets={cardExampleSnippets} title="Card" />}
          >
            <div className="get-started-preview">
              <article className="get-started-demo-card">
                <p className="eyebrow">Starter card</p>
                <h3>Token-driven surface</h3>
                <p>Use cards to group content, actions, or documentation examples with consistent spacing.</p>
              </article>
            </div>
          </DemoShowcase>

          <DemoShowcase
            title="Badge"
            description="Small status indicators that work in docs, dashboards, and product UI."
            previewTitle="Badge preview"
            previewMinHeight="10rem"
            codePanel={<FrameworkTabs snippets={badgeExampleSnippets} title="Badge" />}
          >
            <div className="get-started-preview">
              <span className="get-started-demo-badge">Stable</span>
            </div>
          </DemoShowcase>

          <DemoShowcase
            title="Alert"
            description="Contextual feedback with enough structure for updates, warnings, and system messages."
            previewTitle="Alert preview"
            previewMinHeight="12rem"
            codePanel={<FrameworkTabs snippets={alertExampleSnippets} title="Alert" />}
          >
            <div className="get-started-preview">
              <div className="get-started-demo-alert">
                <strong>Deployment ready</strong>
                <p>Your Pixorix starter tokens and shell are wired correctly.</p>
              </div>
            </div>
          </DemoShowcase>

          <DemoShowcase
            title="Form input"
            description="A baseline field pattern for forms, onboarding flows, and search UI."
            previewTitle="Form input preview"
            previewMinHeight="12rem"
            codePanel={<FrameworkTabs snippets={formInputExampleSnippets} title="Form input" />}
          >
            <div className="get-started-preview">
              <label className="get-started-demo-field">
                <span>Email address</span>
                <input type="email" placeholder="team@pixorix.dev" />
              </label>
            </div>
          </DemoShowcase>
        </GetStartedSection>

        <GetStartedSection
          eyebrow={getStartedContent.gridExample.eyebrow}
          title={getStartedContent.gridExample.title}
          description={getStartedContent.gridExample.description}
        >
          <DemoShowcase
            title="Responsive grid"
            description="A starter composition pattern for cards, docs tiles, or marketing content."
            previewTitle="Grid preview"
            previewDescription="Resize the layout mentally across desktop and mobile; the intent is flexible rather than framework-specific."
            previewMinHeight="18rem"
            codePanel={<FrameworkTabs snippets={gridExampleSnippets} title="Responsive grid" />}
          >
            <div className="get-started-preview">
              <div className="get-started-demo-grid">
                <article className="get-started-demo-grid__item">Overview</article>
                <article className="get-started-demo-grid__item">Themes</article>
                <article className="get-started-demo-grid__item">Examples</article>
                <article className="get-started-demo-grid__item">Motion</article>
              </div>
            </div>
          </DemoShowcase>
        </GetStartedSection>

        <GetStartedSection
          eyebrow={getStartedContent.themes.eyebrow}
          title={getStartedContent.themes.title}
          description={getStartedContent.themes.description}
        >
          <DemoShowcase
            title="Theme and dark mode quick usage"
            description="Use tokens and data attributes to control palette, surfaces, and contrast behavior."
            previewTitle="Theme preview"
            previewDescription="A light and dark treatment shown as simple starter panels."
            previewMinHeight="16rem"
            codePanel={<FrameworkTabs snippets={themeModeSnippets} title="Theme and dark mode" />}
          >
            <div className="get-started-preview">
              <div className="get-started-theme-pair">
                <article className="get-started-theme-card">
                  <span>Light mode</span>
                  <strong>Clean product surface</strong>
                </article>
                <article className="get-started-theme-card get-started-theme-card--dark">
                  <span>Dark mode</span>
                  <strong>High-contrast interface surface</strong>
                </article>
              </div>
            </div>
          </DemoShowcase>
        </GetStartedSection>

        <GetStartedSection
          eyebrow={getStartedContent.nextSteps.eyebrow}
          title={getStartedContent.nextSteps.title}
          description={getStartedContent.nextSteps.description}
        >
          <div className="get-started-next-grid">
            {getStartedContent.nextSteps.items.map((item) => (
              <article key={item.title} className="get-started-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link className="inline-link" to={item.href}>
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </GetStartedSection>
      </div>
    </DocsContentWrapper>
  );
}
