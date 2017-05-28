import { createStore } from "redux";

class Store {
  get instance() {
    if (this.instance === undefined) {
      this.instance = createStore(sent);
    } else {
      return this.instance;
    }
  }
}

module.exports = {
  Store: Store
};
