export function createComponentRegistry() {
  const definitions = new Map();

  return {
    register(name, definition) {
      definitions.set(name, { ...definition, name });
      return this;
    },
    unregister(name) {
      definitions.delete(name);
      return this;
    },
    get(name) {
      return definitions.get(name) ?? null;
    },
    getAll() {
      return [...definitions.values()];
    }
  };
}
