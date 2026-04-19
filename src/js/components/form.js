import { ensureId, qs, qsa } from '../core/dom.js';

function isManagedFormElement(element) {
  return (
    element?.matches?.(
      [
        '[data-px-file-upload]',
        '[data-px-otp]',
        '[data-px-segmented-input]',
        '[data-px-token-input]',
        '[data-px-autocomplete]',
        '[data-px-multiselect]'
      ].join(', ')
    ) ?? false
  );
}

function updateFileUpload(root) {
  const input = qs('input[type="file"]', root);
  const meta = qs('.px-file-upload__meta', root);
  const list = qs('.px-file-upload__list', root);

  if (!input) {
    return { destroy() {} };
  }

  function renderFiles(files) {
    if (meta) {
      meta.textContent = files.length ? `${files.length} file${files.length > 1 ? 's' : ''} selected` : 'Drag files here or browse from your device.';
    }

    if (list) {
      list.innerHTML = files
        .map(
          (file) => `<li class="px-file-upload__item"><span>${file.name}</span><span>${Math.max(1, Math.round(file.size / 1024))} KB</span></li>`
        )
        .join('');
    }

    root.dataset.state = files.length ? 'filled' : 'empty';
    root.dispatchEvent(
      new CustomEvent('px:form:file-upload', {
        bubbles: true,
        detail: {
          element: root,
          files
        }
      })
    );
  }

  function onChange() {
    renderFiles([...input.files]);
  }

  function onDragEnter(event) {
    event.preventDefault();
    root.classList.add('is-dragover');
    root.dataset.state = 'dragover';
  }

  function onDragLeave(event) {
    if (!root.contains(event.relatedTarget)) {
      root.classList.remove('is-dragover');
      root.dataset.state = input.files?.length ? 'filled' : 'empty';
    }
  }

  function onDragOver(event) {
    event.preventDefault();
    root.classList.add('is-dragover');
  }

  function onDrop(event) {
    event.preventDefault();
    root.classList.remove('is-dragover');

    if (event.dataTransfer?.files?.length) {
      input.files = event.dataTransfer.files;
      renderFiles([...event.dataTransfer.files]);
    }
  }

  input.addEventListener('change', onChange);
  root.addEventListener('dragenter', onDragEnter);
  root.addEventListener('dragleave', onDragLeave);
  root.addEventListener('dragover', onDragOver);
  root.addEventListener('drop', onDrop);

  renderFiles([...input.files]);

  return {
    destroy() {
      input.removeEventListener('change', onChange);
      root.removeEventListener('dragenter', onDragEnter);
      root.removeEventListener('dragleave', onDragLeave);
      root.removeEventListener('dragover', onDragOver);
      root.removeEventListener('drop', onDrop);
    }
  };
}

function createSegmentController(root, selector, eventName) {
  const inputs = qsa(selector, root);

  if (!inputs.length) {
    return { destroy() {} };
  }

  function emitValue() {
    root.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        detail: {
          element: root,
          value: inputs.map((input) => input.value).join('')
        }
      })
    );
  }

  function onInput(event) {
    const input = event.currentTarget;
    const index = inputs.indexOf(input);
    input.value = input.value.slice(-1);

    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
      inputs[index + 1].select?.();
    }

    emitValue();
  }

  function onKeyDown(event) {
    const input = event.currentTarget;
    const index = inputs.indexOf(input);

    if (event.key === 'Backspace' && !input.value && index > 0) {
      inputs[index - 1].focus();
      inputs[index - 1].select?.();
    }
  }

  function onPaste(event) {
    event.preventDefault();
    const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\s+/g, '');

    inputs.forEach((input, index) => {
      input.value = pasted[index] ?? '';
    });

    const next = inputs[Math.min(pasted.length, inputs.length - 1)];
    next?.focus();
    emitValue();
  }

  inputs.forEach((input) => {
    input.addEventListener('input', onInput);
    input.addEventListener('keydown', onKeyDown);
    input.addEventListener('paste', onPaste);
  });

  return {
    destroy() {
      inputs.forEach((input) => {
        input.removeEventListener('input', onInput);
        input.removeEventListener('keydown', onKeyDown);
        input.removeEventListener('paste', onPaste);
      });
    }
  };
}

function updateTokens(root) {
  const input = qs('.px-token-input__input', root);
  const tokenList = qs('.px-token-input__tokens', root);

  if (!input || !tokenList) {
    return { destroy() {} };
  }

  function emitTokens() {
    const tokens = qsa('[data-px-token-value]', tokenList).map((item) => item.dataset.pxTokenValue);

    root.dispatchEvent(
      new CustomEvent('px:form:tokens', {
        bubbles: true,
        detail: {
          element: root,
          tokens
        }
      })
    );
  }

  function addToken(value) {
    const normalized = value.trim();

    if (!normalized) {
      return;
    }

    if (qsa('[data-px-token-value]', tokenList).some((token) => token.dataset.pxTokenValue === normalized)) {
      input.value = '';
      return;
    }

    tokenList.insertAdjacentHTML(
      'beforeend',
      `<span class="px-chip px-chip--neutral px-chip--soft" data-px-token-value="${normalized}">
        <span class="px-chip__label">${normalized}</span>
        <button class="px-chip__remove" type="button" data-px-token-remove aria-label="Remove ${normalized}">x</button>
      </span>`
    );
    input.value = '';
    emitTokens();
  }

  function onKeyDown(event) {
    if (!['Enter', ',', 'Tab'].includes(event.key)) {
      return;
    }

    if (!input.value.trim()) {
      return;
    }

    event.preventDefault();
    addToken(input.value);
  }

  function onClick(event) {
    const remove = event.target.closest('[data-px-token-remove]');

    if (!remove) {
      return;
    }

    event.preventDefault();
    remove.closest('[data-px-token-value]')?.remove();
    emitTokens();
  }

  input.addEventListener('keydown', onKeyDown);
  root.addEventListener('click', onClick);

  return {
    addToken,
    destroy() {
      input.removeEventListener('keydown', onKeyDown);
      root.removeEventListener('click', onClick);
    }
  };
}

function createAutocomplete(root) {
  const input = qs('.px-autocomplete__input', root);
  const menu = qs('.px-autocomplete__menu', root);
  const options = qsa('.px-autocomplete__option', root);

  if (!input || !menu || !options.length) {
    return { destroy() {} };
  }

  ensureId(menu, 'px-autocomplete');
  input.setAttribute('aria-controls', menu.id);
  input.setAttribute('aria-expanded', 'false');

  function open() {
    menu.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    root.dataset.state = 'open';
  }

  function close() {
    menu.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    root.dataset.state = 'closed';
  }

  function selectOption(option) {
    input.value = option.dataset.value ?? option.textContent.trim();
    close();
    root.dispatchEvent(
      new CustomEvent('px:form:autocomplete', {
        bubbles: true,
        detail: {
          element: root,
          value: input.value
        }
      })
    );
  }

  function onFocus() {
    open();
  }

  function onDocumentClick(event) {
    if (!root.contains(event.target)) {
      close();
    }
  }

  function onOptionClick(event) {
    const option = event.target.closest('.px-autocomplete__option');

    if (!option) {
      return;
    }

    event.preventDefault();
    selectOption(option);
  }

  input.addEventListener('focus', onFocus);
  root.addEventListener('click', onOptionClick);
  document.addEventListener('click', onDocumentClick);
  close();

  return {
    open,
    close,
    destroy() {
      input.removeEventListener('focus', onFocus);
      root.removeEventListener('click', onOptionClick);
      document.removeEventListener('click', onDocumentClick);
    }
  };
}

function createMultiselect(root) {
  const menu = qs('.px-multiselect__menu', root);
  const tokens = qs('.px-multiselect__tokens', root);
  const input = qs('.px-multiselect__input', root);

  if (!menu || !tokens || !input) {
    return { destroy() {} };
  }

  function syncSelection(option) {
    const value = option.dataset.value ?? option.textContent.trim();
    const existing = qsa('[data-px-token-value]', tokens).find((item) => item.dataset.pxTokenValue === value);

    option.classList.toggle('is-active');

    if (existing) {
      existing.remove();
    } else {
      tokens.insertAdjacentHTML(
        'beforeend',
        `<span class="px-chip px-chip--primary px-chip--soft" data-px-token-value="${value}">
          <span class="px-chip__label">${value}</span>
          <button class="px-chip__remove" type="button" data-px-token-remove aria-label="Remove ${value}">x</button>
        </span>`
      );
    }

    root.dispatchEvent(
      new CustomEvent('px:form:multiselect', {
        bubbles: true,
        detail: {
          element: root,
          values: qsa('[data-px-token-value]', tokens).map((item) => item.dataset.pxTokenValue)
        }
      })
    );
  }

  function onOptionClick(event) {
    const option = event.target.closest('.px-multiselect__option');

    if (!option) {
      return;
    }

    event.preventDefault();
    syncSelection(option);
  }

  function onTokenRemove(event) {
    const remove = event.target.closest('[data-px-token-remove]');

    if (!remove) {
      return;
    }

    event.preventDefault();
    const token = remove.closest('[data-px-token-value]');
    const value = token?.dataset.pxTokenValue;
    token?.remove();
    qsa('.px-multiselect__option', root).forEach((option) => {
      if ((option.dataset.value ?? option.textContent.trim()) === value) {
        option.classList.remove('is-active');
      }
    });
  }

  root.addEventListener('click', onOptionClick);
  root.addEventListener('click', onTokenRemove);

  return {
    destroy() {
      root.removeEventListener('click', onOptionClick);
      root.removeEventListener('click', onTokenRemove);
    }
  };
}

export function createForm(element) {
  if (!isManagedFormElement(element)) {
    return {
      destroy() {}
    };
  }

  const controllers = [];

  if (element.matches('[data-px-file-upload]')) {
    controllers.push(updateFileUpload(element));
  }

  if (element.matches('[data-px-otp]')) {
    controllers.push(createSegmentController(element, '.px-otp__input', 'px:form:otp'));
  }

  if (element.matches('[data-px-segmented-input]')) {
    controllers.push(createSegmentController(element, '.px-segmented-input__input', 'px:form:segment'));
  }

  if (element.matches('[data-px-token-input]')) {
    controllers.push(updateTokens(element));
  }

  if (element.matches('[data-px-autocomplete]')) {
    controllers.push(createAutocomplete(element));
  }

  if (element.matches('[data-px-multiselect]')) {
    controllers.push(createMultiselect(element));
  }

  return {
    destroy() {
      controllers.forEach((controller) => controller?.destroy?.());
    }
  };
}
