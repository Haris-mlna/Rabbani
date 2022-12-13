import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiFillCaretDown } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "../scss/_navbar.scss";
import logo from "../assets/interfaces/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrollTop, setScrollTop] = useState(0);

  // Dropdown Function
  const dropdownShow = () => {
    const dropdownContent = document.querySelector("#dropdown-content");
    if (dropdownContent.style.display == "flex") {
      dropdownContent.style.animation = "closeDrop 300ms ease-in-out";
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
      dropdownContent.style.animation = "openDrop 300ms ease-in-out forwards";
    }
  };

  // Scrollbar Function
  useEffect(() => {
    // scroll navbar disappear function
    function onScroll() {
      let currentPosition = window.pageYOffset;
      const dropdownContent = document.querySelector("#dropdown-content");

      const navbar = document.querySelector("nav");
      if (currentPosition > scrollTop) {
        // downscroll code
        if (navbar !== null) {
          navbar.style.top = "-100px";
          dropdownContent.style.animation = "closeDrop 300ms ease-in-out";
          dropdownContent.style.display = "none";
        }
      } else {
        // upscroll code
        if (navbar !== null) {
          navbar.style.top = "0";
        }
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  // handleMenu Mobile Only
  const handleMenuOpen = () => {
    const mobileMenu = document.querySelector("#mobile-menu");
    mobileMenu.style.left = "0";
  };

  const handleMenuClose = () => {
    const mobileMenu = document.querySelector("#mobile-menu");
    mobileMenu.style.left = "-100%";
  };

  const openMobilecourse = () => {
    const dropdowncontentMobile = document.querySelector(
      "#dropdown-content-mobile"
    );
  };

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
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <button className="dropdown-course" onClick={dropdownShow}>
                <a>
                  Course <AiFillCaretDown className="icons-drop" />
                </a>
              </button>
              <div className="dropdown-content" id="dropdown-content">
                <Link to="/course">Option 1</Link>
                <Link to="/course">Option 2</Link>
              </div>
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
          <AiOutlineMenu className="hamburger-menu" onClick={handleMenuOpen} />
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className="mobile-menu" id="mobile-menu">
        <div className="layout-mobile-menu" />
        <ul>
          <li>
            <Link to="/" className="home-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">Tentang</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <button
              className="dropdown-course-mobile"
              onClick={openMobilecourse}
            >
              <a>Course</a>
            </button>
            <div
              className="dropdown-content-mobile"
              id="dropdown-content-mobile"
            >
              <Link to="/course">Option 1</Link>
              <Link to="/course">Option 2</Link>
            </div>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <span className="closeMenu" onClick={handleMenuClose}>
          <IoIosCloseCircleOutline />
        </span>
      </div>
    </>
  );
}

export default Navbar;
