export default class EventEmitter {
  constructor (conf = {}, initHandle) {
    this.handlers = []
    this.__onceSymbol = Symbol('once')
    this.conf = { ...conf }
    initHandle(this.conf)
  }

  __checkEventName (eventName) {
    if (this.handlers[eventName] == null) {
      this.handlers[eventName] = []
    }
  }

  on (eventName, fn) {
    this.__checkEventName(eventName)
    this.handlers[eventName].push(fn)
    return this
  }

  once (eventName, fn) {
    this.__checkEventName(eventName)
    fn[this.__onceSymbol] = true
    this.handlers[eventName].push(fn)
    return this
  }

  emit (eventName, ...args) {
    if (this.handlers[eventName] == null) {
      console.error('Cannot find eventName')
    } else {
      this.handlers[eventName].forEach((handler, index) => {
        try {
          handler.apply(this, args)
          if (handler[this.__onceSymbol]) {
            // should remove this handle
            // todo
          }
        } catch (e) {
          console.error(e)
        }
      })
    }
    return this
  }
}
