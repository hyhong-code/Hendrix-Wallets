import React from "react";

import OrderlistItem from "../OrderlistItem";

const Orders = () => {
  return (
    <section id="orders" className="py-6 bg-light text-dark">
      <div className="container">
        <h1 className="display-4 text-center text-primary">ORDERS</h1>
        <hr />
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-body">
                <div className="row orderlist-head">
                  <div className="col-4 d-none d-md-block">
                    <strong>Order No.</strong>
                  </div>
                  <div className="col-8 col-lg-4">
                    <strong>Order Date</strong>
                  </div>
                  <div className="col-2 d-none d-lg-block">
                    <strong>Item Qty</strong>
                  </div>
                  <div className="col-4 col-lg-2">
                    <strong>Total</strong>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <OrderlistItem />
                  <OrderlistItem />
                  <OrderlistItem />
                  <OrderlistItem />
                  <OrderlistItem />
                  <OrderlistItem />
                  <OrderlistItem />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
