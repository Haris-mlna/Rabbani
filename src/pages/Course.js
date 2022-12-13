import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../scss/coursepages.scss";

function Course() {
  return (
    <>
      <Navbar />
      <div className="coursepages">
        <h1>Course</h1>
      </div>
      <Footer />
    </>
  );
}

export default Course;
