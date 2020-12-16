import React, { useState } from "react";

const Countries = ({ filteredCountries }) => {
  const [country, setCountry] = useState(null);

  let result;

  if (filteredCountries.length > 10) {
    result = <div>Too many matches, specify another filter</div>;
  } else if (filteredCountries.length > 1) {
    result = filteredCountries.map((country) => {
      return (
        <li key={country.numericCode}>
          {country.name}
          <button onClick={() => setCountry(country)}>Show</button>
        </li>
      );
    });
  } else {
    result = filteredCountries.map((country) => {
      return (
        <li key={country.numericCode}>
          <h3>{country.name}</h3>
          <img src={`${country.flag}`} alt={country.name}/>
        </li>
      );
    });
  }

  return (
    <div>
      {country ? (
        <li key={country.numericCode}>
          <h3>{country.name}</h3>
          <img src={`${country.flag}`} alt={country.name}/>
        </li>
      ) : (
        <ul>{result}</ul>
      )}
    </div>
  );
};

export default Countries;
