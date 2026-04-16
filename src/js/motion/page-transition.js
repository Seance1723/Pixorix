import { pageTransitionHelper } from './presets.js';

export function createPageTransition(container) {
  return {
    enter() {
      return pageTransitionHelper(container, 'enter');
    },
    leave() {
      return pageTransitionHelper(container, 'leave');
    }
  };
}

export function initPageTransition(root = document) {
  const container = root.querySelector('[data-px-page-transition]');

  if (!container) {
    return null;
  }

  const transition = createPageTransition(container);
  transition.enter();
  return transition;
}
