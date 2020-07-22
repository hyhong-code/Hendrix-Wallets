import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import DashCategoryCard from "./DashCategoryCard";

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
        <div className="col-8 offset-2">
          <div className="card card-body">
            <form>
              <div className="form-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="category-file"
                  />
                  <label
                    type="file"
                    className="custom-file-label"
                    for="#category-file"
                  >
                    Category Cover
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Category Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Description</label>
                <textarea
                  class="form-control"
                  id="exampleInputPassword1"
                ></textarea>
              </div>

              <div className="d-flex">
                <button type="ADD" class="btn btn-primary ml-auto">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ categories, items }) => ({ categories, items });

export default connect(mapStateToProps)(DashCategories);
