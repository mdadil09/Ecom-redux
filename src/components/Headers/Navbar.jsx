import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSignIn,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

import useAuth from "../../Auth/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../Auth/firebase";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const item = useSelector((state) => state.cart.carts);
  const wishLists = useSelector((state) => state.wishlist.wishlists);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        toast.success("Successfully Signed Out");

        console.log("Signed out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        RedKart
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
          <Link to="/orders">My Orders</Link>
        </li>
        <li>
          <Link href="#">Contact Us</Link>
        </li>
      </ul>
      <div className="right-side">
        <Link className="wishlist-icon-nav" to="/wishlist">
          <FontAwesomeIcon style={{ marginTop: 8 }} icon={farHeart} size="lg" />
          {currentUser && wishLists.length > 0 ? (
            <div className="cart-quantity">
              {currentUser ? wishLists.length : 0}
            </div>
          ) : null}
        </Link>
        <Link className="cart-icon" to="/cart">
          <FontAwesomeIcon style={{ marginTop: 10 }} icon={faCartShopping} />{" "}
          {currentUser && item.length > 0 ? (
            <div className="cart-quantity">{currentUser ? item.length : 0}</div>
          ) : null}
        </Link>
        {currentUser ? (
          <Link className="login-button" to="" onClick={handleLogOut}>
            Logout <FontAwesomeIcon icon={faSignOut} />
          </Link>
        ) : (
          <Link className="login-button" to="/auth">
            {" "}
            Login <FontAwesomeIcon icon={faSignIn} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
