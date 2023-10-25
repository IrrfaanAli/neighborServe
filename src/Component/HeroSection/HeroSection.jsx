import React, { useState, useEffect } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import photo from "../../assets/photo-1.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";

export const HeroSection = () => {
  const serviceNames = [
    "Electrical",
    "Plumbing",
    "Cleaning",
    "Painting",
    "Pest",
    "Moving",
    "HVAC",
    "Gas Stove",
    "Wall/Ceiling Repair",
    "Computer",
    "Carpentry",
    "Car Wash",
  ];

  const [serviceIndex, setServiceIndex] = useState(0);
  const [isServiceChanged, setServiceChanged] = useState(false);

  const updateServiceName = () => {
    if (serviceIndex < serviceNames.length - 1) {
      setServiceChanged(true);
      setTimeout(() => {
        setServiceIndex(serviceIndex + 1);
        setServiceChanged(false);
      }, 500);
    } else {
      setServiceIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(updateServiceName, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [serviceIndex]);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);
  const [isLocationFetched, setLocationFetched] = useState(false);

  const handleFindProsClick = () => {
    if (!isLocationFetched) {
      setLocationFetched(true);
      const apiKey = "pk.abc469b9f78bca652e6cedf09705e250";

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          const apiUrl = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`;
          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              const fullAddress = data.display_name;
              const dhakaIndex = fullAddress.indexOf("Dhaka");
              const slicedAddress =
                dhakaIndex !== -1
                  ? fullAddress.slice(0, dhakaIndex + "Dhaka".length)
                  : fullAddress;
              const userAddress = slicedAddress;
              setAddress(userAddress);
              const userId = "6539050b42f0df37db9d2d36";
              const apiUrl1 = `http://localhost:5000/update_location/${userId}`;
              const data1 = {
                user_lat: position.coords.latitude,
                user_lon: position.coords.longitude,
                user_location: userAddress,
              };

              axios
                .patch(apiUrl1, data1)
                .then((response) => {
                  console.log(response.data);
                })
                .catch((error) => {
                  console.error(error);                 
                });
            })
            .catch((error) => {
              console.error("Error fetching address:", error);
            });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    }
  };

  return (
    <div>
      <div
        className="flex flex-col lg:flex-row lg:gap-2 "
        style={{ marginLeft: "5px", style: "red" }}
      >
        <div className="flex lg:w-1/2 lg:p-24 mt-7">
          <div>
            <img
              className="lg:w-96 lg:h-96  rounded-full"
              src="./user1.png"
              alt=""
            />
            <img
              className="lg:w-48 lg:h-48 lg:ml-24 rounded-full "
              src="./user2.png"
              alt=""
            />
          </div>

          <div className="flex-col">
            <img
              className="lg:w-36 lg:h-36 rounded-full"
              src="./user3.png"
              alt=""
            />
            <img
              className="lg:w-48 lg:h-48  rounded-full"
              src="./user4.png"
              alt=""
            />
            <img
              className="lg:w-72 lg:h-72  rounded-full"
              src="./user5.png"
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-1/2 mx-5 text-center my-7 lg:my-36 ">
          <h1 className="text-lg lg:text-3xl lg:text-right font-semibold leading-loose lg:mb-5  lg:mr-[152px]  ">
            Your{" "}
            <span className="text-primary font-bold text-xl lg:text-4xl">
              One-Stop
            </span>{" "}
            Solution for Every Home Service, We Offer{" "}
            <span className="text-primary font-bold text-xl lg:text-4xl">
              {" "}
              {serviceNames[serviceIndex]}
            </span>{" "}
            Service
          </h1>
          <div className="lg:mx-[-15px] ">
            {/* <input
            type="text"
            placeholder="Search for exparts"
            className=" input input-bordered  rounded-l rounded-r-none shadow-xl border-r-0  lg:h-[54.5px]  input-primary w-48 lg:w-full max-w-xs"
          />
          <button className="bg-primary lg:h-[55px] px-3 lg:px-5 py-3 lg:py-4 mt-3  text-white rounded-l-none rounded-r ">
            Search
          </button> */}

            <div>
              <div
                style={{
                  display: "flex",
                  width: "785px",
                  height: "60px",
                  marginTop: "2%",
                  alignItems: "center",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                  marginRight: "50px",
                }}
              >
                <div
                  style={{
                    outline: "none",
                    height: "40px",
                    width: "625px",
                    marginLeft: "10px",
                    borderRadius: "7px",
                    border: "1px solid #4C40ED",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {isLocationFetched ? (
                    <input
                      style={{
                        backgroundColor: "white",
                        marginLeft: "2%",
                        fontWeight: "bold",
                      }}
                      disabled
                      type="text"
                      value={address}
                      // onChange={(e) => setUserLocation(e.target.value)}
                    />
                  ) : (
                    <p style={{ color: "#B7C8E6", marginLeft: "2%" }}>
                      Your location
                    </p>
                  )}
                </div>
                <button>
                  <img
                    src="./gps.svg"
                    style={{ width: "25px", height: "25px", marginLeft: "5px" }}
                    alt=""
                    onClick={handleFindProsClick}
                  />
                </button>
                <Link to={"/browse_service"}>
                  {" "}
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: "5px", color: "white" }}
                  >
                    Find Pros
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="flex flext-col lg:flex-row lg:mt-4 ml-[50px] lg:ml-[360px]">
          <button className=" ml-24 lg:ml-0 my-3 lg:my-0 lg:text-xl bg-primary font-bold text-white p-1 rounded-sm">
            {" "}
            Smart Recomendation{" "}
          </button>
          <BsFillInfoCircleFill
            size={20}
            fill="rgb(76, 64, 237)"
            className=" mt-5 ml-2 lg:mt-2 "
          />
        </div> */}

          <p className=" text-center lg:mr-[150px] lg:text-right lg:mt-4 lg:text-2xl">
            Your <span className="text-primary">Neighborhood</span>,Your{" "}
            <span className="text-primary">Services</span> <br></br>
            Let's Shape a Better Tomorrow Together.
          </p>
        </div>
      </div>
    </div>
  );
};
