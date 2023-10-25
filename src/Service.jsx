import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./service.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

function Service(){



    const colors = [
        "#efbbff",
        "#d896ff",
        "#be29ec",
        "#7732A6",
        "#4C40ED",
        "#2E22AB",
        "black",
      ];
    
      // Initialize the color index using the state
      const [colorIndex, setColorIndex] = useState(0);
    
      // Update the color every 2 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          // Calculate the next color index
          setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 700);
    
        // Cleanup the interval to avoid memory leaks
        return () => clearInterval(interval);
      }, []);




    return(
  <>   
   <Navbar></Navbar>  
    <div>
        <div className="main1">
            <div className="main2">

                   <div>
                            <p
                            style={{
                                display: "flex",
                                color: "black",
                                justifyContent: "center",
                                marginTop: "30px",
                                fontSize: "25px",
                                fontWeight: "bold",

                                color: colors[colorIndex],
                                transition:"color 0.5s",
                            }}
                            >
                                SERVICE PROVIDER REGISTRATION
                            </p>
                            <div className="s-underline"></div>
                            <div className="service-reg-container">

                                <div className="reg-form">
            
                                        <div className="service-reg-label">Full Name*</div>
                                        <input type="text" placeholder="Enter your first name" className="service-reg-field" />

                                        
                                        <div className="service-reg-label">Email*</div>
                                        <input type="text" placeholder="Enter your last name" className="service-reg-field" />

     
                                                 
                                        <div className="service-reg-label">Position you are applying for*</div>
                                            <select className="service-reg-field">
                                            <option value="">Choose option</option>
                                            <option value="electrician">Electrician</option>
                                            <option value="plumber">Plumber</option>
                                            <option value="handyman">Handyman</option>
                                            </select>
                                        </div>
                            
            


                                <div className="additional-service-reg-container">
                            
                                    
                                                                        
                                
                                    <div className="service-reg-label">Phone Number*</div>
                                    <input type="text" placeholder="Enter your phone number" className="service-reg-field" />

                                    
                                    <div className="service-reg-label">Area*</div>
                                    <select className="service-reg-field">
                                    <option value="">Select</option>
                                    <option value="badda">Badda</option>
                                    <option value="gulshan">Gulshan</option>
                                    <option value="banani">Banani</option>
                                    <option value="mirpur">Mirpur</option>
                                    <option value="dhanmondi">Dhanmondi</option>
                                    </select>

                                    
                                    <div className="service-reg-label">Confirm Password*</div>
                                    <input type="password" placeholder="Create a password" className="service-reg-field" />
                                </div>
                            </div>    






                                <button
                                className="service-reg-btn"
                                style={{
                                    display: "flex",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    justifyContent: "center",
                                    marginTop: "20px",
                                    width:"30%",
                                    padding:"10px",
                                    border:"1px",
                                    borderRadius:"10px",
                                    backgroundColor:"#4C40ED",
                                    color:"white",
                                  }}
                                >
                                Sign Up
                                </button>
                  </div>



 
            </div>

                <div className="main3">
                         

                <div>
                        <p style={{
                            display:"flex",
                            color:"white",
                            justifyContent:"center",
                            marginTop:"170px",
                            fontSize:"20px",
                            fontWeight:"bold",
                        }}>
                            Already have an account?
                        </p>
                        
                        <button className="service-signin-btn"
                        style={{
                            display: "flex",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    justifyContent: "center",
                                    marginTop: "20px",
                                    width:"30%",
                                    padding:"10px",
                                    border:"1px",
                                    borderRadius:"10px",
                                    backgroundColor:"white",
                                    color:"#570DF8",
                          }}>
                            <Link to={"/login"}>
                            Sign In
                            </Link>
                        </button>

                </div>
            </div>
         </div>
    </div>
    <Footer></Footer>
 </>

    );
}

export default Service;