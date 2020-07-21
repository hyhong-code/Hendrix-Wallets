import React from "react";

const DashControlPanel = () => {
  return (
    <div className="card card-body p-4 control-panel">
      <h1>DASHBOARD</h1>
      <hr className="mb-4" />
      <div
        className="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          className="nav-link active"
          id="v-pills-summary-tab"
          data-toggle="pill"
          href="#v-pills-summary"
          role="tab"
          aria-controls="v-pills-summary"
          aria-selected="true"
        >
          SUMMARY
        </a>
        <a
          className="nav-link"
          id="v-pills-orders-tab"
          data-toggle="pill"
          href="#v-pills-orders"
          role="tab"
          aria-controls="v-pills-orders"
          aria-selected="false"
        >
          ORDERS
        </a>
        <a
          className="nav-link"
          id="v-pills-items-tab"
          data-toggle="pill"
          href="#v-pills-items"
          role="tab"
          aria-controls="v-pills-items"
          aria-selected="false"
        >
          ITEMS
        </a>
        <a
          className="nav-link"
          id="v-pills-categories-tab"
          data-toggle="pill"
          href="#v-pills-categories"
          role="tab"
          aria-controls="v-pills-categories"
          aria-selected="false"
        >
          CATEGORIES
        </a>
        <a
          className="nav-link"
          id="v-pills-users-tab"
          data-toggle="pill"
          href="#v-pills-users"
          role="tab"
          aria-controls="v-pills-users"
          aria-selected="false"
        >
          USERS
        </a>
        <a
          className="nav-link"
          id="v-pills-stock-tab"
          data-toggle="pill"
          href="#v-pills-stock"
          role="tab"
          aria-controls="v-pills-stock"
          aria-selected="false"
        >
          STOCK
        </a>
      </div>
    </div>
  );
};

export default DashControlPanel;
