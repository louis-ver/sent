const { createStore } = require('redux');
const { sent } = require("../reducers/sent");

var store = createStore(sent);

module.exports = {
  Store: store
}
