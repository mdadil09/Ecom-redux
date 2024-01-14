import React from "react";
import Modal from "react-modal";
import remove from "../../assests/remove.png";
import { getPriceAfterDiscount } from "../../config/config";
import Address from "./Address";

const customStyles = {
  content: {
    // width: "600px",
    // height: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    background: "var(--light-gohan, #FFF)",
    boxShadow:
      "0px 0px 1px 0px rgba(0, 0, 0, 0.20), 0px 0px 32px -8px rgba(0, 0, 0, 0.12), 0px 32px 32px -8px rgba(0, 0, 0, 0.08)",
  },
};

const OrderInfo = ({
  filteredItem,
  cusDetails,
  modal,
  toggleModal,
  isClick,
}) => {
  const id = cusDetails.map((item) => item.id);

  const orderId = id[0];
  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={toggleModal}
        style={customStyles}
        overlayClassName="Overlay"
      >
        <div className="paySum-container">
          <div className="modal-header-sum">
            <div className="modal-header-text">Order Info</div>
            <button onClick={toggleModal}>
              <img src={remove} alt="close" />
            </button>
          </div>
          <hr style={{ margin: "10px", color: "black", borderRadius: "1px" }} />
          <div className="order-summary">
            {isClick
              ? filteredItem && (
                  <div className="pro-summary">
                    <span className="theme-color">Payment Summary</span>
                    <div className="mb-3">
                      <hr className="new1 text-secondary" />
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="font-weight-bold">
                        {filteredItem.title}
                      </span>
                      <span className="text-muted">
                        $
                        {getPriceAfterDiscount(
                          filteredItem.price,
                          filteredItem.discountPercentage
                        )}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <small>Shipping</small>
                      <small>$5.00</small>
                    </div>
                    <div className="d-flex justify-content-between">
                      <small>Tax</small>
                      <small>$0.00</small>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <span className="font-weight-bold">Total</span>
                      <span className="font-weight-bold theme-color">
                        ${" "}
                        {parseFloat(
                          getPriceAfterDiscount(
                            filteredItem.price,
                            filteredItem.discountPercentage
                          )
                        ) + parseInt(5)}
                      </span>
                    </div>
                  </div>
                )
              : null}
            <hr />

            <Address cusDetails={cusDetails} orderId={orderId} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OrderInfo;
