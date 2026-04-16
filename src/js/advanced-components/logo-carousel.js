export function createLogoCarousel(element) {
  if (!element) {
    return null;
  }

  const track = element.querySelector('[data-px-carousel-track]');

  if (!track) {
    return null;
  }

  let rafId = 0;
  let offset = 0;

  function tick() {
    offset = (offset + 0.35) % Math.max(track.scrollWidth / 2, 1);
    track.style.transform = `translateX(${-offset}px)`;
    rafId = window.requestAnimationFrame(tick);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    rafId = window.requestAnimationFrame(tick);
  }

  return {
    destroy() {
      window.cancelAnimationFrame(rafId);
    }
  };
}
