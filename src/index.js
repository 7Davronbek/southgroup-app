import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./sass/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cursor from "./components/cursor/Cursor";
import CustomCursor from "./components/cursor/CustomCursor";
import Navbar from "./components/Navbar";
import SeeNewProduct from "./components/SeeNewProduct";
import Footer from "./components/Footer";
import Category from "./pages/Category";

ReactDOM.render(
  <Router>
    <Cursor />

    <CustomCursor />

    <Navbar />

    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/catalog" exact component={Category} />
      <Route path="/catalog/:qwe" exact component={SeeNewProduct} />
    </Switch>

    <Footer />
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
