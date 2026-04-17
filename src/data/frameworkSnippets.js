export const buttonFrameworkSnippets = {
  html: {
    language: 'html',
    filename: 'button-demo.html',
    title: 'Button Example',
    caption: 'Use the plain HTML example as the baseline reference for framework wrappers.',
    code: `<button class="px-button px-button--primary">
  Launch demo
</button>`
  },
  react: {
    language: 'jsx',
    filename: 'ButtonDemo.jsx',
    title: 'Button Example',
    caption: 'React usage should stay close to the framework-agnostic HTML structure.',
    code: `export function ButtonDemo() {
  return (
    <button className="px-button px-button--primary">
      Launch demo
    </button>
  );
}`
  },
  angular: {
    language: 'ts',
    filename: 'button-demo.component.ts',
    title: 'Button Example',
    caption: 'Angular examples can pair component markup with minimal component wiring.',
    code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-button-demo',
  template: \`
    <button class="px-button px-button--primary">
      Launch demo
    </button>
  \`
})
export class ButtonDemoComponent {}`
  },
  vue: {
    language: 'vue',
    filename: 'ButtonDemo.vue',
    title: 'Button Example',
    caption: 'Vue snippets should show the same visual contract with framework-native syntax.',
    code: `<template>
  <button class="px-button px-button--primary">
    Launch demo
  </button>
</template>`
  }
};
