import React, { useState } from "react";

import OrderListItem from "../components/OrderListItem";

const DashOrders = () => {
  const [formData, setFormData] = useState({
    id: "",
    user_id: "",
    status: "",
    sort: "",
    limit: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { id, user_id, status, sort, limit } = formData;

  return (
    <div
      class="tab-pane fade tab-orders"
      id="v-pills-orders"
      role="tabpanel"
      aria-labelledby="v-pills-orders-tab"
    >
      <div className="card card-body mb-3">
        <form>
          <div class="form-row">
            <div class="col-6 mb-2">
              <input
                type="text"
                class="form-control"
                name="id"
                placeholder="Order ID"
                onChange={handleChange}
                value={id}
              />
            </div>
            <div class="col-6 mb-2">
              <input
                type="text"
                class="form-control"
                name="user_id"
                placeholder="User ID"
                onChange={handleChange}
                value={user_id}
              />
            </div>
            <div className="col-4 mb-2">
              <select
                class="custom-select custom-select-sm"
                onChange={handleChange}
                value={status}
                name="status"
              >
                <option value="" selected>
                  Order Status
                </option>
                <option value="status=CONFIRMED">CONFIRMED</option>
                <option value="status=PAID">PAID</option>
                <option value="status=SHIPPED">SHIPPED</option>
                <option value="status=DELIVERED">DELIVERED</option>
                <option value="status=CANCELED">CANCELED</option>
              </select>
            </div>
            <div className="col-4 mb-2">
              <select
                class="custom-select custom-select-sm"
                onChange={handleChange}
                value={sort}
                name="sort"
              >
                <option value="" selected>
                  Sort By
                </option>
                <option value="sort=final_price-asc">Price Lowest First</option>
                <option value="sort=final_price-desc">
                  Price Lowest First
                </option>
                <option value="sort=created_at-desc">
                  Date Most Recent First
                </option>
                <option value="sort=created_at-asc">Date Earliest First</option>
              </select>
            </div>
            <div className="col-4 mb-2">
              <select
                class="custom-select custom-select-sm"
                onChange={handleChange}
                value={limit}
                name="limit"
              >
                <option value="" selected>
                  # Results
                </option>
                <option value="limit=5">5</option>
                <option value="limit=15">15</option>
                <option value="limit=25">25</option>
                <option value="limit=50">50</option>
              </select>
            </div>
            <div className="col-4">
              <button className="btn btn-outline-primary btn-block btn-sm">
                Search
              </button>
            </div>
            <div className="col-4">
              <button className="btn btn-outline-primary btn-block btn-sm">
                Clear
              </button>
            </div>
            <div className="col-4">
              <button className="btn btn-outline-primary btn-block btn-sm">
                All Orders
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row orderlist-head">
            <div className="col-6 d-none d-lg-block p-0 ">
              <strong>Order No.</strong>
            </div>
            <div className="col-5 col-lg-2 p-0 ">
              <strong>Order Date</strong>
            </div>
            <div className="col-4 col-lg-2  p-0">
              <strong>Total</strong>
            </div>
            <div className="col-3 col-lg-2  p-0">
              <strong>Status</strong>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <OrderListItem
              order={{
                id: "e5975661-bce8-4e1a-952e-a8dd422b7546",
                created_at: "2020-07-17T02:10:43.739Z",
                final_price: "3407",
                status: "PAID",
              }}
            />
            <OrderListItem
              order={{
                id: "e5975661-bce8-4e1a-952e-a8dd422b7546",
                created_at: "2020-07-17T02:10:43.739Z",
                final_price: "3407",
                status: "PAID",
              }}
            />
            <OrderListItem
              order={{
                id: "e5975661-bce8-4e1a-952e-a8dd422b7546",
                created_at: "2020-07-17T02:10:43.739Z",
                final_price: "3407",
                status: "PAID",
              }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashOrders;
