export function setDataState(element, value) {
  if (!element) {
    return;
  }

  element.dataset.state = value;
}

export function setPressed(element, value) {
  element?.setAttribute('aria-pressed', value ? 'true' : 'false');
}

export function setExpanded(element, value) {
  element?.setAttribute('aria-expanded', value ? 'true' : 'false');
}

export function setSelected(element, value) {
  element?.setAttribute('aria-selected', value ? 'true' : 'false');
  if ('tabIndex' in (element ?? {})) {
    element.tabIndex = value ? 0 : -1;
  }
}

export function setHidden(element, value) {
  if (!element) {
    return;
  }

  element.hidden = Boolean(value);
  element.setAttribute('aria-hidden', value ? 'true' : 'false');
}

export function setDisabled(element, value) {
  if (!element) {
    return;
  }

  if ('disabled' in element) {
    element.disabled = Boolean(value);
  } else {
    element.setAttribute('aria-disabled', value ? 'true' : 'false');
  }
}

export function createStateStore(initialState = {}) {
  let state = { ...initialState };
  const listeners = new Set();

  function notify() {
    listeners.forEach((listener) => listener(state));
  }

  return {
    getState() {
      return state;
    },
    setState(partialState) {
      state = { ...state, ...partialState };
      notify();
      return state;
    },
    subscribe(listener) {
      listeners.add(listener);

      return () => {
        listeners.delete(listener);
      };
    },
    destroy() {
      listeners.clear();
    }
  };
}
