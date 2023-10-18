import React from "react";
import Navbar from "./Navbar/Navbar";
import "../styles/Appointment.css";
import { Link } from "react-router-dom";
import { ap } from "./ap";
const Appointment = () => {
  return (
    <div>
      <Navbar />
      <div className="at-container1">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to={"/"}>
                {" "}
                <a>Home</a>
              </Link>
            </li>
            <li>
              <a>Scheduled Appointment</a>
            </li>
          </ul>
        </div>
        <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>
          Schelduled Appointments
        </h1>
        {/* <div className="at-container2">
          <div className="avatar">
            <div
              className="w-16 h-16 rounded"
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "15px",
              }}
            >
              <img src="./user1.png" alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
          <p
            style={{ marginTop: "9px", fontWeight: "bold", marginLeft: "5px" }}
          >
            Mr Amit Datta
          </p>
        </div>
        <div className="at-container2"></div> */}
        <div className="overflow-x-auto" style={{ marginTop: "3%" }}>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th style={{ fontSize: "16px", color: "#4C40ED"}}>SL</th>
                <th style={{ fontSize: "16px", color: "#4C40ED" }}>
                  Service Provider Name
                </th>
                <th style={{ fontSize: "16px", color: "#4C40ED" }}>
                  Date Added
                </th>
                <th style={{ fontSize: "16px", color: "#4C40ED" }}>
                  Scheduled Date
                </th>
              </tr>
            </thead>
            {ap.map((user, userIndex) => (
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>{userIndex + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="./user2.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-80 ">
                          {user.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user.dateAdded}</td>
                  <td>
                    {" "}
                    <p style={{ marginLeft: "7%" }}>{user.sDate}</p>
                    <span className="badge badge-ghost badge-sm ml-1">
                      {user.sTime}
                    </span>
                  </td>
                  <th>
                    <Link to={`/appointment_details/${user.id}`}>
                      {" "}
                      <button className="btn btn-xs at-btn1">details</button>
                    </Link>
                  </th>
                </tr>
                {/* row 2 */}
              </tbody>
            ))}
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
