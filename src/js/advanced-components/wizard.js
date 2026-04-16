export function createWizard(element) {
  if (!element) {
    return null;
  }

  const steps = [...element.querySelectorAll('[data-px-step]')];
  const panels = [...element.querySelectorAll('[data-px-wizard-panel]')];
  const nextButtons = [...element.querySelectorAll('[data-px-wizard-next]')];
  const prevButtons = [...element.querySelectorAll('[data-px-wizard-prev]')];
  let currentIndex = Math.max(0, steps.findIndex((step) => step.classList.contains('is-active')));

  function sync(index) {
    currentIndex = Math.max(0, Math.min(index, panels.length - 1));

    steps.forEach((step, stepIndex) => {
      step.classList.toggle('is-active', stepIndex === currentIndex);
      step.classList.toggle('is-complete', stepIndex < currentIndex);
      step.setAttribute('aria-current', stepIndex === currentIndex ? 'step' : 'false');
    });

    panels.forEach((panel, panelIndex) => {
      panel.hidden = panelIndex !== currentIndex;
    });
  }

  nextButtons.forEach((button) => {
    button.addEventListener('click', () => sync(currentIndex + 1));
  });

  prevButtons.forEach((button) => {
    button.addEventListener('click', () => sync(currentIndex - 1));
  });

  sync(currentIndex);

  return {
    next() {
      sync(currentIndex + 1);
    },
    previous() {
      sync(currentIndex - 1);
    },
    goTo(index) {
      sync(index);
    }
  };
}
