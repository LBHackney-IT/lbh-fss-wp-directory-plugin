import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { QueryParamProvider } from "use-query-params";
import history from "./history";

const target = document.getElementById("erw-root");
if (target) {
  ReactDOM.render(
    <QueryParamProvider history={history}>
      <App />
    </QueryParamProvider>,
    target
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
