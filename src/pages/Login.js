import React, { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../scss/loginpages.scss";

import { TfiEmail } from "react-icons/tfi";
import { AiFillUnlock } from "react-icons/ai";

function Login({ handleLogin }) {
  return (
    <>
      <Navbar />
      <div className="loginpages">
        <h4>Sign in</h4>
        <form action="POST" name="login" className="login-form" id="login-form">
          <div className="email-container container-login-form">
            <label htmlFor="login-email">
              <TfiEmail />
            </label>
            <input
              type="text"
              className="login-email"
              id="login-email"
              name="login-email"
              placeholder="Email"
              required
            />
          </div>
          <div className="password-container container-login-form">
            <label htmlFor="login-password">
              <AiFillUnlock />
            </label>
            <input
              type="password"
              name="login-password"
              id="login-password"
              placeholder="Passwords"
              required
            />
          </div>
          <button type="submit" onClick={handleLogin}>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
