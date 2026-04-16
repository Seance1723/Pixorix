import { ensureId } from './dom.js';
import { createFocusTrap, getFocusableElements } from './focus-trap.js';

export { createFocusTrap, getFocusableElements };

export function focusFirst(container) {
  const first = getFocusableElements(container)[0];
  first?.focus();
  return first ?? null;
}

export function focusLast(container) {
  const focusable = getFocusableElements(container);
  const last = focusable[focusable.length - 1];
  last?.focus();
  return last ?? null;
}

export function connectTriggerAndPanel(trigger, panel, prefix = 'px-panel') {
  if (!trigger || !panel) {
    return null;
  }

  const triggerId = ensureId(trigger, `${prefix}-trigger`);
  const panelId = ensureId(panel, `${prefix}-panel`);

  trigger.setAttribute('aria-controls', panelId);
  panel.setAttribute('aria-labelledby', triggerId);

  return { triggerId, panelId };
}

export function announce(message, politeness = 'polite') {
  if (!message || typeof document === 'undefined') {
    return null;
  }

  let region = document.querySelector(`[data-px-live-region="${politeness}"]`);

  if (!region) {
    region = document.createElement('div');
    region.className = 'px-sr-only';
    region.dataset.pxLiveRegion = politeness;
    region.setAttribute('aria-live', politeness);
    region.setAttribute('aria-atomic', 'true');
    document.body.append(region);
  }

  region.textContent = '';

  window.requestAnimationFrame(() => {
    region.textContent = message;
  });

  return region;
}

export function bindEscape(handler, target = document) {
  function onKeydown(event) {
    if (event.key === 'Escape') {
      handler(event);
    }
  }

  target.addEventListener('keydown', onKeydown);

  return () => {
    target.removeEventListener('keydown', onKeydown);
  };
}
