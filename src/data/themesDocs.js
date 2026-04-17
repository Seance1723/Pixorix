function buildThemeSnippets({ title, html, react, angular, vue }) {
  return {
    html: {
      title,
      language: 'html',
      filename: `${title.toLowerCase().replace(/\s+/g, '-')}.html`,
      code: html
    },
    react: {
      title,
      language: 'jsx',
      filename: `${title.replace(/\s+/g, '')}Example.jsx`,
      code: react
    },
    angular: {
      title,
      language: 'html',
      filename: `${title.toLowerCase().replace(/\s+/g, '-')}.component.html`,
      code: angular
    },
    vue: {
      title,
      language: 'vue',
      filename: `${title.replace(/\s+/g, '')}Example.vue`,
      code: vue
    }
  };
}

export const themeDocSections = [
  {
    id: 'token-based-theming',
    title: 'Token-Based Theming',
    description: 'Pixorix should treat tokens as the source of truth for color, spacing, radius, motion, and surface behavior.',
    demoDescription: 'Start with tokens so theme changes propagate consistently instead of rewriting individual components.',
    previewDescription: 'A small token surface showing the kinds of values themes should control.',
    preview: { type: 'tokens' },
    snippets: buildThemeSnippets({
      title: 'Token Based Theming',
      html: `:root {\n  --px-accent: #0d9488;\n  --px-surface: #ffffff;\n  --px-radius-md: 1rem;\n}`,
      react: `export const themeTokens = {\n  accent: '#0d9488',\n  surface: '#ffffff',\n  radiusMd: '1rem'\n};`,
      angular: `:root {\n  --px-accent: #0d9488;\n  --px-surface: #ffffff;\n  --px-radius-md: 1rem;\n}`,
      vue: `<style>\n:root {\n  --px-accent: #0d9488;\n  --px-surface: #ffffff;\n  --px-radius-md: 1rem;\n}\n</style>`
    })
  },
  {
    id: 'css-variables',
    title: 'CSS Variables',
    description: 'CSS variables are the runtime layer for theming, making browser-native overrides and live customization possible.',
    demoDescription: 'Use CSS variables for fast theme switching, tenant branding, and context-sensitive surfaces.',
    previewDescription: 'Representative surfaces using accent, surface, and border variables.',
    preview: { type: 'css-vars' },
    snippets: buildThemeSnippets({
      title: 'CSS Variables',
      html: `.px-card {\n  background: var(--px-surface);\n  border-color: var(--px-border);\n  color: var(--px-text);\n}`,
      react: `const cardStyle = {\n  background: 'var(--px-surface)',\n  borderColor: 'var(--px-border)'\n};`,
      angular: `.px-card {\n  background: var(--px-surface);\n  border-color: var(--px-border);\n  color: var(--px-text);\n}`,
      vue: `<style>\n.px-card {\n  background: var(--px-surface);\n  border-color: var(--px-border);\n  color: var(--px-text);\n}\n</style>`
    })
  },
  {
    id: 'scss-theme-overrides',
    title: 'SCSS Theme Overrides',
    description: 'SCSS overrides are useful when teams want to customize theme defaults at build time rather than only at runtime.',
    demoDescription: 'Override core token maps and derived theme values before shipping compiled output.',
    previewDescription: 'A base surface compared with a branded override treatment.',
    preview: { type: 'scss-overrides' },
    snippets: buildThemeSnippets({
      title: 'SCSS Theme Overrides',
      html: `$px-theme-colors: (\n  accent: #0d9488,\n  surface: #ffffff\n);\n\n@use 'pixorix/theme' with ($theme-colors: $px-theme-colors);`,
      react: `$px-theme-colors: (\n  accent: #0d9488,\n  surface: #ffffff\n);\n\n@use 'pixorix/theme' with ($theme-colors: $px-theme-colors);`,
      angular: `$px-theme-colors: (\n  accent: #0d9488,\n  surface: #ffffff\n);\n\n@use 'pixorix/theme' with ($theme-colors: $px-theme-colors);`,
      vue: `$px-theme-colors: (\n  accent: #0d9488,\n  surface: #ffffff\n);\n\n@use 'pixorix/theme' with ($theme-colors: $px-theme-colors);`
    })
  },
  {
    id: 'dark-mode',
    title: 'Dark Mode',
    description: 'Dark mode should be token-driven and opt into semantic surfaces rather than manually recoloring every component.',
    demoDescription: 'Switch theme context with data attributes or app state while preserving semantic token meaning.',
    previewDescription: 'A light and dark comparison for surface and text treatment.',
    preview: { type: 'dark-mode' },
    snippets: buildThemeSnippets({
      title: 'Dark Mode',
      html: `[data-theme="dark"] {\n  --px-surface: #112034;\n  --px-text: #f8fbff;\n  --px-border: rgba(255,255,255,0.12);\n}`,
      react: `<div data-theme={theme}>\n  <AppShell />\n</div>`,
      angular: `<div [attr.data-theme]="theme">\n  <app-shell />\n</div>`,
      vue: `<template>\n  <div :data-theme="theme">\n    <AppShell />\n  </div>\n</template>`
    })
  },
  {
    id: 'semantic-tokens',
    title: 'Semantic Tokens',
    description: 'Semantic tokens translate raw brand values into contextual meaning such as success, warning, info, or danger.',
    demoDescription: 'Use semantic tokens to keep feedback styling stable even when a brand palette changes.',
    previewDescription: 'Simple badges using semantic intent rather than hardcoded brand colors.',
    preview: { type: 'semantic' },
    snippets: buildThemeSnippets({
      title: 'Semantic Tokens',
      html: `:root {\n  --px-color-success: #0f766e;\n  --px-color-warning: #c2410c;\n  --px-color-info: #1d4ed8;\n}`,
      react: `export const semanticTokens = {\n  success: 'var(--px-color-success)',\n  warning: 'var(--px-color-warning)',\n  info: 'var(--px-color-info)'\n};`,
      angular: `:root {\n  --px-color-success: #0f766e;\n  --px-color-warning: #c2410c;\n  --px-color-info: #1d4ed8;\n}`,
      vue: `<style>\n:root {\n  --px-color-success: #0f766e;\n  --px-color-warning: #c2410c;\n  --px-color-info: #1d4ed8;\n}\n</style>`
    })
  },
  {
    id: 'branding-customization',
    title: 'Branding Customization',
    description: 'Branding customization should let teams adapt accent color, typography, radius, and surface tone while keeping the same Pixorix structure.',
    demoDescription: 'Adjust a few token families to create a branded system without rewriting every docs page or component.',
    previewDescription: 'A default Pixorix brand treatment beside a custom branded variant.',
    preview: { type: 'branding' },
    snippets: buildThemeSnippets({
      title: 'Branding Customization',
      html: `:root {\n  --px-accent: #ff6b35;\n  --px-radius-md: 1.25rem;\n  --px-font-display: 'Sora', sans-serif;\n}`,
      react: `const brandTheme = {\n  accent: '#ff6b35',\n  radiusMd: '1.25rem',\n  fontDisplay: "'Sora', sans-serif"\n};`,
      angular: `:root {\n  --px-accent: #ff6b35;\n  --px-radius-md: 1.25rem;\n  --px-font-display: 'Sora', sans-serif;\n}`,
      vue: `<style>\n:root {\n  --px-accent: #ff6b35;\n  --px-radius-md: 1.25rem;\n  --px-font-display: 'Sora', sans-serif;\n}\n</style>`
    })
  }
];
