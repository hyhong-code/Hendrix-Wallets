import React from "react";
import { connect } from "react-redux";

import DashCategoryCard from "./DashCategoryCard";

const DashCategories = ({ categories, items }) => {
  return (
    <div
      className="tab-pane fade dash-categories"
      id="v-pills-categories"
      role="tabpanel"
      aria-labelledby="v-pills-categories-tab"
    >
      {categories &&
        items &&
        categories.map((category) => (
          <DashCategoryCard category={category} items={items} />
        ))}
    </div>
  );
};

const mapStateToProps = ({ categories, items }) => ({ categories, items });

export default connect(mapStateToProps)(DashCategories);
