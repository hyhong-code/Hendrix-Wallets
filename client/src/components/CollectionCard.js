import React from "react";

const CollectionCard = ({ category }) => {
  return (
    <div className="col-6 mb-3">
      <div className="collection-card">
        <span className="badge bg-secondary">{category.name}</span>
        <img
          src={category.photo}
          alt={`collection ${category.name}`}
          className="img-fluid w-100 collection-img"
        />
      </div>
    </div>
  );
};

export default CollectionCard;
