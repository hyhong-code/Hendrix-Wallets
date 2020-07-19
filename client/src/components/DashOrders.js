import React, { useState } from "react";
import { connect } from "react-redux";

import { getAllOrders, clearOrder } from "../actions/orderActions";
import DashOrderList from "./DashOrderList";

const INITIAL_FORM_STATE = {
  id: "",
  user_id: "",
  status: "",
  sort: "",
  limit: "",
};

const DashOrders = ({ orders, getAllOrders, clearOrder }) => {
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
    clearOrder();
  };

  const { id, user_id, status, sort, limit } = formData;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getAllOrders(formData);
  };

  return (
    <div
      className="tab-pane fade tab-orders"
      id="v-pills-orders"
      role="tabpanel"
      aria-labelledby="v-pills-orders-tab"
    >
      <div className="card card-body mb-3">
        <form>
          <div className="form-row">
            <div className="col-6 mb-2">
              <input
                type="text"
                className="form-control"
                name="id"
                placeholder="Order ID"
                onChange={handleChange}
                value={id}
              />
            </div>
            <div className="col-6 mb-2">
              <input
                type="text"
                className="form-control"
                name="user_id"
                placeholder="User ID"
                onChange={handleChange}
                value={user_id}
              />
            </div>
            <div className="col-4 mb-2">
              <select
                className="custom-select custom-select-sm"
                onChange={handleChange}
                value={status}
                name="status"
              >
                <option value="" defaultValue>
                  Order Status
                </option>
                <option value="CONFIRMED">CONFIRMED</option>
                <option value="PAID">PAID</option>
                <option value="SHIPPED">SHIPPED</option>
                <option value="DELIVERED">DELIVERED</option>
                <option value="CANCELED">CANCELED</option>
              </select>
            </div>
            <div className="col-4 mb-2">
              <select
                className="custom-select custom-select-sm"
                onChange={handleChange}
                value={sort}
                name="sort"
              >
                <option value="" defaultValue>
                  Sort By
                </option>
                <option value="final_price-ASC">Price Lowest First</option>
                <option value="final_price-DESC">Price Highest First</option>
                <option value="created_at-DESC">Date Most Recent First</option>
                <option value="created_at-ASC">Date Earliest First</option>
              </select>
            </div>
            <div className="col-4 mb-2">
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
      {orders && <DashOrderList orders={orders} numPerPage={numPerPage} />}
    </div>
  );
};

const mapStateToProps = ({ order: { orders } }) => ({ orders });

export default connect(mapStateToProps, { getAllOrders, clearOrder })(
  DashOrders
);
