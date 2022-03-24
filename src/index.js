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
import CatalogView from "./pages/CatalogView";
import CatalogView2 from "./pages/CatalogView2";
import CatalogView3 from "./pages/CatalogView3";
import CatalogView4 from "./pages/CatalogView4";
import CatalogView5 from "./pages/CatalogView5";
import CatalogView6 from "./pages/CatalogView6";
import CatalogView7 from "./pages/CatalogView7";
import Three from "./pages/Three";

ReactDOM.render(
  <Router>
    <Cursor />
    <CustomCursor />

    <Navbar />

    <Switch>
      <Route path="/" exact component={App} />

      <Route path="/catalog" exact component={Catalog} />
      <Route path="/catalog/:id" exact component={CatalogView} />
      <Route path="/catalog-gnss/:id" exact component={CatalogView2} />
      <Route path="/catalog-nivelir/:id" exact component={CatalogView3} />
      <Route path="/catalog-lazerniy/:id" exact component={CatalogView4} />
      <Route path="/catalog-teodolit/:id" exact component={CatalogView5} />
      <Route path="/catalog-trassoiskatel/:id" exact component={CatalogView6} />
      <Route path="/catalog-acsessuary/:id" exact component={CatalogView7} />

      <Route path="/new-catalog/:id" exact component={SeeNewProduct} />
      <Route path="/three" exact component={Three} />
    </Switch>

    <Footer />
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
