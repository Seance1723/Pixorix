import { createOverlay } from '../components/overlay.js';

export function createCommandPalette(element) {
  const modal = createOverlay(element, { type: 'command-palette' });
  const input = element?.querySelector('input, [type="search"]');
  const items = element ? [...element.querySelectorAll('.px-command-palette__item')] : [];
  let activeIndex = -1;

  function setActive(index) {
    items.forEach((item, itemIndex) => {
      item.classList.toggle('is-active', itemIndex === index);
    });

    activeIndex = index;
  }

  function onKeydown(event) {
    if (!items.length) {
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive((activeIndex + 1) % items.length);
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((activeIndex - 1 + items.length) % items.length);
    }

    if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault();
      items[activeIndex].click();
    }
  }

  input?.addEventListener('keydown', onKeydown);

  return {
    open() {
      modal.open();
      setActive(items.length ? 0 : -1);
      input?.focus();
    },
    close: modal.close
  };
}
