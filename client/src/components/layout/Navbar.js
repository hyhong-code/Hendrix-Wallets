import React from "react";

import logo from "../../assets/logo.png";
import ShoppingCart from "../ShoppingCart";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-light sticky-top py-2">
      <div className="container d-flex">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} className="logo" alt="" />
          <span className="ml-2">Hendrix</span>
        </a>
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item d-lg-none">
              <a className="nav-link" href="#">
                Cart
              </a>
            </li>
            <ShoppingCart />
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Signin
              </a>
              <div
                className="dropdown-menu text-dark bg-light"
                aria-labelledby="navbarDropdown2"
              >
                <a className="dropdown-item signin" href="#">
                  Login
                </a>
                <a className="dropdown-item signin" href="#">
                  Signup
                </a>
              </div>
            </li>
          </ul>
          <form action="" className="form-inline my-2 my-lg-0">
            <input
              type="search"
              placeholder="Search Product..."
              className="form-control mr-sm-2 bg-light"
            />
            <button className="btn btn-outline-light my-2 my-sm-0">
              <fas className="fas fa-search"></fas>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
