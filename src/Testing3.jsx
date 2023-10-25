import React, { useState, useEffect } from "react";

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers

  const lat1Rad = toRadians(lat1);
  const lon1Rad = toRadians(lon1);
  const lat2Rad = toRadians(lat2);
  const lon2Rad = toRadians(lon2);

  const dlon = lon2Rad - lon1Rad;
  const dlat = lat2Rad - lat1Rad;

  const a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dlon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

const ForwardGeocoding = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
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

  const places = [
    { lat: 23.77290467469416, lon: 90.42076977391464 },
    { lat: 23.81026, lon: 90.41251 },
    { lat: 23.81547, lon: 90.40436 },
    { lat: 23.80253, lon: 90.36042 },
  ];

  const distances = places.map((place) =>
    haversine(location.latitude, location.longitude, place.lat, place.lon)
  );

  // Sort distances in ascending order
  distances.sort((a, b) => b - a);

  const distancesM = distances.map((distanceKm) => distanceKm * 1000);

  let result = "Kalachandpur, Dhaka";
  let regex = new RegExp(", Dhaka");
  let modifiedString = result.replace(regex, "");
  result = modifiedString;
  let inputString = result;
  let lastSpaceIndex = inputString.lastIndexOf(",");

  if (lastSpaceIndex !== -1) {
    let lastSubstring = inputString.slice(lastSpaceIndex + 1);
    result = lastSubstring;
  } else {
    // Handle the case where there is no space in the string
    result = inputString;
  }

  return (
    <div>
      <h2>Your Current Location:</h2>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      {places.map((place, index) => (
        <p key={index}>
          {`The distance between your location and Place ${
            index + 1
          } is ${distances[index].toFixed(2)} kilometers or ${distancesM[
            index
          ].toFixed(2)} meters.`}
        </p>
      ))}

      <p style={{ margin: "auto", width: "500px", height: "210px" }}>
        {result}
      </p>
    </div>
  );
};

const Testing3 = () => {
  return (
    <div>
      <ForwardGeocoding />
    </div>
  );
};

export default Testing3;
