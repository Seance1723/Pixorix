import { createBackdrop } from '../core/backdrop.js';
import { createFocusTrap } from '../core/focus-trap.js';

export function createDrawer(element) {
  const panel = element?.querySelector('.px-drawer__panel') ?? element;
  const trap = createFocusTrap(panel);
  const backdrop = createBackdrop(element, close);
  const closeButtons = element ? [...element.querySelectorAll('[data-px-close]')] : [];

  function onKeydown(event) {
    if (event.key === 'Escape') {
      close();
    }
  }

  function open() {
    element.dataset.state = 'open';
    backdrop?.open();
    trap.activate();
    document.addEventListener('keydown', onKeydown);
  }

  function close() {
    element.dataset.state = 'closed';
    backdrop?.close();
    trap.deactivate();
    document.removeEventListener('keydown', onKeydown);
  }

  closeButtons.forEach((button) => button.addEventListener('click', close));

  return { open, close };
}
