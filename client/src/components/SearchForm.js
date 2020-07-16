import React from "react";

const SearchForm = () => {
  return (
    <form action="" className="form-inline my-2 my-lg-0 ml-0 ml-lg-2">
      <input
        type="search"
        placeholder="Search Products..."
        className="form-control mr-2 bg-light"
      />
      <button className="btn btn-outline-light my-2 my-sm-0 btn-sm">
        <fas className="fas fa-search"></fas>
      </button>
    </form>
  );
};

export default SearchForm;
