import React, { useState, useEffect } from "react";
import ProfileComponent from "./ProfileComponent";
const PersonList = ({ searchString }) => {
  const x = searchString;
  console.log(x);

  const apiUrl = `http://localhost:5000/providers/providers?category=${x}`; // Replace with your API endpoint
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

  let result = "South Badda, Gulshan, Dhaka";
  let regex = new RegExp(", Dhaka");
  let modifiedString = result.replace(regex, "");
  result = modifiedString;
  let inputString = result;
  let lastSpaceIndex = inputString.lastIndexOf(",");

  if (lastSpaceIndex !== -1) {
    let lastSubstring = inputString.slice(lastSpaceIndex + 1);
    result = lastSubstring;
  } else {
    result = inputString;
  }

  //haversine algorithm to calculate distances between 2 coordinates
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
    console.log("distance: " + distance);
    return distance;
  }

  const dataArrayUpdated = dataArray.map((place) => {
    const distance = haversine(
      23.7745978,
      90.4219535,
      place.user_lat,
      place.user_lon
    );
    return { ...place, distance };
  });

  // Sort the dataArrayWithDistances by distance in ascending order
  dataArrayUpdated.sort((a, b) => a.distance - b.distance);

  return (
    <section>
      {dataArrayUpdated
        // .filter((person) => person.user_location.includes(result))
        .slice(0, 5)
        .map((person, personIndex) => (
          <ProfileComponent {...person} key={person.id} />
        ))}
    </section>
  );
};

export default PersonList;
