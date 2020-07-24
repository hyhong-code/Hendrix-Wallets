import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getCategories } from "../../actions/categoryActions";
import { getItems } from "../../actions/itemActions";
import ItemCard from "../exploreComponents/ItemCard";
import ItemFilter from "../exploreComponents/ItemFilter";

const ItemList = ({ match, categories, items, getItems, getCategories }) => {
  const [checkedboxes, setCheckedboxes] = useState([]);
  const [discountOnly, setDiscountOnly] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchResource = useCallback(() => {
    getCategories();
    getItems();
  }, [getCategories, getItems]);

  useEffect(() => {
    fetchResource();
  }, [fetchResource]);

  useEffect(() => {
    if (
      categories &&
      categories
        .map((category) => category.name)
        .includes(match.params.category)
    ) {
      setCheckedboxes([match.params.category]);
    } else if (match.params.category.startsWith("search-")) {
      setCheckedboxes([]);
      setDiscountOnly(false);
      setSearchText(match.params.category.split("-")[1]);
    }
    // eslint-disable-next-line
  }, [match.params.category]);

  return (
    <section id="itemsList" className="bg-light text-dark">
      <div className="itemslist-banner text-light d-flex align-items-center justify-content-center">
        <h1 className="display-4">BROWSE OUR PRODUCTS</h1>
      </div>
      <div className="container py-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb py-2">
            <li className="breadcrumb-item">
              <Link to="/" className="text-secondary">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Explore
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-lg-3">
            {categories && (
              <ItemFilter
                setCheckedboxes={setCheckedboxes}
                checkedboxes={checkedboxes}
                discountOnly={discountOnly}
                setDiscountOnly={setDiscountOnly}
                categories={categories}
                setSearchText={setSearchText}
              />
            )}
          </div>
          <div className="col-lg-9">
            <div className="row items-container">
              {items &&
                items
                  .filter((item) => {
                    if (!checkedboxes.length) {
                      return item;
                    } else {
                      if (checkedboxes.includes(item.category_name)) {
                        return item;
                      }
                    }
                  })
                  .filter((item) => {
                    if (discountOnly) {
                      if (item.discount > 0) {
                        return item;
                      }
                    } else {
                      return item;
                    }
                  })
                  .filter((item) => {
                    if (searchText) {
                      if (
                        item.name
                          .toLowerCase()
                          .includes(searchText.toLowerCase()) ||
                        item.description
                          .toLowerCase()
                          .includes(searchText.toLowerCase())
                      ) {
                        return item;
                      }
                    } else {
                      return item;
                    }
                  })
                  .map((item) => (
                    <div key={item.id} className="col-6 col-md-4 mb-4">
                      <ItemCard item={item} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ categories, items }) => ({ categories, items });

export default connect(mapStateToProps, { getItems, getCategories })(ItemList);
