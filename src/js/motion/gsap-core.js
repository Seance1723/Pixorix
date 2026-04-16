const DEFAULT_ROOT = typeof document !== 'undefined' ? document.documentElement : null;

export function getGsap() {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.gsap ?? null;
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isMotionAllowed() {
  return !prefersReducedMotion();
}

export function getMotionToken(name, fallback, root = DEFAULT_ROOT) {
  if (!root || typeof window === 'undefined') {
    return fallback;
  }

  const value = window.getComputedStyle(root).getPropertyValue(name)?.trim();

  return value || fallback;
}

export function getMotionConfig(root = DEFAULT_ROOT) {
  return {
    durationFast: getMotionToken('--px-motion-duration-fast', '0.12s', root),
    durationNormal: getMotionToken('--px-motion-duration-normal', '0.18s', root),
    durationModerate: getMotionToken('--px-motion-duration-moderate', '0.24s', root),
    durationSlow: getMotionToken('--px-motion-duration-slow', '0.32s', root),
    easingStandard: getMotionToken('--px-motion-easing-standard', 'power2.out', root),
    easingEntrance: getMotionToken('--px-motion-easing-entrance', 'power3.out', root),
    easingExit: getMotionToken('--px-motion-easing-exit', 'power2.in', root),
    easingEmphasize: getMotionToken('--px-motion-easing-emphasize', 'back.out(1.4)', root)
  };
}

export function toArray(targets) {
  if (!targets) {
    return [];
  }

  if (Array.isArray(targets)) {
    return targets.filter(Boolean);
  }

  if (targets instanceof Element) {
    return [targets];
  }

  return [...targets].filter(Boolean);
}

export function setStyles(targets, styles) {
  toArray(targets).forEach((target) => {
    Object.entries(styles).forEach(([key, value]) => {
      target.style[key] = `${value}`;
    });
  });
}

export function clearStyles(targets, properties = []) {
  toArray(targets).forEach((target) => {
    properties.forEach((property) => {
      target.style.removeProperty(property);
    });
  });
}

export function setVisible(targets) {
  setStyles(targets, {
    opacity: 1,
    transform: 'none'
  });
}

export function animate(targets, fromVars = {}, toVars = {}, fallback = setVisible) {
  const gsap = getGsap();

  if (!targets) {
    return null;
  }

  if (!gsap || !isMotionAllowed()) {
    fallback(targets);
    return null;
  }

  return gsap.fromTo(targets, fromVars, toVars);
}

export function timeline(options = {}, onFallback = null) {
  const gsap = getGsap();

  if (!gsap || !isMotionAllowed()) {
    onFallback?.();
    return null;
  }

  return gsap.timeline(options);
}

export function parseDuration(value, fallback = 0.18) {
  if (typeof value === 'number') {
    return value;
  }

  if (!value) {
    return fallback;
  }

  if (String(value).endsWith('ms')) {
    return Number.parseFloat(value) / 1000;
  }

  return Number.parseFloat(value);
}

export function markMotionReady(root = document) {
  root?.documentElement?.setAttribute('data-px-motion-ready', 'true');
}
