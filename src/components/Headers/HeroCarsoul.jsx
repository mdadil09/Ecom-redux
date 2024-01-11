import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const HeroCarsoul = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left-side">
          <h1 className="hero-text">
            {" "}
            Discover the Latest <br></br> Collection 2024
          </h1>
          <p className="hero-secondary-text">
            Explore our curated collection of stylish<br></br> and high-quality
            clothing. Find the<br></br> perfect outfit for every occasion and
            <br></br>
            stay ahead in fashion.
          </p>
          <Link style={{ textDecoration: "none" }} to="/products">
            <button className="hero-btn">
              Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroCarsoul;
