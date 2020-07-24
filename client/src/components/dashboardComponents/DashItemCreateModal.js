import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import { createItem } from "../../actions/itemActions";
import { createToast } from "../../actions/toastActions";

const INITIAL_FORM = {
  name: "",
  description: "",
  price: "",
  discount: "",
  categoryId: "",
};

const DashItemCreateModal = ({ categories, createItem, createToast }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Select Producct Image");

  const { name, description, price, discount, categoryId } = formData;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (evt) => {
    setFile(evt.target.files[0]);
    setFileName(evt.target.files[0].name);
  };

  const handleSubmit = async () => {
    if (!categoryId) {
      createToast("Please select a category");
    } else {
      if (await createItem(formData, file)) {
        setFile("");
        setFileName("");
        setFormData(INITIAL_FORM);
      }
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm"
        data-toggle="modal"
        data-target="#dashItemCreateModal"
      >
        ADD NEW ITEM
      </button>
      <div
        className="modal fade"
        id="dashItemCreateModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-primary" id="staticBackdropLabel">
                CREATE PRODUCT
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
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="newProductImgUpload"
                  onChange={handleFile}
                />
                <label
                  className="custom-file-label"
                  htmlFor="newProductImgUpload"
                >
                  {fileName}
                </label>
              </div>
              <hr className="border-secondary my-3" />

              <form>
                <select
                  name="categoryId"
                  value={categoryId}
                  onChange={handleChange}
                  className="custom-select custom-select-sm"
                >
                  <option value="">Select Product Category</option>

                  {categories &&
                    categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>

                <div className="form-group mb-1 text-primary">
                  <label className="mb-1" htmlFor="name">
                    Item Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name"
                    className="form-control form-control-sm"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-1 text-primary">
                  <label className="mb-1" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    type="text"
                    name="description"
                    value={description}
                    placeholder="Description"
                    className="form-control form-control-sm"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group mb-1 text-primary">
                  <label className="mb-1" htmlFor="price">
                    Price <small className="text-muted"> (in cents)</small>
                  </label>
                  <input
                    id="price"
                    type="text"
                    name="price"
                    value={price}
                    placeholder="Price"
                    className="form-control form-control-sm"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-1 text-primary">
                  <label className="mb-1" htmlFor="price">
                    Discount <small className="text-muted"> (in cents)</small>
                  </label>
                  <input
                    id="discount"
                    type="text"
                    name="discount"
                    value={discount}
                    placeholder="Discount"
                    className="form-control form-control-sm"
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary text-light btn-sm"
                data-dismiss="modal"
              >
                CLOSE
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleSubmit}
                data-dismiss="modal"
              >
                CREATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, { createItem, createToast })(
  DashItemCreateModal
);
