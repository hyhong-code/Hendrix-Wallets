import React from "react";

const DashItem = ({ item }) => {
  return (
    <li className="list-group-item dash-item">
      <div className="row">
        <div className="col-4 col-lg-2">{item.name}</div>
        <div className="col-4 col-lg-2">{item.category_name}</div>
        <div className="col-4  col-lg-3">
          {item.discount > 0 ? (
            <div className="">
              <span>{`$${item.price / 100}`}</span>
              <span>{`$${(item.price - item.discount) / 100}`}</span>
            </div>
          ) : (
            <span>{`$${item.price / 100}`}</span>
          )}
        </div>
        <div className="d-none d-lg-block col-5">{`${item.description.slice(
          0,
          30
        )}...`}</div>
      </div>
    </li>
  );
};

export default DashItem;
