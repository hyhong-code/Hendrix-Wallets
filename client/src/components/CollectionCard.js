import React from "react";
import { withRouter } from "react-router-dom";

const CollectionCard = ({ history, category }) => {
  const handleClick = () => {
    history.push(`/items/${category.name}`);
  };

  return (
    <div className="col-6 mb-3" onClick={handleClick}>
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

export default withRouter(CollectionCard);
