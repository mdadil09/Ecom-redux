import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Headers/Navbar";
import Footer from "../components/Footer/Footer";
import bags from "../assests/bags.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "../Auth/firebase";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const AuthPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const toggleForm = () => {
    console.log("Toggling form");
    setIsActive((prevIsActive) => !prevIsActive);
    console.log("isActive after toggle:", isActive);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSigninClick = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigate("/");
      toast.success("Successfully Signed In");
      console.log(user);
    } catch (error) {
      toast.error("Somethng Went Wrong");
    }
  };

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const storageRef = ref(storage, name + mobile);
      const uploadTask = uploadBytesResumable(storageRef);

      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: name,
              phoneNumber: mobile,
            });

            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: name,
              email,
              phoneNumber: mobile,
            });
          });
        }
      );
      toast.success("Successfully Signed In");
      navigate("/auth");
      console.log(user);
    } catch (error) {
      toast.error("Somethng Went Wrong");
    }
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
              <form action="" onSubmit={handleSigninClick}>
                <h2>Sign In</h2>
                <input
                  type="email"
                  name=""
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <input
                  type="password"
                  name=""
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
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
              <form action="" onSubmit={handleRegisterClick}>
                <h2>Create an account</h2>
                <input
                  type="text"
                  name=""
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={handleNameChange}
                />
                <input
                  type="email"
                  name=""
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={handleEmailChange}
                />
                <input
                  type="password"
                  name=""
                  placeholder="Create Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <input
                  type="text"
                  name=""
                  placeholder="Enter Your Mobile"
                  value={mobile}
                  onChange={handleMobileChange}
                />
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

export default AuthPage;
