import React, { useState, useEffect } from "react";
import axios from "axios";

const Countries = ({ filteredCountries }) => {
  const [country, setCountry] = useState(null);
  const [result, setResult] = useState(null);

  const viewCountry = (isCountry) => {
    const uniqCountry = isCountry[0];
    setCountry(uniqCountry);
  };

  useEffect(() => {
    let result;
    if (filteredCountries.length > 10) {
      result = <div>Too many matches, specify another filter</div>;
      setResult(result);
    } else if (filteredCountries.length > 1) {
      result = filteredCountries.map((country) => {
        return (
          <li key={country.numericCode}>
            {country.name}
            <button onClick={() => setCountry(country)}>Show</button>
          </li>
        );
      });
      setResult(result);
    } else {
      viewCountry(filteredCountries);
    }
  }, [filteredCountries]);

  const [clima, setClima] = useState(null);

  useEffect(() => {
    if (country) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`
        )
        .then((response) => {
          setClima(response.data);
        });
    }
  }, [country]);

  useEffect(() => {
    console.log(clima);
  }, [clima]);

  return (
    <div>
      {country ? (
        <li key={country.numericCode}>
          <h3>{country.name}</h3>
          <img
            src={`${country.flag}`}
            alt={country.name}
            className="country-flag"
          />
          {clima ? (
            <div>
              <h3>{`weather in ${country.capital}`}</h3>
              <p>
                <strong>temperature:</strong>
                {`${clima.current.temperature} celcius`}
              </p>
              <img
                src={clima.current.weather_icons}
                alt={clima.current.weather_descriptions[0]}
              />
              <p>
                <strong>wind:</strong>
                {`${clima.current.wind_speed} mph direction ${clima.current.wind_dir}`}
              </p>
            </div>
          ) : null}
        </li>
      ) : (
        <ul>{result}</ul>
      )}
    </div>
  );
};

export default Countries;
