export function createDataTable(element) {
  const sortButtons = [...(element?.querySelectorAll('[data-px-sort]') ?? [])];
  const bulkBar = element?.querySelector('[data-px-bulk-bar]');
  const rowChecks = [...(element?.querySelectorAll('[data-px-row-check]') ?? [])];

  function updateBulkState() {
    if (!bulkBar) {
      return;
    }

    const selected = rowChecks.filter((input) => input.checked).length;
    bulkBar.hidden = selected === 0;
    bulkBar.dataset.selectedCount = String(selected);
  }

  function cycleSort(button) {
    const current = button.dataset.sortState || 'none';
    const next = current === 'none' ? 'asc' : current === 'asc' ? 'desc' : 'none';
    button.dataset.sortState = next;
    button.setAttribute('aria-sort', next === 'none' ? 'none' : next === 'asc' ? 'ascending' : 'descending');
  }

  sortButtons.forEach((button) => {
    button.addEventListener('click', () => cycleSort(button));
  });

  rowChecks.forEach((input) => {
    input.addEventListener('change', updateBulkState);
  });

  updateBulkState();

  return {
    refresh: updateBulkState
  };
}
