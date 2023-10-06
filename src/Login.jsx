import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Component/Navbar/Navbar";
import "./styles/login.css";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="l-container0">
        <div className="l-container1">
          <div>
            <p
              style={{
                display: "flex",
                color: "white",
                justifyContent: "center",
                marginTop: "50%",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Already have an account?
            </p>
            <button
              className="btn w-32 "
              style={{
                display: "flex",
                marginLeft:"auto",
                marginTop: "5%",
                marginRight:"auto",
                justifyContent: "center",
                
              }}
            >
              Button
            </button>
          </div>
        </div>
        <div className="l-container2">Hello world2</div>
      </div>
    </div>
  );
}

export default Login;
