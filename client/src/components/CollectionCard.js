import React from "react";

const CollectionCard = () => {
  return (
    <div className="col-6 mb-3">
      <div className="collection-card">
        <span className="badge badge">MAREN</span>
        <img
          src="https://images.unsplash.com/photo-1512358958014-b651a7ee1773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          alt=""
          className="img-fluid w-100 collection-img"
        />
      </div>
    </div>
  );
};

export default CollectionCard;
