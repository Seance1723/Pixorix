import { initHoverEffects } from '../motion/hover-effects.js';
import { initPageTransition } from '../motion/page-transition.js';
import { initReveal } from '../motion/reveal.js';
import { initTheme } from './theme.js';

export function initPixorix(root = document) {
  const theme = initTheme({ root: root.ownerDocument ?? root });
  const reveal = initReveal(root);
  const hover = initHoverEffects(root);
  const page = initPageTransition(root);

  return {
    theme,
    reveal,
    hover,
    page,
    destroy() {
      theme?.destroy?.();
      reveal?.destroy?.();
      hover?.destroy?.();
      page?.destroy?.();
    }
  };
}
