import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getOrders } from "../../actions/orderActions";
import OrderListItem from "../OrderListItem";

const Orders = ({ orders, getOrders }) => {
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getOrders();
    }
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line
  }, []);

  return (
    <section id="orders" className="py-6 bg-light text-dark">
      <div className="container">
        <h1 className="display-4 text-center text-primary">ORDERS</h1>
        <hr />
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="card">
              <div className="card-body">
                <div className="row orderlist-head">
                  <div className="col-6 d-none d-lg-block p-0 ">
                    <strong>Order No.</strong>
                  </div>
                  <div className="col-5 col-lg-3 p-0 ">
                    <strong>Order Date</strong>
                  </div>
                  <div className="col-4 col-lg-2  p-0">
                    <strong>Total</strong>
                  </div>
                  <div className="col-3 col-lg-1  p-0">
                    <strong>Status</strong>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  {orders &&
                    orders.map((order) => (
                      <OrderListItem key={order.id} order={order} />
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ order: { orders } }) => ({ orders });

export default connect(mapStateToProps, { getOrders })(Orders);
