import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM, { findDOMNode } from "react-dom";
import useFetch from "./useFetch";

const Country = ({ country: { name, flags, population } }) => {
  return (
    <div className="country">
      <div className="country_flag">
        <img src={flags.png} alt={name} />
      </div>
      <h3 className="country_name">{name.toUpperCase()}</h3>
      <div className="country_text">
        <p>
          <span>Population: </span>
          {population}
        </p>
      </div>
    </div>
  );
};

const App = (props) => {
  const url = "https://restcountries.com/v2/all";
  const data = useFetch(url);

  return (
    <div className="App">
      <h1>Fetching Data Using Hook</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} countries in the api</p>
        <div className="countries-wrapper">
          {data.map((country) => (
            <Country country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
