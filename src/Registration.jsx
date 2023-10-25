import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./registration.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

function Registration(){

    
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
        <div className="whole">
            <div className="left">

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
                        
                        <button className="overlay-btn"
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

                <div className="right">
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
                                transition: "color 0.5s",
                            }}
                            >
                                CREATE AN ACCOUNT
                            </p>
                            <div className="r-underline"></div>

                            <div className="reg-container">
                                
                                    <div className="reg-label">First Name*</div>
                                    <input type="text" placeholder="Enter your first name" className="reg-field" />

                                    
                                    <div className="reg-label">Last Name*</div>
                                    <input type="text" placeholder="Enter your last name" className="reg-field" />

                                    
                                    <div className="reg-label">Phone Number*</div>
                                    <input type="text" placeholder="Enter your phone number" className="reg-field" />

                                    
                                    <div className="reg-label">Email*</div>
                                    <input type="text" placeholder="Enter your email address" className="reg-field" />

                                    
                                    <div className="reg-label">Create Password*</div>
                                    <input type="password" placeholder="Create a password" className="reg-field" />
                            
                                
                            </div>
                        

                                <button
                                className="reg-btn"
                                style={{
                                    display: "flex",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    justifyContent: "center",
                                    marginTop: "10px",
                                    width:"30%",
                                    padding:"10px",
                                    border:"1px",
                                    borderRadius:"10px",
                                    backgroundColor:"#4C40ED",
                                    color:"white",
                                  }}
                                >
                                <Link to={"/login"}>
                                     Sign up
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

export default Registration;