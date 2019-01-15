import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from "./store";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/scss/euphony-styles.css";

ReactDOM.render( <Provider store={store}>
      <App />
  </Provider>, document.getElementById("root"));

serviceWorker.unregister();

