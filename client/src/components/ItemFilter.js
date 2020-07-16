import React from "react";

const ItemFilter = ({
  categories,
  checkedboxes,
  setCheckedboxes,
  discountOnly,
  setDiscountOnly,
}) => {
  const handleCheckboxChange = (evt) => {
    const { name } = evt.target;
    setCheckedboxes((prev) => {
      if (prev.includes(name)) {
        return prev.filter((category) => category !== name);
      } else {
        return [...prev, name];
      }
    });
  };

  const handleClear = () => {
    setCheckedboxes([]);
    setDiscountOnly(false);
  };

  const handleCheckAll = () => {
    setDiscountOnly(true);
    setCheckedboxes(categories.map((category) => category.name));
  };

  return (
    <div className="card mb-3 mb-lg-0">
      <div className="card-body">
        <p className="lead text-primary mb-1 mb-lg-3">Collections</p>
        <div className="d-flex flex-row flex-wrap flex-wrap flex-lg-column align-items-start">
          {categories.map((category) => (
            <div
              key={category.id}
              className="custom-control custom-checkbox mb-1 mb-lg-3 mr-3 mr-lg-0 "
            >
              <input
                type="checkbox"
                className=" custom-control-input"
                id={`check ${category.id}`}
                checked={checkedboxes.includes(category.name)}
                onChange={handleCheckboxChange}
                name={category.name}
              />
              <label
                htmlFor={`check ${category.id}`}
                className="custom-control-label"
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>
        <hr className="my-1 my-lg-3" />
        <p className="lead text-primary mb-1 mb-lg-3">Promotion</p>
        <div className="d-flex flex-row flex-wrap flex-lg-column align-items-start">
          <div className="custom-control custom-checkbox mb-1 mb-lg-3 mr-3 mr-lg-0 ">
            <input
              type="checkbox"
              className=" custom-control-input"
              id="customCheckDiscount"
              onChange={() => setDiscountOnly((prev) => !prev)}
              checked={discountOnly}
            />
            <label
              htmlFor="customCheckDiscount"
              className="custom-control-label"
            >
              DISCOUNT
            </label>
          </div>
        </div>
        <hr className="my-1 my-lg-3" />
        <div className="d-flex flex-column align-items-center">
          <div className="mt-3">
            <button
              className="btn btn-outline-primary"
              onClick={handleCheckAll}
            >
              All
            </button>
            <button
              className="btn btn-outline-secondary ml-3"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFilter;
