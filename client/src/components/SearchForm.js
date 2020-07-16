import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const SearchForm = ({ history }) => {
  const [text, setText] = useState("");

  const handleClick = (evt) => {
    evt.preventDefault();

    history.push(`/items/search-${text}`);
    setText("");
  };

  return (
    <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-2">
      <input
        type="search"
        placeholder="Search..."
        className="form-control mr-2 bg-light"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <button
        onClick={handleClick}
        className="btn btn-outline-light my-2 my-sm-0 btn-sm"
      >
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default withRouter(SearchForm);
