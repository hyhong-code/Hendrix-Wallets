import React from "react";

import DashControlPanel from "../dashboard/DashControlPanel";
import DashSummary from "../dashboard/DashSummary";
import DashOrders from "../dashboard/DashOrders";
import DashItems from "../dashboard/DashItems";
import DashCategories from "../dashboard/DashCategories";
import DashUsers from "../dashboard/DashUsers";
import DashStock from "../dashboard/DashStock";

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
