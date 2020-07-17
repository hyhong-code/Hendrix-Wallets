import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getOrderDetail } from "../../actions/orderActions";
import OrderDetailItem from "../OrderDetailItem";
import OrderSummaryPanel from "../OrderSummaryPanel";

const OrderDetail = ({ match, currentOrder, getOrderDetail }) => {
  useEffect(() => {
    getOrderDetail(match.params.orderId);
  }, []);

  return (
    <section id="order-detail" className="py-6 text-dark bg-light">
      <div className="text-center ">
        <h1 className="display-4 text-primary">Order Summary</h1>
        {currentOrder && (
          <p className="lead text-muted">Order #: {currentOrder.id}</p>
        )}
      </div>

      <div className="container">
        <div className="py-3">
          <div className="row">
            <div className="col-lg-8 order-1 order-lg-0">
              {currentOrder &&
                currentOrder.cart.cartItems.map((cartItem) => (
                  <OrderDetailItem
                    key={cartItem.cart_item_id}
                    cartItem={cartItem}
                  />
                ))}
            </div>
            <div className="col-lg-4 order-0 mb-4 mb-lg-0">
              {currentOrder && <OrderSummaryPanel order={currentOrder} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ order: { currentOrder } }) => ({ currentOrder });

export default connect(mapStateToProps, { getOrderDetail })(OrderDetail);
