import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import ItemList from "./components/pages/ItemList";
import Checkout from "./components/pages/Checkout";
import Profile from "./components/pages/Profile";
import Orders from "./components/pages/Orders";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={ItemList} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/orders" component={Orders} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
