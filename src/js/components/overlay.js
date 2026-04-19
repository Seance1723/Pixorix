import { createBackdrop } from '../core/backdrop.js';
import { createFocusTrap } from '../core/focus-trap.js';
import { drawerTransition, modalTransition } from '../motion/presets.js';

const MODAL_LIKE_TYPES = new Set([
  'modal',
  'drawer',
  'offcanvas',
  'command-palette',
  'search-overlay',
  'lightbox',
  'notification-panel',
  'bottom-sheet',
  'action-sheet',
  'fullscreen-overlay'
]);

const TOOLTIP_TYPES = new Set(['tooltip']);
const EXTERNAL_OPEN_EVENTS = ['click'];
let openOverlayCount = 0;

function getDocument(element) {
  return element?.ownerDocument ?? document;
}

function resolveType(element, explicitType) {
  if (explicitType) {
    return explicitType;
  }

  if (!element) {
    return 'overlay';
  }

  const typeFromData = element.dataset.pxOverlay;

  if (typeFromData) {
    return typeFromData;
  }

  if (element.classList.contains('px-modal')) return 'modal';
  if (element.classList.contains('px-drawer')) return 'drawer';
  if (element.classList.contains('px-offcanvas')) return 'offcanvas';
  if (element.classList.contains('px-popover-shell') || element.classList.contains('px-popover')) return 'popover';
  if (element.classList.contains('px-tooltip-shell') || element.classList.contains('px-tooltip')) return 'tooltip';
  if (element.classList.contains('px-bottom-sheet')) return 'bottom-sheet';
  if (element.classList.contains('px-action-sheet')) return 'action-sheet';
  if (element.classList.contains('px-notification-panel-shell')) return 'notification-panel';
  if (element.classList.contains('px-search-overlay')) return 'search-overlay';
  if (element.classList.contains('px-lightbox')) return 'lightbox';
  if (element.classList.contains('px-fullscreen-overlay')) return 'fullscreen-overlay';

  return 'overlay';
}

function getPanel(element, type) {
  const selectors = {
    modal: '.px-modal__dialog',
    drawer: '.px-drawer__panel',
    offcanvas: '.px-offcanvas__panel',
    popover: '.px-popover',
    tooltip: '.px-tooltip',
    'command-palette': '.px-command-palette',
    'search-overlay': '.px-search-overlay__dialog',
    lightbox: '.px-lightbox__dialog',
    'notification-panel': '.px-notification-panel',
    'bottom-sheet': '.px-bottom-sheet__panel, .px-bottom-sheet',
    'action-sheet': '.px-action-sheet__panel, .px-action-sheet',
    'fullscreen-overlay': '.px-fullscreen-overlay__dialog'
  };

  return element?.querySelector(selectors[type] ?? '.px-overlay__panel') ?? element;
}

function isModalLike(type) {
  return MODAL_LIKE_TYPES.has(type);
}

function isTooltip(type) {
  return TOOLTIP_TYPES.has(type);
}

function isDismissible(element) {
  return element?.dataset.pxDismissible !== 'false';
}

function shouldTrapFocus(type, element) {
  return isModalLike(type) && element?.dataset.pxTrapFocus !== 'false';
}

function shouldLockScroll(type, element) {
  return isModalLike(type) && element?.dataset.pxLockScroll !== 'false';
}

function shouldAnimate(element) {
  return element?.dataset.pxOverlayMotion !== 'none' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getMotionPreset(type, element) {
  if (type === 'drawer' || type === 'offcanvas' || type === 'notification-panel') {
    return drawerTransition;
  }

  if (type === 'bottom-sheet' || type === 'action-sheet') {
    return (target, state) => drawerTransition(target, state, { axis: 'y' });
  }

  if (type === 'popover' || type === 'tooltip') {
    return null;
  }

  if (type === 'fullscreen-overlay' || element?.classList.contains('px-modal--fullscreen')) {
    return (target, state) => modalTransition(target, state, { duration: state === 'open' ? 0.2 : 0.14 });
  }

  return modalTransition;
}

function setTriggerState(triggers, expanded) {
  triggers.forEach((trigger) => {
    trigger.setAttribute('aria-expanded', `${expanded}`);
    trigger.dataset.state = expanded ? 'open' : 'closed';
  });
}

function lockScroll(doc) {
  openOverlayCount += 1;
  doc.body?.setAttribute('data-px-scroll', 'locked');
}

function unlockScroll(doc) {
  openOverlayCount = Math.max(0, openOverlayCount - 1);

  if (openOverlayCount === 0) {
    doc.body?.removeAttribute('data-px-scroll');
  }
}

export function createOverlay(element, options = {}) {
  const type = resolveType(element, options.type);
  const doc = getDocument(element);
  const panel = getPanel(element, type);
  const focusTrap = shouldTrapFocus(type, element) ? createFocusTrap(panel) : null;
  const closeButtons = element ? [...element.querySelectorAll('[data-px-close]')] : [];
  const internalTriggers = element ? [...element.querySelectorAll('[data-px-overlay-trigger]')] : [];
  const id = element?.id;
  const externalTriggers = id
    ? [
        ...doc.querySelectorAll(
          `[data-px-overlay-open="${id}"], [data-px-overlay-toggle="${id}"], [data-px-overlay-close="${id}"], [aria-controls="${id}"][data-px-overlay-trigger]`
        )
      ]
    : [];
  const triggers = [...new Set([...internalTriggers, ...externalTriggers])];
  const backdrop = createBackdrop(element, () => {
    if (isDismissible(element)) {
      close('backdrop');
    }
  });
  let isOpen = element?.dataset.state === 'open';
  let isDestroyed = false;
  let cleanupFns = [];
  let motionController = null;

  function runMotion(state) {
    motionController?.kill?.();

    if (!shouldAnimate(element)) {
      return;
    }

    const preset = getMotionPreset(type, element);
    motionController = preset?.(element, state) ?? null;
  }

  function syncState(open) {
    if (!element) {
      return;
    }

    element.dataset.state = open ? 'open' : 'closed';
    element.setAttribute('aria-hidden', `${!open}`);
    setTriggerState(triggers, open);

    if (!open && !isModalLike(type) && panel) {
      panel.hidden = true;
    }

    if (open && panel) {
      panel.hidden = false;
    }
  }

  function onEscape(event) {
    if (event.key === 'Escape' && isDismissible(element)) {
      event.preventDefault();
      close('escape');
    }
  }

  function onOutsidePointer(event) {
    if (!isOpen || !panel) {
      return;
    }

    if (panel.contains(event.target) || element.contains(event.target)) {
      return;
    }

    if (event.target.closest('[data-px-overlay-trigger]')) {
      return;
    }

    if (isDismissible(element)) {
      close('outside');
    }
  }

  function bindOpenListeners() {
    doc.addEventListener('keydown', onEscape);

    if (!isModalLike(type)) {
      doc.addEventListener('pointerdown', onOutsidePointer);
    }
  }

  function unbindOpenListeners() {
    doc.removeEventListener('keydown', onEscape);
    doc.removeEventListener('pointerdown', onOutsidePointer);
  }

  function open(reason = 'programmatic') {
    if (!element || isDestroyed || isOpen) {
      return;
    }

    isOpen = true;
    syncState(true);
    backdrop?.open();
    bindOpenListeners();

    if (shouldLockScroll(type, element)) {
      lockScroll(doc);
    }

    focusTrap?.activate();
    runMotion('open');

    element.dispatchEvent(
      new CustomEvent('px:overlay:open', {
        bubbles: true,
        detail: { id, type, reason, element }
      })
    );
  }

  function close(reason = 'programmatic') {
    if (!element || isDestroyed || !isOpen) {
      return;
    }

    isOpen = false;
    syncState(false);
    backdrop?.close();
    unbindOpenListeners();
    focusTrap?.deactivate();

    if (shouldLockScroll(type, element)) {
      unlockScroll(doc);
    }

    runMotion('close');

    element.dispatchEvent(
      new CustomEvent('px:overlay:close', {
        bubbles: true,
        detail: { id, type, reason, element }
      })
    );
  }

  function toggle(reason = 'programmatic') {
    if (isOpen) {
      close(reason);
      return;
    }

    open(reason);
  }

  function bindTrigger(trigger) {
    const action =
      trigger.dataset.pxOverlayClose === id
        ? 'close'
        : trigger.dataset.pxOverlayToggle === id || trigger.hasAttribute('data-px-overlay-toggle')
          ? 'toggle'
          : 'open';

    const onClick = (event) => {
      if (trigger.dataset.pxOverlayClose === id || trigger.dataset.pxOverlayOpen === id || trigger.dataset.pxOverlayToggle === id || trigger.hasAttribute('data-px-overlay-trigger')) {
        event.preventDefault();
      }

      if (action === 'close') close('trigger');
      if (action === 'toggle') toggle('trigger');
      if (action === 'open') open('trigger');
    };

    EXTERNAL_OPEN_EVENTS.forEach((eventName) => trigger.addEventListener(eventName, onClick));
    cleanupFns.push(() => EXTERNAL_OPEN_EVENTS.forEach((eventName) => trigger.removeEventListener(eventName, onClick)));
  }

  function bindTooltipTrigger(trigger) {
    const onEnter = () => open('hover');
    const onLeave = () => close('hover');
    const onFocus = () => open('focus');
    const onBlur = () => close('blur');

    trigger.addEventListener('mouseenter', onEnter);
    trigger.addEventListener('mouseleave', onLeave);
    trigger.addEventListener('focus', onFocus);
    trigger.addEventListener('blur', onBlur);

    cleanupFns.push(() => {
      trigger.removeEventListener('mouseenter', onEnter);
      trigger.removeEventListener('mouseleave', onLeave);
      trigger.removeEventListener('focus', onFocus);
      trigger.removeEventListener('blur', onBlur);
    });
  }

  closeButtons.forEach((button) => {
    const onClick = () => close('close-button');
    button.addEventListener('click', onClick);
    cleanupFns.push(() => button.removeEventListener('click', onClick));
  });

  triggers.forEach((trigger) => {
    if (isTooltip(type)) {
      bindTooltipTrigger(trigger);
      return;
    }

    bindTrigger(trigger);
  });

  syncState(isOpen);

  return {
    open,
    close,
    toggle,
    destroy() {
      if (isDestroyed) {
        return;
      }

      if (isOpen) {
        close('destroy');
      }

      cleanupFns.forEach((cleanup) => cleanup());
      cleanupFns = [];
      isDestroyed = true;
    }
  };
}

export function createModal(element, options = {}) {
  return createOverlay(element, { ...options, type: 'modal' });
}

export function createDrawer(element, options = {}) {
  return createOverlay(element, { ...options, type: 'drawer' });
}
