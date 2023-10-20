import React, { useState, useEffect } from "react";
import { persons } from "./persons";
import ProfileComponent from "./ProfileComponent";
const PersonList = ({ searchString }) => {
  const x = searchString;
  console.log(x);

  const apiUrl = `http://localhost:5000/users?category=${x}`; // Replace with your API endpoint
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

  return (
    <section>
      {dataArray
        // .filter((person) => person.user_category === x)
        .slice(0, 5)
        .map((person, personIndex) => (
          <ProfileComponent {...person} key={person.id} />
        ))}
    </section>
  );
};

export default PersonList;
