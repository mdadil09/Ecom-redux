import React from "react";
import { Link } from "react-router-dom";
import { getFirstLine, getPriceAfterDiscount } from "../../config/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  addToWishList,
  removeFromWishlist,
} from "../../redux/slice/wishListSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import useAuth from "../../Auth/useAuth";
import { toast } from "react-toastify";

const Card = ({ products }) => {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const {
    id,
    thumbnail,
    title,
    category,
    description,
    price,
    discountPercentage,
    rating,
  } = products;

  const wishLists = useSelector((state) => state.wishlist.wishlists);

  const isAvailable = wishLists.some((wishlistItem) => wishlistItem.id === id);

  const handleToggleWishlist = () => {
    if (isAvailable) {
      if (currentUser) {
        dispatch(removeFromWishlist(id));
      }
    } else {
      if (currentUser) {
        dispatch(addToWishList(products));
      }
    }
    if (!currentUser) {
      toast.warning("Please Log In !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleAddCart = (item) => {
    if (currentUser) {
      dispatch(addToCart(item));
    }
    if (!currentUser) {
      toast.warning("Please Log In !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <Link to={`/productDetails/${id}`}>
        <div className="product-card" key={id}>
          <div className="product-badge">{rating.toFixed(1)} ⭐</div>
          <div className="product-wishlist">
            <FontAwesomeIcon
              icon={faHeart}
              className={`heart-icon ${
                currentUser ? (isAvailable ? "clicked" : "") : ""
              }`}
              onClick={handleToggleWishlist}
            />
          </div>

          <div className="product-tumb">
            <img src={thumbnail} alt="" />
          </div>
          <div className="product-details">
            <span className="product-catagory">{category}</span>
            <h4>
              <Link to={`/productDetails/${id}`}>{title}</Link>
            </h4>
            <p style={{ fontSize: "8px", margin: 0 }}>
              {getFirstLine(description)}
            </p>
            <div className="product-bottom-details">
              <div className="product-price">
                <small>${price}</small>$
                {getPriceAfterDiscount(price, discountPercentage)}
              </div>
              <div className="product-links">
                <button onClick={() => handleAddCart(products)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
