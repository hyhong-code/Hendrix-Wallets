import React from "react";

import shoe from "../assets/shoe.jpg";
import shirt from "../assets/shirt.jpg";
import suit from "../assets/suit.jpg";
import watch from "../assets/watch.jpg";

const Collections = () => {
  return (
    <div className="collections">
      <div className="row">
        <div className="col-6 mb-3 p-1">
          <span className="badge badge-secondary text-primary">SUIT</span>
          <img className="img-fluid rounded" src={suit} alt="" />
        </div>
        <div className="col-6 mb-3 p-1">
          <span className="badge badge-secondary text-primary">SHIRT</span>
          <img className="img-fluid rounded" src={shirt} alt="" />
        </div>
        <div className="col-6 mb-3 p-1">
          <span className="badge badge-secondary text-primary">WATCH</span>
          <img className="img-fluid rounded" src={watch} alt="" />
        </div>
        <div className="col-6 mb-3 p-1">
          <span className="badge badge-secondary text-primary">SHOE</span>
          <img className="img-fluid rounded" src={shoe} alt="" />
        </div>
        <div className="col-6 mb-3 p-1">
          <span className="badge badge-secondary text-primary">WATCH</span>
          <img className="img-fluid rounded" src={watch} alt="" />
        </div>
        <div className="col-6 mb-3 p-1">
          <span className="badge badge-secondary text-primary">SHOE</span>
          <img className="img-fluid rounded" src={shoe} alt="" />
        </div>
      </div>
      <a href="" className="btn btn-primary btn-sm btn-block">
        BROWSE ALL COLLECTIONS
      </a>
    </div>
  );
};

export default Collections;
