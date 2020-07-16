import React from "react";

const OrderlistItem = () => {
  return (
    <li className="list-group-item orderlist-item">
      <a href="#!">
        <div className="row">
          <div className="col-4 d-none d-md-block">LvsnATpgyEpCjL9TdSBF</div>
          <div className="col-8 col-lg-4">July 15, 2020</div>
          <div className="col-2 d-none d-lg-block">9 Pieces</div>
          <div className="col-4 col-lg-2">$99.99</div>
        </div>
      </a>
    </li>
  );
};

export default OrderlistItem;
