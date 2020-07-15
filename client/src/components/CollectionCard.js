import React from "react";

const CollectionCard = () => {
  return (
    <div className="col-6 mb-4">
      <div className="collection-card">
        <span className="badge badge">MAREN</span>
        <img
          src="https://images.unsplash.com/photo-1560375821-bc93c77bb31d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          alt=""
          className="img-fluid w-100"
        />
      </div>
    </div>
  );
};

export default CollectionCard;
