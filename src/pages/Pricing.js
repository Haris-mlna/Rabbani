import React from "react";
import "../scss/pricingpages.scss";

import { RxAvatar } from "react-icons/rx";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function Pricing() {
  return (
    <>
      <Navbar />
      <div className="pricingpages">
        <div className="card-container">
          <div className="card">
            <h1>Card 1</h1>
          </div>
          <div className="card">
            <h1>Card 2</h1>
          </div>
          <div className="card">
            <h1>Card 3</h1>
          </div>
          <div className="card">
            <h1>Card 4</h1>
          </div>
          <div className="card">
            <h1>Card 5</h1>
          </div>
          <div className="card">
            <h1>Card 6</h1>
          </div>
          <div className="card">
            <h1>Card 7</h1>
          </div>
          <div className="card">
            <h1>Card 8</h1>
          </div>
          <div className="card">
            <h1>Card 9</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pricing;
