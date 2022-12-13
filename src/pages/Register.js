import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";

import "../scss/registpages.scss";

// Icons
import { TfiEmail } from "react-icons/tfi";
import {
  AiFillUnlock,
  AiOutlineUser,
  AiOutlinePhone,
  AiFillLock,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaAddressCard, FaBirthdayCake } from "react-icons/fa";

function Register() {
  const baseUrl = "";

  const handleSubmit = (event) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<Link to="/">Why do I have this issue?</Link>',
    });

    event.preventDefault();
    fetch(baseUrl, {
      method: "POST",
      body: event.target,
    });
  };

  return (
    <>
      <Navbar />
      <div className="registerpages">
        <h4>Register</h4>
        <form
          action="POST"
          name="register"
          className="register-form"
          id="register-form"
        >
          <div className="container-inside-form">
            <div className="container-left-side">
              <span>Nama</span>

              <div className="username-container container-register-form">
                <label htmlFor="username">
                  <AiOutlineUser />
                </label>
                <input
                  type="text"
                  className="username"
                  id="username"
                  name="username"
                  placeholder="Your Name"
                  minLength="8"
                  autoComplete="off"
                  required
                />
              </div>

              <span>Tempat Lahir</span>

              <div className="place-container container-register-form">
                <label htmlFor="place">
                  <GoLocation />
                </label>
                <input
                  type="text"
                  className="place"
                  id="place"
                  name="place"
                  placeholder="Jakarta"
                  required
                />
              </div>

              <span>Identitas ( NIK )</span>

              <div className="identitas-container container-register-form">
                <label htmlFor="identitas">
                  <FaAddressCard />
                </label>
                <input
                  type="text"
                  className="identitas"
                  id="identitas"
                  name="identitas"
                  placeholder="32100XXXXXXXXXXXXX"
                  required
                />
              </div>

              <span>No.Hp</span>

              <div className="phone-container container-register-form">
                <label htmlFor="phone">
                  <AiOutlinePhone />
                </label>
                <input
                  type="text"
                  className="phone"
                  id="phone"
                  name="phone"
                  placeholder="081xxxxxxxxxxx"
                  minLength="12"
                  required
                />
              </div>
            </div>

            <div className="container-right-side">
              <span>Email</span>
              <div className="email-container container-register-form">
                <label htmlFor="email">
                  <TfiEmail />
                </label>
                <input
                  type="text"
                  className="email"
                  id="email"
                  name="email"
                  placeholder="Rabbani@example.com"
                  required
                />
              </div>

              <span>Tanggal Lahir</span>

              <div className="birthdate-container container-register-form">
                <label htmlFor="birthdate">
                  <FaBirthdayCake />
                </label>
                <input
                  type="date"
                  className="birthdate"
                  id="birthdate"
                  name="birthdate"
                  required
                />
              </div>

              <span>Password</span>

              <div className="password-container container-register-form">
                <label htmlFor="password">
                  <AiFillUnlock />
                </label>
                <input
                  type="password"
                  className="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>

              <span>Confirm Password</span>

              <div className="confirm-pass-container container-register-form">
                <label htmlFor="confirm-pass">
                  <AiFillLock />
                </label>
                <input
                  type="password"
                  className="confirm-pass"
                  id="confirm-pass"
                  name="confirm-pass"
                  placeholder="Re-Confirm"
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" onClick={handleSubmit} className="submitreg">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
