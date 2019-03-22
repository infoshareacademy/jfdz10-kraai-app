import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";


const AppWithRouter = () => (
    <Router>
        <App />
    </Router>
)
=======
import "semantic-ui-css/semantic.min.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);
>>>>>>> develop

ReactDOM.render(<AppWithRouter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
