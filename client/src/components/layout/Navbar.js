import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../actions/authActions";
import logo from "../../assets/logo.png";
import ShoppingCart from "../ShoppingCart";
import Avartar from "../Avartar";
import SearchForm from "../SearchForm";

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
  const authLinks = () => (
    <Fragment>
      <ShoppingCart />
      <li className="nav-item d-lg-none">
        <NavLink exact to="/checkout" className="nav-link">
          My Cart
        </NavLink>
      </li>
      {user && <Avartar user={user} logout={logout} />}
    </Fragment>
  );

  const guestLinks = () => (
    <Fragment>
      <li className="nav-item">
        <NavLink exact to="/signup" className="nav-link">
          SignUp
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/login" className="nav-link">
          LogIn
        </NavLink>
      </li>
      <SearchForm />
    </Fragment>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-light sticky-top py-2">
      <div className="container d-flex">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} className="logo" alt="" />
          <span className="ml-2">HENDRIX</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mr-auto align-items-center">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/items/all" className="nav-link">
                EXPLORE
              </NavLink>
            </li>
            {isAuthenticated && <SearchForm />}
          </ul>

          <ul className="navbar-nav ml-auto align-items-center">
            {isAuthenticated ? authLinks() : guestLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logout })(Navbar);
