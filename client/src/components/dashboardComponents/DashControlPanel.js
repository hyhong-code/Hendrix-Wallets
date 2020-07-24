import React, { useCallback } from "react";
import { connect } from "react-redux";

import { getItems } from "../../actions/itemActions";
import { getCategories } from "../../actions/categoryActions";
import { getAllOrders } from "../../actions/orderActions";

const DashControlPanel = ({ getCategories, getItems, getAllOrders }) => {
  const fetchResource = useCallback(() => {
    getCategories();
    getItems();
  }, [getItems, getCategories]);

  const fetchItems = useCallback(() => {
    getItems();
  }, [getItems]);

  const fetchAllOrders = useCallback(() => {
    getAllOrders();
  }, [getAllOrders]);

  return (
    <div className="card card-body p-4 control-panel">
      <h1>
        <i className="fas fa-users-cog"></i> DASHBOARD
      </h1>
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
          onClick={fetchAllOrders}
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
          onClick={fetchItems}
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
          onClick={fetchResource}
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

export default connect(null, { getCategories, getItems, getAllOrders })(
  DashControlPanel
);
