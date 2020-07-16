import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { getCategories } from "./actions/categoryActions";
import { getItems } from "./actions/itemActions";
import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import ItemList from "./components/pages/ItemList";
import Checkout from "./components/pages/Checkout";
import Profile from "./components/pages/Profile";
import Orders from "./components/pages/Orders";
import OrderDetail from "./components/pages/OrderDetail";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import "./App.scss";

const App = ({ getCategories, getItems }) => {
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getCategories();
      getItems();
    }
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line
  }, []);
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items/:category" component={ItemList} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/orderDetail" component={OrderDetail} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default connect(null, { getCategories, getItems })(App);
