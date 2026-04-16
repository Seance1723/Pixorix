export function createActivityFeed(element) {
  const items = [...(element?.querySelectorAll('[data-px-feed-item]') ?? [])];

  return {
    markRead(id) {
      const item = items.find((entry) => entry.dataset.pxFeedItem === id);
      if (item) {
        item.dataset.state = 'read';
      }
    }
  };
}
