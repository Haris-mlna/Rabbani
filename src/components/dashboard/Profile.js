import React from "react";

import { CgDanger } from "react-icons/cg";

function Profile({ userData }) {
  const getData = userData[userData.length - 1];
  const { firstName, lastName, gender, age, height, address, phone } =
    userData[0];
  const locationAdd = address.address;

  return (
    <>
      {" "}
      {(userData.length == 0 && (
        <div className="loginfirst">
          <h1>
            ERROR LOGIN FIRST <CgDanger />{" "}
          </h1>
        </div>
      )) ||
        (userData.length >= 1 && (
          <div className="dashboardsection">
            <h2>Profile</h2>
            <div className="profilesection">
              <div class="user-info">
                <ul>
                  <li>Name : {firstName + " " + lastName}</li>
                  <li>Gender : {gender}</li>
                  <li>Age : {age}</li>
                  <li>Address : {locationAdd}</li>
                  <li>Height : {height}</li>
                  <li>Phone : {phone}</li>
                </ul>
                <div className="avatar-container">
                  {gender === "male" ? (
                    <img src="/images/man.png" alt="" className="avatar" />
                  ) : (
                    <img src="/images/woman.png" alt="" className="avatar" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Profile;
