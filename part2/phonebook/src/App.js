import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
// import axios from "axios";
import personService from "./services/persons";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      // console.log(initialPersons);
      setPersons(initialPersons);
    });
  }, []);

  const [filteredNames, setFilteredNames] = useState([]);

  useEffect(() => {
    // console.log(persons);
    setFilteredNames(
      persons.filter((person) =>
        person.name.toLowerCase().includes(searchName.toLowerCase())
      )
    );
  }, [searchName, persons]);

  const handleSearchName = (e) => {
    // console.log(e.target.value);
    setSearchName(e.target.value);
  };

  const handleNewName = (e) => {
    // console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    // console.log(e.target.value);
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
      personService
        .create(noteName)
        .then((createdPerson) => setPersons(persons.concat(createdPerson)));
    }
    setNewName("");
    setNewNumber("");
  };

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}`)) {
      personService
        .deletePerson(person.id)
        .then((deletedPerson) => console.log(deletedPerson));
    }
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
      <Persons filteredNames={filteredNames} deletePerson={deletePerson} />
    </div>
  );
};
export default App;
