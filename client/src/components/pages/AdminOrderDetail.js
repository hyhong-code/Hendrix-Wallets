import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getOrderDetail } from "../../actions/orderActions";
import OrderDetailItem from "../OrderDetailItem";
import OrderSummaryPanel from "../OrderSummaryPanel";

const AdminOrderDetail = ({
  match,
  currentOrder,
  adminAuthenticated,
  getOrderDetail,
}) => {
  useEffect(() => {
    if (adminAuthenticated) {
      getOrderDetail(match.params.orderId);
    }
    // eslint-disable-next-line
  }, [adminAuthenticated]);

  return (
    <section id="order-detail" className="py-6 text-dark bg-light">
      <div className="text-center ">
        <h1 className="display-4 text-primary">Order Summary</h1>
        {currentOrder && (
          <p className="lead text-muted">ORDER #: {currentOrder.id}</p>
        )}
      </div>

      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb py-2">
            <li className="breadcrumb-item">
              <Link to="/admin/dashboard" className="text-secondary">
                Dashboard
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Order Summary
            </li>
          </ol>
        </nav>
        <div className="progress">
          {currentOrder &&
            (currentOrder.status === "CONFIRMED" ||
              currentOrder.status === "SHIPPED" ||
              currentOrder.status === "PAID" ||
              currentOrder.status === "DELIVERED") && (
              <div className="bg-info order-progress progress-bar progress-bar-striped progress-bar-animated">
                CONFIRMED
              </div>
            )}
          {currentOrder &&
            (currentOrder.status === "SHIPPED" ||
              currentOrder.status === "PAID" ||
              currentOrder.status === "DELIVERED") && (
              <div className="bg-primary order-progress progress-bar progress-bar-striped progress-bar-animated">
                PAID
              </div>
            )}
          {currentOrder &&
            (currentOrder.status === "SHIPPED" ||
              currentOrder.status === "DELIVERED") && (
              <div className="bg-secondary order-progress progress-bar progress-bar-striped progress-bar-animated">
                SHIPPED
              </div>
            )}
          {currentOrder && currentOrder.status === "DELIVERED" && (
            <div className="bg-success order-progress progress-bar progress-bar-striped progress-bar-animated">
              DELIVERED
            </div>
          )}
          {currentOrder && currentOrder.status === "CANCELED" && (
            <div className="bg-danger order-progress-canceled progress-bar progress-bar-striped progress-bar-animated">
              CANCELED
            </div>
          )}
        </div>
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
              {currentOrder && (
                <OrderSummaryPanel
                  adminAuthenticated={adminAuthenticated}
                  order={currentOrder}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({
  order: { currentOrder },
  admin: { adminAuthenticated },
}) => ({ currentOrder, adminAuthenticated });

export default connect(mapStateToProps, { getOrderDetail })(AdminOrderDetail);
