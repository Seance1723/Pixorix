export function createResizablePanels(element) {
  if (!element) {
    return null;
  }

  const handle = element.querySelector('[data-px-resize-handle]');
  const startPanel = element.querySelector('[data-px-panel-start]');
  const endPanel = element.querySelector('[data-px-panel-end]');

  if (!handle || !startPanel || !endPanel) {
    return null;
  }

  let isDragging = false;

  function onPointerMove(event) {
    if (!isDragging) {
      return;
    }

    const bounds = element.getBoundingClientRect();
    const percentage = ((event.clientX - bounds.left) / bounds.width) * 100;
    const clamped = Math.min(75, Math.max(25, percentage));

    element.style.gridTemplateColumns = `minmax(14rem, ${clamped}fr) 0.375rem minmax(18rem, ${100 - clamped}fr)`;
  }

  function stopDragging() {
    isDragging = false;
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', stopDragging);
  }

  handle.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    isDragging = true;
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', stopDragging);
  });

  return {
    destroy() {
      stopDragging();
    }
  };
}
