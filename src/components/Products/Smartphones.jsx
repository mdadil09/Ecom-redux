import React from "react";
import Card from "../Card/Card";

const Smartphones = ({ products }) => {
  const filteredSmartPhones = products.filter(
    (item) => item.category === "smartphones" && item.stock > 33
  );
  return (
    <div className="products-wrapper">
      {filteredSmartPhones.map((item) => (
        <Card key={item.id} products={item} />
      ))}
    </div>
  );
};

export default Smartphones;
