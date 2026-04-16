import { closest } from './dom.js';

export function on(target, type, handler, options) {
  target?.addEventListener?.(type, handler, options);

  return () => {
    target?.removeEventListener?.(type, handler, options);
  };
}

export function once(target, type, handler, options) {
  return on(target, type, handler, { ...options, once: true });
}

export function delegate(root, type, selector, handler, options) {
  function delegatedHandler(event) {
    const match = closest(event.target, selector);

    if (!match || !root.contains(match)) {
      return;
    }

    handler(event, match);
  }

  return on(root, type, delegatedHandler, options);
}

export function emit(target, type, detail = {}, options = {}) {
  if (!target?.dispatchEvent) {
    return false;
  }

  return target.dispatchEvent(
    new CustomEvent(type, {
      bubbles: options.bubbles ?? true,
      cancelable: options.cancelable ?? true,
      detail
    })
  );
}

export function createEventBus() {
  const target = document.createDocumentFragment();

  return {
    on(type, handler, options) {
      return on(target, type, handler, options);
    },
    emit(type, detail, options) {
      return emit(target, type, detail, options);
    }
  };
}
