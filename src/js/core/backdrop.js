export function createBackdrop(target, onClose) {
  if (!target) {
    return null;
  }

  const previousSibling = target.previousElementSibling?.classList.contains('px-overlay-backdrop')
    ? target.previousElementSibling
    : null;
  const childBackdrop = target.querySelector(':scope > .px-overlay-backdrop');
  const backdrop = previousSibling ?? childBackdrop ?? null;

  function handleClick(event) {
    if (event.target === backdrop && typeof onClose === 'function') {
      onClose();
    }
  }

  return {
    open() {
      if (!backdrop) {
        return;
      }

      backdrop.dataset.state = 'open';
      backdrop.addEventListener('click', handleClick);
    },
    close() {
      if (!backdrop) {
        return;
      }

      backdrop.dataset.state = 'closed';
      backdrop.removeEventListener('click', handleClick);
    }
  };
}
