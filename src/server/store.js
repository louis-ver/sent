const { createStore } = require('redux');
const { sent } = require("../reducers/sent");

// var store = createStore(sent);
//
// module.exports = {
//   Store: store
// }
class Store {
  constructor() {
    this._store = createStore(sent);
  }
}

const instance = new Store();
Object.freeze(instance);

module.exports = {
  Store: instance._store
}
