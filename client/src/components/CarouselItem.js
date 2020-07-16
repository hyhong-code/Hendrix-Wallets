import React from "react";

const CarouselItem = ({ category, idx }) => {
  return (
    <div className={`carousel-item ${idx === 0 && "active"}`}>
      <div className="carousel-overlay"></div>
      <img src={category.photo} className="d-block w-100" alt="..." />

      <div className="carousel-caption d-none d-md-block">
        <div className="d-flex flex-column align-items-start text-left">
          <h5 className="mb-0 text-secondary">{category.name}</h5>
          <p className="my-1">{category.description}</p>
          <button className="btn btn-outline-light btn-sm">Discover</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
