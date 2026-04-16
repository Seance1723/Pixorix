import { isMotionAllowed } from './gsap-core.js';
import { floatingEffect, hoverLift, magneticButton } from './presets.js';

export function initHoverEffects(root = document) {
  const instances = [];

  root.querySelectorAll('[data-px-hover]').forEach((element) => {
    const mode = element.dataset.pxHover;

    if (mode === 'lift') {
      hoverLift(element);
      return;
    }

    if (!isMotionAllowed()) {
      return;
    }

    if (mode === 'magnetic') {
      const instance = magneticButton(element);
      instance && instances.push(instance);
      return;
    }

    if (mode === 'float') {
      const instance = floatingEffect(element);
      instance && instances.push({ destroy: () => instance.kill?.() });
    }
  });

  return {
    destroy() {
      instances.forEach((instance) => instance.destroy?.());
    }
  };
}
