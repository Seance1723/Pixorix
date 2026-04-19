import { contains, ensureId, qs, qsa } from '../core/dom.js';

function isManagedNavigationElement(element) {
  return (
    element?.matches?.(
      [
        '[data-px-nav-collapse]',
        '[data-px-tabs]',
        '[data-px-tab-pills]',
        '[data-px-dropdown]',
        '[data-px-mega-menu]',
        '[data-px-context-menu]',
        '[data-px-sidebar-nav]'
      ].join(', ')
    ) ?? false
  );
}

function createCollapseNav(root) {
  const toggle = qs('[data-px-nav-toggle]', root);
  const panel = qs('[data-px-nav-panel]', root);

  if (!toggle || !panel) {
    return { destroy() {} };
  }

  ensureId(panel, 'px-nav-panel');
  toggle.setAttribute('aria-controls', panel.id);

  function setExpanded(expanded) {
    toggle.setAttribute('aria-expanded', String(expanded));
    panel.hidden = !expanded;
    root.dataset.state = expanded ? 'expanded' : 'collapsed';
  }

  function onClick() {
    setExpanded(toggle.getAttribute('aria-expanded') !== 'true');
  }

  toggle.addEventListener('click', onClick);
  setExpanded(toggle.getAttribute('aria-expanded') === 'true');

  return {
    open() {
      setExpanded(true);
    },
    close() {
      setExpanded(false);
    },
    destroy() {
      toggle.removeEventListener('click', onClick);
    }
  };
}

function createTabs(root) {
  const tabs = qsa('[role="tab"]', root);
  const panels = qsa('[role="tabpanel"], .px-tabs__panel, .px-tab-pills__panel', root);

  if (!tabs.length) {
    return { destroy() {} };
  }

  tabs.forEach((tab, index) => {
    const controls = tab.getAttribute('aria-controls');
    const panel = controls ? qs(`#${controls}`, root) ?? qs(`#${controls}`) : panels[index];

    if (panel) {
      ensureId(panel, 'px-tab-panel');
      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('role', 'tabpanel');
    }

    tab.setAttribute('tabindex', tab.getAttribute('aria-selected') === 'true' ? '0' : '-1');
  });

  function setActive(nextTab) {
    tabs.forEach((tab, index) => {
      const selected = tab === nextTab;
      tab.setAttribute('aria-selected', String(selected));
      tab.setAttribute('tabindex', selected ? '0' : '-1');
      tab.classList.toggle('is-active', selected);

      const controls = tab.getAttribute('aria-controls');
      const panel = controls ? qs(`#${controls}`, root) ?? qs(`#${controls}`) : panels[index];

      if (panel) {
        panel.hidden = !selected;
      }
    });

    nextTab.focus();
    root.dispatchEvent(
      new CustomEvent('px:navigation:tab-change', {
        bubbles: true,
        detail: {
          element: root,
          tab: nextTab
        }
      })
    );
  }

  function moveTab(currentTab, direction) {
    const index = tabs.indexOf(currentTab);
    const nextIndex = (index + direction + tabs.length) % tabs.length;
    setActive(tabs[nextIndex]);
  }

  function onClick(event) {
    const tab = event.target.closest('[role="tab"]');

    if (!tab) {
      return;
    }

    event.preventDefault();
    setActive(tab);
  }

  function onKeyDown(event) {
    const tab = event.target.closest('[role="tab"]');

    if (!tab) {
      return;
    }

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        moveTab(tab, 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        moveTab(tab, -1);
        break;
      case 'Home':
        event.preventDefault();
        setActive(tabs[0]);
        break;
      case 'End':
        event.preventDefault();
        setActive(tabs[tabs.length - 1]);
        break;
      default:
        break;
    }
  }

  root.addEventListener('click', onClick);
  root.addEventListener('keydown', onKeyDown);
  setActive(tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') ?? tabs[0]);

  return {
    destroy() {
      root.removeEventListener('click', onClick);
      root.removeEventListener('keydown', onKeyDown);
    }
  };
}

function getMenuElements(root) {
  const trigger = qs('[data-px-menu-trigger]', root);
  const panel = qs('[data-px-menu-panel]', root);
  const items = () => qsa('[role="menuitem"], .px-dropdown__link, .px-menu__link, .px-mega-menu__link, .px-context-menu__link', panel);

  return { trigger, panel, items };
}

function createMenu(root, options = {}) {
  const { trigger, panel, items } = getMenuElements(root);

  if (!trigger || !panel) {
    return { destroy() {} };
  }

  ensureId(panel, 'px-menu-panel');
  trigger.setAttribute('aria-controls', panel.id);
  trigger.setAttribute('aria-haspopup', options.menuRole ? 'menu' : 'dialog');

  function setOpen(open) {
    trigger.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    root.dataset.state = open ? 'expanded' : 'collapsed';
  }

  function focusItem(index = 0) {
    const menuItems = items();
    menuItems.forEach((item, itemIndex) => item.setAttribute('tabindex', itemIndex === index ? '0' : '-1'));
    menuItems[index]?.focus();
  }

  function openMenu() {
    setOpen(true);
    if (options.menuRole) {
      focusItem(0);
    }
  }

  function closeMenu() {
    setOpen(false);
    trigger.focus();
  }

  function onTriggerClick(event) {
    event.preventDefault();
    if (trigger.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function onDocumentClick(event) {
    if (!contains(root, event.target)) {
      setOpen(false);
    }
  }

  function onKeyDown(event) {
    const menuItems = items();
    const currentIndex = menuItems.indexOf(event.target.closest('[role="menuitem"], .px-dropdown__link, .px-menu__link, .px-mega-menu__link, .px-context-menu__link'));

    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.target === trigger && ['ArrowDown', 'Enter', ' '].includes(event.key)) {
      event.preventDefault();
      openMenu();
      return;
    }

    if (!options.menuRole || currentIndex === -1) {
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusItem((currentIndex + 1) % menuItems.length);
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusItem((currentIndex - 1 + menuItems.length) % menuItems.length);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      focusItem(0);
    }

    if (event.key === 'End') {
      event.preventDefault();
      focusItem(menuItems.length - 1);
    }
  }

  trigger.addEventListener('click', onTriggerClick);
  root.addEventListener('keydown', onKeyDown);
  document.addEventListener('click', onDocumentClick);
  setOpen(trigger.getAttribute('aria-expanded') === 'true');

  return {
    open: openMenu,
    close: closeMenu,
    destroy() {
      trigger.removeEventListener('click', onTriggerClick);
      root.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onDocumentClick);
    }
  };
}

function createContextMenu(root) {
  const panel = qs('[data-px-menu-panel]', root);

  if (!panel) {
    return { destroy() {} };
  }

  const menuController = createMenu(root, { menuRole: true });

  function onContextMenu(event) {
    event.preventDefault();
    panel.style.left = `${event.clientX}px`;
    panel.style.top = `${event.clientY}px`;
    menuController.open();
  }

  root.addEventListener('contextmenu', onContextMenu);

  return {
    destroy() {
      root.removeEventListener('contextmenu', onContextMenu);
      menuController.destroy();
    }
  };
}

export function createNavigation(element) {
  if (!isManagedNavigationElement(element)) {
    return {
      destroy() {}
    };
  }

  const controllers = [];

  if (element.matches('[data-px-nav-collapse], [data-px-sidebar-nav]')) {
    controllers.push(createCollapseNav(element));
  }

  if (element.matches('[data-px-tabs], [data-px-tab-pills]')) {
    controllers.push(createTabs(element));
  }

  if (element.matches('[data-px-dropdown], [data-px-mega-menu]')) {
    controllers.push(createMenu(element, { menuRole: true }));
  }

  if (element.matches('[data-px-context-menu]')) {
    controllers.push(createContextMenu(element));
  }

  return {
    destroy() {
      controllers.forEach((controller) => controller?.destroy?.());
    }
  };
}
