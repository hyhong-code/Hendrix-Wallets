import React from "react";

import { Link } from "react-router-dom";

const badgeColor = (orderStatus) => {
  console.log(orderStatus);
  switch (orderStatus) {
    case "CONFIRMED":
      return "badge-info";
    case "PAID":
      return "badge-primary";
    case "SHIPPED":
      return "badge-secondary text-light";
    case "DELIVERED":
      return "badge-success";
    case "CANCELED":
      return "badge-danger";
    default:
      return "";
  }
};

const OrderlistItem = ({ order }) => {
  return (
    <li className="list-group-item orderlist-item">
      <Link to={`/orderDetail/${order.id}`}>
        <div className="row">
          <div className="col-6 p-0 d-none d-lg-block">{order.id}</div>
          <div className="col-5 col-lg-2  p-0">
            {new Date(order.created_at).toLocaleDateString()}
          </div>
          <div className="col-4 col-lg-2  p-0">${order.final_price / 100}</div>

          <div className="col-3 col-lg-2 p-0">
            <span className={`badge ${badgeColor(order.status)}`}>
              {order.status}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default OrderlistItem;
