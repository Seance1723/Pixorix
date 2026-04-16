# Pixorix Documentation Architecture

This document defines the public documentation structure for Pixorix. The goal is to make the docs feel like a product surface, not a file dump: fast onboarding, strong information hierarchy, practical examples, and consistent authoring patterns across every page.

## 1. Documentation Information Architecture

Pixorix documentation should follow a layered path:

1. Understand the framework
2. Install and run it
3. Learn the foundations
4. Build layouts and pages
5. Use utilities and components
6. Extend with theming, motion, and JavaScript
7. Validate with accessibility and browser support
8. Contribute, upgrade, and track roadmap

The docs should optimize for three user types:
- first-time evaluators comparing Pixorix to Bootstrap, Tailwind, and similar tools
- product teams building dashboards, SaaS apps, admin panels, and websites
- contributors extending the framework itself

## 2. Main Sections

- Introduction
- Why Pixorix
- Getting Started
- Foundations
- Layout
- Utilities
- Components
- Advanced Components
- Theming
- Motion
- Accessibility
- JavaScript API
- Examples
- Customization
- Browser Support
- Contributing
- Roadmap

## 3. Sub-sections

### Introduction
- What Pixorix is
- Design goals
- Core stack
- Who it is for

### Why Pixorix
- Market positioning
- What problems it solves
- Comparison with older frameworks
- Daily developer workflow advantages

### Getting Started
- Installation
- Quick start
- File structure
- Build bundles
- First layout
- First component
- First theme switch

### Foundations
- Design tokens
- Color system
- Typography
- Spacing
- Radius and shadow
- Breakpoints and containers
- Motion tokens
- Theme tokens

### Layout
- Containers
- Grid system
- Responsive grid spans
- Stack
- Cluster
- Split
- Sidebar/content
- Dashboard shells
- Sticky regions
- Section rhythm

### Utilities
- Utility philosophy
- Display
- Flex
- Grid
- Spacing
- Typography
- Color and background
- Border and shadow
- Position and overflow
- Visibility and accessibility helpers
- Responsive usage rules

### Components
- Buttons
- Badges and chips
- Avatars
- Cards
- Alerts
- Progress and loaders
- Empty states
- Breadcrumbs
- Pagination
- Tabs
- Accordion
- Tooltip and popover
- Dropdown and nav
- Sidebar nav
- List group
- Timeline
- Toast
- Forms
- Inputs and select
- Checkbox, radio, switch
- Range and file upload
- Validation patterns
- Table

### Advanced Components
- Data display and dashboard patterns
- Modal
- Drawer
- Offcanvas
- Command palette
- Mega menu
- Notification panel
- Bottom sheet
- Stepper and wizard
- Hero and marketing sections
- Pricing and comparison
- Auth and onboarding
- Workspace shells
- AI chat shell
- Kanban and calendar
- Premium UI patterns

### Theming
- Theme architecture
- Default light theme
- Dark theme
- High contrast
- Brand themes
- Runtime switching
- Component theming hooks
- Creating custom themes

### Motion
- Motion philosophy
- Reduced motion
- Motion tokens
- Data attribute API
- Presets
- Scroll reveal
- Hover effects
- Overlay transitions
- Page transitions

### Accessibility
- Accessibility architecture
- Focus and keyboard patterns
- Screen-reader helpers
- Form accessibility
- Overlay accessibility
- ARIA guidance
- Testing checklist

### JavaScript API
- JS architecture
- Core bootstrap
- App lifecycle
- Registry and registration
- DOM/events/state helpers
- Theme API
- Motion API
- Component API contracts

### Examples
- Playground
- Dashboard
- Admin
- Marketing
- Auth
- Ecommerce
- Docs portal

### Customization
- SCSS override strategy
- CSS variable override strategy
- Bundle selection
- Theming strategy
- Extending components
- Adding plugins

### Browser Support
- Target browsers
- CSS fallbacks
- JS fallbacks
- Motion fallbacks
- Known caveats

### Contributing
- Local development
- Project structure
- Coding standards
- Docs writing rules
- Testing expectations
- Release process

### Roadmap
- Current focus
- Upcoming milestones
- Planned components
- Planned build improvements

## 4. Recommended Page Order

Recommended top-level order in navigation:

1. Introduction
2. Why Pixorix
3. Installation
4. Quick Start
5. File Structure
6. Foundations
7. Layout
8. Utilities
9. Components
10. Advanced Components
11. Theming
12. Motion
13. Accessibility
14. JavaScript API
15. Examples
16. Customization
17. Browser Support
18. Contributing
19. Changelog
20. Migration Guide
21. Roadmap

## 5. Getting Started Flow

The getting started flow should be optimized for the first 20 minutes of real usage.

### Step 1: Introduction
- what Pixorix is
- who it is for
- what kinds of products it is strongest at

### Step 2: Installation
- SCSS-only usage
- CSS bundle usage
- JS bundle usage
- theme bundle usage

### Step 3: Project structure
- what `src/scss`, `src/js`, `themes`, `components`, `advanced-components`, and `examples` mean

### Step 4: First page
- import Pixorix
- create a container, grid, card, and button

### Step 5: First form
- use the field shell, input, helper text, and validation state

### Step 6: First dashboard
- table, stat cards, filter bar, responsive layout

### Step 7: First theme switch
- light/dark toggle
- custom brand example

### Step 8: First motion enhancement
- reveal example
- reduced-motion note

## 6. Component Doc Template

Each component page should follow the same high-signal order:

1. Title and one-line purpose
2. Preview
3. When to use
4. Structure
5. Usage
6. Variants
7. Sizes
8. States
9. Responsive behavior
10. Accessibility
11. Theming
12. JS behavior
13. Motion notes
14. Browser notes
15. Customization hooks
16. Related components

Required content blocks:
- preview
- usage
- variants
- sizes
- states
- accessibility
- theming
- JS behavior
- motion notes
- browser notes

## 7. Utility Doc Template

Utility pages should document:

1. Purpose
2. Philosophy and limits
3. Naming pattern
4. Token source
5. Available classes
6. Responsive usage
7. Typical use cases
8. Anti-patterns
9. Browser notes

Utility pages should avoid huge undifferentiated class dumps. Group by intent and show realistic examples.

## 8. Theme Doc Template

Theme pages should document:

1. Purpose
2. Theme architecture
3. Relevant semantic tokens
4. Runtime data attributes
5. Compile-time map example
6. Component hooks
7. Light/dark/contrast behavior
8. Custom theme extension example
9. Persistence and JS API
10. Browser notes

## 9. Motion Doc Template

Motion pages should document:

1. Purpose
2. Reduced-motion rule
3. Preset or helper API
4. Data attribute hooks
5. JS usage
6. Performance notes
7. Fallback behavior
8. Browser notes
9. Anti-patterns

## 10. Accessibility Doc Template

Accessibility pages should document:

1. Pattern purpose
2. Semantic structure
3. Keyboard rules
4. Focus behavior
5. ARIA requirements
6. Screen-reader notes
7. Reduced-motion notes if relevant
8. Theme/contrast considerations
9. Testing checklist
10. Common mistakes

## 11. Changelog Structure

Pixorix changelog should be release-based and human-readable.

Recommended format:

1. Version heading
2. Release date
3. Summary
4. Added
5. Changed
6. Fixed
7. Deprecated
8. Removed
9. Migration notes

Changelog rules:
- group by user impact, not internal commit history
- call out breaking theme, class, and JS API changes explicitly
- mention browser support changes explicitly

## 12. Migration Guide Structure

Migration guides should be version-to-version and task-oriented.

Recommended sections:

1. Who this migration is for
2. Breaking changes summary
3. SCSS import changes
4. Class rename map
5. Theme token changes
6. JS API changes
7. Component markup changes
8. Accessibility changes
9. Step-by-step upgrade checklist
10. Before/after examples

## 13. Contribution Guide Structure

Contribution docs should cover:

1. Project overview
2. Repo structure
3. Local setup
4. Build commands
5. Coding standards
6. SCSS authoring standards
7. JS authoring standards
8. Documentation standards
9. Accessibility expectations
10. Browser support expectations
11. Review checklist
12. Release workflow

## Required Public Doc Structure

Pixorix public docs should include pages for:

- Introduction
- Why Pixorix
- Installation
- File structure
- Theming
- Layout
- Utilities
- Components
- Advanced components
- Motion
- Accessibility
- JavaScript API
- Examples
- Customization
- Contributing
- Roadmap

## Standard Component Documentation Pattern

This is the default pattern every component page must follow:

### Preview
- visual example
- real product-like example, not an isolated toy block

### Usage
- base markup
- recommended structure
- minimal example first

### Variants
- semantic variants
- when to use each

### Sizes
- supported sizes
- density guidance

### States
- hover
- focus-visible
- active
- disabled
- read-only or selected where relevant
- loading or async where relevant

### Accessibility
- required semantics
- required ARIA if any
- keyboard behavior
- screen-reader notes

### Theming
- CSS variables used
- component-level hooks
- dark/high-contrast notes

### JS Behavior
- whether JS is required
- data attribute API
- lifecycle notes

### Motion Notes
- preset or transition behavior
- reduced-motion behavior

### Browser Notes
- supported patterns
- fallbacks
- known caveats if any

## Recommended Docs Folder Order

```text
docs/
├── 01-introduction/
├── 02-why-pixorix/
├── 03-getting-started/
├── 04-foundations/
├── 05-layout/
├── 06-utilities/
├── 07-components/
├── 08-advanced-components/
├── 09-theming/
├── 10-motion/
├── 11-accessibility/
├── 12-javascript/
├── 13-examples/
├── 14-customization/
├── 15-browser-support/
├── 16-contributing/
├── 17-changelog/
├── 18-migration-guide/
└── 19-roadmap/
```

If the docs site does not use numbered directories, preserve the same order in navigation metadata.
