import React, { useState } from "react";

const DashCategoryCreatePanel = ({
  createCategory,
  createToast,
  setShowControl,
}) => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Upload a cover image");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleFile = (evt) => {
    setFile(evt.target.files[0]);
    setFileName(evt.target.files[0].name);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!file || !file.type.startsWith("image")) {
      return createToast("Cover must be a valid image");
    }
    if (await createCategory(formData, file)) {
      setFormData({
        name: "",
        description: "",
      });
      setFile("");
      setFileName("Upload a cover image");
      setShowControl(false);
    }
  };

  const { name, description } = formData;

  return (
    <div className="card card-body">
      <form>
        <div className="form-group">
          <label htmlFor="categoryName">Category Name</label>
          <input
            type="text"
            className="form-control"
            id="categoryName"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoryDescription">Category Description</label>
          <textarea
            className="form-control"
            id="categoryDescription"
            name="description"
            value={description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="category-file"
              onChange={handleFile}
            />
            <label
              type="file"
              className="custom-file-label"
              htmlFor="#category-file"
            >
              {fileName}
            </label>
            <small className="text-muted">* A cover photo is required.</small>
          </div>
        </div>

        <div className="d-flex">
          <button
            type="ADD"
            className="btn btn-primary ml-auto"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashCategoryCreatePanel;
