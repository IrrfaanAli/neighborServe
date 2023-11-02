import React from "react";
import { persons } from "./persons";
import ProfileComponent from "./ProfileComponent";
const PersonList = ({ searchString }) => {
  const x = searchString;
  console.log("passed value: " + x);
  return (
    <section>
      {persons
        .filter((person) => person.user_category === x)
        .slice(0, 5)
        .map((person, personIndex) => (
          <ProfileComponent {...person} key={person.id} />
        ))}
    </section>
  );
};

export default PersonList;
