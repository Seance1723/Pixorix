import { initPixorix } from '../../src/js/pixorix.js';

const app = initPixorix(document);
const themeController = app.getThemeController();

document.querySelectorAll('[data-example-theme-toggle]').forEach((button) => {
  function syncLabel() {
    const resolvedTheme = themeController?.getResolvedTheme?.() ?? 'light';
    button.textContent = resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  button.addEventListener('click', () => {
    const resolvedTheme = themeController?.getResolvedTheme?.() ?? 'light';
    themeController?.setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    syncLabel();
  });

  syncLabel();
});
