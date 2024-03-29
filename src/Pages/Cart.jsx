import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItemInCart,
  incrementItemInCart,
  removeFromCart,
} from "../redux/slice/cartSlice";
import { getPriceAfterDiscount, getTotalPrice } from "../config/config";
import { Link } from "react-router-dom";
import Navbar from "../components/Headers/Navbar";
import Footer from "../components/Footer/Footer";
import { addToCheckout } from "../redux/slice/orderSlice";
import useAuth from "../Auth/useAuth";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.carts);
  const { currentUser } = useAuth();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIcrement = (id) => {
    dispatch(incrementItemInCart(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItemInCart(id));
  };

  const handleAddToCheckOut = (item) => {
    if (currentUser) {
      dispatch(addToCheckout(item));
    }
  };

  const itemToSendCheckout = cart.flatMap((item) => item.product);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="cart-card">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="cart-title">
                <div className="row">
                  <div className="col">
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  <div className="col align-self-center text-right text-muted">
                    {cart.length} {cart.length > 0 ? "items" : "item"}
                  </div>
                </div>
              </div>
              <div className="row border-top border-bottom">
                {cart.map((item) => (
                  <div
                    className="row main align-items-center"
                    key={item.product.id}
                  >
                    <div className="col-2">
                      <img
                        className="img-fluid"
                        src={item.product.thumbnail}
                        alt="thumbnail"
                      />
                    </div>
                    <div className="col">
                      <div className="row text-muted">
                        {item.product.category}
                      </div>
                      <div className="row">{item.product.title}</div>
                    </div>
                    <div className="col">
                      <button
                        href="#"
                        onClick={() => handleDecrement(item.product.id)}
                      >
                        -
                      </button>
                      <Link className="border">{parseInt(item.quantity)}</Link>
                      <button
                        href="#"
                        onClick={() => handleIcrement(item.product.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="col">
                      $
                      {(
                        getPriceAfterDiscount(
                          item.product.price,
                          item.product.discountPercentage
                        ) * item.quantity
                      ).toFixed(2)}
                      <span
                        className="close"
                        onClick={() => handleRemove(item.product.id)}
                      >
                        ✕
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="back-to-shop">
                <Link to="/">←</Link>
                <span className="text-muted">Back to shop</span>
              </div>
            </div>
            <div className="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col" style={{ paddingLeft: 0 }}>
                  Items {cart.length}
                </div>
                <div className="col text-right">$ {getTotalPrice(cart)}</div>
              </div>
              <form>
                <p>SHIPPING</p>
                <select>
                  <option className="text-muted">
                    Standard-Delivery- $5.00
                  </option>
                </select>
                <p>GIVE CODE</p>
                <input id="code" placeholder="Enter your code" />
              </form>
              <div
                className="row"
                style={{
                  borderTop: "1px solid rgba(0,0,0,.1)",
                  padding: "2vh 0",
                }}
              >
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">
                  ${" "}
                  {cart.length > 0
                    ? parseFloat(getTotalPrice(cart)) + parseFloat(5)
                    : 0.0}
                </div>
              </div>
              <Link
                style={{ textDecoration: "none" }}
                to={`${cart.length > 0 ? "/checkout" : ""}`}
              >
                {" "}
                <button
                  className="cart-btn"
                  onClick={() => handleAddToCheckOut(itemToSendCheckout)}
                >
                  CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
