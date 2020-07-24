import React, { useCallback, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { loadUser } from "./actions/authActions";
import { getCart } from "./actions/cartActions";
import { getOrders } from "./actions/orderActions";
import GuestRoute from "./routing/GuestRoute";
import UserRoute from "./routing/UserRoute";
import AdminRoute from "./routing/AdminRoute";
import AdminDashboard from "./components/pages/AdminDashboard";
import AdminOrderDetail from "./components/pages/AdminOrderDetail";
import ScrollToTop from "./components/widgets/ScrollToTop";
import Refresh from "./components/widgets/Refresh";
import ToastContainer from "./components/widgets/ToastContainer";
import Navbar from "./components/layoutComponents/Navbar";
import Topbar from "./components/layoutComponents/Topbar";
import Home from "./components/pages/Home";
import Footer from "./components/layoutComponents/Footer";
import ItemList from "./components/pages/ItemList";
import Checkout from "./components/pages/Checkout";
import Profile from "./components/pages/Profile";
import Orders from "./components/pages/Orders";
import OrderDetail from "./components/pages/OrderDetail";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import AdminLogin from "./components/pages/AdminLogin";
import "./App.scss";

const App = ({ isAuthenticated, toasts, loadUser, getCart, getOrders }) => {
  const authenticateUser = useCallback(() => {
    loadUser();
  }, []);

  const fetchUserResource = useCallback(() => {
    getCart();
    getOrders();
  }, [isAuthenticated]);

  useEffect(() => {
    authenticateUser();
  }, [authenticateUser]);

  useEffect(() => {
    fetchUserResource();
  }, [fetchUserResource]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Topbar />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items/:category" component={ItemList} />
        <UserRoute exact path="/checkout" component={Checkout} />
        <UserRoute exact path="/profile" component={Profile} />
        <UserRoute exact path="/orders" component={Orders} />
        <UserRoute exact path="/orderDetail/:orderId" component={OrderDetail} />
        <GuestRoute exact path="/signup" component={Signup} />
        <GuestRoute exact path="/login" component={Login} />
        <Route exact path="/refresh" component={Refresh} />
        <Route exact path="/admin" component={AdminLogin} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute
          exact
          path="/admin/orderDetail/:orderId"
          component={AdminOrderDetail}
        />
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
  loadUser,
  getCart,
  getOrders,
})(App);
