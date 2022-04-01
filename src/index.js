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
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import Taxeometr from "./pages/Taxeometr";
import Gnss from "./pages/Gnss";
import Nivelir from "./pages/Nivelir";
import Lazerniy from "./pages/Lazerniy";
import Teodolit from "./pages/Teodolit";
import Trassoiskatel from "./pages/Trassoiskatel";
import Acsessuary from "./pages/Acsessuary";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

ReactDOM.render(
  // <Provider store={store}>
    <Router>
      <Cursor />
      <CustomCursor />

      <Navbar />
      <ScrollToTop />

      <Switch>
        <Route path="/" exact component={App} />

        <Route path="/catalog" exact component={Catalog} />

        <Route path="/catalog-taxeometr/:id" exact component={CatalogView} />
        {/* <Route path="/catalog/:title/:id" exact component={CatalogView} /> */}

        <Route path="/catalog-gnss/:id" exact component={CatalogView2} />
        <Route path="/catalog-nivelir/:id" exact component={CatalogView3} />
        <Route path="/catalog-lazerniy/:id" exact component={CatalogView4} />
        <Route path="/catalog-teodolit/:id" exact component={CatalogView5} />
        <Route
          path="/catalog-trassoiskatel/:id"
          exact
          component={CatalogView6}
        />
        <Route path="/catalog-acsessuary/:id" exact component={CatalogView7} />

        <Route path="/catalog/taxeometr" exact component={Taxeometr} />
        <Route path="/catalog/gnss" exact component={Gnss} />
        <Route path="/catalog/nivelir" exact component={Nivelir} />
        <Route path="/catalog/lazerniy" exact component={Lazerniy} />
        <Route path="/catalog/teodolit" exact component={Teodolit} />
        <Route path="/catalog/trassoiskatel" exact component={Trassoiskatel} />
        <Route path="/catalog/acsessuary" exact component={Acsessuary} />

        <Route path="/services" exact component={Services} />
        <Route path="/about" exact component={About} />
        <Route path="/contacts" exact component={Contacts} />

        <Route path="/new-catalog/:id" exact component={SeeNewProduct} />
      </Switch>

      <Footer />
    </Router>
  // </Provider>
  ,
  document.getElementById("root")
);

reportWebVitals();
