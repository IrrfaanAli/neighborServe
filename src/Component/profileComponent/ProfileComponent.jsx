import React, { useState, useEffect } from "react";
import "./ProfileComponent.css";
import Icon_info from "../Icon_info";
import { Link, Outlet, useParams } from "react-router-dom";
const ProfileComponent = (props) => {
  const {
    _id,
    user_fullname,
    user_email,
    user_location,
    user_regYear,
    user_hireCount,
    user_verficationStatus,
    user_img,
    user_icon,
    user_rating,
  } = props;
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
          <div className="pc-container3" style={{ marginLeft: "-1%" }}>
            <img
              src="gps.svg"
              alt="Icon Description"
              style={{ width: "30px", height: "30px" }}
            />
            &nbsp;{user_location}
          </div>
          {/* <div className="pc-container3">
            <img
              src="Time.png"
              alt="Icon Description"
              style={{ width: "25" }}
            />
            &nbsp;Member since {user_regYear}
          </div> */}
          <div className="pc-container3">
            <img
              src="trophy.svg"
              alt="Icon Description"
              style={{ width: "27px", height: "27px" }}
              className="pp-container11"
            />
            &nbsp;
            <p className="pp-container12" style={{ marginLeft: "-0.4%" }}>
              Hired {user_hireCount} times
            </p>
          </div>{" "}
          <div className="pc-container3">
            <img
              style={{ height: "27px", width: "27px" }}
              src="v50.png"
              alt=""
            />
            <Icon_info index={user_icon} />
            &nbsp;{user_verficationStatus}&nbsp;{" "}
            <p style={{ fontWeight: "bold", color: "#4C40ED" }}> Verified</p>
          </div>
          <div
            className="pp-container4"
            style={{ marginTop: "-3%", marginLeft: "0.5%" }}
          >
            <img style={{ marginTop: "1%" }} src="./Star.svg" alt="" />
            &nbsp;
            <p className="pp-container12" style={{ marginTop: "2.7%" }}>
              {user_rating} <span> star rated</span>
            </p>
            &nbsp;{" "}
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

          <Link to={`/provider_profile/${_id}`}>
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
