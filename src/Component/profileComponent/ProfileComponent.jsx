import React, { useState, useEffect } from "react";
import "./ProfileComponent.css";
import Icon_info from "../Icon_info";
const ProfileComponent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update the screen width state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define responsive styles
  const buttonStyles = {
    marginLeft: screenWidth >= 768 ? "81%" : "1%", // Adjust the breakpoint and margin values as needed
    marginTop: screenWidth >= 768 ? "38%" : "1%",
  };
  const buttonStyles2 = {
    marginLeft: screenWidth >= 768 ? "81%" : "5%", // Adjust the breakpoint and margin values as needed
    marginTop: screenWidth >= 768 ? "5%" : "1%",
  };

  return (
    <div>
      <div className="pc-container1">
        {/* <div className="image-box">
          <img src="elec.jpg" alt="Image Description" />
  </div>*/}
        <div className="avatar">
          <div className="w-44 h-44 rounded">
            <img src="user1.png" />
          </div>
        </div>

        <div className="pc-container2">
          <p style={{ fontWeight: "bold", fontSize: "22px", color: "black" }}>
            Mr Abdur Rahman
          </p>
          <div className="pc-container3">
            <img
              src="location-pinned.png"
              alt="Icon Description"
              style={{ width: "25px", height: "25px" }}
            />
            &nbsp;South Badda, Dhaka-1212
          </div>
          <div className="pc-container3">
            <img
              src="Time.png"
              alt="Icon Description"
              style={{ width: "25" }}
            />
            &nbsp;Member since 2023
          </div>
          <div className="pc-container3">
            <img
              src="trophy.png"
              alt="Icon Description"
              style={{ width: "25" }}
            />
            &nbsp;Hired 14 times
          </div>{" "}
          <div className="pc-container3">
            <Icon_info />
            &nbsp;50%&nbsp;{" "}
            <p style={{ fontWeight: "bold", color: "#4C40ED" }}> Verified</p>
          </div>
          <div>
            <p className="pc-container4" style={{ backgroundColor: "#F9EFFB" }}>
              &nbsp;&nbsp;Featured Comment: Mr Khan says “Great
              professional”&nbsp;&nbsp;
            </p>
          </div>
        </div>
        <div className="pc-container5">
          <button
            className="btn bg-blue-purple btn-xl text-white w-28"
            style={buttonStyles}
          >
            Message
          </button>

          <button
            style={buttonStyles2}
            className="btn bg-blue-purple btn-xl text-white w-28"
          >
            View Profile
          </button>
        </div>
      </div>
      <hr className="pc-line1"></hr>
    </div>
  );
};

export default ProfileComponent;
