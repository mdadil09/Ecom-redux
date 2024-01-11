import React from "react";
import Card from "../Card/Card";

const FilteredProducts = ({ products, selectedOption }) => {
  const filteredProducts = products.filter(
    (item) => item.category === selectedOption
  );
  return (
    <div className="products-wrapper">
      {filteredProducts.map((item) => (
        <Card key={item.id} products={item} />
      ))}
    </div>
  );
};

export default FilteredProducts;
