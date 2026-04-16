export function createRating(element) {
  if (!element) {
    return null;
  }

  const stars = [...element.querySelectorAll('[data-px-rating-star]')];
  const input = element.querySelector('input[type="hidden"], input[type="range"], input[type="number"]');

  function setValue(value) {
    stars.forEach((star, index) => {
      const isActive = index < value;
      star.classList.toggle('is-active', isActive);
      star.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    if (input) {
      input.value = `${value}`;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  stars.forEach((star, index) => {
    star.addEventListener('click', () => setValue(index + 1));
  });

  return {
    setValue
  };
}
