import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../actions/authActions";
import logo from "../../assets/logo.png";
import ShoppingCart from "../checkoutComponents/ShoppingCart";
import Avartar from "./Avartar";
import SearchForm from "./SearchForm";

const Navbar = ({
  auth: { isAuthenticated, user },
  logout,
  adminAuthenticated,
}) => {
  const [collapse, setCollapse] = useState(false);

  const handleLogout = () => {
    logout();
    setCollapse((prev) => !prev);
  };

  const authLinks = () => (
    <Fragment>
      <ShoppingCart />
      <li className="nav-item d-lg-none">
        <NavLink
          exact
          to="/checkout"
          className="nav-link"
          onClick={() => setCollapse((prev) => !prev)}
        >
          My Cart
        </NavLink>
      </li>
      {user && (
        <Avartar
          closeNav={() => setCollapse((prev) => !prev)}
          user={user}
          logout={logout}
        />
      )}
    </Fragment>
  );

  const guestLinks = () => (
    <Fragment>
      <li className="nav-item">
        <NavLink
          exact
          to="/signup"
          className="nav-link"
          onClick={() => setCollapse((prev) => !prev)}
        >
          SignUp
        </NavLink>
      </li>
      <li className="nav-item" onClick={() => setCollapse((prev) => !prev)}>
        <NavLink exact to="/login" className="nav-link">
          LogIn
        </NavLink>
      </li>
      <SearchForm closeNav={() => setCollapse((prev) => !prev)} />
    </Fragment>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-light sticky-top py-2">
      <div className="container d-flex">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center"
          onClick={() => setCollapse((prev) => !prev)}
        >
          <img src={logo} className="logo" alt="logo" />
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

        <div
          className={`collapse navbar-collapse ${collapse ? "collapse" : ""}`}
          id="mainNavbar"
        >
          <ul className="navbar-nav mr-auto align-items-center">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={() => setCollapse((prev) => !prev)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/items/all"
                className="nav-link"
                onClick={() => setCollapse((prev) => !prev)}
              >
                EXPLORE
              </NavLink>
            </li>
            {isAuthenticated && !adminAuthenticated && (
              <SearchForm closeNav={() => setCollapse((prev) => !prev)} />
            )}
          </ul>

          <ul className="navbar-nav ml-auto align-items-center">
            {isAuthenticated && !adminAuthenticated ? (
              authLinks()
            ) : !isAuthenticated && !adminAuthenticated ? (
              guestLinks()
            ) : (
              <Fragment>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/admin/dashboard"
                    className="nav-link"
                    onClick={() => setCollapse((prev) => !prev)}
                  >
                    <i className="fas fa-user-cog"></i> DASHBOARD
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/admin"
                    className="nav-link"
                    onClick={handleLogout}
                  >
                    Logout <i className="fas fa-sign-out-alt"></i>
                  </NavLink>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth, admin: { adminAuthenticated } }) => ({
  auth,
  adminAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
