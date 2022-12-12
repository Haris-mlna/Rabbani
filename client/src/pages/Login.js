import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../scss/loginpages.scss";
import { TfiEmail } from "react-icons/tfi";
import { AiFillUnlock } from "react-icons/ai";
import Swal from "sweetalert2";

function Login() {
  // Fetch
  useEffect(() => {}, []);

  const handleLogin = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Success",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  return (
    <>
      <Navbar />
      <div className="loginpages">
        <h4>Sign in</h4>
        <form action="GET" name="login" className="login-form" id="login-form">
          <div class="email-container container-login-form">
            <label for="login-email">
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
          <div class="password-container container-login-form">
            <label for="login-password">
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
    </>
  );
}

export default Login;
