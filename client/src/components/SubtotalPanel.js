import React from "react";

const SubtotalPanel = () => {
  return (
    <div className="card subtotal-panel mx-3">
      <div className="card-body py-5 px-4">
        <strong className="text-primary d-block">Your Order:</strong>
        <hr />
        <div className="row">
          <div className="col-6 mb-2 text-primary">Subtotal:</div>
          <div className="col-6 mb-2">$54.99</div>
          <div className="col-6 mb-2 text-primary">Saving:</div>
          <div className="col-6 mb-2 text-secondary">-$9.99</div>
          <div className="col-6 mb-2 text-primary">After Saving:</div>
          <div className="col-6 mb-2 text-secondary">$45</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6 mb-2 text-primary">Shipping:</div>
          <div className="col-6 mb-2">+$8.99</div>
          <div className="col-6 mb-2 text-primary">Tax:</div>
          <div className="col-6 mb-2">+$0.5399</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6 mb-2 text-primary">Final Total:</div>
          <div className="col-6 mb-2">$59.4</div>
        </div>
        <button className="btn btn-primary d-block mx-auto mt-4">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default SubtotalPanel;
