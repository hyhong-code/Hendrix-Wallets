import React, { useState } from "react";

import OrderListItem from "./OrderListItem";

const DashItemList = ({ orders, numPerPage }) => {
  const [curPage, setCurPage] = useState(1);
  return (
    <div className="card">
      <div className="card-body">
        <div className="row orderlist-head">
          <div className="col-6 d-none d-lg-block p-0 ">
            <strong>Order No.</strong>
          </div>
          <div className="col-5 col-lg-2 p-0 ">
            <strong>Order Date</strong>
          </div>
          <div className="col-4 col-lg-2  p-0">
            <strong>Total</strong>
          </div>
          <div className="col-3 col-lg-2  p-0">
            <strong>Status</strong>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          {orders
            .slice((curPage - 1) * numPerPage, curPage * numPerPage)
            .map((order) => (
              <OrderListItem key={order.id} order={order} />
            ))}
        </ul>
        <hr className="border-secondary" />
        <nav
          aria-label="Page navigation"
          className="mt-4 d-flex justify-content-center align-items-center"
        >
          <ul className="pagination">
            {
              <li className={`page-item ${curPage <= 1 ? "disabled" : ""}`}>
                <a
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={() => {
                    if (curPage > 1) {
                      setCurPage(curPage - 1);
                    }
                  }}
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
            }
            {!!orders.length &&
              Array.from(
                Array(Math.ceil(orders.length / numPerPage)),
                (_, x) => x + 1
              ).map((num) => (
                <li
                  key={num}
                  className={`page-item ${num === curPage ? "active" : ""}`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => setCurPage(num)}
                  >
                    {num}
                  </a>
                </li>
              ))}
            {
              <li
                className={`page-item ${
                  curPage * numPerPage >= orders.length ? "disabled" : ""
                }`}
              >
                <a
                  className="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={() => {
                    if (curPage * numPerPage < orders.length) {
                      setCurPage(curPage + 1);
                    }
                  }}
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            }
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashItemList;
