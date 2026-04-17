export const getStartedSnippets = {
  install: `npm install pixorix\nnpm install react react-dom react-router-dom gsap`,
  structure: `src/\n  app/\n  components/\n  routes/\n  styles/\n    main.scss\n    themes/\n  main.jsx`,
  include: `import 'pixorix/dist/pixorix.css';\nimport './styles/main.scss';\n\nimport { initPixorix } from 'pixorix';\n\ninitPixorix(document);`,
  button: `<button class="px-btn px-btn--primary">Launch workspace</button>\n<button class="px-btn px-btn--secondary">Preview docs</button>`,
  grid: `<section class="px-section">\n  <div class="px-container">\n    <div class="px-grid px-grid--cols-3 lg:px-grid--cols-5">\n      <article class="px-card">One</article>\n      <article class="px-card">Two</article>\n      <article class="px-card">Three</article>\n    </div>\n  </div>\n</section>`,
  card: `<article class="px-card px-card--elevated">\n  <span class="px-badge">New</span>\n  <h3>Premium card defaults</h3>\n  <p>Balanced spacing, rounded surfaces, and stable content rhythm.</p>\n</article>`,
  form: `<label class="px-field">\n  <span>Email address</span>\n  <input class="px-input" type="email" placeholder="team@pixorix.dev" />\n</label>`,
  utility: `<div class="px-flex px-items-center px-gap-3 px-text-muted">\n  <span class="px-badge px-badge--info">Token driven</span>\n  <span>Utility classes compose without flattening the design language.</span>\n</div>`,
  theme: `document.documentElement.setAttribute('data-px-theme', 'dark');\n\ndocument.documentElement.setAttribute('data-px-brand', 'default');`,
  motion: `import { gsap } from 'gsap';\n\nconst timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });\ntimeline.from('.hero-copy > *', { y: 24, opacity: 0, stagger: 0.08, duration: 0.8 });`
};
