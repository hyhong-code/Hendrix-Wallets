import React from "react";

import Stripe from "./Stripe";

const OrderSummaryPanel = () => {
  return (
    <div className="card order-summary-panel mx-3">
      <div className="card-body py-5 px-4">
        <strong className="text-primary d-block">Your Order:</strong>
        <hr className="m-1" />
        <div className="row">
          <div className="col-6 mb-2 text-primary">Subtotal:</div>
          <div className="col-6 mb-2">$54.99</div>
          <div className="col-6 mb-2 text-primary">Saving:</div>
          <div className="col-6 mb-2 text-secondary">-$9.99</div>
          <div className="col-6 mb-2 text-primary">After Saving:</div>
          <div className="col-6 mb-2 text-secondary">$45</div>
        </div>
        <hr className="m-1" />
        <div className="row">
          <div className="col-6 mb-2 text-primary">Shipping:</div>
          <div className="col-6 mb-2">+$8.99</div>
          <div className="col-6 mb-2 text-primary">Tax:</div>
          <div className="col-6 mb-2">+$0.5399</div>
        </div>
        <hr className="m-1" />
        <div className="row">
          <div className="col-6 mb-1 text-primary">Final Total:</div>
          <div className="col-6 mb-1">$59.4</div>
        </div>
        <hr className="m-1" />
        <div className="text-primary mb-2 py-1 border-bottom">
          Recipient: <br />
          <small className="text-dark">Sam Smith</small>
        </div>
        <div className="text-primary mb-2 py-1 border-bottom">
          Address: <br />
          <small className="text-dark">9000 Roosevelt Way SE</small>
        </div>
        <div className="text-primary mb-2 py-1 border-bottom">
          Phone: <br /> <small className="text-dark">(206) 606-0200</small>
        </div>
        <div className="text-primary mb-2 py-1 border-bottom">
          Instructions: <br />
          <small className="text-dark">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
            esse?
          </small>
        </div>

        <div className="d-flex align-items-center justify-content-center mt-4">
          <Stripe />
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPanel;
