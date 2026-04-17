export const examples = [
  {
    slug: 'landing-page',
    title: 'Landing Page Demo',
    category: 'Marketing',
    summary: 'A product launch experience with layered hero content, proof points, pricing rhythm, and editorial section pacing.',
    componentsUsed: ['Hero', 'CTA block', 'Feature cards', 'Badges', 'Pricing grid'],
    layoutNotes: 'Uses a two-column hero and an odd-count editorial grid that remains visually balanced on wide screens.',
    responsiveNotes: 'Stacks into a single-column narrative on smaller devices while preserving proof-point hierarchy.',
    browserNotes: 'Relies on stable gradients, CSS variables, and transforms without layout-fragile effects.',
    useCases: ['Product launches', 'Framework marketing', 'SaaS announcements'],
    heroStats: ['Launch-ready composition', 'Odd-grid support', 'Token-driven spacing']
  },
  {
    slug: 'dashboard',
    title: 'Dashboard Demo',
    category: 'Application',
    summary: 'A workspace shell with KPI cards, a layered table region, task rail, and contextual density choices.',
    componentsUsed: ['Sidebar', 'KPI cards', 'Tables', 'Filters', 'Progress'],
    layoutNotes: 'Combines fixed navigation with content regions that reflow into a two-step reading order.',
    responsiveNotes: 'Collapses side rails into stacked surfaces and reduces dense table affordances on smaller screens.',
    browserNotes: 'Sticky behavior avoids overflow traps and remains stable in Safari and Firefox.',
    useCases: ['Admin panels', 'Analytics suites', 'Internal tools'],
    heroStats: ['Stable sticky regions', 'Density-aware cards', 'Responsive data surfaces']
  },
  {
    slug: 'analytics',
    title: 'Analytics Demo',
    category: 'Application',
    summary: 'KPI-heavy analytics presentation with emphasis bands, filters, and visual hierarchy for trend storytelling.',
    componentsUsed: ['Stat blocks', 'Charts shell', 'Filter bar', 'Cards'],
    layoutNotes: 'Balances four-card metric rows with asymmetrical insight sections and a narrative side rail.',
    responsiveNotes: 'Metrics compress into swipe-free stacked cards with preserved label/value contrast.',
    browserNotes: 'Uses simple SVG placeholders and CSS-based chart framing to avoid fragile rendering.',
    useCases: ['Product analytics', 'Growth reviews', 'Operations reporting'],
    heroStats: ['Narrative analytics layout', 'Balanced card density', 'Readable mobile metrics']
  },
  {
    slug: 'auth-pages',
    title: 'Auth Pages Demo',
    category: 'Flows',
    summary: 'Sign-in, account recovery, and access confirmation patterns designed with calm spacing and clear hierarchy.',
    componentsUsed: ['Forms', 'Validation states', 'Alerts', 'Buttons'],
    layoutNotes: 'Uses split-panel layout that reduces into a focused single-form shell on mobile.',
    responsiveNotes: 'Input sizing and helper text spacing remain stable across Android and iOS browsers.',
    browserNotes: 'Form controls prioritize native affordances and avoid browser-fragile custom UI.',
    useCases: ['Authentication', 'Onboarding', 'Secure areas'],
    heroStats: ['Accessible focus flow', 'Calm form rhythm', 'Mobile-safe controls']
  },
  {
    slug: 'pricing-page',
    title: 'Pricing Page Demo',
    category: 'Marketing',
    summary: 'A pricing story with plan contrast, FAQ rhythm, and persuasive comparison bands.',
    componentsUsed: ['Pricing cards', 'Comparison rows', 'Accordion', 'CTA'],
    layoutNotes: 'Three-tier plan display includes a featured card without collapsing overall balance.',
    responsiveNotes: 'Plan cards retain differentiation when stacked and comparison rows remain scroll-contained.',
    browserNotes: 'Accordion and sticky CTA patterns rely on simple accessible interactions.',
    useCases: ['SaaS pricing', 'Plan comparisons', 'Upgrade paths'],
    heroStats: ['Featured plan emphasis', 'Stable comparison rails', 'Clear CTA pacing']
  },
  {
    slug: 'profile-page',
    title: 'Profile Page Demo',
    category: 'Application',
    summary: 'A polished profile surface mixing account data, activity, preferences, and contextual action zones.',
    componentsUsed: ['Avatar blocks', 'Tabs', 'Cards', 'Timeline'],
    layoutNotes: 'Uses a three-region desktop layout with a quiet support rail and strong content center.',
    responsiveNotes: 'Secondary surfaces collapse beneath the primary profile narrative without losing context.',
    browserNotes: 'Sticks to standard layering and overflow rules for consistent mobile performance.',
    useCases: ['User accounts', 'Teams', 'Portfolio surfaces'],
    heroStats: ['Editorial account layout', 'Activity rhythm', 'Adaptive side rails']
  },
  {
    slug: 'settings-page',
    title: 'Settings Page Demo',
    category: 'Application',
    summary: 'Dense configuration layouts with grouped controls, status indicators, and safe spacing for long forms.',
    componentsUsed: ['Sidebar nav', 'Switches', 'Forms', 'Validation', 'Alerts'],
    layoutNotes: 'Settings groups use steady vertical rhythm and inset panels for scan-friendly control clusters.',
    responsiveNotes: 'Navigation becomes a drawer and long forms preserve clear section boundaries.',
    browserNotes: 'Avoids custom scrolling regions inside forms to reduce Safari friction.',
    useCases: ['Account settings', 'Workspace preferences', 'Feature flags'],
    heroStats: ['Long-form stability', 'Grouped control hierarchy', 'Drawer-friendly navigation']
  },
  {
    slug: 'tables-and-forms',
    title: 'Tables and Forms Demo',
    category: 'System',
    summary: 'A systems-focused example combining dense forms, sortable table shells, and validation behavior.',
    componentsUsed: ['Tables', 'Inputs', 'Selects', 'Badges', 'Pagination'],
    layoutNotes: 'Pairs a data table with a controlled action rail and progressive filter areas.',
    responsiveNotes: 'Critical fields collapse into cards while preserving essential sort and state information.',
    browserNotes: 'Uses horizontal overflow guards and composable controls for robust cross-browser behavior.',
    useCases: ['Back-office tools', 'Records management', 'Ops screens'],
    heroStats: ['Dense UI discipline', 'Overflow-safe data tables', 'Validation clarity']
  },
  {
    slug: 'navigation',
    title: 'Navigation Demo',
    category: 'System',
    summary: 'A catalog of top nav, side nav, command surfaces, and mobile drawers shaped for real products.',
    componentsUsed: ['Header', 'Sidebar', 'Drawer', 'Mega menu', 'Breadcrumbs'],
    layoutNotes: 'Demonstrates horizontal, vertical, and hybrid navigation systems in one coherent language.',
    responsiveNotes: 'Transitions cleanly between top-nav, hybrid, and drawer-based patterns.',
    browserNotes: 'Focus management and overlay stacking are tuned for broad browser compatibility.',
    useCases: ['Docs sites', 'Dashboards', 'Complex navigation systems'],
    heroStats: ['Hybrid navigation patterns', 'Accessible overlays', 'Sticky-safe headers']
  },
  {
    slug: 'marketing-sections',
    title: 'Marketing Sections Demo',
    category: 'Marketing',
    summary: 'A set of reusable content blocks for editorial product pages, testimonials, logos, and proof rows.',
    componentsUsed: ['Section wrappers', 'Stats', 'Testimonials', 'Logo rails', 'CTAs'],
    layoutNotes: 'Designed for mixing balanced and asymmetrical section compositions without losing rhythm.',
    responsiveNotes: 'Section spacing, quote framing, and proof cards keep a strong narrative hierarchy on small screens.',
    browserNotes: 'All decorative layers degrade gracefully without blocking content.',
    useCases: ['Campaign pages', 'Feature launches', 'Editorial websites'],
    heroStats: ['Editorial flexibility', 'Asymmetrical composition', 'Reusable proof blocks']
  },
  {
    slug: 'modal-drawer',
    title: 'Modal and Drawer Demo',
    category: 'System',
    summary: 'Overlay patterns for quick actions, settings panels, confirmations, and contextual workflows.',
    componentsUsed: ['Modal', 'Drawer', 'Backdrop', 'Focus trap'],
    layoutNotes: 'Centers primary actions while offering alternate side-panel experiences for richer workflows.',
    responsiveNotes: 'Drawers become full-height mobile surfaces with safe focus management.',
    browserNotes: 'Focus and overlay layering use stable primitives and avoid brittle scroll-lock hacks.',
    useCases: ['Quick edit flows', 'Contextual actions', 'Layered product UX'],
    heroStats: ['Accessible overlays', 'Mobile-ready drawers', 'Focus-safe patterns']
  },
  {
    slug: 'advanced-components',
    title: 'Advanced Components Demo',
    category: 'System',
    summary: 'A premium component gallery covering steppers, command surfaces, workspaces, and higher-order UI blocks.',
    componentsUsed: ['Stepper', 'Command palette', 'Workspace shell', 'Premium cards'],
    layoutNotes: 'Uses alternating densities and layered cards to highlight advanced UI primitives.',
    responsiveNotes: 'Complex components collapse into scroll-safe cards with preserved hierarchy.',
    browserNotes: 'Fallback styling keeps advanced sections readable even where visual effects soften.',
    useCases: ['Enterprise suites', 'High-polish product teams', 'Design systems'],
    heroStats: ['Premium component language', 'High-density polish', 'Enterprise-ready surfaces']
  }
];

export const exampleCategories = ['All', 'Marketing', 'Application', 'Flows', 'System'];
