import React from "react";

const Topbar = () => {
  return (
    <div className="topbar text-dark bg-light sticky-top">
      <div className="container">
        <ul className="topbar-list">
          <li className="topbar-item">
            <i className="fas fa-phone-alt"></i> TEL: (206) 696-0214
          </li>
          <li className="topbar-item">
            <i className="fas fa-envelope"></i> EMAIL: hong961127@gmail.com
          </li>
          <li className="topbar-item">
            <a href="">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fab fa-github"></i>
            </a>
            <a href="">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
