import { initHoverEffects } from '../motion/hover-effects.js';
import { initPageTransition } from '../motion/page-transition.js';
import { initReveal } from '../motion/reveal.js';

export function initPixorix(root = document) {
  const reveal = initReveal(root);
  const hover = initHoverEffects(root);
  const page = initPageTransition(root);

  return {
    reveal,
    hover,
    page,
    destroy() {
      reveal?.destroy?.();
      hover?.destroy?.();
      page?.destroy?.();
    }
  };
}
