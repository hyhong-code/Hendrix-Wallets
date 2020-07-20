import React, { useState } from "react";
import { connect } from "react-redux";

import { getItems } from "../actions/itemActions";
import DashItemList from "./DashItemList";

const INITIAL_FORM_STATE = {
  name: "",
  description: "",
  category: "",
  price_MT: "",
  price_LT: "",
  sort: "",
  limit: "",
};

const DashItems = ({ categories, items, getItems, clearItems }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [numPerPage, setNumPerPage] = useState(10);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = (evt) => {
    evt.preventDefault();
    setFormData(INITIAL_FORM_STATE);
    setNumPerPage(10);
    clearItems();
  };

  const {
    name,
    description,
    category,
    price_MT,
    price_LT,
    sort,
    limit,
  } = formData;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getItems(formData);
  };
  return (
    <div
      class="tab-pane fade"
      id="v-pills-items"
      role="tabpanel"
      aria-labelledby="v-pills-items-tab"
    >
      <div className="card card-body mb-3">
        <form>
          <div className="form-row">
            <div className="col-3 mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Item Name"
                onChange={handleChange}
                value={name}
              />
            </div>
            <div className="col-3 mb-3">
              <input
                type="text"
                className="form-control"
                name="description"
                placeholder="Description"
                onChange={handleChange}
                value={description}
              />
            </div>
            <div className="col-3 mb-3">
              <select
                className="custom-select custom-select-sm"
                onChange={handleChange}
                value={price_LT}
                name="price_LT"
              >
                <option value="" defaultValue>
                  Price Less Then
                </option>
                {Array.from(Array(500), (_, i) => i + 1).map((value) => (
                  <option value={value}>${value}</option>
                ))}
              </select>
            </div>
            <div className="col-3 mb-3">
              <select
                className="custom-select custom-select-sm"
                onChange={handleChange}
                value={price_MT}
                name="price_MT"
              >
                <option value="" defaultValue>
                  Price More Then
                </option>
                {Array.from(Array(500), (_, i) => i + 1).map((value) => (
                  <option value={value}>${value}</option>
                ))}
              </select>
            </div>
            <div className="col-4 mb-3">
              <select
                className="custom-select custom-select-sm"
                onChange={handleChange}
                value={category}
                name="category"
              >
                <option value="" defaultValue>
                  Category
                </option>
                {categories &&
                  categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-4 mb-3">
              <select
                className="custom-select custom-select-sm"
                onChange={handleChange}
                value={sort}
                name="sort"
              >
                <option value="" defaultValue>
                  Sort By
                </option>
                <option value="price-ASC">Price Lowest First</option>
                <option value="price-DESC">Price Highest First</option>
                <option value="created_at-DESC">Most Recent Added First</option>
                <option value="created_at-ASC">Earliest Added First</option>
              </select>
            </div>
            <div className="col-4 mb-3">
              <select
                className="custom-select custom-select-sm"
                onChange={handleChange}
                value={limit}
                name="limit"
              >
                <option value="" defaultValue>
                  Limit
                </option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="250">250</option>
                <option value="500">500</option>
              </select>
            </div>
            <div className="col-4">
              <button
                onClick={handleSubmit}
                className="btn btn-outline-primary btn-block btn-sm"
              >
                Search
              </button>
            </div>
            <div onClick={handleClear} className="col-4">
              <button className="btn btn-outline-primary btn-block btn-sm">
                Clear
              </button>
            </div>
            <div className="col-4">
              <select
                className="custom-select custom-select-sm"
                onChange={(evt) => setNumPerPage(evt.target.value)}
                value={numPerPage}
              >
                <option value={10} defaultValue>
                  10 Per Page
                </option>
                <option value={15}>15 Per Page</option>
                <option value={20}>20 Per Page</option>
                <option value={25}>25 Per Page</option>
                <option value={50}>50 Per Page</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      {items && <DashItemList items={items} numPerPage={numPerPage} />}
    </div>
  );
};

const mapStateToProps = ({ categories, items }) => ({ categories, items });

export default connect(mapStateToProps, { getItems })(DashItems);
