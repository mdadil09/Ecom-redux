import React from "react";
import Card from "../Card/Card";

const FeaturedProducts = ({ products }) => {
  const featuredProducts = products.filter((item) => item.rating >= 4.98);
  return (
    <div className="products-wrapper">
      {featuredProducts.map((item) => (
        <Card key={item.id} products={item} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
