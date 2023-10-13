import React from "react";
import { persons } from "./persons";
import ProfileComponent from "./ProfileComponent";
function PersonList() {
  return (
    <section>
      {persons.map((person) => {
        return <ProfileComponent {...person} key={person.id} />;
      })}
    </section>
  );
}

export default PersonList;
