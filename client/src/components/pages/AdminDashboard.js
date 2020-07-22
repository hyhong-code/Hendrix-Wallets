import React from "react";

import DashControlPanel from "../dashboardComponents/DashControlPanel";
import DashSummary from "../dashboardComponents/DashSummary";
import DashOrders from "../dashboardComponents/DashOrders";
import DashItems from "../dashboardComponents/DashItems";
import DashCategories from "../dashboardComponents/DashCategories";
import DashUsers from "../dashboardComponents/DashUsers";
import DashStock from "../dashboardComponents/DashStock";

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
