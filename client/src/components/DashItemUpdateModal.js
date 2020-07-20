import React, { useState } from "react";
import { connect } from "react-redux";

import { updateItem } from "../actions/itemActions";

const DashItemUpdateModal = ({ item, updateItem }) => {
  const [formData, setFormData] = useState({
    name: item.name || "",
    description: item.description || "",
    price: item.price || "",
    discount: item.discount || "",
  });
  const { name, description, price, discount } = formData;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    updateItem(item.id, formData);
  };

  return (
    <div
      className="modal fade"
      id={`dash-item-modal-${item.id}`}
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-primary" id="staticBackdropLabel">
              Update Item
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img
              src={item.photo}
              alt={item.name}
              width="300"
              className="img-fluid rounded d-block mx-auto dash-modal-img"
            />
            <hr className="border-secondary" />
            <form className="ml-4">
              <div className="form-group">
                <label htmlFor="name">Item Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Name"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  type="text"
                  name="description"
                  value={description}
                  placeholder="Description"
                  className="form-control"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="price">
                  Price <small className="text-muted"> in cents</small>
                </label>
                <input
                  id="price"
                  type="text"
                  name="price"
                  value={price}
                  placeholder="Price"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">
                  Discount <small className="text-muted"> in centes</small>
                </label>
                <input
                  id="discount"
                  type="text"
                  name="discount"
                  value={discount}
                  placeholder="Discount"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary text-light"
              data-dismiss="modal"
            >
              CLOSE
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
              data-dismiss="modal"
            >
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { updateItem })(DashItemUpdateModal);
