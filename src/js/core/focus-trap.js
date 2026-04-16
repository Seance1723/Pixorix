const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',');

export function getFocusableElements(container) {
  if (!container) {
    return [];
  }

  return [...container.querySelectorAll(FOCUSABLE_SELECTOR)].filter((element) => {
    return !element.hasAttribute('hidden') && element.offsetParent !== null;
  });
}

export function createFocusTrap(container) {
  let previousActiveElement = null;

  function onKeydown(event) {
    if (event.key !== 'Tab') {
      return;
    }

    const focusable = getFocusableElements(container);

    if (!focusable.length) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return {
    activate() {
      previousActiveElement = document.activeElement;
      container.addEventListener('keydown', onKeydown);

      const focusable = getFocusableElements(container);
      if (focusable.length) {
        focusable[0].focus();
      } else {
        container.setAttribute('tabindex', '-1');
        container.focus();
      }
    },
    deactivate() {
      container.removeEventListener('keydown', onKeydown);
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    }
  };
}
