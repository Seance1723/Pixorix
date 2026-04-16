let uidCounter = 0;

export function isElement(value) {
  return value instanceof Element;
}

export function toElement(root = document) {
  if (root instanceof Document) {
    return root.documentElement;
  }

  return root ?? document.documentElement;
}

export function qs(selector, root = document) {
  return root?.querySelector?.(selector) ?? null;
}

export function qsa(selector, root = document) {
  return [...(root?.querySelectorAll?.(selector) ?? [])];
}

export function matches(element, selector) {
  return Boolean(element?.matches?.(selector));
}

export function closest(element, selector) {
  return element?.closest?.(selector) ?? null;
}

export function contains(root, node) {
  return Boolean(root?.contains?.(node));
}

export function ensureId(element, prefix = 'px') {
  if (!element) {
    return '';
  }

  if (!element.id) {
    uidCounter += 1;
    element.id = `${prefix}-${uidCounter}`;
  }

  return element.id;
}

export function readData(element, key, fallback = null) {
  if (!element?.dataset) {
    return fallback;
  }

  return element.dataset[key] ?? fallback;
}

export function writeData(element, key, value) {
  if (!element?.dataset) {
    return;
  }

  if (value == null) {
    delete element.dataset[key];
    return;
  }

  element.dataset[key] = `${value}`;
}

export function parseJSONData(element, key, fallback = {}) {
  const value = readData(element, key);

  if (!value) {
    return fallback;
  }

  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

export function parseBoolean(value, fallback = false) {
  if (value === 'true' || value === true) {
    return true;
  }

  if (value === 'false' || value === false) {
    return false;
  }

  return fallback;
}

export function parseNumber(value, fallback = 0) {
  const parsed = Number.parseFloat(value);
  return Number.isNaN(parsed) ? fallback : parsed;
}

export function nextFrame(callback) {
  return window.requestAnimationFrame(() => {
    window.requestAnimationFrame(callback);
  });
}
