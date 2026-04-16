import {
  animate,
  clearStyles,
  getGsap,
  getMotionConfig,
  isMotionAllowed,
  parseDuration,
  setStyles,
  setVisible,
  timeline,
  toArray
} from './gsap-core.js';

function getBaseOptions(options = {}) {
  const config = getMotionConfig(options.root);

  return {
    duration: parseDuration(options.duration ?? config.durationModerate, 0.24),
    ease: options.ease ?? config.easingEntrance
  };
}

export function fadeIn(targets, options = {}) {
  const base = getBaseOptions(options);

  return animate(
    targets,
    { opacity: 0 },
    { opacity: 1, duration: base.duration, ease: base.ease, delay: options.delay ?? 0 },
    setVisible
  );
}

export function slideUp(targets, options = {}) {
  const base = getBaseOptions(options);
  const distance = options.distance ?? 20;

  return animate(
    targets,
    { opacity: 0, y: distance },
    { opacity: 1, y: 0, duration: base.duration, ease: base.ease, delay: options.delay ?? 0 },
    setVisible
  );
}

export function slideDown(targets, options = {}) {
  const base = getBaseOptions(options);
  const distance = options.distance ?? 20;

  return animate(
    targets,
    { opacity: 0, y: -distance },
    { opacity: 1, y: 0, duration: base.duration, ease: base.ease, delay: options.delay ?? 0 },
    setVisible
  );
}

export function slideLeft(targets, options = {}) {
  const base = getBaseOptions(options);
  const distance = options.distance ?? 24;

  return animate(
    targets,
    { opacity: 0, x: distance },
    { opacity: 1, x: 0, duration: base.duration, ease: base.ease, delay: options.delay ?? 0 },
    setVisible
  );
}

export function slideRight(targets, options = {}) {
  const base = getBaseOptions(options);
  const distance = options.distance ?? 24;

  return animate(
    targets,
    { opacity: 0, x: -distance },
    { opacity: 1, x: 0, duration: base.duration, ease: base.ease, delay: options.delay ?? 0 },
    setVisible
  );
}

export function scaleIn(targets, options = {}) {
  const base = getBaseOptions(options);
  const scale = options.scale ?? 0.96;

  return animate(
    targets,
    { opacity: 0, scale },
    { opacity: 1, scale: 1, duration: base.duration, ease: base.ease, delay: options.delay ?? 0 },
    setVisible
  );
}

export function staggerIn(targets, options = {}) {
  const items = toArray(targets);
  const base = getBaseOptions(options);

  return animate(
    items,
    { opacity: 0, y: options.distance ?? 16 },
    {
      opacity: 1,
      y: 0,
      duration: base.duration,
      ease: base.ease,
      stagger: options.stagger ?? 0.06,
      delay: options.delay ?? 0
    },
    setVisible
  );
}

export function hoverLift(element, options = {}) {
  const gsap = getGsap();

  if (!element) {
    return null;
  }

  if (!gsap || !isMotionAllowed()) {
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'translateY(-2px)';
    });
    element.addEventListener('mouseleave', () => {
      element.style.transform = '';
    });
    return null;
  }

  const amount = options.y ?? -4;

  element.addEventListener('mouseenter', () => {
    gsap.to(element, { y: amount, duration: 0.18, ease: 'power2.out' });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, { y: 0, duration: 0.18, ease: 'power2.out' });
  });

  return element;
}

export function magneticButton(element, options = {}) {
  const gsap = getGsap();

  if (!element || !gsap || !isMotionAllowed()) {
    return null;
  }

  const strength = options.strength ?? 0.18;

  function onMove(event) {
    const bounds = element.getBoundingClientRect();
    const x = event.clientX - (bounds.left + bounds.width / 2);
    const y = event.clientY - (bounds.top + bounds.height / 2);

    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.18,
      ease: 'power2.out'
    });
  }

  function onLeave() {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.22,
      ease: 'power3.out'
    });
  }

  element.addEventListener('pointermove', onMove);
  element.addEventListener('pointerleave', onLeave);

  return {
    destroy() {
      element.removeEventListener('pointermove', onMove);
      element.removeEventListener('pointerleave', onLeave);
    }
  };
}

export function floatingEffect(element, options = {}) {
  const gsap = getGsap();

  if (!element || !gsap || !isMotionAllowed()) {
    return null;
  }

  return gsap.to(element, {
    y: options.y ?? -8,
    duration: options.duration ?? 2.4,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  });
}

export function counterAnimation(element, options = {}) {
  const gsap = getGsap();

  if (!element) {
    return null;
  }

  const end = Number.parseFloat(options.end ?? element.dataset.pxCountTo ?? '0');
  const start = Number.parseFloat(options.start ?? element.dataset.pxCountFrom ?? '0');
  const decimals = Number.parseInt(options.decimals ?? element.dataset.pxCountDecimals ?? '0', 10);
  const state = { value: start };

  function render() {
    element.textContent = state.value.toFixed(decimals);
  }

  if (!gsap || !isMotionAllowed()) {
    state.value = end;
    render();
    return null;
  }

  render();

  return gsap.to(state, {
    value: end,
    duration: options.duration ?? 1.1,
    ease: options.ease ?? 'power2.out',
    onUpdate: render
  });
}

export function progressAnimation(element, options = {}) {
  const gsap = getGsap();

  if (!element) {
    return null;
  }

  const value = options.value ?? element.dataset.pxProgress ?? '100%';

  if (!gsap || !isMotionAllowed()) {
    element.style.width = `${value}`;
    return null;
  }

  return gsap.fromTo(
    element,
    { width: 0 },
    { width: value, duration: options.duration ?? 0.6, ease: options.ease ?? 'power2.out' }
  );
}

export function accordionExpand(panel, expanded, options = {}) {
  const gsap = getGsap();

  if (!panel) {
    return null;
  }

  if (!gsap || !isMotionAllowed()) {
    panel.hidden = !expanded;
    panel.style.height = '';
    return null;
  }

  if (expanded) {
    panel.hidden = false;
    const height = panel.scrollHeight;

    return gsap.fromTo(
      panel,
      { height: 0, opacity: 0 },
      {
        height,
        opacity: 1,
        duration: options.duration ?? 0.24,
        ease: options.ease ?? 'power2.out',
        onComplete: () => {
          panel.style.height = 'auto';
        }
      }
    );
  }

  return gsap.to(panel, {
    height: 0,
    opacity: 0,
    duration: options.duration ?? 0.2,
    ease: options.ease ?? 'power2.in',
    onComplete: () => {
      panel.hidden = true;
      clearStyles(panel, ['height', 'opacity']);
    }
  });
}

export function modalTransition(element, state = 'open', options = {}) {
  const dialog = element?.querySelector('.px-modal__dialog') ?? element;
  const overlay = element;
  const tl = timeline({}, () => {
    setVisible([overlay, dialog]);
  });

  if (!tl) {
    return null;
  }

  if (state === 'open') {
    tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.18, ease: 'power2.out' });
    tl.fromTo(dialog, { y: 20, opacity: 0, scale: 0.98 }, { y: 0, opacity: 1, scale: 1, duration: 0.24, ease: 'power3.out' }, 0);
  } else {
    tl.to(dialog, { y: 12, opacity: 0, scale: 0.98, duration: options.duration ?? 0.16, ease: 'power2.in' });
    tl.to(overlay, { opacity: 0, duration: 0.14, ease: 'power2.out' }, 0);
  }

  return tl;
}

export function drawerTransition(element, state = 'open', options = {}) {
  const panel = element?.querySelector('.px-drawer__panel, .px-offcanvas__panel') ?? element;
  const overlay = element;
  const tl = timeline({}, () => {
    setVisible([overlay, panel]);
  });

  if (!tl) {
    return null;
  }

  const axis = options.axis ?? 'x';
  const offset = axis === 'y' ? { y: 28 } : { x: 28 };

  if (state === 'open') {
    tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.18, ease: 'power2.out' });
    tl.fromTo(panel, { opacity: 0, ...offset }, { opacity: 1, x: 0, y: 0, duration: 0.24, ease: 'power3.out' }, 0);
  } else {
    tl.to(panel, { opacity: 0, ...offset, duration: 0.16, ease: 'power2.in' });
    tl.to(overlay, { opacity: 0, duration: 0.14, ease: 'power2.out' }, 0);
  }

  return tl;
}

export function toastTransition(element, state = 'enter', options = {}) {
  if (state === 'enter') {
    return slideRight(element, { distance: 18, duration: options.duration ?? 0.2 });
  }

  return animate(
    element,
    {},
    { opacity: 0, x: 18, duration: options.duration ?? 0.16, ease: options.ease ?? 'power2.in' },
    () => setStyles(element, { opacity: 0 })
  );
}

export function tabsTransition(outgoingPanel, incomingPanel, options = {}) {
  const tl = timeline({}, () => {
    outgoingPanel && (outgoingPanel.hidden = true);
    incomingPanel && (incomingPanel.hidden = false);
    setVisible(incomingPanel);
  });

  if (!incomingPanel || !tl) {
    return null;
  }

  outgoingPanel && tl.to(outgoingPanel, { opacity: 0, y: -8, duration: 0.12, ease: 'power2.in' });
  tl.fromTo(incomingPanel, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: options.duration ?? 0.18, ease: 'power2.out' });

  return tl;
}

export function pageTransitionHelper(container, state = 'enter', options = {}) {
  if (state === 'enter') {
    return slideUp(container, { distance: 14, duration: options.duration ?? 0.22 });
  }

  return animate(
    container,
    {},
    { opacity: 0, y: -10, duration: options.duration ?? 0.16, ease: options.ease ?? 'power2.in' },
    () => setStyles(container, { opacity: 0 })
  );
}

export const motionPresets = {
  'fade-in': fadeIn,
  'slide-up': slideUp,
  'slide-down': slideDown,
  'slide-left': slideLeft,
  'slide-right': slideRight,
  'scale-in': scaleIn,
  'stagger-in': staggerIn
};
