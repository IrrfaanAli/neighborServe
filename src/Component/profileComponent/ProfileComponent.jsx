import React, { useState, useEffect } from "react";
import "./ProfileComponent.css";
import Icon_info from "../Icon_info";
import { Link, Outlet, useParams } from "react-router-dom";
const ProfileComponent = (props) => {
  const {
    user_id,
    user_fullname,
    user_location,
    user_regYear,
    user_hireCount,
    user_verficationStatus,
    user_img,
    user_icon,
  } = props;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  console.log({ user_id });
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
    marginLeft: screenWidth >= 768 ? "64%" : "1%", // Adjust the breakpoint and margin values as needed
    marginTop: screenWidth >= 768 ? "38%" : "1%",
  };
  const buttonStyles2 = {
    marginLeft: screenWidth >= 768 ? "64%" : "5%", // Adjust the breakpoint and margin values as needed
    marginTop: screenWidth >= 768 ? "5%" : "1%",
  };

  return (
    <div>
      <div className="pc-container1">
        <div className="avatar">
          <div className="w-44 h-44 rounded">
            <img src={user_img} />
          </div>
        </div>

        <div className="pc-container2">
          <p style={{ fontWeight: "bold", fontSize: "22px", color: "black" }}>
            {user_fullname}
          </p>
          <div className="pc-container3">
            <img
              src="location-pinned.png"
              alt="Icon Description"
              style={{ width: "25px", height: "25px" }}
            />
            &nbsp;{user_location}
          </div>
          <div className="pc-container3">
            <img
              src="Time.png"
              alt="Icon Description"
              style={{ width: "25" }}
            />
            &nbsp;Member since {user_regYear}
          </div>
          <div className="pc-container3">
            <img
              src="trophy.png"
              alt="Icon Description"
              style={{ width: "25" }}
            />
            &nbsp;Hired {user_hireCount} times
          </div>{" "}
          <div className="pc-container3">
            <Icon_info index={user_icon} />
            &nbsp;{user_verficationStatus}&nbsp;{" "}
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

          <Link to={`/provider_profile/${user_id}`}>
            <button
              style={buttonStyles2}
              className="btn bg-blue-purple btn-xl text-white w-28"
            >
              View Profile
            </button>
          </Link>
        </div>
      </div>
      <hr className="pc-line1"></hr>
    </div>
  );
};

export default ProfileComponent;
