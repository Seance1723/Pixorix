import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

function resetStyles(elements) {
  elements.forEach((element) => {
    if (!element) {
      return;
    }

    element.style.transform = '';
    element.style.opacity = '';
    element.style.boxShadow = '';
  });
}

export function MotionPreviewBlock({ variant }) {
  const rootRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const targets = Array.from(root.querySelectorAll('[data-motion-target]'));

    resetStyles(targets);

    if (prefersReducedMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      if (variant === 'reveal') {
        gsap.fromTo(
          targets,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out', stagger: 0.08 }
        );
      }

      if (variant === 'section-entrance') {
        gsap.fromTo(
          targets,
          { y: 24, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out', stagger: 0.1 }
        );
      }
    }, root);

    return () => context.revert();
  }, [prefersReducedMotion, variant]);

  const handleCardHover = (event, active) => {
    if (prefersReducedMotion) {
      return;
    }

    gsap.to(event.currentTarget, {
      y: active ? -6 : 0,
      scale: active ? 1.01 : 1,
      boxShadow: active
        ? '0 24px 40px -28px rgba(16, 32, 51, 0.36)'
        : '0 0 0 rgba(0, 0, 0, 0)',
      duration: 0.2,
      ease: 'power2.out'
    });
  };

  const handleButtonInteraction = (event, active) => {
    if (prefersReducedMotion) {
      return;
    }

    gsap.to(event.currentTarget, {
      y: active ? -2 : 0,
      scale: active ? 0.985 : 1,
      duration: 0.16,
      ease: 'power2.out'
    });
  };

  if (variant === 'reveal') {
    return (
      <div ref={rootRef} className="motion-preview motion-preview--reveal">
        <div data-motion-target className="motion-preview__surface">
          Headline reveal
        </div>
        <div data-motion-target className="motion-preview__surface">
          Supporting content
        </div>
        <div data-motion-target className="motion-preview__surface">
          Action group
        </div>
      </div>
    );
  }

  if (variant === 'card-hover') {
    return (
      <div ref={rootRef} className="motion-preview motion-preview--cards">
        {[1, 2, 3].map((item) => (
          <article
            key={item}
            data-motion-target
            className="motion-preview__card"
            onMouseEnter={(event) => handleCardHover(event, true)}
            onMouseLeave={(event) => handleCardHover(event, false)}
            onFocus={(event) => handleCardHover(event, true)}
            onBlur={(event) => handleCardHover(event, false)}
            tabIndex={0}
          >
            <p className="eyebrow">Card {item}</p>
            <h3>Hover motion</h3>
            <p>Subtle lift and shadow changes can reinforce interactivity without becoming distracting.</p>
          </article>
        ))}
      </div>
    );
  }

  if (variant === 'button-microinteraction') {
    return (
      <div ref={rootRef} className="motion-preview motion-preview--button">
        <button
          type="button"
          className="motion-preview__button"
          onMouseDown={(event) => handleButtonInteraction(event, true)}
          onMouseUp={(event) => handleButtonInteraction(event, false)}
          onMouseLeave={(event) => handleButtonInteraction(event, false)}
          onTouchStart={(event) => handleButtonInteraction(event, true)}
          onTouchEnd={(event) => handleButtonInteraction(event, false)}
        >
          Trigger microinteraction
        </button>
      </div>
    );
  }

  return (
    <div ref={rootRef} className="motion-preview motion-preview--section">
      <div data-motion-target className="motion-preview__section-block motion-preview__section-block--hero">
        Hero region
      </div>
      <div data-motion-target className="motion-preview__section-block">
        Intro content
      </div>
      <div data-motion-target className="motion-preview__section-block">
        Supporting module
      </div>
    </div>
  );
}
