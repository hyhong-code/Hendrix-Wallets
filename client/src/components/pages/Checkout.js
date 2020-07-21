import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CheckoutItem from "../checkoutComponents/CheckoutItem";
import SubtotalPanel from "../checkoutComponents/SubtotalPanel";

const Checkout = ({ cart }) => {
  return (
    <section id="checkout" className="bg-light text-dark">
      <div className="checkout-banner text-light d-flex align-items-center justify-content-center">
        <h1 className="display-4">CHECKOUT</h1>
      </div>
      <div className="container">
        <div className="py-5">
          <h2 className="text-primary mb-4 text-center">YOUR CART</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb py-2">
              <li className="breadcrumb-item">
                <Link to="/" className="text-secondary">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/items/all" className="text-secondary">
                  Explore
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Checkout
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-8 order-1 order-lg-0">
              {cart && !cart.cartItems.length && (
                <p className="lead text-primary">Your cart is empty...</p>
              )}
              {cart &&
                cart.cartItems.map((cartItem) => (
                  <CheckoutItem
                    key={cartItem.cart_item_id}
                    cartItem={cartItem}
                  />
                ))}
            </div>
            <div className="col-lg-4 order-0 mb-4 mb-lg-0">
              {cart && <SubtotalPanel cart={cart} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps)(Checkout);
