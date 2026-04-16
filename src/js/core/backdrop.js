export function createBackdrop(target, onClose) {
  if (!target) {
    return null;
  }

  const backdrop = target.previousElementSibling?.classList.contains('px-overlay-backdrop')
    ? target.previousElementSibling
    : null;

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
