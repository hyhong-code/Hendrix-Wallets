import React from "react";

import OrderDetailItem from "../OrderDetailItem";
import OrderSummaryPanel from "../OrderSummaryPanel";

const OrderDetail = () => {
  return (
    <section id="order-detail" className="py-6 text-dark bg-light">
      <div className="text-center ">
        <h1 className="display-4 text-primary">Order Detail</h1>
        <p className="lead text-muted">Order #: LvsnATpgyEpCjL9TdSBF</p>
      </div>

      <div className="container">
        <div className="py-3">
          <div className="row">
            <div className="col-md-8 order-1 order-lg-0">
              <OrderDetailItem />
              <OrderDetailItem />
              <OrderDetailItem />
            </div>
            <div className="col-lg-4 order-0 mb-4 mb-lg-0">
              <OrderSummaryPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetail;
