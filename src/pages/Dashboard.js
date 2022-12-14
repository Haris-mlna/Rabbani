import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/dashboardpages.scss";
import Profile from "../components/dashboard/Profile";
import CourseUser from "../components/dashboard/CourseUser";
import Setting from "../components/dashboard/Setting";
import History from "../components/dashboard/History";

import { CgDanger } from "react-icons/cg";

function Dashboard({ userData }) {
  const [dashChange, setDashChange] = useState(0);

  const profileDash = () => setDashChange(0);
  const courseDash = () => setDashChange(1);
  const historyDash = () => setDashChange(2);
  const settingDash = () => setDashChange(3);

  return (
    <>
      {/* Dashboard Pages */}
      {(userData.length == 0 && (
        <div className="loginfirst">
          <h1>
            LOGIN FIRST{" "}
            <span>
              <CgDanger className="danger" />
            </span>{" "}
          </h1>
        </div>
      )) ||
        (userData.length >= 1 && (
          <div class="dashboardpages">
            <div className="dashboard-container">
              <div className="sidebar">
                <ul>
                  <li onClick={profileDash}>Profile</li>
                  <li onClick={courseDash}>Courses</li>
                  <li onClick={historyDash}>History</li>
                  <li onClick={settingDash}>Setting</li>
                  <Link to="/" className="logout">
                    logout
                  </Link>
                </ul>
              </div>
              <div className="dash-change">
                {(dashChange === 0 && <Profile userData={userData} />) ||
                  (dashChange === 1 && <CourseUser />) ||
                  (dashChange === 2 && <History />) ||
                  (dashChange === 3 && <Setting />)}
              </div>
            </div>
          </div>
        ))}
      {/* Dashbooard Pages Ends */}
    </>
  );
}

export default Dashboard;
