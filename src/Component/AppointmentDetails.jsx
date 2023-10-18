import React from "react";
import Navbar from "./Navbar/Navbar";
import "../styles/AppointmentDetails.css";
import { Link, useParams } from "react-router-dom";
import { ap } from "./ap";
const AppointmentDetails = () => {
  const { searchString } = useParams();
  const val = +searchString;
  return (
    <div>
      <Navbar />{" "}
      {ap
        .filter((user) => user.id === val)
        .map((user, userIndex) => (
          <div className="ad-container1">
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to={"/"}>
                    {" "}
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to={"/appointment"}>
                    {" "}
                    <a>Scheduled Appointments</a>
                  </Link>
                </li>
                <li>Appoinment {val}</li>
              </ul>
            </div>

            <p style={{ fontSize: "22px", marginLeft: "1%", marginTop: "1%" }}>
              Scheduled Appointment with with{" "}
              <span style={{ fontWeight: "bold", color: "#4C40ED" }}>
                {user.name}
              </span>
            </p>
            <br />
            <div style={{ display: "flex" }}>
              <div className="avatar" style={{ marginLeft: "2%" }}>
                <div className="w-16 rounded">
                  <img src="./user1.png" alt="Tailwind-CSS-Avatar-component" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "250px",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    marginLeft: "2%",
                    fontWeight: "bold",
                  }}
                >
                  {user.name}
                </p>
                <p style={{ marginLeft: "2%", color: "#4C40ED" }}>
                  {user.category}
                </p>
              </div>
            </div>
            <p
              style={{
                marginTop: "1%",
                fontSize: "16px",
                marginLeft: "2%",
                fontWeight: "bold",
              }}
            >
              Appointment added on:{" "}
              <span style={{ fontWeight: "normal" }}>{user.dateAdded}</span>
            </p>
            <p
              style={{
                fontSize: "16px",
                marginLeft: "2%",
                fontWeight: "bold",
              }}
            >
              Scheduled Appointment Time:{" "}
              <span style={{ fontWeight: "normal" }}>
                {user.sDate} - {user.sTime}
              </span>
            </p>

            <p
              style={{
                fontSize: "16px",
                marginLeft: "2%",
                marginTop: "1%",
                color: "#4C40ED",
                fontWeight: "bold",
              }}
            >
              Note:
            </p>
            <p
              style={{
                fontSize: "15px",
                marginLeft: "2%",
                marginRight: "2%",
                textAlign: "justify",
              }}
            >
              {user.note}
            </p>
            <div className="ad-container2">
              <button className="btn btn-primary">
                Reschedule Appointment
              </button>
              <button
                className="btn btn-outline btn-primary"
                style={{ marginLeft: "2%" }}
              >
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AppointmentDetails;
