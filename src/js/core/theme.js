import { emit } from './events.js';

const STORAGE_KEY = 'pixorix-theme';
const CONTRAST_STORAGE_KEY = 'pixorix-contrast';
const BRAND_STORAGE_KEY = 'pixorix-brand';

function getRoot(root = document) {
  return root?.documentElement ?? document.documentElement;
}

function getStoredValue(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setStoredValue(key, value) {
  try {
    if (value == null) {
      window.localStorage.removeItem(key);
      return;
    }

    window.localStorage.setItem(key, value);
  } catch {
    // Ignore storage failures in private or restricted contexts.
  }
}

export function getSystemTheme() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function resolveTheme(theme) {
  if (!theme || theme === 'system') {
    return getSystemTheme();
  }

  return theme;
}

export function applyTheme(theme, options = {}) {
  const root = getRoot(options.root);
  const resolvedTheme = resolveTheme(theme);

  root.setAttribute('data-px-theme', resolvedTheme);
  root.style.colorScheme = resolvedTheme === 'dark' ? 'dark' : 'light';
  root.setAttribute('data-px-theme-source', theme || 'system');

  if (options.persist !== false) {
    setStoredValue(STORAGE_KEY, theme || 'system');
  }

  emit(root, 'px:themechange', {
    theme: theme || 'system',
    resolvedTheme
  });

  return resolvedTheme;
}

export function applyContrast(contrast = 'default', options = {}) {
  const root = getRoot(options.root);

  if (!contrast || contrast === 'default') {
    root.removeAttribute('data-px-contrast');
  } else {
    root.setAttribute('data-px-contrast', contrast);
  }

  if (options.persist !== false) {
    setStoredValue(CONTRAST_STORAGE_KEY, contrast || 'default');
  }

  emit(root, 'px:contrastchange', {
    contrast: contrast || 'default'
  });
}

export function applyBrand(brand = 'default', options = {}) {
  const root = getRoot(options.root);

  if (!brand || brand === 'default') {
    root.removeAttribute('data-px-brand');
  } else {
    root.setAttribute('data-px-brand', brand);
  }

  if (options.persist !== false) {
    setStoredValue(BRAND_STORAGE_KEY, brand || 'default');
  }

  emit(root, 'px:brandchange', {
    brand: brand || 'default'
  });
}

export function initTheme(options = {}) {
  const root = getRoot(options.root);
  const storedTheme = getStoredValue(STORAGE_KEY) ?? options.defaultTheme ?? 'system';
  const storedContrast = getStoredValue(CONTRAST_STORAGE_KEY) ?? options.defaultContrast ?? 'default';
  const storedBrand = getStoredValue(BRAND_STORAGE_KEY) ?? options.defaultBrand ?? 'default';
  const mediaQuery =
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-color-scheme: dark)')
      : null;

  function syncSystemTheme() {
    const source = root.getAttribute('data-px-theme-source');

    if (source === 'system') {
      applyTheme('system', { root, persist: false });
    }
  }

  applyTheme(storedTheme, { root, persist: false });
  applyContrast(storedContrast, { root, persist: false });
  applyBrand(storedBrand, { root, persist: false });

  mediaQuery?.addEventListener?.('change', syncSystemTheme);

  return {
    getTheme() {
      return root.getAttribute('data-px-theme-source') ?? 'system';
    },
    getResolvedTheme() {
      return root.getAttribute('data-px-theme') ?? 'light';
    },
    setTheme(theme) {
      return applyTheme(theme, { root });
    },
    setContrast(contrast) {
      applyContrast(contrast, { root });
    },
    setBrand(brand) {
      applyBrand(brand, { root });
    },
    destroy() {
      mediaQuery?.removeEventListener?.('change', syncSystemTheme);
    }
  };
}
