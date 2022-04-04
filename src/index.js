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
import Catalog from "./pages/Catalog";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";

import Services from "./components/Services";
import Contacts from "./components/Contacts";

ReactDOM.render(
  <Router>
    <Cursor />
    <CustomCursor />

    <Navbar />
    <ScrollToTop />

    <Switch>
      <Route path="/" exact component={App} />

      <Route path="/catalog" exact component={Catalog} />
      <Route path="/new-catalog/:id" exact component={SeeNewProduct} />

      <Route path="/services" exact component={Services} />
      <Route path="/about" exact component={About} />
      <Route path="/contacts" exact component={Contacts} />



    </Switch>

    <Footer />
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
