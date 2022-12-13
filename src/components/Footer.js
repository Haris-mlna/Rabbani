import React from "react";
import "../scss/_footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="pages-section">
          <div className="pages-option">
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
                <Link to="/course">Course</Link>
              </li>
            </ul>
          </div>
          <div className="pages-user">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          ©2022 rabbani company. All rights reserved
        </div>
      </footer>
    </>
  );
}

export default Footer;
