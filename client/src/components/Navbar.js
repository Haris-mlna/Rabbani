import React from "react";
import { AiOutlineMenu, AiFillCaretDown } from "react-icons/ai";
import "../scss/_navbar.scss";
import logo from "../assets/interfaces/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar-responsive" id="navbar">
        <div className="lt-nav">
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <div className="md-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Tentang</Link>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a className="dropdown-course">
                Course <AiFillCaretDown className="icons-drop" />
              </a>
            </li>
          </ul>
        </div>
        <div className="rt-nav">
          <Link to="/login">
            <span className="login">Login</span>
          </Link>
          <Link to="/register">
            <span className="register">Register</span>
          </Link>
        </div>
        {/* Hamburger Right Side Mobiles Only */}
        <div className="rt-mobile">
          <AiOutlineMenu className="hamburger-menu" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
