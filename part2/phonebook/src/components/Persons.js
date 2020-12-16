import React from "react";

const Persons = ({ filteredNames }) => {
  return (
    <ul>
      {filteredNames.map((person) => {
        return (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        );
      })}
    </ul>
  );
};

export default Persons;
