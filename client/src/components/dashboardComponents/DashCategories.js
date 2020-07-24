import React, { useState } from "react";
import { connect } from "react-redux";

import { createCategory, getCategories } from "../../actions/categoryActions";
import { getItems } from "../../actions/itemActions";
import { createToast } from "../../actions/toastActions";
import DashCategoryCard from "./DashCategoryCard";
import DashCategoryCreatePanel from "./DashCategoryCreatePanel";

const DashCategories = ({ categories, items, createCategory, createToast }) => {
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
        {showControl ? "BACK" : "ADD COLLECTION"}
      </button>
      <div className={`${showControl ? "d-none" : "d-block"}`}>
        {categories &&
          items &&
          categories.map((category) => (
            <DashCategoryCard
              key={category.id}
              category={category}
              items={items}
            />
          ))}
      </div>
      <div className={`row ${showControl ? "d-block" : "d-none"}`}>
        <div className="col-md-8 offset-md-2">
          <DashCategoryCreatePanel
            createCategory={createCategory}
            createToast={createToast}
            setShowControl={setShowControl}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ categories, items }) => ({ categories, items });

export default connect(mapStateToProps, {
  createCategory,
  createToast,
  getCategories,
  getItems,
})(DashCategories);
