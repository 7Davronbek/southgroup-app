import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import See from "./components/See";

ReactDOM.render(
  <Router>

      {/* <Navbar /> */}

    <Switch>
      
      <Route path='/' exact component={App} />
      <Route path='/student/:id' exact component={See} />
      
    </Switch>

  </Router>,
  document.getElementById("root")
);

reportWebVitals();
