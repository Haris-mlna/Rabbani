import React from "react";
import "../scss/pricingpages.scss";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function Pricing() {
  return (
    <>
      <Navbar />
      <div className="pricingpages">
        <div className="card-container">
          <div className="card">Test 1</div>
          <div className="card">Test 2</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pricing;
