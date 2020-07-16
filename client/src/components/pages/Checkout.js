import React from "react";

import CheckoutItem from "../CheckoutItem";
import SubtotalPanel from "../SubtotalPanel";

const Checkout = () => {
  return (
    <section id="checkout" className="bg-light text-dark">
      <div className="checkout-banner text-light d-flex align-items-center justify-content-center">
        <h1 className="display-4">CHECKOUT</h1>
      </div>
      <div className="container">
        <div className="py-5">
          <h2 className="mb-4 text-primary">Your Cart:</h2>
          <div className="row">
            <div className="col-md-8 order-1 order-lg-0">
              <CheckoutItem />
              <CheckoutItem />
              <CheckoutItem />
            </div>
            <div className="col-lg-4 order-0 mb-4 mb-lg-0">
              <SubtotalPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
