import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { sent } from "./reducers/sent";
import { initialState } from "./reducers/state";
import App from "./components/App";
import "./index.css";

let store = createStore(sent, initialState);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
