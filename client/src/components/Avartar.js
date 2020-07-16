import React from "react";
import { Link } from "react-router-dom";

const Avartar = ({ user }) => {
  return (
    <li className="nav-item my-lg-0 ml-0 ml-lg-2 dropdown">
      <a
        className="nav-link p-0 "
        href="#!"
        data-toggle="dropdown"
        role="button"
        id="avartarDropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img
          src={user.photo}
          alt="user profile photo"
          className="img-fluid rounded-circle d-inline-block profile-pic"
        />
      </a>
      <div
        className="dropdown-menu dropdown-menu-right text-dark bg-light"
        aria-labelledby="avartarDropdown"
      >
        <Link to="/profile" className="dropdown-item signin">
          My Profile
        </Link>
        <Link to="/orders" className="dropdown-item signin">
          My Orders
        </Link>
      </div>
    </li>
  );
};

export default Avartar;
