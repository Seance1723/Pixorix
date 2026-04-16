export function createSegmentedControl(element) {
  if (!element) {
    return null;
  }

  const items = [...element.querySelectorAll('[data-px-segment]')];

  function activate(target) {
    items.forEach((item) => {
      const isActive = item === target;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      item.tabIndex = isActive ? 0 : -1;
    });
  }

  function onKeydown(event) {
    const currentIndex = items.findIndex((item) => item === document.activeElement);

    if (currentIndex < 0) {
      return;
    }

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      items[(currentIndex + 1) % items.length]?.focus();
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      items[(currentIndex - 1 + items.length) % items.length]?.focus();
    }
  }

  items.forEach((item, index) => {
    item.tabIndex = index === 0 ? 0 : -1;
    item.addEventListener('click', () => activate(item));
    item.addEventListener('keydown', onKeydown);
  });

  activate(items.find((item) => item.classList.contains('is-active')) || items[0]);

  return {
    activate
  };
}
