import React from "react";

import ItemCard from "./ItemCard";

const DiscountedItems = () => {
  return (
    <section class="discount bg-dark text-light py-6">
      <div class="container">
        <h3 class="text-center mb-5">DISCOUNT STOCKS</h3>
        <div class="row">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </section>
  );
};

export default DiscountedItems;
