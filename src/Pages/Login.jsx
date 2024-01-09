import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Headers/Navbar";
import Footer from "../components/Footer/Footer";
import bags from "../assests/bags.png";

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleForm = () => {
    console.log("Toggling form");
    setIsActive((prevIsActive) => !prevIsActive);
    console.log("isActive after toggle:", isActive);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <section className="login-section">
        <div className={`login-container ${isActive ? "active" : ""}`}>
          <div className="user signinBx">
            <div className="imgBx">
              <img src={bags} alt="" />
            </div>
            <div className="formBx">
              <form action="" onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="password" name="" placeholder="Password" />
                <input type="submit" name="" defaultValue="Login" />
                <p className="signup">
                  Don't have an account ?
                  <Link to="" onClick={toggleForm}>
                    Sign Up.
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="user signupBx">
            <div className="formBx">
              <form action="" onSubmit={handleSubmit}>
                <h2>Create an account</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="email" name="" placeholder="Email Address" />
                <input type="password" name="" placeholder="Create Password" />
                <input type="password" name="" placeholder="Confirm Password" />
                <input type="submit" name="Sign Up" defaultValue="Sign Up" />
                <p className="signup">
                  Already have an account ?
                  <Link to="" onClick={toggleForm}>
                    Sign in.
                  </Link>
                </p>
              </form>
            </div>
            <div className="imgBx">
              <img src={bags} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
