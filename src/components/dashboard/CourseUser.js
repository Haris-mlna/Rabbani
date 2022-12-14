import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

function CourseUser() {
  // Video https://youtu.be/3PMLwe_C-F0

  const showLesson = (e) => {
    if (e.target.id == "lesson-1") {
      console.log("work");
    }
  };

  return (
    <>
      <div className="dashboardsection ">
        <h2>Course</h2>
        <div class="coursesection">
          <div className="lesson">
            <button
              className="dropdown-course1 drop-course"
              onClick={showLesson}
              id="lesson-1"
            >
              <span>Lesson 1</span>
              <span>
                <AiFillCaretDown className="down" />
              </span>
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseUser;
