import React from "react";

import { Link } from "react-router-dom";

const OrderlistItem = () => {
  return (
    <li className="list-group-item orderlist-item">
      <Link to="/orderDetail">
        <div className="row">
          <div className="col-4 p-0 d-none d-lg-block">
            LvsnATpgyEpCjL9TdSBF
          </div>
          <div className="col-5 col-lg-2 p-0">7/15/2020</div>
          <div className="col-2 p-0 d-none d-lg-block ">9 Pieces</div>
          <div className="col-4 col-lg-2 p-0">$99.99</div>
          <div className="col-3 col-lg-2 p-0">
            <span className="badge badge-primary">Pending</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default OrderlistItem;
