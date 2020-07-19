import React from "react";

import DashControlPanel from "../DashControlPanel";
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
          <div class="col-lg-3">
            <DashControlPanel />
          </div>
          <div class="col-lg-9">
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
