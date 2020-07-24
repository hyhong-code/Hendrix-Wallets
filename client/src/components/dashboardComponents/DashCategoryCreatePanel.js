import React, { useState } from "react";

const DashCategoryCreatePanel = () => {
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
    const { name, description } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: description }));
  };

  const { name, description } = formData;

  return (
    <div className="card card-body">
      <form>
        <div class="form-group">
          <label for="categoryName">{fileName}</label>
          <input
            type="text"
            class="form-control"
            id="categoryName"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="categoryDescription">Description</label>
          <textarea
            class="form-control"
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
              for="#category-file"
            >
              Category Cover
            </label>
            <small className="text-muted">* A cover photo is required.</small>
          </div>
        </div>

        <div className="d-flex">
          <button type="ADD" class="btn btn-primary ml-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashCategoryCreatePanel;
