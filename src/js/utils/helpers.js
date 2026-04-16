export function noop() {}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function debounce(callback, wait = 150) {
  let timeoutId = 0;

  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), wait);
  };
}

export function throttle(callback, wait = 150) {
  let lastRun = 0;
  let timeoutId = 0;

  return (...args) => {
    const now = Date.now();
    const remaining = wait - (now - lastRun);

    if (remaining <= 0) {
      lastRun = now;
      callback(...args);
      return;
    }

    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      lastRun = Date.now();
      callback(...args);
    }, remaining);
  };
}

export function safeJSONParse(value, fallback = null) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

export function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
