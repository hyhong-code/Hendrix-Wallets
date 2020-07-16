import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import ShoppingCart from "../ShoppingCart";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-light sticky-top py-2">
      <div className="container d-flex">
        <Link exact to="/" className="navbar-brand d-flex align-items-center">
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
              <NavLink exact to="/items" className="nav-link">
                EXPLORE
              </NavLink>
            </li>
            <form action="" className="form-inline my-2 my-lg-0 ml-0 ml-lg-2">
              <input
                type="search"
                placeholder="Search Products..."
                className="form-control mr-2 bg-light"
              />
              <button className="btn btn-outline-light my-2 my-sm-0">
                <fas className="fas fa-search"></fas>
              </button>
            </form>
          </ul>

          <ul className="navbar-nav ml-auto align-items-center">
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
            <li className="nav-item">
              <a href="" className="nav-link">
                Order
              </a>
            </li>
            <li className="nav-item my-lg-0 ml-0 ml-lg-2">
              {/* <a href="" className="nav-link">
                Profile
              </a> */}
              <a className="nav-link p-0" href="">
                <img
                  src="https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg"
                  alt=""
                  className="img-fluid rounded-circle d-inline-block profile-pic"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
