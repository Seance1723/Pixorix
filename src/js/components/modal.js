import { createBackdrop } from '../core/backdrop.js';
import { createFocusTrap } from '../core/focus-trap.js';

export function createModal(element) {
  const dialog = element?.querySelector('.px-modal__dialog');
  const closeButtons = element ? [...element.querySelectorAll('[data-px-close]')] : [];
  const backdrop = createBackdrop(element, close);
  const trap = createFocusTrap(dialog ?? element);

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
