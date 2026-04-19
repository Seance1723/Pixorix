function isAlertElement(element) {
  return (
    element?.matches?.(
      '[data-px-alert], .px-alert[data-px-component="alert"], .px-banner[data-px-component="alert"], .px-form-notice[data-px-component="alert"], .px-page-notice[data-px-component="alert"]'
    ) ?? false
  );
}

function shouldAnimate(element) {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }

  if (element.dataset.pxMotion === 'none' || element.classList.contains('px-alert--static')) {
    return false;
  }

  return element.dataset.pxMotion === 'alert' || element.classList.contains('px-alert--animated');
}

function getTransitionMs(element) {
  const styles = window.getComputedStyle(element);
  const durations = styles.transitionDuration.split(',').map((value) => Number.parseFloat(value) || 0);
  const delays = styles.transitionDelay.split(',').map((value) => Number.parseFloat(value) || 0);
  const maxDuration = Math.max(...durations, 0);
  const maxDelay = Math.max(...delays, 0);

  return (maxDuration + maxDelay) * 1000;
}

export function createAlert(element) {
  if (!isAlertElement(element)) {
    return {
      destroy() {}
    };
  }

  const root = element;
  const dismissTriggers = [...root.querySelectorAll('[data-px-alert-close]')];
  let closeTimer = null;

  function finalizeClose() {
    root.dataset.state = 'closed';
    root.classList.remove('is-closing');
    root.classList.add('is-closed');
    root.hidden = true;

    root.dispatchEvent(
      new CustomEvent('px:alert:close', {
        bubbles: true,
        detail: {
          element: root
        }
      })
    );
  }

  function close() {
    const closeEvent = new CustomEvent('px:alert:before-close', {
      bubbles: true,
      cancelable: true,
      detail: {
        element: root
      }
    });

    if (!root.dispatchEvent(closeEvent)) {
      return false;
    }

    window.clearTimeout(closeTimer);

    if (!shouldAnimate(root)) {
      finalizeClose();
      return true;
    }

    root.dataset.state = 'closing';
    root.classList.add('is-closing');
    closeTimer = window.setTimeout(finalizeClose, Math.max(getTransitionMs(root), 220));

    return true;
  }

  function open() {
    window.clearTimeout(closeTimer);
    root.hidden = false;
    root.dataset.state = 'open';
    root.classList.remove('is-closing', 'is-closed');
  }

  function onDismissClick(event) {
    event.preventDefault();
    close();
  }

  dismissTriggers.forEach((trigger) => trigger.addEventListener('click', onDismissClick));

  if (root.dataset.state === 'closed') {
    root.hidden = true;
  } else {
    root.dataset.state = root.dataset.state || 'open';
  }

  return {
    open,
    close,
    destroy() {
      window.clearTimeout(closeTimer);
      dismissTriggers.forEach((trigger) => trigger.removeEventListener('click', onDismissClick));
    }
  };
}
