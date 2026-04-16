# Pixorix Example Template System

Pixorix examples are validation products. They should prove that the framework works for real landing pages, dashboards, SaaS tools, admin panels, CRM screens, settings flows, and chat interfaces, not just isolated component demos.

Examples must satisfy four goals:

1. validate framework architecture under real page composition
2. demonstrate premium defaults and practical markup
3. exercise responsive, dark mode, accessibility, and motion behavior
4. give users copyable patterns for real product work

## Example System Principles

- Every example must feel like a plausible production page.
- Every example must use real framework classes and recommended structure.
- Every example must be mobile-first and desktop-complete.
- Every example should test both even and odd grid compositions where relevant.
- Every example should have light and dark mode support.
- Motion should be present only where it improves hierarchy, continuity, or feedback.
- Each example should be useful as both a showcase and a regression surface.

## Organization Inside `examples/`

`examples/` is the runnable example workspace. Each example should be self-contained enough for local preview while still sharing framework bundles.

Recommended structure:

```text
examples/
├── landing/
│   ├── index.html
│   ├── app.scss
│   ├── app.js
│   └── content.json
├── login/
├── signup/
├── pricing/
├── admin-dashboard/
├── analytics-dashboard/
├── saas-product/
├── settings/
├── profile/
├── crm/
├── project-dashboard/
├── support-chat/
└── shared/
    ├── partials/
    ├── mock-data/
    ├── media/
    └── tokens/
```

Per-example file roles:
- `index.html`: canonical page markup
- `app.scss`: example-scoped layout or presentation additions only
- `app.js`: example behavior wiring, theme toggles, demo data, and optional motion hooks
- `content.json`: optional mock content source for larger examples

## Organization Inside `docs/examples/`

`docs/examples/` is the public documentation catalog for the examples. It explains intent, key patterns, and which framework areas each example validates.

Recommended structure:

```text
docs/examples/
├── index.md
├── landing.md
├── login.md
├── signup.md
├── pricing.md
├── admin-dashboard.md
├── analytics-dashboard.md
├── saas-product.md
├── settings.md
├── profile.md
├── crm.md
├── project-dashboard.md
└── support-chat.md
```

Each docs page should include:
- example purpose
- screenshots or preview area
- framework sections exercised
- key layout patterns
- key components used
- theme and motion notes
- responsive notes
- link to local example entry

## Example Catalog

## 1. Landing Page

### Page purpose
- showcase the brand, value proposition, features, proof, and call to action

### Layout sections
- announcement bar or lightweight nav
- hero
- feature grid
- testimonial or logo band
- pricing teaser or CTA
- FAQ preview
- footer

### Components used
- navbar
- hero
- buttons
- cards
- badges
- logo carousel
- testimonial slider
- FAQ accordion

### UX goals
- immediate clarity
- strong hierarchy
- premium first impression
- fast scan on mobile

### Responsive behavior
- hero stacks on mobile
- feature grid shifts from 1 to 2 to 3 or 4 columns
- CTA blocks keep readable max widths

### Odd/even grid usage
- use 3-column feature grid and 5-logo proof band to validate odd layouts

### Typography behavior
- display-heavy hero
- restrained supporting copy
- strong section rhythm

### Dark mode behavior
- preserve contrast in hero surfaces, gradients, and proof sections

### Motion suggestions
- reveal hero content
- gentle logo marquee
- staggered feature cards

### Browser notes
- hero media and carousels must remain functional without JS-dependent layout assumptions

## 2. Login Page

### Page purpose
- compact sign-in flow for product entry

### Layout sections
- brand block
- auth card
- form
- helper links

### Components used
- auth shell
- form fields
- buttons
- alert or validation message

### UX goals
- low friction
- strong focus handling
- fast error recovery

### Responsive behavior
- centered single column on small screens
- optional split auth layout on larger screens

### Typography behavior
- concise heading and helper copy

### Dark mode behavior
- keep contrast clean for fields and helper text

### Motion suggestions
- subtle auth card entry only

### Browser notes
- validate autofill styling, password managers, and mobile virtual keyboards

## 3. Signup Page

### Page purpose
- account creation with trust and clarity

### Layout sections
- intro
- form
- plan or social proof side content

### Components used
- form system
- floating labels or standard labels
- validation
- pricing teaser or checklist

### UX goals
- explain value while keeping the form lightweight
- surface validation early and clearly

### Responsive behavior
- form-first on mobile
- optional split panel on larger screens

### Typography behavior
- supportive copy, not marketing-heavy

### Dark mode behavior
- no contrast loss in helper and validation text

### Motion suggestions
- wizard-style transitions if multi-step

### Browser notes
- validate mobile email/password keyboard behavior

## 4. Pricing Page

### Page purpose
- compare plans and drive conversion

### Layout sections
- intro
- pricing card grid
- comparison table
- FAQ
- CTA footer

### Components used
- pricing cards
- badges
- buttons
- comparison table
- FAQ accordion

### UX goals
- fast comparison
- obvious featured plan
- low ambiguity in limits and differences

### Responsive behavior
- pricing cards stack cleanly
- comparison table becomes horizontally scrollable or sectional

### Odd/even grid usage
- 3-plan and 5-feature comparison patterns

### Typography behavior
- strong price scale
- compact feature copy

### Dark mode behavior
- featured card must still stand out

### Motion suggestions
- mild featured-card emphasis
- FAQ expand/collapse

### Browser notes
- ensure tables remain usable on Safari/iOS horizontal scroll

## 5. Admin Dashboard

### Page purpose
- validate navigation, data density, forms, table tooling, and dashboard shells

### Layout sections
- top nav
- sidebar
- page header
- KPI row
- data cards
- table area
- filter/search/bulk actions

### Components used
- page shell
- sidebar nav
- stat cards
- data table
- filters
- drawers or modals
- toasts

### UX goals
- fast scanning
- efficient filtering
- comfortable density without clutter

### Responsive behavior
- sidebar collapses or stacks
- KPI row wraps
- table becomes overflow or stacked responsive mode

### Odd/even grid usage
- 5-card KPI row
- 3/7 widget layouts for realistic dashboard asymmetry

### Typography behavior
- dense UI labels
- prominent metrics
- calm supporting metadata

### Dark mode behavior
- table borders, focus rings, and stat card contrast remain strong

### Motion suggestions
- chart or card reveal
- toast entry
- panel open/close

### Browser notes
- validate sticky headers and overflow containers across Safari and Chromium

## 6. Analytics Dashboard

### Page purpose
- validate data-display patterns and comparison-heavy metrics

### Layout sections
- header controls
- KPI strip
- analytics cards
- chart panel shells
- activity or audit side panel

### Components used
- KPI cards
- analytics cards
- metric comparison cards
- filter bar
- segmented control
- timeline or activity feed

### UX goals
- highlight trends and change over time
- keep dense numbers readable

### Responsive behavior
- controls wrap before charts compress too far
- chart panels stack on narrow screens

### Odd/even grid usage
- 3-card summary row
- 5-card comparison strip

### Typography behavior
- metric-first scale
- compact labels and helper text

### Dark mode behavior
- chart containers and metric deltas stay legible

### Motion suggestions
- counter animation
- reveal dashboards in sections

### Browser notes
- chart regions should degrade gracefully if external charting is not present

## 7. SaaS Product Page

### Page purpose
- show application workflow and feature narrative, not just marketing copy

### Layout sections
- hero
- product screenshots or workspace preview
- feature sections
- integrations or proof band
- CTA

### Components used
- hero
- spotlight cards
- feature grid
- gradient/glass blocks
- testimonial or logo carousel

### UX goals
- product clarity
- premium visual identity
- clear conversion path

### Responsive behavior
- split sections collapse to stacked content/media

### Odd/even grid usage
- 3-feature and 5-proof sections

### Typography behavior
- larger narrative headings with product-oriented supporting copy

### Dark mode behavior
- premium effects must not become muddy

### Motion suggestions
- staggered reveals
- floating hero accents

### Browser notes
- glass/backdrop treatments are decorative only and need safe fallback

## 8. Settings Page

### Page purpose
- validate forms, sectioning, inline help, sticky action bars, and side navigation

### Layout sections
- page header
- settings nav
- grouped settings sections
- sticky save bar

### Components used
- settings panel
- forms
- switches
- segmented controls
- alerts
- sticky action bar

### UX goals
- clear grouping
- safe save/cancel workflows
- low cognitive load

### Responsive behavior
- side nav moves above or into a segmented pattern on mobile

### Typography behavior
- section titles strong, helper copy quiet

### Dark mode behavior
- settings separators and form states remain clear

### Motion suggestions
- sticky save bar entry
- success toast on save

### Browser notes
- validate sticky behavior inside layout shells

## 9. Profile Page

### Page purpose
- validate identity surfaces, activity summary, team/member metadata, and editable sections

### Layout sections
- profile hero
- summary cards
- details
- activity timeline

### Components used
- avatars
- cards
- timeline
- badges
- forms

### UX goals
- clean identity hierarchy
- strong scanability

### Responsive behavior
- summary blocks stack naturally

### Odd/even grid usage
- 3-card summary strip

### Typography behavior
- identity headline plus smaller metadata clusters

### Dark mode behavior
- avatars, tags, and metadata contrast remain balanced

### Motion suggestions
- subtle card reveal only

### Browser notes
- ensure avatar media and timeline spacing remain stable across browsers

## 10. CRM Layout

### Page purpose
- validate master-detail workflows and high-density business UI

### Layout sections
- list column
- detail panel
- side inspector or notes panel

### Components used
- split panel
- side inspector
- table or list group
- cards
- forms
- timeline

### UX goals
- fast scan and drill-down
- preserve context while editing

### Responsive behavior
- multi-panel layout collapses to stacked drill-in pattern

### Odd/even grid usage
- 3-panel desktop structure

### Typography behavior
- denser labels and record metadata

### Dark mode behavior
- selected row and active panel states remain clear

### Motion suggestions
- panel transitions only where they clarify selection change

### Browser notes
- validate overflow, sticky side panels, and focus order carefully

## 11. Project Dashboard

### Page purpose
- validate Kanban, roadmap, team cards, task summaries, and project metrics

### Layout sections
- project header
- progress summary
- Kanban or roadmap area
- team/updates side area

### Components used
- stat cards
- roadmap cards
- Kanban board shell
- avatars
- activity feed

### UX goals
- make progress, blockers, and team context visible quickly

### Responsive behavior
- Kanban horizontal overflow on desktop
- stacked task sections on mobile

### Odd/even grid usage
- 3-lane, 5-lane, and 7-card board validation

### Typography behavior
- project title strong, card copy compact

### Dark mode behavior
- board lanes and cards must stay separable

### Motion suggestions
- board card reveal
- subtle drag-handle affordance only if interactivity is added later

### Browser notes
- validate horizontal scroll behavior in Safari and iOS

## 12. Support / Chat Page

### Page purpose
- validate support conversation layout, side context, prompt composer, and notification patterns

### Layout sections
- conversation list or sidebar
- chat thread
- prompt composer
- side context or customer profile

### Components used
- chat layout
- AI chat shell
- prompt composer
- cards
- avatars
- notification list

### UX goals
- conversation readability
- quick reply workflow
- clear separation of roles and system messages

### Responsive behavior
- sidebar collapses behind a drawer or stacked view on mobile

### Typography behavior
- bubble text readable and not cramped
- metadata quiet but accessible

### Dark mode behavior
- assistant and user bubbles must remain distinct

### Motion suggestions
- message enter transitions only if subtle
- drawer/panel transitions for support context

### Browser notes
- validate scroll anchoring, virtual keyboards, and sticky composer behavior

## Example Authoring Standards

- Each example should document which framework areas it validates.
- Each example should intentionally cover at least one responsive edge case.
- Dashboard and product examples should include both light and dark previews.
- Every example should include accessible landmarks and keyboard-safe interaction.
- Avoid dummy lorem-only pages; use believable interface copy and data labels.

## Recommended Example Metadata

Every example should have a small metadata block in docs:

- purpose
- categories
- key components
- key layouts
- motion usage
- theme coverage
- accessibility focus points
- browser-sensitive areas

## Recommended Public Order For Examples

1. Landing page
2. SaaS product page
3. Pricing page
4. Login page
5. Signup page
6. Admin dashboard
7. Analytics dashboard
8. Settings page
9. Profile page
10. CRM layout
11. Project dashboard
12. Support/chat page
