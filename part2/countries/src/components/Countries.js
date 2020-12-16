import React from "react";

const Countries = ({ filteredCountries }) => {
  console.log(filteredCountries);

  let result;

  if (filteredCountries.length > 10) {
    result = <div>Too many matches, specify another filter</div>;
  } else if (filteredCountries.length > 1) {
    result = filteredCountries.map((country) => {
      return <li key={country.numericCode}>{country.name}</li>;
    });
  } else {
    result = filteredCountries.map((country) => {
      return (
        <li key={country.numericCode}>
          <h3>{country.name}</h3>
          <img src={`${country.flag}`}></img>
        </li>
      );
    });
  }

  return (
    <div>
      <ul>{result}</ul>
    </div>
  );
};

export default Countries;
