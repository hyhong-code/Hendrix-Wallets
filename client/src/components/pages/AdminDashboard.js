import React from "react";

const AdminDashboard = () => {
  return (
    <section id="admin-dashboard" className="py-6 bg-light text-dark">
      <div className="container">
        <div class="row">
          <div class="col-3">
            <div className="card card-body p-4 control-panel">
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
                  Summary
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
                  Orders
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
                  Items
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
                  Categories
                </a>
              </div>
            </div>
          </div>
          <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-summary"
                role="tabpanel"
                aria-labelledby="v-pills-summary-tab"
              >
                <h1>Summary</h1>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-orders"
                role="tabpanel"
                aria-labelledby="v-pills-orders-tab"
              >
                <h1>Orders</h1>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-items"
                role="tabpanel"
                aria-labelledby="v-pills-items-tab"
              >
                <h1>Items</h1>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-categories"
                role="tabpanel"
                aria-labelledby="v-pills-categories-tab"
              >
                <h1>Categories</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
