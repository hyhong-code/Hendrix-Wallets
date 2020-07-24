import React, { useState } from "react";
import { connect } from "react-redux";

import DashCategoryCard from "./DashCategoryCard";
import DashCategoryCreatePanel from "./DashCategoryCreatePanel";

const DashCategories = ({ categories, items }) => {
  const [showControl, setShowControl] = useState(false);
  return (
    <div
      className="tab-pane fade dash-categories"
      id="v-pills-categories"
      role="tabpanel"
      aria-labelledby="v-pills-categories-tab"
    >
      <button
        className="btn btn-outline-dark btn-sm mb-2"
        onClick={() => setShowControl((prev) => !prev)}
      >
        ADD CATEGORY
      </button>
      <div className={`${showControl ? "d-none" : "d-block"}`}>
        {categories &&
          items &&
          categories.map((category) => (
            <DashCategoryCard category={category} items={items} />
          ))}
      </div>
      <div className={`row ${showControl ? "d-block" : "d-none"}`}>
        <div className="col-md-8 offset-md-2">
          <DashCategoryCreatePanel />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ categories, items }) => ({ categories, items });

export default connect(mapStateToProps)(DashCategories);
