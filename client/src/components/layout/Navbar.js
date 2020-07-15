import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <a href="" className="navbar-brand">
          HENDRIX
        </a>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                CATEGORY
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="" className="nav-link">
                PROFILE
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                CART
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                ORDERS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
