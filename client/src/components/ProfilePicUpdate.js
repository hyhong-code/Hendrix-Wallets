import React, { useState } from "react";
import { connect } from "react-redux";

import { updateProfilePic } from "../actions/profileAction";

const ProfilePicUpdate = ({ updateProfilePic }) => {
  const [file, setFile] = useState("");

  const handleChange = (evt) => {
    setFile(evt.target.files[0]);
  };

  const handleClick = (evt) => {
    console.log(file);
    updateProfilePic(file);
  };

  return (
    <div className="input-group">
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="profile-pic"
          aria-describedby="inputGroupFileAddon04"
          onChange={handleChange}
        />
        <label className="custom-file-label" htmlFor="profile-pic">
          Profile Photo
        </label>
      </div>
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="inputGroupFileAddon04"
          onClick={handleClick}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default connect(null, { updateProfilePic })(ProfilePicUpdate);
