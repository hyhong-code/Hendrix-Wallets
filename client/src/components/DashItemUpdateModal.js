import React, { useState, useEffect } from "react";

const DashItemUpdateModal = ({ item }) => {
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

  const closeModal = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      discount: "",
    });
  };

  return (
    <div
      class="modal fade"
      id={`dash-item-modal-${item.id}`}
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-primary" id="staticBackdropLabel">
              Update Item
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
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
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary text-light"
              onClick={closeModal}
              data-dismiss="modal"
            >
              CLOSE
            </button>
            <button type="button" class="btn btn-primary">
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashItemUpdateModal;
