import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Component/Navbar/Navbar";
import "./styles/Provider_Profile.css";
import Icon_info from "./Component/Icon_info";
import { Link, Outlet, useParams } from "react-router-dom";
import { persons } from "./Component/profileComponent/persons";
import CommentList from "./Component/Comment";
import Footer from "./Component/Footer/Footer";

function Provider_Profile() {
  const { searchString } = useParams();
  // const val = +searchString;
  console.log("id " + searchString);
  const [isOpen, setIsOpen] = useState(false);
  const availabilityRef = useRef(null);

  const toggleDiv = () => {
    setIsOpen(!isOpen);
  };

  const apiUrl = `http://localhost:5000/usersProfile?id=${searchString}`; // Replace with your API endpoint
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    // Use the useEffect hook to fetch data when the component mounts
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setDataArray(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Event listener to close the div when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        availabilityRef.current &&
        !availabilityRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Navbar />
      {dataArray
        // .filter((person) => person.user_id === val)
        .map((person, personIndex) => (
          <div className="pp-container0">
            <div style={{ display: "flex", height: "50px" }}>
              <img
                src="back.png"
                style={{ width: "25px", height: "25px" }}
                alt=""
              />
              <Link to={`/search_result/${person.user_category}`}>
                {" "}
                <p style={{ color: "#4C40ED", opacity: "0.8" }}>
                  Back to other {person.user_category}s
                </p>
              </Link>
            </div>

            <div className="pp-container1">
              <div className="pp-container2">
                <div style={{ display: "flex" }}>
                  <button className="pp-bt1">About</button>
                  <button className="pp-bt1" style={{ marginLeft: "4%" }}>
                    Service History
                  </button>
                </div>
                <hr style={{ marginTop: "10px" }} />
                <div style={{ display: "flex", marginTop: "3%" }}>
                  <div className="avatar">
                    <div className="xl:w-48 xl:h-52 sm:w-32 sm:h-36 rounded object-contain">
                      <img
                        src={person.user_img}
                        class="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      flex: "display",
                      flexDirection: "column",
                      marginLeft: "3%",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <p className="pp-container9">{person.user_fullname}</p>
                      &nbsp; &nbsp;
                      <div
                        className="badge text-blue-purple pp-container10 "
                        style={{ marginTop: "8px" }}
                      >
                        {person.user_category}
                      </div>
                    </div>
                    <div className="pp-container4">
                      <img
                        src="location-pinned.png"
                        alt="Icon Description"
                        style={{ width: "25" }}
                        className="pp-container11"
                      />
                      &nbsp;
                      <p className="pp-container12">{person.user_location}</p>
                    </div>
                    <div className="pp-container4">
                      <img
                        src="Time.png"
                        alt="Icon Description"
                        style={{ width: "25" }}
                        className="pp-container11"
                      />
                      &nbsp;
                      <p className="pp-container12">
                        Member since {person.user_regYear}
                      </p>
                    </div>
                    <div className="pp-container4">
                      <img
                        src="trophy.png"
                        alt="Icon Description"
                        style={{ width: "25" }}
                        className="pp-container11"
                      />
                      &nbsp;
                      <p className="pp-container12">
                        Hired {person.user_hireCount} times
                      </p>
                    </div>
                    <div className="pp-container4">
                      <Icon_info index={"./v50.png"} />
                      &nbsp;
                      <p className="pp-container12">
                        {person.user_verficationStatus}
                      </p>
                      &nbsp;{" "}
                      <p
                        style={{ fontWeight: "bold", color: "#4C40ED" }}
                        className="pp-container12"
                      >
                        {" "}
                        Verified
                      </p>
                    </div>

                    <div className="pp-container7">
                      <button
                        style={{ marginLeft: "5%" }}
                        className="btn bg-blue-purple btn-sm text-white w-24 h-10"
                      >
                        Share
                      </button>
                      <button
                        style={{ marginLeft: "3%" }}
                        className="btn bg-blue-purple btn-sm text-white w-24 h-10"
                      >
                        Favorite
                      </button>
                      <button
                        style={{ marginLeft: "3%" }}
                        className="btn bg-blue-purple btn-sm text-white w-24 h-10"
                      >
                        Message
                      </button>
                    </div>
                  </div>
                </div>
                <br />
                <p className="pp-container8">Service Details</p>
                <p style={{ textAlign: "justify", color: "#8E8D8D" }}>
                  {person.user_serviceDetails}
                </p>
                <br />
                <div
                  className="carousel w-full"
                  style={{ borderRadius: "7px" }}
                >
                  <div id="slide1" className="carousel-item relative w-full">
                    <img src="image1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide4" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide2" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                    <img src="image2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide3" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                    <img src="image3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide4" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide4" className="carousel-item relative w-full">
                    <img src="image4.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide3" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide1" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: "360px", marginLeft: "3%" }}>
                {" "}
                <div className="pp-container3">
                  {" "}
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginLeft: "3%",
                    }}
                  >
                    Book an appointment
                  </p>
                  <select
                    className="select select-primary w-full max-w-xs border-blue-purple"
                    style={{
                      marginTop: "1%",
                      margin: "auto",
                      borderRadius: "5px",
                    }}
                  >
                    <option disabled selected>
                      Select Urgency Level
                    </option>
                    <option>Yes, It is urgent</option>
                    <option>No, It is not urgent</option>
                  </select>
                  <button
                    style={{
                      margin: "auto",
                      marginTop: "-2%",
                      borderRadius: "5px",
                    }}
                    className="btn bg-blue-purple btn-sm text-white w-80 h-10"
                    onClick={toggleDiv}
                  >
                    Check Availability
                  </button>
                  {isOpen && (
                    <div className="availability-div " ref={availabilityRef}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          marginTop: "2%",
                        }}
                      >
                        Preffered day for Service
                      </p>
                      <div style={{ display: "flex" }}>
                        <button
                          style={{ marginLeft: "12.5%", marginTop: "3%" }}
                          className="btn bg-blue-purple btn-sm text-white w-32 h-10"
                        >
                          Today
                        </button>{" "}
                        <button
                          style={{ marginLeft: "3%", marginTop: "3%" }}
                          className="btn bg-blue-purple btn-sm text-white w-32 h-10"
                        >
                          Tomorrow
                        </button>
                      </div>

                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          marginTop: "2%",
                        }}
                      >
                        Free Slots
                      </p>

                      <select
                        className="select select-primary w-full max-w-xs border-blue-purple"
                        style={{
                          marginTop: "1%",
                          marginLeft: "auto",
                          marginRight: "auto",
                          borderRadius: "5px",
                        }}
                      >
                        <option disabled selected>
                          Choose free slot
                        </option>
                        <option disabled>10am-12pm</option>
                        <option>12pm-2pm</option>
                        <option disabled>2pm-4pm</option>
                        <option>4pm-6pm</option>
                      </select>

                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          marginTop: "2%",
                        }}
                      >
                        Leave note
                      </p>
                      <textarea
                        style={{ marginTop: "2%" }}
                        className="textarea textarea-primary"
                        placeholder="Please leave any additional notes or information here..."
                      ></textarea>
                      <button
                        style={{ marginLeft: "0%", marginTop: "3%" }}
                        className="btn bg-blue-purple btn-sm text-white w-50 h-10"
                      >
                        Request Service
                      </button>
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "10%",
                      marginBottom: "3%",
                    }}
                  >
                    <img
                      src="msg2.png"
                      alt=""
                      style={{ height: "25px", width: "25px" }}
                    />
                    <p style={{ fontSize: "16px", marginLeft: "1%" }}>
                      Responds in about {person.user_respondTime} minutes
                    </p>
                  </div>
                </div>
                <div className="pp-container6">
                  <p
                    style={{
                      color: "#4C40ED",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Reviews
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    Users rated this service provider highly for
                    professionalism, responsiveness, and work quality.
                  </p>
                  <div
                    style={{
                      maxHeight: "320px",
                      width: "340px",
                      borderTop: "4px solid #4C40ED",
                      borderRadius: "0 0 5px 5px",
                      marginTop: "3%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between", // Added this to space items vertically
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <CommentList userReviews={person.user_reviews} />{" "}
                    <button
                      className="btn btn-sm w-28"
                      style={{
                        marginTop: "1%",
                        marginBottom: "2%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Load more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <Footer />
    </div>
  );
}
export default Provider_Profile;
