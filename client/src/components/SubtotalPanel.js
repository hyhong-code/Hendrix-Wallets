import React from "react";

import OrderInfoModal from "../components/OrderInfoModal";

const SubtotalPanel = () => {
  return (
    <div className="card subtotal-panel mx-3">
      <div className="card-body py-3 py-md-5 px-4">
        <strong className="text-primary d-block">Your Order:</strong>
        <hr />
        <div className="row">
          <div className="col-6 mb-0 mb-md-2 text-primary">Subtotal:</div>
          <div className="col-6 mb-0 mb-md-2">$54.99</div>
          <div className="col-6 mb-0 mb-md-2 text-primary">Saving:</div>
          <div className="col-6 mb-0 mb-md-2 text-secondary">-$9.99</div>
          <div className="col-6 mb-0 mb-md-2 text-primary">After Saving:</div>
          <div className="col-6 mb-0 mb-md-2 text-secondary">$45</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6 mb-0 mb-md-2 text-primary">Shipping:</div>
          <div className="col-6 mb-0 mb-md-2">+$8.99</div>
          <div className="col-6 mb-0 mb-md-2 text-primary">Tax:</div>
          <div className="col-6 mb-0 mb-md-2">+$0.5399</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6 mb-0 mb-md-2 text-primary">Final Total:</div>
          <div className="col-6 mb-0 mb-md-2">$59.4</div>
        </div>
        <OrderInfoModal />
      </div>
    </div>
  );
};

export default SubtotalPanel;
