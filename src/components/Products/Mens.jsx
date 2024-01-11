import React from "react";
import Card from "../Card/Card";

const Mens = ({ products }) => {
  const filteredProducts = products.filter(
    (item) =>
      (item.category === "mens-shirts" || item.category === "mens-shoes") &&
      item.rating > 4.6
  );
  return (
    <div className="products-wrapper">
      {filteredProducts.map((item) => (
        <Card key={item.id} products={item} />
      ))}
    </div>
  );
};

export default Mens;
