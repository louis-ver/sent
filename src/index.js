import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { sent, initialState } from "./reducers/sent";
import App from "./components/App";
import "./index.css";

let store = createStore(
  sent,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
