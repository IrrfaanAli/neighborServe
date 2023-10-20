import React, { useState, useEffect } from "react";
import Navbar from "./Component/Navbar/Navbar";

const Testing = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);

  // Geolocation code
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          // Use MapQuest's Reverse Geocoding API to convert coordinates to an address
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
              setAddress(formattedAddress);
            })
            .catch((error) => {
              console.error("Error fetching address:", error);
            });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
    }
  }, []);

  // const searchString = '652e981f2fe2761c751f31bd'
  // const apiUrl = "http://localhost:5000/users";  // Replace with your API endpoint
  // const [dataArray, setDataArray] = useState([]);

  // useEffect(() => {
  //   // Use the useEffect hook to fetch data when the component mounts
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDataArray(data); // Update the state with the fetched data
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []); // The empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <Navbar />
      <div>
        <p>Your Location:</p>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        {/* {address ? <p>Address: {address}</p> : <p>Loading address...</p>} */}
        <p>{address}</p>
      </div>
      {/* {dataArray
        // .filter((user) => user._id === "652e981f2fe2761c751f31bd")
        .map((user, userIndex) => ( */}
      <div>
        {/* <p>Name: {user._id}</p>
            <p>Name: {user.user_name}</p>
            <p>Location: {user.user_location}</p>
            <p>Member since: {user.user_regYear}</p>
            <p>Category: {user.user_category}</p>
            <br /> */}
      </div>
    </div>
  );
};

export default Testing;
