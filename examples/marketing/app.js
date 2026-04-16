import { initPixorix } from '../../src/js/pixorix.js';
import { accordionExpand } from '../../src/js/motion/presets.js';

const app = initPixorix(document);
const themeController = app.getThemeController();

function bindThemeToggles() {
  const toggles = [...document.querySelectorAll('[data-example-theme-toggle]')];

  function syncLabels() {
    const resolvedTheme = themeController?.getResolvedTheme?.() ?? 'light';
    const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';

    toggles.forEach((toggle) => {
      toggle.textContent = nextTheme === 'dark' ? 'Switch to dark mode' : 'Switch to light mode';
    });
  }

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const resolvedTheme = themeController?.getResolvedTheme?.() ?? 'light';
      const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';

      themeController?.setTheme(nextTheme);
      syncLabels();
    });
  });

  syncLabels();
}

function bindCodeCopy() {
  document.querySelectorAll('[data-copy-target]').forEach((button) => {
    button.addEventListener('click', async () => {
      const targetId = button.getAttribute('data-copy-target');
      const target = targetId ? document.getElementById(targetId) : null;

      if (!target) {
        return;
      }

      try {
        await navigator.clipboard.writeText(target.textContent ?? '');
        const previousLabel = button.textContent;
        button.textContent = 'Copied';

        window.setTimeout(() => {
          button.textContent = previousLabel;
        }, 1200);
      } catch {
        button.textContent = 'Copy unavailable';
      }
    });
  });
}

function bindAccordions() {
  document.querySelectorAll('[data-example-accordion]').forEach((accordion) => {
    const triggers = [...accordion.querySelectorAll('.px-accordion__trigger')];

    triggers.forEach((trigger) => {
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;

      if (!panel) {
        return;
      }

      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        triggers.forEach((itemTrigger) => {
          const itemPanelId = itemTrigger.getAttribute('aria-controls');
          const itemPanel = itemPanelId ? document.getElementById(itemPanelId) : null;
          const shouldExpand = itemTrigger === trigger ? !isExpanded : false;

          itemTrigger.setAttribute('aria-expanded', shouldExpand ? 'true' : 'false');

          if (itemPanel) {
            accordionExpand(itemPanel, shouldExpand);
          }
        });
      });
    });
  });
}

bindThemeToggles();
bindCodeCopy();
bindAccordions();
