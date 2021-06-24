import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App.js";
import store from "./store.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
