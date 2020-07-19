import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { getCategories } from "./actions/categoryActions";
import { getItems } from "./actions/itemActions";
import { loadUser } from "./actions/authActions";
import { getCart } from "./actions/cartActions";
import { getOrders } from "./actions/orderActions";
import GuestRoute from "./routes/GuestRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import ScrollToTop from "./components/layout/ScrollToTop";
import Refresh from "./components/layout/Refresh";
import ToastContainer from "./components/layout/ToastContainer";
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
import AdminLogin from "./components/pages/AdminLogin";
import "./App.scss";

const App = ({
  isAuthenticated,
  toasts,
  getCategories,
  getItems,
  loadUser,
  getCart,
  getOrders,
}) => {
  useEffect(() => {
    loadUser();
    getCategories();
    getItems();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getCart();
    getOrders();
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Topbar />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items/:category" component={ItemList} />
        <ProtectedRoute exact path="/checkout" component={Checkout} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/orders" component={Orders} />
        <ProtectedRoute
          exact
          path="/orderDetail/:orderId"
          component={OrderDetail}
        />
        <GuestRoute exact path="/signup" component={Signup} />
        <GuestRoute exact path="/login" component={Login} />
        <Route exact path="/refresh" component={Refresh} />
        <Route exact path="/admin" component={AdminLogin} />
      </Switch>
      <Footer />
      {!!toasts.length && <ToastContainer />}
    </BrowserRouter>
  );
};

const mapStateToProps = ({ auth: { isAuthenticated }, toasts }) => ({
  isAuthenticated,
  toasts,
});

export default connect(mapStateToProps, {
  getCategories,
  getItems,
  loadUser,
  getCart,
  getOrders,
})(App);
