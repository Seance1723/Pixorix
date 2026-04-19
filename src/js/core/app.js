import { createCommandPalette } from '../advanced-components/command-palette.js';
import { createLogoCarousel } from '../advanced-components/logo-carousel.js';
import { createRating } from '../advanced-components/rating.js';
import { createResizablePanels } from '../advanced-components/resizable-panels.js';
import { createSegmentedControl } from '../advanced-components/segmented-control.js';
import { createTestimonialSlider } from '../advanced-components/testimonial-slider.js';
import { createWizard } from '../advanced-components/wizard.js';
import { createAlert } from '../components/alert.js';
import { createButton } from '../components/button.js';
import { createDrawer } from '../components/drawer.js';
import { createModal } from '../components/modal.js';
import { initHoverEffects } from '../motion/hover-effects.js';
import { initPageTransition } from '../motion/page-transition.js';
import { initReveal } from '../motion/reveal.js';
import { createEventBus, delegate, emit } from './events.js';
import { qsa } from './dom.js';
import { createComponentRegistry } from './registry.js';
import { initTheme } from './theme.js';

function getScopedRoot(root) {
  if (root instanceof Document) {
    return root;
  }

  return root ?? document;
}

function createDefaultRegistry() {
  const registry = createComponentRegistry();

  registry
    .register('alert', {
      selector: '[data-px-alert], .px-alert[data-px-component="alert"], .px-banner[data-px-component="alert"], .px-form-notice[data-px-component="alert"], .px-page-notice[data-px-component="alert"]',
      init: createAlert
    })
    .register('button', {
      selector: '[data-px-button-split]',
      init: createButton
    })
    .register('modal', {
      selector: '[data-px-modal], .px-modal[data-px-component="modal"]',
      init: createModal
    })
    .register('drawer', {
      selector: '[data-px-drawer], .px-drawer[data-px-component="drawer"]',
      init: createDrawer
    })
    .register('command-palette', {
      selector: '[data-px-command-palette]',
      init: createCommandPalette
    })
    .register('wizard', {
      selector: '[data-px-wizard]',
      init: createWizard
    })
    .register('testimonial-slider', {
      selector: '[data-px-testimonial-slider]',
      init: createTestimonialSlider
    })
    .register('logo-carousel', {
      selector: '[data-px-logo-carousel]',
      init: createLogoCarousel
    })
    .register('segmented-control', {
      selector: '[data-px-segmented-control]',
      init: createSegmentedControl
    })
    .register('rating', {
      selector: '[data-px-rating]',
      init: createRating
    })
    .register('resizable-panels', {
      selector: '[data-px-resizable-panels]',
      init: createResizablePanels
    });

  return registry;
}

export function createPixorixApp(options = {}) {
  const registry = options.registry ?? createDefaultRegistry();
  const eventBus = createEventBus();
  const componentInstances = new WeakMap();
  const teardownCallbacks = new Set();
  const rootDocument = getScopedRoot(options.root);
  let themeController = null;
  let motionControllers = {};
  let globalDelegatesBound = false;

  function mountDefinition(definition, scope = rootDocument) {
    qsa(definition.selector, scope).forEach((element) => {
      if (componentInstances.has(element)) {
        return;
      }

      const api = definition.init(element, {
        app,
        eventBus
      });

      componentInstances.set(element, {
        name: definition.name,
        element,
        api: api ?? null
      });

      emit(element, 'px:init', {
        component: definition.name,
        element
      });
    });
  }

  function init(scope = rootDocument) {
    themeController ??= initTheme({ root: scope instanceof Document ? scope : scope.ownerDocument ?? document });

    registry.getAll().forEach((definition) => mountDefinition(definition, scope));

    motionControllers = {
      reveal: initReveal(scope),
      hover: initHoverEffects(scope),
      page: initPageTransition(scope)
    };

    if (!globalDelegatesBound) {
      teardownCallbacks.add(
        delegate(document, 'click', '[data-px-toggle-theme]', (event, trigger) => {
          event.preventDefault();
          const nextTheme = trigger.dataset.pxToggleTheme || 'dark';
          themeController?.setTheme(nextTheme);
        })
      );

      globalDelegatesBound = true;
    }

    emit(scope instanceof Document ? scope.documentElement : scope, 'px:ready', {
      app
    });

    return app;
  }

  function reinit(scope = rootDocument) {
    destroy(scope);
    return init(scope);
  }

  function destroy(scope = null) {
    const scopeElement = scope && !(scope instanceof Document) ? scope : null;

    registry.getAll().forEach((definition) => {
      qsa(definition.selector, scopeElement ?? rootDocument).forEach((element) => {
        const instance = componentInstances.get(element);

        if (!instance) {
          return;
        }

        instance.api?.destroy?.();
        componentInstances.delete(element);
        emit(element, 'px:destroy', {
          component: instance.name,
          element
        });
      });
    });

    if (!scopeElement) {
      teardownCallbacks.forEach((teardown) => teardown());
      teardownCallbacks.clear();
      globalDelegatesBound = false;
      themeController?.destroy?.();
      themeController = null;
      motionControllers.reveal?.destroy?.();
      motionControllers.hover?.destroy?.();
      motionControllers.page?.destroy?.();
      motionControllers = {};
    }
  }

  function register(name, definition) {
    registry.register(name, definition);
    return app;
  }

  const app = {
    init,
    reinit,
    destroy,
    register,
    registry,
    eventBus,
    getThemeController() {
      return themeController;
    }
  };

  return app;
}

export function registerPixorixComponent(name, definition) {
  defaultApp.register(name, definition);
  return defaultApp;
}

const defaultApp = createPixorixApp();

export function initPixorix(root = document) {
  return defaultApp.init(root);
}
