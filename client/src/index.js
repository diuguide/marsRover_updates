import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { createReduxStore } from "./store/redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/App.scss";
import App from "./App";

ReactDOM.render(
  <Provider store={createReduxStore()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
