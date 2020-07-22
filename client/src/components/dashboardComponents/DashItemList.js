import React, { useState } from "react";

import DashItem from "./DashItem";
import DashItemCreateModal from "./DashItemCreateModal";

const DashItemList = ({ items, numPerPage }) => {
  const [curPage, setCurPage] = useState(1);
  return (
    <div className="card">
      <div className="card-body">
        <DashItemCreateModal />
        <div className="row item-list-head">
          <div className="col-4 col-lg-2">
            <strong>Name</strong>
          </div>
          <div className="col-4 col-lg-2">
            <strong>Category</strong>
          </div>
          <div className="col-4 col-lg-3">
            <strong>Price</strong>
          </div>
          <div className="d-none d-lg-block col-5">
            <strong>Description</strong>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          {items
            .slice((curPage - 1) * numPerPage, curPage * numPerPage)
            .map((item) => (
              <DashItem key={item.id} item={item} />
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
            {!!items.length &&
              Array.from(
                Array(Math.ceil(items.length / numPerPage)),
                (_, x) => x + 1
              ).map((num) => (
                <li
                  key={num}
                  className={`page-item ${num === curPage ? "active" : ""}`}
                >
                  <a className="page-link" onClick={() => setCurPage(num)}>
                    {num}
                  </a>
                </li>
              ))}
            {
              <li
                className={`page-item ${
                  curPage * numPerPage >= items.length ? "disabled" : ""
                }`}
              >
                <a
                  className="page-link"
                  aria-label="Next"
                  onClick={() => {
                    if (curPage * numPerPage < items.length) {
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
