import React, { useState, useEffect } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import photo from "../../assets/photo-1.jpeg";

export const HeroSection = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);
  const [isAddressFetched, setIsAddressFetched] = useState(false);

  // Geolocation code
  useEffect(() => {
    if (navigator.geolocation && !isAddressFetched) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          // Check if the address is already in the cache
          const cachedAddress = localStorage.getItem("cachedAddress");

          if (cachedAddress) {
            // Use the cached address
            setAddress(cachedAddress);
            setIsAddressFetched(true);
          } else {
            // Fetch the address and store it in the cache
            const apiKey = "TmIHt8TMoXpQaN0Vsg3jrXOSz5Yj0Zzm";
            fetch(
              `https://www.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${position.coords.latitude},${position.coords.longitude}&includeRoadMetadata=true&includeNearestIntersection=true`
            )
              .then((response) => response.json())
              .then((data) => {
                const results = data.results[0];
                const location = results.locations[0];
                const formattedAddress1 = location.street;
                const formattedAddress2 = location.adminArea6;
                const formattedAddress =
                  formattedAddress1 + ", " + formattedAddress2;

                // Store the address in the cache
                localStorage.setItem("cachedAddress", formattedAddress);

                setAddress(formattedAddress);
                setIsAddressFetched(true);
              })
              .catch((error) => {
                console.error("Error fetching address:", error);
              });
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
    }
  }, [isAddressFetched]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-60 ">
      <div className="flex lg:w-1/2 lg:p-24 mt-7">
        <div>
          <img className="lg:w-96 lg:h-96  rounded-full" src={photo} alt="" />
          <img
            className="lg:w-48 lg:h-48 lg:ml-24 rounded-full "
            src={photo}
            alt=""
          />
        </div>

        <div className="flex-col">
          <img className="lg:w-36 lg:h-36 rounded-full" src={photo} alt="" />
          <img className="lg:w-48 lg:h-48  rounded-full" src={photo} alt="" />
          <img className="lg:w-72 lg:h-72  rounded-full" src={photo} alt="" />
        </div>
      </div>
      <div className="lg:w-1/2 mx-5 text-center my-7 lg:my-36 ">
        <h1 className="text-lg lg:text-3xl lg:text-right font-semibold leading-loose lg:mb-5  lg:mr-[200px]  ">
          Your{" "}
          <span className="text-primary font-bold text-xl lg:text-4xl">
            One-Stop
          </span>{" "}
          Solution for Every Home Service , We Offer{" "}
          <span className="text-primary font-bold text-xl lg:text-4xl">
            {" "}
            Electrical
          </span>{" "}
          Service
        </h1>
        <div className="lg:mx-[150px] ">
          <input
            type="text"
            placeholder="Search for exparts"
            className=" input input-bordered  rounded-l rounded-r-none shadow-xl border-r-0  lg:h-[54.5px]  input-primary w-48 lg:w-full max-w-xs"
          />
          <button className="bg-primary lg:h-[55px] px-3 lg:px-5 py-3 lg:py-4 mt-3  text-white rounded-l-none rounded-r ">
            Search
          </button>

          <p className="mt-2 font-semibold " style={{ marginLeft: "-4%" }}>
            Your Current Location :{" "}
            <span style={{ color: "#4C40ED" }}>{address}</span>
          </p>
        </div>
        <div className="flex flext-col lg:flex-row lg:mt-4 ml-[50px] lg:ml-[360px]">
          <button className=" ml-24 lg:ml-0 my-3 lg:my-0 lg:text-xl bg-primary font-bold text-white p-1 rounded-sm">
            {" "}
            Smart Recomendation{" "}
          </button>
          <BsFillInfoCircleFill
            size={20}
            fill="rgb(76, 64, 237)"
            className=" mt-5 ml-2 lg:mt-2 "
          />
        </div>

        <p className=" text-center lg:mr-[190px] lg:text-right lg:mt-4 lg:text-2xl">
          Your <span className="text-primary">Neighborhood</span>,Your{" "}
          <span className="text-primary">Services</span> <br></br>
          Let's Shape a Better Tomorrow Together.
        </p>
      </div>
    </div>
  );
};
