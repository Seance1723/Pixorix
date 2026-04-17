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
  const controlledId = toggle?.getAttribute('aria-controls');
  const menu = controlledId ? element.querySelector(`#${controlledId}`) ?? document.getElementById(controlledId) : null;

  function syncState(nextState) {
    const isOpen = nextState === 'open';

    element.dataset.state = nextState;
    toggle?.setAttribute('aria-expanded', String(isOpen));

    if (menu) {
      menu.hidden = !isOpen;
    }
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
    toggleState();
  }

  toggle?.addEventListener('click', onToggleClick);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onKeydown);

  syncState(element.dataset.state || 'closed');

  return {
    open,
    close,
    destroy() {
      toggle?.removeEventListener('click', onToggleClick);
      document.removeEventListener('click', onDocumentClick);
      document.removeEventListener('keydown', onKeydown);
    }
  };
}
