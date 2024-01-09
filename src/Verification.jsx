import React, { useState } from "react";
import "./verification.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import axios from "axios";

const Verification = () => {
  const [progress, setProgress] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isNIDCardUpload, setIsNIDCardUpload] = useState(false);
  const [isWorkLicenseUpload, setIsWorkLicenseUpload] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const userId = localStorage.getItem("userID");

  const handlePhoneNumberChange = async (x) => {
    try {
      setPhoneNumber(x);
      console.log("Phone number " + phoneNumber);

      const apiUrlp = `http://localhost:5000/providers/verification/${userId}`;

      const dataP = {
        user_phone: phoneNumber,
      };

      try {
        const responsePatch = await axios.patch(apiUrlp, dataP);
        console.log(responsePatch.data);
      } catch (error) {
        console.error("Error updating phone number:", error);
      }
    } catch (error) {
      console.error("Error fetching user ID:", error);
    }
  };

  const handleImageUpload = async (file, section) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=1c355f7a70354c4e730b21788d766372`,
        formData
      );

      console.log(`Image uploaded successfully for ${section}:`, response.data);

      if (section === "NIDCard") {
        handleNIDCardChange();
      } else if (section === "WorkLicense") {
        handleWorkLicenseChange();
      }
    } catch (error) {
      console.error(`Error uploading image for ${section}:`, error);
    }
  };

  const handleNIDCardChange = () => {
    setIsNIDCardUpload(true);
    setShowSubmit(true);
  };

  const handleWorkLicenseChange = () => {
    setIsWorkLicenseUpload(true);
    setShowSubmit(true);
  };

  const handleFileChange = (event, section) => {
    const file = event.target.files[0];

    if (file) {
      handleImageUpload(file, section);
    } else {
      console.error("No file selected.");
    }
  };

  const increaseProgress = () => {
    if (phoneNumber.trim() !== "") {
      if (!isNIDCardUpload) {
        setProgress(33);
        setIsNIDCardUpload(true);
      } else if (!isWorkLicenseUpload) {
        setProgress(66);
        setIsWorkLicenseUpload(true);
        setShowSubmit(true);
      }
    } else {
      setError("Please enter a phone number");
    }
  };

  const handleSkip = () => {
    if (!isNIDCardUpload) {
      setIsNIDCardUpload(true);
    } else if (!isWorkLicenseUpload) {
      setIsWorkLicenseUpload(true);
      setShowSubmit(true);
    }
  };

  const handleSubmit = () => {
    setVerificationSuccess(true);
    setProgress(100);
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="verification-main">
        <div className="verification-middle">
          <div style={{ marginRight: "260px" }}>
            <label
              style={{
                color: "#4C40ED",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Verify
            </label>{" "}
            yourself
          </div>

          <br />
          A{" "}
          <label className="text-primary font-bold"> verified </label>
          service pro has more chance of getting a task.

          <div className="verification-card">
            <div className="inside1">
              <label
                className="text-primary font-bold"
                style={{ marginRight: "30px" }}
              >
                {" "}
                Verification progress{" "}
              </label>

              <div>
                <div
                  style={{
                    width: "100%",
                    height: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      backgroundColor: "#4C40ED",
                      borderRadius: "8px",
                      transition: "width 0.3s ease-in-out",
                    }}
                  ></div>
                </div>

                <div style={{ marginTop: "10px", marginRight: "350px" }}>
                  {`${progress}% verified`}
                </div>
              </div>
            </div>

            <div className="inside2">
              <label
                className="text-primary font-bold"
                style={{ marginRight: "30px" }}
              >
                {" "}
                {isWorkLicenseUpload
                  ? "Upload Work License PDF"
                  : isNIDCardUpload
                  ? "Upload NID Card PDF"
                  : "Phone number"}{" "}
              </label>

              {isWorkLicenseUpload || isNIDCardUpload ? (
                <>
                  <input
                    type="file"
                    name="uploadFile"
                    accept=".pdf, .png, .jpg, .jpeg"
                    className="file-upload"
                    onChange={(e) =>
                      handleFileChange(
                        e,
                        isNIDCardUpload ? "NIDCard" : "WorkLicense"
                      )
                    }
                  />
                  <button
                    className="next-btn"
                    onClick={() =>
                      isNIDCardUpload
                        ? handleNIDCardChange()
                        : handleWorkLicenseChange()
                    }
                  >
                    Next
                  </button>
                </>
              ) : (
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="phone-number"
                  value={phoneNumber}
                  onChange={(e) => handlePhoneNumberChange(e.target.value)}
                />
              )}

              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>

            {verificationSuccess ? (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  marginTop: "20px",
                  color: "green",
                }}
              >
                Verification Successful!
              </p>
            ) : showSubmit ? (
              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            ) : (
              <>
                <button className="continue-btn" onClick={increaseProgress}>
                  Continue
                </button>
                <button className="skip-btn" onClick={handleSkip}>
                  Skip
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Verification;


// import React, { useState } from "react";
// import "./verification.css";
// import Navbar from "./Component/Navbar/Navbar";
// import Footer from "./Component/Footer/Footer";
// import axios from "axios";

// const Verification = () => {
//   const [progress, setProgress] = useState(0);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [error, setError] = useState("");
//   const [isNIDCardUpload, setIsNIDCardUpload] = useState(false);
//   const [isWorkLicenseUpload, setIsWorkLicenseUpload] = useState(false);
//   const [showSubmit, setShowSubmit] = useState(false);
//   const [verificationSuccess, setVerificationSuccess] = useState(false);
//   const userId = localStorage.getItem("userID");
 

//   const handlePhoneNumberChange = async (x) => {
//     try {

//       setPhoneNumber(x);
//       console.log("Phone number "+ phoneNumber );

//       const apiUrlp = `http://localhost:5000/providers/verification/${userId}`;

    
//       // newPhoneNumber = newPhoneNumber.replace(/\D/g, ''); 

//       const dataP = {
//         user_phone: phoneNumber,
//       };

//       try {
//         const responsePatch = await axios.patch(apiUrlp, dataP);
//         console.log(responsePatch.data);

//       } catch (error) {
//         console.error("Error updating phone number:", error);

//       }

//     } catch (error) {
//       console.error("Error fetching user ID:", error);

//     }
//   };


//   // Dynamic Process 2: NID Card Submission Process
//   const handleNIDCardChange = () => {
//     setIsNIDCardUpload(true);
//     setShowSubmit(true);
//   };

//   // Dynamic Process 3: Work License Submission Process
//   const handleWorkLicenseChange = () => {
//     setIsWorkLicenseUpload(true);
//     setShowSubmit(true);
//   };

//   // Combined Increase Progress Function
//   const increaseProgress = () => {
//     if (phoneNumber.trim() !== "") {
//       if (!isNIDCardUpload) {
//         setProgress(33);
//         setIsNIDCardUpload(true);
//       } else if (!isWorkLicenseUpload) {
//         setProgress(66);
//         setIsWorkLicenseUpload(true);
//         setShowSubmit(true);
//       }
//     } else {
//       // setError("Please enter a phone number");
//     }
//   };

//   const handleSkip = () => {
//     // Switch fields on skip without changing progress
//     if (!isNIDCardUpload) {
//       setIsNIDCardUpload(true);
//     } else if (!isWorkLicenseUpload) {
//       setIsWorkLicenseUpload(true);
//       setShowSubmit(true);
//     }
//   };

//   const handleSubmit = () => {
//     setVerificationSuccess(true);
//     setProgress(100);
//   };

//   return (
//     <>
//       <Navbar></Navbar>

//       <div className="verification-main">
//         <div className="verification-middle">
//           <div style={{ marginRight: "260px" }}>
//             <label
//               style={{
//                 color: "#4C40ED",
//                 fontWeight: "bold",
//                 fontSize: "2rem",
//               }}
//             >
//               Verify
//             </label>{" "}
//             yourself
//           </div>

//           <br />
//           A{" "}
//           <label className="text-primary font-bold"> verified </label>
//           service pro has more chance of getting a task.

//           <div className="verification-card">
//             <div className="inside1">
//               <label
//                 className="text-primary font-bold"
//                 style={{ marginRight: "30px" }}
//               >
//                 {" "}
//                 Verification progress{" "}
//               </label>

//               <div>
//                 <div
//                   style={{
//                     width: "100%",
//                     height: "20px",
//                     border: "1px solid #ccc",
//                     borderRadius: "8px",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: `${progress}%`,
//                       height: "100%",
//                       backgroundColor: "#4C40ED",
//                       borderRadius: "8px",
//                       transition: "width 0.3s ease-in-out",
//                     }}
//                   ></div>
//                 </div>

//                 <div style={{ marginTop: "10px", marginRight: "350px" }}>
//                   {`${progress}% verified`}
//                 </div>
//               </div>
//             </div>

//             <div className="inside2">
//               <label
//                 className="text-primary font-bold"
//                 style={{ marginRight: "30px" }}
//               >
//                 {" "}
//                 {isWorkLicenseUpload
//                   ? "Upload Work License PDF"
//                   : isNIDCardUpload
//                     ? "Upload NID Card PDF"
//                     : "Phone number"}{" "}
//               </label>

//               {isWorkLicenseUpload ? (
//                 <input
//                   type="file"
//                   name="workLicensePdf"
//                   accept=".pdf"
//                   className="file-upload"
//                 />
//               ) : isNIDCardUpload ? (
//                 <input
//                   type="file"
//                   name="nidCardPdf"
//                   accept=".pdf"
//                   className="file-upload"
//                 />
//               ) : (
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Enter your phone number"
//                   className="phone-number"
//                   value={phoneNumber}
//                   // onChange={(e) => setPhoneNumber(e.target.value)
//                     onChange={(e) =>
//                       handlePhoneNumberChange(
//                         e.target.value
//                       )
//                   }
//                 />
//               )}

//               {error && <p style={{ color: "red" }}>{error}</p>}
//             </div>

//             {verificationSuccess ? (
//               <p style={{ textAlign: "center", fontSize: "1.5rem", marginTop: "20px", color: "green" }}>
//                 Verification Successful!
//               </p>
//             ) : showSubmit ? (
//               <button className="submit-btn" onClick={handleSubmit}>
//                 Submit
//               </button>
//             ) : (
//               <>
//                 <button className="continue-btn" onClick={increaseProgress}>
//                   Continue
//                 </button>
//                 <button className="skip-btn" onClick={handleSkip}>
//                   Skip
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       <Footer></Footer>
//     </>
//   );
// };

// export default Verification;