class EventEmitter {
  constructor() {
    this._map = new Map();
  }

  emit(eventName, ...args) {
    const listener = this._map.get(eventName);
    listeners.forEach(element => {
      element(...args);
    });
  }

  on(eventName, listener) {
    const listeners = this._map.get(eventName);
    if (listeners) {
      this._map.set(eventName, listeners.concat(listener));
    } else {
      this._map.set(eventName, [listener]);
    }
  }

  removeListener(eventName, listener) {
    const listeners = this._map.get(eventName);
    this._map.set(eventName, listeners.filter(cur => !== listener));
  }
}