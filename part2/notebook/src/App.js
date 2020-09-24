import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);

  useEffect(() => {
    setFilteredNames(
      persons.filter((person) =>
        person.name.toLowerCase().includes(searchName.toLowerCase())
      )
    );
  }, [searchName, persons]);

  // const arrayChange = persons.filter((person) =>
  //   person.name.toLowerCase().includes(searchName.toLowerCase())
  // );

  const handleSearchName = (e) => {
    console.log(e.target.value);
    setSearchName(e.target.value);
  };

  const handleNewName = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    const noteName = {
      name: newName,
      number: newNumber,
    };

    if (
      persons.find(
        (element) => element.name.toLowerCase() === noteName.name.toLowerCase()
      )
    ) {
      alert(`${noteName.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(noteName));
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <h3>Add a new</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
        handleNewName={handleNewName}
      />
      <h3>Numbers</h3>
      <Persons filteredNames={filteredNames}/>
    </div>
  );
};
export default App;
