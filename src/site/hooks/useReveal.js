import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/index.js';
import { useReducedMotion } from './useReducedMotion';

export function useReveal(selector = '[data-reveal]', options = {}) {
  const rootRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = rootRef.current;

    if (!element) {
      return undefined;
    }

    if (reducedMotion) {
      element.querySelectorAll(selector).forEach((node) => {
        node.style.opacity = '1';
        node.style.transform = 'none';
      });
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        selector,
        { opacity: 0, y: options.y ?? 24 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.8,
          stagger: options.stagger ?? 0.08,
          ease: options.ease ?? 'power3.out',
          clearProps: 'transform'
        }
      );
    }, element);

    return () => context.revert();
  }, [options.duration, options.ease, options.stagger, options.y, reducedMotion, selector]);

  return rootRef;
}
