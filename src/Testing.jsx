import React, { useState } from "react";

function Testing() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);
  const [isLocationFetched, setLocationFetched] = useState(false);

  const handleFindProsClick = () => {
    if (!isLocationFetched) {
      setLocationFetched(true);

      // Fetch location data
      const apiKey = "TmIHt8TMoXpQaN0Vsg3jrXOSz5Yj0Zzm";
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          fetch(
            `https://www.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${position.coords.latitude},${position.coords.longitude}&includeRoadMetadata=true&includeNearestIntersection=true`
          )
            .then((response) => response.json())
            .then((data) => {
              const results = data.results[0];
              const location = results.locations[0];
              const formattedAddress1 = location.street;
              let formattedAddress2 = location.adminArea6;

              if (formattedAddress2 === "গুলশান") {
                formattedAddress2 = "Gulshan";
              }
              const formattedAddress = formattedAddress1 + ", " + formattedAddress2;
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
    }
  };

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            width: "680px",
            height: "60px",
            marginTop: "2%",
            alignItems: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            marginLeft: "15px",
          }}
        >
          <div
            style={{
              outline: "none",
              height: "40px",
              width: "520px",
              marginLeft: "10px",
              borderRadius: "7px",
              border: "1px solid #4C40ED",
              display: "flex",
              alignItems: "center",
            }}
          >
            {isLocationFetched ? (
              <p style={{ color: "#4C40ED", marginLeft: "15px" }}>{address}</p>
            ) : (
              <p style={{ color: "#4C40ED", marginLeft: "15px" }}>Your Location</p>
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
          <button
            className="btn btn-primary"
            style={{ marginLeft: "5px", color: "white" }}
          >
            Find Pros
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testing;
