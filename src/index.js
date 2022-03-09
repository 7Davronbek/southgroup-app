import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <Router>

      <Navbar />

    <Switch>
      
      <Route exact component={App} />
      
    </Switch>

  </Router>,
  document.getElementById("root")
);

reportWebVitals();
