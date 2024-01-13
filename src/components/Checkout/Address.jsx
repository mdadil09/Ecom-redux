import React from "react";

const Address = ({ cusDetails, orderId }) => {
  const filteredAddItem = cusDetails.find((item) => item.id === orderId);
  console.log("filteredAddItem: ", filteredAddItem);
  const { name, mobile, email, address } = filteredAddItem;
  return (
    <>
      <h5>Delivery Address</h5>
      <hr />
      <div className="user-summary">
        <p>{name}</p>
        <p>{mobile}</p>
        <p>{email}</p>
        <p>{address}</p>
      </div>
    </>
  );
};

export default Address;
