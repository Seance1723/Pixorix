function isSplitButton(element) {
  return element?.matches?.('[data-px-button-split]') ?? false;
}

export function createButton(element) {
  if (!isSplitButton(element)) {
    return {
      destroy() {}
    };
  }

  const toggle = element.querySelector('[data-px-button-toggle], .px-split-button__toggle');
  const targetSelector = toggle?.dataset.pxTarget || null;
  const controlledId = toggle?.getAttribute('aria-controls');
  const menu =
    (controlledId ? element.querySelector(`#${controlledId}`) ?? document.getElementById(controlledId) : null) ||
    (targetSelector ? document.querySelector(targetSelector) : null);

  if (!toggle) {
    return {
      destroy() {}
    };
  }

  function syncState(nextState) {
    const isOpen = nextState === 'open';

    element.dataset.state = nextState;
    element.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));

    if (menu) {
      menu.hidden = !isOpen;
      menu.dataset.state = nextState;
      menu.setAttribute('aria-hidden', String(!isOpen));
    }

    element.dispatchEvent(
      new CustomEvent('px:button:toggle', {
        bubbles: true,
        detail: {
          state: nextState,
          trigger: toggle,
          menu
        }
      })
    );
  }

  function open() {
    syncState('open');
  }

  function close() {
    syncState('closed');
  }

  function toggleState() {
    if (element.dataset.state === 'open') {
      close();
      return;
    }

    open();
  }

  function onDocumentClick(event) {
    if (!element.contains(event.target)) {
      close();
    }
  }

  function onKeydown(event) {
    if (event.key === 'Escape') {
      close();
      toggle?.focus();
    }
  }

  function onToggleClick(event) {
    event.preventDefault();

    if (toggle.disabled || toggle.getAttribute('aria-disabled') === 'true') {
      return;
    }

    toggleState();
  }

  function onMenuClick(event) {
    const action = event.target.closest('[data-px-close], [role="menuitem"], a[href], button');

    if (!action || action === toggle) {
      return;
    }

    close();
  }

  toggle.addEventListener('click', onToggleClick);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onKeydown);
  menu?.addEventListener('click', onMenuClick);

  syncState(element.dataset.state || 'closed');

  return {
    open,
    close,
    toggle: toggleState,
    destroy() {
      toggle.removeEventListener('click', onToggleClick);
      document.removeEventListener('click', onDocumentClick);
      document.removeEventListener('keydown', onKeydown);
      menu?.removeEventListener('click', onMenuClick);
    }
  };
}
