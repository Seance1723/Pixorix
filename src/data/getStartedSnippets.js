export const quickStartSnippets = {
  html: {
    language: 'html',
    filename: 'index.html',
    code: `<!doctype html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="/pixorix.css" />
  </head>
  <body>
    <main class="px-shell px-stack-lg">
      <h1>Pixorix starter</h1>
      <button class="px-button px-button--primary">Launch demo</button>
    </main>
  </body>
</html>`
  },
  react: {
    language: 'jsx',
    filename: 'App.jsx',
    code: `import 'pixorix/styles.css';

export function App() {
  return (
    <main className="px-shell px-stack-lg">
      <h1>Pixorix starter</h1>
      <button className="px-button px-button--primary">Launch demo</button>
    </main>
  );
}`
  },
  angular: {
    language: 'ts',
    filename: 'app.component.ts',
    code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <main class="px-shell px-stack-lg">
      <h1>Pixorix starter</h1>
      <button class="px-button px-button--primary">Launch demo</button>
    </main>
  \`
})
export class AppComponent {}`
  },
  vue: {
    language: 'vue',
    filename: 'App.vue',
    code: `<template>
  <main class="px-shell px-stack-lg">
    <h1>Pixorix starter</h1>
    <button class="px-button px-button--primary">Launch demo</button>
  </main>
</template>`
  }
};

export const starterSetupSnippets = {
  html: {
    language: 'html',
    filename: 'starter-shell.html',
    code: `<section class="px-surface px-stack-lg">
  <p class="px-eyebrow">Pixorix starter</p>
  <h2>Build a polished frontend surface faster</h2>
  <p>Use shared tokens and layout primitives from the start.</p>
  <button class="px-button px-button--primary">Launch project</button>
</section>`
  },
  react: {
    language: 'jsx',
    filename: 'StarterShell.jsx',
    code: `export function StarterShell() {
  return (
    <section className="px-surface px-stack-lg">
      <p className="px-eyebrow">Pixorix starter</p>
      <h2>Build a polished frontend surface faster</h2>
      <p>Use shared tokens and layout primitives from the start.</p>
      <button className="px-button px-button--primary">Launch project</button>
    </section>
  );
}`
  },
  angular: {
    language: 'html',
    filename: 'starter-shell.component.html',
    code: `<section class="px-surface px-stack-lg">
  <p class="px-eyebrow">Pixorix starter</p>
  <h2>Build a polished frontend surface faster</h2>
  <p>Use shared tokens and layout primitives from the start.</p>
  <button class="px-button px-button--primary">Launch project</button>
</section>`
  },
  vue: {
    language: 'vue',
    filename: 'StarterShell.vue',
    code: `<template>
  <section class="px-surface px-stack-lg">
    <p class="px-eyebrow">Pixorix starter</p>
    <h2>Build a polished frontend surface faster</h2>
    <p>Use shared tokens and layout primitives from the start.</p>
    <button class="px-button px-button--primary">Launch project</button>
  </section>
</template>`
  }
};

export const buttonExampleSnippets = {
  html: {
    language: 'html',
    filename: 'button.html',
    code: `<button class="px-button px-button--primary">
  Launch demo
</button>`
  },
  react: {
    language: 'jsx',
    filename: 'ButtonExample.jsx',
    code: `<button className="px-button px-button--primary">
  Launch demo
</button>`
  },
  angular: {
    language: 'html',
    filename: 'button-example.component.html',
    code: `<button class="px-button px-button--primary">
  Launch demo
</button>`
  },
  vue: {
    language: 'vue',
    filename: 'ButtonExample.vue',
    code: `<template>
  <button class="px-button px-button--primary">
    Launch demo
  </button>
</template>`
  }
};

export const cardExampleSnippets = {
  html: {
    language: 'html',
    filename: 'card.html',
    code: `<article class="px-card px-stack-md">
  <p class="px-eyebrow">Starter card</p>
  <h3>Token-driven surface</h3>
  <p>Use cards to group content and actions with consistent spacing.</p>
</article>`
  },
  react: {
    language: 'jsx',
    filename: 'CardExample.jsx',
    code: `<article className="px-card px-stack-md">
  <p className="px-eyebrow">Starter card</p>
  <h3>Token-driven surface</h3>
  <p>Use cards to group content and actions with consistent spacing.</p>
</article>`
  },
  angular: {
    language: 'html',
    filename: 'card-example.component.html',
    code: `<article class="px-card px-stack-md">
  <p class="px-eyebrow">Starter card</p>
  <h3>Token-driven surface</h3>
  <p>Use cards to group content and actions with consistent spacing.</p>
</article>`
  },
  vue: {
    language: 'vue',
    filename: 'CardExample.vue',
    code: `<template>
  <article class="px-card px-stack-md">
    <p class="px-eyebrow">Starter card</p>
    <h3>Token-driven surface</h3>
    <p>Use cards to group content and actions with consistent spacing.</p>
  </article>
</template>`
  }
};

export const badgeExampleSnippets = {
  html: {
    language: 'html',
    filename: 'badge.html',
    code: `<span class="px-badge px-badge--success">Stable</span>`
  },
  react: {
    language: 'jsx',
    filename: 'BadgeExample.jsx',
    code: `<span className="px-badge px-badge--success">Stable</span>`
  },
  angular: {
    language: 'html',
    filename: 'badge-example.component.html',
    code: `<span class="px-badge px-badge--success">Stable</span>`
  },
  vue: {
    language: 'vue',
    filename: 'BadgeExample.vue',
    code: `<template>
  <span class="px-badge px-badge--success">Stable</span>
</template>`
  }
};

export const alertExampleSnippets = {
  html: {
    language: 'html',
    filename: 'alert.html',
    code: `<div class="px-alert px-alert--success" role="status">
  <strong>Deployment ready</strong>
  <p>Your Pixorix starter tokens and shell are wired correctly.</p>
</div>`
  },
  react: {
    language: 'jsx',
    filename: 'AlertExample.jsx',
    code: `<div className="px-alert px-alert--success" role="status">
  <strong>Deployment ready</strong>
  <p>Your Pixorix starter tokens and shell are wired correctly.</p>
</div>`
  },
  angular: {
    language: 'html',
    filename: 'alert-example.component.html',
    code: `<div class="px-alert px-alert--success" role="status">
  <strong>Deployment ready</strong>
  <p>Your Pixorix starter tokens and shell are wired correctly.</p>
</div>`
  },
  vue: {
    language: 'vue',
    filename: 'AlertExample.vue',
    code: `<template>
  <div class="px-alert px-alert--success" role="status">
    <strong>Deployment ready</strong>
    <p>Your Pixorix starter tokens and shell are wired correctly.</p>
  </div>
</template>`
  }
};

export const formInputExampleSnippets = {
  html: {
    language: 'html',
    filename: 'input.html',
    code: `<label class="px-field">
  <span>Email address</span>
  <input type="email" placeholder="team@pixorix.dev" />
</label>`
  },
  react: {
    language: 'jsx',
    filename: 'InputExample.jsx',
    code: `<label className="px-field">
  <span>Email address</span>
  <input type="email" placeholder="team@pixorix.dev" />
</label>`
  },
  angular: {
    language: 'html',
    filename: 'input-example.component.html',
    code: `<label class="px-field">
  <span>Email address</span>
  <input type="email" placeholder="team@pixorix.dev" />
</label>`
  },
  vue: {
    language: 'vue',
    filename: 'InputExample.vue',
    code: `<template>
  <label class="px-field">
    <span>Email address</span>
    <input type="email" placeholder="team@pixorix.dev" />
  </label>
</template>`
  }
};

export const gridExampleSnippets = {
  html: {
    language: 'html',
    filename: 'grid.html',
    code: `<section class="px-grid px-grid--responsive">
  <article class="px-card">Overview</article>
  <article class="px-card">Themes</article>
  <article class="px-card">Examples</article>
  <article class="px-card">Motion</article>
</section>`
  },
  react: {
    language: 'jsx',
    filename: 'GridExample.jsx',
    code: `<section className="px-grid px-grid--responsive">
  <article className="px-card">Overview</article>
  <article className="px-card">Themes</article>
  <article className="px-card">Examples</article>
  <article className="px-card">Motion</article>
</section>`
  },
  angular: {
    language: 'html',
    filename: 'grid-example.component.html',
    code: `<section class="px-grid px-grid--responsive">
  <article class="px-card">Overview</article>
  <article class="px-card">Themes</article>
  <article class="px-card">Examples</article>
  <article class="px-card">Motion</article>
</section>`
  },
  vue: {
    language: 'vue',
    filename: 'GridExample.vue',
    code: `<template>
  <section class="px-grid px-grid--responsive">
    <article class="px-card">Overview</article>
    <article class="px-card">Themes</article>
    <article class="px-card">Examples</article>
    <article class="px-card">Motion</article>
  </section>
</template>`
  }
};

export const themeModeSnippets = {
  html: {
    language: 'html',
    filename: 'theme-mode.html',
    code: `<body data-theme="dark">
  <main class="px-surface">...</main>
</body>

<button class="px-button px-button--ghost">
  Toggle theme
</button>`
  },
  react: {
    language: 'jsx',
    filename: 'ThemeToggle.jsx',
    code: `export function App() {
  return (
    <div data-theme="dark">
      <main className="px-surface">...</main>
    </div>
  );
}`
  },
  angular: {
    language: 'html',
    filename: 'app.component.html',
    code: `<div [attr.data-theme]="theme">
  <main class="px-surface">...</main>
</div>`
  },
  vue: {
    language: 'vue',
    filename: 'App.vue',
    code: `<template>
  <div :data-theme="theme">
    <main class="px-surface">...</main>
  </div>
</template>`
  }
};
