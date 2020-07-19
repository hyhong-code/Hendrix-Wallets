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
        <div className="row">
          <div className="col-lg-3">
            <DashControlPanel />
          </div>
          <div className="col-lg-9">
            <div className="tab-content" id="v-pills-tabContent">
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
