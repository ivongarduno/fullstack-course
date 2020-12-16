import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Countries from "./components/Countries";

const App = () => {
  const [searchCountrie, setSearchCountrie] = useState("");
  const [countries, setConuntries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${searchCountrie}`)
      .then((response) => {
        console.log("promise fulfilled");
        setConuntries(response.data);
      });
  }, [searchCountrie]);

  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((countrie) =>
        countrie.name.toLowerCase().includes(searchCountrie.toLowerCase())
      )
    );
  }, [searchCountrie, countries]);

  const handleSearchCountrie = (e) => {
    console.log(e.target.value);
    setSearchCountrie(e.target.value);
  };

  return (
    <div>
      <Search
        searchCountrie={searchCountrie}
        handleSearchCountrie={handleSearchCountrie}
      />
      <h2>Countries</h2>
      <Countries filteredCountries={filteredCountries} />
    </div>
  );
};
export default App;
