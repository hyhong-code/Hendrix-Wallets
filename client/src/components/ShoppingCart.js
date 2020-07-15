import React from "react";

import CartItem from "./CartItem";

const ShoppingCart = () => {
  return (
    <li className="nav-item dropdown d-none d-lg-block">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Cart
      </a>
      <div
        className="dropdown-menu p-0 text-dark bg-light"
        aria-labelledby="navbarDropdown"
      >
        <div className="cart-dropdown">
          <div className="card-body p-2">
            <span className="mb-1 d-inline-block">Cart Total: $65.00</span>
            <div className="list-group">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <a href="" className="mt-1 btn btn-secondary btn-block text-white">
              Checkout
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ShoppingCart;
