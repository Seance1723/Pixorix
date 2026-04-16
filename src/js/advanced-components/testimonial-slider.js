export function createTestimonialSlider(element) {
  if (!element) {
    return null;
  }

  const track = element.querySelector('[data-px-slider-track]');
  const slides = track ? [...track.children] : [];
  const nextButton = element.querySelector('[data-px-slider-next]');
  const prevButton = element.querySelector('[data-px-slider-prev]');
  let activeIndex = 0;

  function update() {
    slides.forEach((slide, index) => {
      slide.setAttribute('aria-hidden', index === activeIndex ? 'false' : 'true');
    });

    if (track) {
      track.style.transform = `translateX(calc(${activeIndex * -100}% - ${activeIndex} * var(--px-space-4)))`;
    }
  }

  nextButton?.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % Math.max(slides.length, 1);
    update();
  });

  prevButton?.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + slides.length) % Math.max(slides.length, 1);
    update();
  });

  update();

  return {
    next() {
      nextButton?.click();
    },
    previous() {
      prevButton?.click();
    }
  };
}
