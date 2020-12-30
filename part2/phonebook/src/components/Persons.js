import React from "react";

const Persons = ({ filteredNames, deletePerson }) => {
  return (
    <ul>
      {filteredNames.map((person) =>
        person ? (
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => deletePerson(person)}>Delete</button>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default Persons;
