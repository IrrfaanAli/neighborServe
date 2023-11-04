import React, { useState, useEffect, useContext } from "react";
import ProfileComponent from "./ProfileComponent";
import { AuthContext } from "../../Providers/AuthProviders";

const PersonList = ({ searchString }) => {
  const { user } = useContext(AuthContext);

  const x = searchString;
  console.log(x);

  const apiUrl = `http://localhost:5000/providers/providers?category=${x}`; // Replace with your API endpoint
  const [dataArray, setDataArray] = useState([]);
  // const [dataArray2, setDataArray2] = useState([]);
  const [dataArray3, setDataArray3] = useState([]);

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

  const userEmail =
    localStorage.getItem("userEmail") || (user && user.email) || "";

  const apiUrl3 = `http://localhost:5000/providers/getId/${userEmail}`; // Replace with your API endpoint

  useEffect(() => {
    fetch(apiUrl3)
      .then((response) => response.json())
      .then((data) => {
        setDataArray3(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const userLat = dataArray3.map((item) => item.user_lat);
  const userLon = dataArray3.map((item) => item.user_lon);

  // const apiUrl2 = `http://localhost:5000/providers/providersProfile/${userEmail}`; // Replace with your API endpoint

  // useEffect(() => {
  //   fetch(apiUrl2)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDataArray2(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  if (!user || dataArray3.length === 0) {
    return <div>Loading...</div>;
  }

  // let result = "South Badda, Gulshan, Dhaka";
  // let regex = new RegExp(", Dhaka");
  // let modifiedString = result.replace(regex, "");
  // result = modifiedString;
  // let inputString = result;
  // let lastSpaceIndex = inputString.lastIndexOf(",");

  // if (lastSpaceIndex !== -1) {
  //   let lastSubstring = inputString.slice(lastSpaceIndex + 1);
  //   result = lastSubstring;
  // } else {
  //   result = inputString;
  // }

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
    // console.log("distance: " + distance);
    return distance;
  }

  const dataArrayUpdated = dataArray.map((place) => {
    const distance = haversine(
      userLat,
      userLon,
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
