import { isMotionAllowed, markMotionReady, setVisible } from './gsap-core.js';
import { motionPresets, staggerIn } from './presets.js';

function revealElement(element) {
  const presetName = element.dataset.pxMotion || 'fade-in';
  const preset = motionPresets[presetName] || motionPresets['fade-in'];
  const delay = Number.parseFloat(element.dataset.pxMotionDelay ?? '0');
  const distance = Number.parseFloat(element.dataset.pxMotionDistance ?? '20');
  const childrenSelector = element.dataset.pxStagger;

  if (!isMotionAllowed()) {
    setVisible(element);
    if (childrenSelector) {
      setVisible(element.querySelectorAll(childrenSelector));
    }
    return;
  }

  if (childrenSelector) {
    staggerIn(element.querySelectorAll(childrenSelector), {
      delay,
      distance,
      stagger: Number.parseFloat(element.dataset.pxMotionStagger ?? '0.06')
    });
    setVisible(element);
    return;
  }

  preset(element, { delay, distance });
}

export function initReveal(root = document) {
  const elements = [...root.querySelectorAll('[data-px-motion]')];

  if (!elements.length) {
    return null;
  }

  markMotionReady(root.ownerDocument ?? document);

  if (!('IntersectionObserver' in window) || !isMotionAllowed()) {
    elements.forEach(revealElement);
    return null;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        revealElement(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  elements.forEach((element) => observer.observe(element));

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

export function initScrollReveal(root = document) {
  return initReveal(root);
}
