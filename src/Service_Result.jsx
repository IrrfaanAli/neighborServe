import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import ProfileComponent from "./Component/profileComponent/ProfileComponent";
import "./styles/Service_Result.css";
const Service_Result = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div className="sr-container0">
        <div
          className="sr-container6"
        >
          <p style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}>
            Sort Result
          </p>
          <br />
          <p>Verification Level</p>
          <select className="select select-info w-max max-w-xs border-blue-purple">
            <option disabled selected>
              Select Verification Level
            </option>
            <option>More verified</option>
            <option>Less verified</option>
          </select>
        </div>

        <div className="sr-container1">
          <p style={{ fontWeight: "bold", color: "black" }}>
            Top 5 Electricians near you
          </p>
          <div className="text-sm breadcrumbs text-gray-400">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Browse Services</a>
              </li>
              <li>Electricians</li>
            </ul>
          </div>
          <h2 className="sr-h2">Electricians</h2>
          <select className="select select-info w-max max-w-xs border-blue-purple sr-container7">
            <option disabled selected>
              Select Verification Level
            </option>
            <option>More verified</option>
            <option>Less verified</option>
          </select>
          
          <hr className="sr-line1"></hr>
          <ProfileComponent />
          <ProfileComponent />
          <ProfileComponent />
          <ProfileComponent />
          <ProfileComponent />
        </div>
      </div>
    </div>
  );
};

export default Service_Result;
