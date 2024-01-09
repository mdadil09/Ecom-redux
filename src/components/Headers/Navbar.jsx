import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const item = useSelector((state) => state.cart.carts);

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        Redux Store
      </Link>
      <div
        className={`hamburger-menu ${menuActive ? "active" : ""}`}
        onClick={() => setMenuActive(!menuActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/orders">My Orders</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
      </ul>
      <div className="right-side">
        <Link className="login-button" to="/login">
          Login <FontAwesomeIcon icon={faSignIn} />
        </Link>
        <Link className="cart-icon" to="/cart">
          🛒
          <div className="cart-quantity">{item.length}</div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
