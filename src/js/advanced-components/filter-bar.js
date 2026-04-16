export function createFilterBar(element) {
  const chips = [...(element?.querySelectorAll('[data-px-filter-chip]') ?? [])];

  function setActive(target) {
    chips.forEach((chip) => {
      const active = chip === target;
      chip.classList.toggle('is-active', active);
      chip.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => setActive(chip));
  });

  return { setActive };
}
