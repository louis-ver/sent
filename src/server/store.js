const { createStore } = require('redux');
const { sent } = require("../reducers/sent");

let store = createStore(sent);

module.exports = {
  Store: store
}
