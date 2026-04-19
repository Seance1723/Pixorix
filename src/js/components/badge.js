function isManagedBadge(element) {
  return (
    element?.matches?.(
      '[data-px-chip], [data-px-filter-chip], .px-chip[data-px-component="chip"], .px-tag[data-px-component="tag"]'
    ) ?? false
  );
}

function shouldToggleSelection(element) {
  return (
    element.hasAttribute('data-px-selectable') ||
    element.hasAttribute('data-px-filter-chip') ||
    element.getAttribute('aria-pressed') != null
  );
}

function setSelected(element, selected) {
  element.classList.toggle('is-selected', selected);
  element.dataset.state = selected ? 'selected' : 'default';

  if (element.getAttribute('aria-pressed') != null) {
    element.setAttribute('aria-pressed', String(selected));
  }

  if (element.getAttribute('aria-selected') != null) {
    element.setAttribute('aria-selected', String(selected));
  }
}

export function createBadge(element) {
  if (!isManagedBadge(element)) {
    return {
      destroy() {}
    };
  }

  const root = element;
  const removeButton = root.querySelector('[data-px-chip-remove], .px-chip__remove, .px-tag__remove');
  let removeTimer = null;

  function remove() {
    const beforeEvent = new CustomEvent('px:badge:before-remove', {
      bubbles: true,
      cancelable: true,
      detail: { element: root }
    });

    if (!root.dispatchEvent(beforeEvent)) {
      return false;
    }

    root.dataset.state = 'removing';
    root.classList.add('is-removing');

    const finalize = () => {
      root.hidden = true;
      root.dispatchEvent(
        new CustomEvent('px:badge:remove', {
          bubbles: true,
          detail: { element: root }
        })
      );
    };

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || root.dataset.pxMotion === 'none') {
      finalize();
      return true;
    }

    window.clearTimeout(removeTimer);
    removeTimer = window.setTimeout(finalize, 180);
    return true;
  }

  function toggleSelected() {
    const next = !(root.classList.contains('is-selected') || root.dataset.state === 'selected');
    setSelected(root, next);
    root.dispatchEvent(
      new CustomEvent('px:badge:select', {
        bubbles: true,
        detail: {
          element: root,
          selected: next
        }
      })
    );
  }

  function onClick(event) {
    if (event.target.closest('[data-px-chip-remove], .px-chip__remove, .px-tag__remove')) {
      return;
    }

    if (shouldToggleSelection(root)) {
      toggleSelected();
    }
  }

  function onRemoveClick(event) {
    event.preventDefault();
    event.stopPropagation();
    remove();
  }

  if (shouldToggleSelection(root)) {
    root.addEventListener('click', onClick);
    if (!root.dataset.state) {
      setSelected(
        root,
        root.classList.contains('is-selected') ||
          root.getAttribute('aria-pressed') === 'true' ||
          root.getAttribute('aria-selected') === 'true'
      );
    }
  }

  removeButton?.addEventListener('click', onRemoveClick);

  return {
    remove,
    setSelected(selected) {
      setSelected(root, selected);
    },
    destroy() {
      window.clearTimeout(removeTimer);
      root.removeEventListener('click', onClick);
      removeButton?.removeEventListener('click', onRemoveClick);
    }
  };
}
