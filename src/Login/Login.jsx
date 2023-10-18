import React from "react";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";


function Login() {
  return (
   <> 
    <Navbar></Navbar>
    <div>
      <div className="l-container0">
        <div className="l-container1">
          <div>
            <p
              style={{
                display: "flex",
                color: "white",
                justifyContent: "center",
                marginTop: "150px",
                fontSize: "20px",
                fontWeight: "bold",

                marginBottom:"20px",
              }}
            >
              Welcome to our platform! 
            </p>

            <p
                style={{
                  display: "flex",
                  color: "white",
                  justifyContent: "center",
                  fontSize: "16px",
                  marginBottom:"20px",
                }}
              >
               New here? Sign in to get started.
            </p>
            
            <button
              className="btn"
              style={{
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
                justifyContent: "center",
                backgroundColor:"transparent",
                color:"white",
              }}
            >
              Sign In
            </button>
          </div>
        </div>

        <div className="l-container2">
          <div>
            <p
              style={{
                display: "flex",
                color: "black",
                justifyContent: "center",
                marginTop: "50px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              LOGIN TO YOUR ACCOUNT
            </p>

            <div className="input-container">
              <input
                type="text"
                placeholder="Enter username"
                className="input-field"
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
              />
            </div>

            <p
              style={{
                textAlign: "center",
                fontSize: "14px",
                marginTop: "10px",
                marginLeft:"150px",
              }}
            >
              <a href="#">Recovery Password?</a>
            </p>

       
            <button
              className="btn"
              style={{
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
                justifyContent: "center",
                marginTop: "20px",
                width:"50%",
                padding:"10px",
                border:"1px",
                borderRadius:"10px",
                backgroundColor:"#4C40ED",
                color:"white",
              }}
            >
              Sign In
            </button>

            <div className="social-login">
              <p style={{ textAlign: "center", marginTop: "20px" }}>
                Or, login with:
              </p>
              <div className="social-icons">

              
               <div>
                 <FcGoogle style={{color: "red" }} /> 
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Login;
