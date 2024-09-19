import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import "./style.css";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkx3frI6q7FmY9FWBKG1sr0tMpzSMEUoc",
  authDomain: "invester-56b88.firebaseapp.com",
  projectId: "invester-56b88",
  storageBucket: "invester-56b88.appspot.com",
  messagingSenderId: "93258092317",
  appId: "1:93258092317:web:315cbca16a900cdb895bf4",
  measurementId: "G-J7ZFBZ9S2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Login() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      const user = userCredential.user;
      console.log("User signed in:", user);
      handleSuccess("Login successful!");
      setTimeout(() => {
        navigate("/"); // Redirect to home or desired page
      }, 1000);
    } catch (error) {
      console.error("Error signing in:", error);
      handleError(error.message);
    }
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
        <span>
          Don't have an account? <Link to={"/signup"}> Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
