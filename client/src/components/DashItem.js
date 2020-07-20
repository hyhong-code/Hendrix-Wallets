import React from "react";
import { connect } from "react-redux";

const DashItem = ({ item }) => {
  return (
    <li className="list-group-item orderlist-item">
      <span>
        <div className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">{item.category_name}</div>
          <div className="col-3">
            {item.discount > 0 ? (
              <div className="">
                <span>{`$${item.price / 100}`}</span>
                <span>{`$${(item.price - item.discount) / 100}`}</span>
              </div>
            ) : (
              <span>{item.price / 100}</span>
            )}
          </div>
          <div className="col-5">{`${item.description.slice(0, 30)}...`}</div>
        </div>
      </span>
    </li>
  );
};

const mapStateToProps = ({
  admin: { adminAuthenticated },
  auth: { isAuthenticated },
}) => ({
  adminAuthenticated,
  isAuthenticated,
});

export default connect(mapStateToProps)(DashItem);
