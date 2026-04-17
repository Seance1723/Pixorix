import { siteConfig } from '@/config/site';

export const landingPageContent = {
  hero: {
    eyebrow: 'Official framework website',
    title: `${siteConfig.name} builds faster interfaces with a cleaner system.`,
    summary: 'A premium, framework-agnostic frontend framework for modern product teams.',
    supportingText:
      'Pixorix gives you scalable tokens, flexible layouts, utility power, theme control, and motion guidance without locking your team into one JavaScript ecosystem.',
    primaryCta: {
      label: 'Get Started',
      href: '/get-started'
    },
    secondaryCta: {
      label: 'Browse Docs',
      href: '/docs/components'
    },
    highlights: [
      'Framework-agnostic by design',
      'Docs-first architecture',
      'Responsive tokens and layout primitives'
    ],
    install: {
      title: 'Install Pixorix',
      language: 'bash',
      filename: 'terminal',
      caption: 'Start with the docs and adapt the setup to plain HTML, React, Angular, Vue, or your own stack.',
      code: `npm install pixorix

# or use the starter docs to wire Pixorix into
# HTML, React, Angular, Vue, or any bundler setup`
    }
  },
  intro: {
    eyebrow: 'Framework intro',
    title: 'Designed like a modern framework homepage, built for real frontend stacks',
    description:
      'Pixorix is not a React component kit pretending to be universal. It starts from styling primitives and documentation patterns that work across markup-first and framework-driven codebases.',
    points: [
      {
        title: 'Universal first',
        description:
          'The core mental model works in plain HTML and CSS first, then maps naturally into React, Angular, Vue, and custom design systems.'
      },
      {
        title: 'Practical developer experience',
        description:
          'Predictable structure, reusable docs patterns, and consistent tokens make adoption easier for teams building products, dashboards, and marketing sites.'
      }
    ],
    stats: [
      { value: '4', label: 'Core framework targets' },
      { value: 'Docs-first', label: 'Expansion model' },
      { value: 'Universal', label: 'Integration approach' }
    ]
  },
  reasons: {
    eyebrow: 'Why Pixorix',
    title: 'Why teams choose Pixorix',
    description:
      'Pixorix balances the familiarity of large framework sites with a more premium system architecture and cleaner implementation path.',
    items: [
      {
        title: 'Less framework lock-in',
        description:
          'Teams can document one design language without maintaining separate mental models for each frontend stack.'
      },
      {
        title: 'Better defaults',
        description:
          'Fluid typography, stronger layout structure, and clearer theming create a more polished starting point than many older utility or component frameworks.'
      },
      {
        title: 'Scales with documentation',
        description:
          'Pixorix is designed so demos, docs navigation, examples, and framework tabs all grow from shared configuration instead of ad hoc page code.'
      }
    ]
  },
  solvedLimitations: {
    eyebrow: 'Problems solved',
    title: 'What Pixorix fixes from older framework patterns',
    description:
      'Many established frameworks remain useful, but they often carry tradeoffs that modern teams no longer need to accept.',
    items: [
      {
        title: 'Outdated default aesthetics',
        problem:
          'Older frameworks often require substantial overrides before a product looks premium or brand-ready.',
        solution:
          'Pixorix starts from a more elevated visual baseline while keeping the structure systematic and reusable.'
      },
      {
        title: 'Inconsistent docs-to-product handoff',
        problem:
          'Design systems often show polished docs examples but leave teams to reconstruct the real implementation rules.',
        solution:
          'Pixorix keeps preview, code, framework variants, and docs navigation tied together in one reusable docs architecture.'
      },
      {
        title: 'Framework-centric documentation',
        problem:
          'Many systems prioritize one framework and treat others as secondary adapters.',
        solution:
          'Pixorix presents HTML, React, Angular, and Vue as first-class documentation targets.'
      }
    ]
  },
  features: {
    eyebrow: 'Key features',
    title: 'A framework site with stronger building blocks',
    description:
      'These foundations are intended for maintainable product interfaces, examples, and long-term documentation growth.',
    items: [
      {
        title: 'Token-driven theming',
        description: 'Centralized tokens for color, spacing, radius, surface treatment, and responsive scaling.'
      },
      {
        title: 'Layout primitives',
        description: 'Containers, shells, spacing rhythms, and composition patterns built for marketing and application surfaces.'
      },
      {
        title: 'Utility coverage',
        description: 'Single-purpose helpers where speed matters, without making the system feel purely utility-first.'
      },
      {
        title: 'Motion guidance',
        description: 'Progressive enhancement with reduced-motion support and optional GSAP integration where it adds value.'
      },
      {
        title: 'Docs demo architecture',
        description: 'Reusable preview, code, framework switcher, and note blocks for scalable documentation authoring.'
      },
      {
        title: 'Example-ready structure',
        description: 'Route and data architecture already prepared for examples, docs expansion, and future showcases.'
      }
    ]
  },
  compatibility: {
    eyebrow: 'Framework compatibility',
    title: 'One framework website, multiple implementation paths',
    description:
      'Pixorix is built to serve teams working in traditional HTML workflows, modern SPA frameworks, and mixed-stack environments.',
    platforms: [
      {
        name: 'HTML',
        description: 'Use Pixorix as a direct styling and layout system with no framework dependency.'
      },
      {
        name: 'React',
        description: 'Adopt Pixorix styles and docs patterns in component-driven application code.'
      },
      {
        name: 'Angular',
        description: 'Map tokens and utilities cleanly into structured templates and enterprise UI layers.'
      },
      {
        name: 'Vue',
        description: 'Pair Pixorix with single-file components while keeping implementation consistent with HTML-first docs.'
      }
    ]
  },
  showcase: {
    eyebrow: 'Code and output showcase',
    title: 'See one output with framework-specific implementation',
    description:
      'Pixorix documentation should always make rendered output obvious while letting teams inspect the exact syntax they need.',
    demoTitle: 'Write once, document across frameworks',
    demoDescription:
      'The preview stays stable while the code tabs switch between HTML, React, Angular, and Vue.'
  },
  cta: {
    eyebrow: 'Get started',
    title: 'Start with docs, then scale into examples and product surfaces',
    description:
      'Use the docs to understand the system, then move into examples and implementation patterns that match your stack.',
    primaryCta: {
      label: 'Open Get Started',
      href: '/get-started'
    },
    secondaryCta: {
      label: 'Explore Examples',
      href: '/examples'
    }
  },
  footerCta: {
    eyebrow: 'Ready to build',
    title: 'Bring Pixorix into your next frontend system',
    description:
      'Start with the documentation architecture now in place, then expand into components, layouts, utilities, themes, and examples.',
    cta: {
      label: 'View Components Docs',
      href: '/docs/components'
    }
  }
};
