import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../scss/loginpages.scss";
import { TfiEmail } from "react-icons/tfi";
import { AiFillUnlock } from "react-icons/ai";
import Swal from "sweetalert2";

function Login() {
  // Fetch

  const testData = [
    {
      email: "test1@gmail.com",
      password: "test123",
      id: 1,
    },
    {
      email: "test2@gmail.com",
      password: "test1234",
      id: 2,
    },
    {
      email: "test3@gmail.com",
      password: "test12345",
      id: 3,
    },
    {
      email: "test4@gmail.com",
      password: "test123456",
      id: 4,
    },
  ];

  // const results = [];
  // const searchField = "name";
  // const searchVal = "my Name";
  // for (var i = 0; i < obj.list.length; i++) {
  //   if (obj.list[i][searchField] == searchVal) {
  //     results.push(obj.list[i]);
  //   }
  // }

  // const handleLogin = (e) => {
  // Swal.fire({
  //   icon: "success",
  //   title: "Success",
  //   showConfirmButton: false,
  //   timer: 2500,
  // });
  // };

  const handleLogin = (e) => {
    e.preventDefault();

    const testLogin = document.querySelector("#login-form").submit();

    console.log(testLogin);

    const findResult = [];
    const searchFieldEmail = "email";
    const searchFieldPass = "password";
    const emailInput = document.querySelector("#login-email");
    const passwordInput = document.querySelector("#login-password");
    for (let i = 0; i < testData.length; i++) {
      if (
        testData[i][searchFieldEmail] == emailInput.value &&
        testData[i][searchFieldPass] == passwordInput.value
      ) {
        findResult.push(testData[i]);
      }
    }
    if (findResult.length < 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        footer: `<a href='/register'> Forgot Passwords? </a>`,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Thank You For Login",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

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
    </>
  );
}

export default Login;
