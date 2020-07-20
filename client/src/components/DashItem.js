import React, { Fragment } from "react";
import DashItemUpdateModal from "./DashItemUpdateModal";

const DashItem = ({ item }) => {
  return (
    <Fragment>
      <li
        className="list-group-item dash-item"
        data-toggle="modal"
        data-target="#dash-item-modal"
      >
        <div className="row">
          <div className="col-4 col-lg-2">{item.name}</div>
          <div className="col-4 col-lg-2">{item.category_name}</div>
          <div className="col-4  col-lg-3">
            {item.discount > 0 ? (
              <div className="">
                <small className="d-none d-md-inline discounted text-muted mr-1">{`$${
                  item.price / 100
                }`}</small>
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
      <DashItemUpdateModal item={item} />
    </Fragment>
  );
};

export default DashItem;
