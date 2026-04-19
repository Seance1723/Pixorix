# Pixorix Starter Component Blueprint

Use this folder as the baseline for new public components.

Included starter files:

- `_component.scss.template`
- `component.html.template`
- `component.js.template`
- `component.md.template`

Recommended production placement:

```text
src/scss/components/_component-name.scss
src/js/components/component-name.js
docs/components/component-name.md
examples/component-name/index.html
examples/component-name/app.scss
examples/component-name/app.js
```

Recommended SCSS import flow:

```scss
@forward 'component-name';
```

Recommended JS registration flow:

```js
import { registerPixorixComponent } from '../pixorix.js';
import { createComponentName } from './components/component-name.js';

registerPixorixComponent('component-name', {
  selector: '[data-px-component="component-name"], [data-px-component-name]',
  init: createComponentName
});
```

Blueprint authoring rules:

- keep one component root
- expose local CSS variables
- use shared mixins before local declarations
- use `data-px-*` for JS hooks
- use `data-state` for JS lifecycle state
- prefer token swaps for variants
- support tone and appearance as separate axes when composition makes sense
- keep HTML shallow and semantic
- document HTML, React, Angular, and Vue against the same contract
