import React from "react";

import DashSummary from "../DashSummary";
import DashOrders from "../DashOrders";
import DashItems from "../DashItems";
import DashCategories from "../DashCategories";
import DashUsers from "../DashUsers";
import DashStock from "../DashStock";

const AdminDashboard = () => {
  return (
    <section id="admin-dashboard" className="py-6 bg-light text-dark">
      <div className="container">
        <div class="row">
          <div class="col-3">
            <div className="card card-body p-4 control-panel">
              <h1>DASHBOARD</h1>
              <hr className="mb-4" />
              <div
                class="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  class="nav-link active"
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
                  class="nav-link"
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
                  class="nav-link"
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
                  class="nav-link"
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
                  class="nav-link"
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
                  class="nav-link"
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
          </div>
          <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
              <DashSummary />
              <DashOrders />
              <DashItems />
              <DashCategories />
              <DashUsers />
              <DashStock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
