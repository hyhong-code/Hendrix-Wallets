import React from "react";

import CarouselItem from "./CarouselItem";

const Carousel = ({ categories }) => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        {categories.slice(0, categories.length - 1).map((_, idx) => (
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to={`${idx + 1}`}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {categories.map((category, idx) => (
          <CarouselItem key={category.id} category={category} idx={idx} />
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
