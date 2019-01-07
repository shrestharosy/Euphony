import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/scss/paper-dashboard.scss";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
