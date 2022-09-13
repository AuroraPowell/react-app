import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM, { findDOMNode } from "react-dom";

let searchList = [];

const Country = ({
  country: { name, flags, population, languages, currencies, capital },
}) => {
  const languageOrLanguages = languages.length > 1 ? "Languages" : "Language";
  const formatLanguages = languages.map(({ name }) => name).join(", ");
  return (
    <div className="country">
      <div className="country-flag">
        <img src={flags.png} alt={name} />
      </div>
      <h2 className="country_name" style={{ color: "orange" }}>
        {name.toUpperCase()}
      </h2>
      <br />
      <div class="country_text">
        <h2>
          <span>
            <strong>Capital: </strong>
          </span>
          {capital}
        </h2>
        <h2>
          <span>
            <strong>{languageOrLanguages}: </strong>
          </span>
          {formatLanguages}
        </h2>
        <h2>
          <span>
            <strong>Population: </strong>
          </span>
          {population}
        </h2>
        <h2>
          <span>
            <strong>Currency: </strong>
          </span>
          {currencies?.name}
        </h2>
      </div>
    </div>
  );
};

const App = (props) => {
  const initialState = {
    searchField: "",
  };
  // setting initial state and method to update state
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // inclusion of second parameter, empty [], runs only on first render
  // when array is empty. if array is [prop, state], then ran any time
  // 'dependency' value changes - props and state would be passed as 'dependencies'
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://restcountries.com/v2/all";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const { searchField } = formData;

  return (
    <div className="App">
      <div className="headerInput">
        <h1>
          <strong>World Countries Data</strong>
        </h1>
        <br />
        <div>
          <h2>
            <strong>Currently, we have {data.length} countries</strong>
          </h2>
          <br />
          {searchField && (
            <h2 style={{ color: "orange" }}>
              <em>{searchList.length} satisfied the search criteria</em>
            </h2>
          )}
          <h1>
            <input
              type="text"
              id="searchField"
              name="searchField"
              value={searchField}
              placeholder="Search countries by name, capital city, or languages "
              onChange={onChange}
            />
          </h1>
          <br />
          <br />
        </div>
      </div>
      <div className="countries-wrapper">
        <ul>
          {/*{data.map((country) => (
            <li key={country.name.common}>
              <Country country={country} />
            </li>
          ))}
          */}
          <CountryList data={data} searchField={searchField} />
        </ul>
      </div>
    </div>
  );
};

const CountryList = ({ data, searchField }) => {
  let updatedSearch = searchField.toUpperCase();
  let matchesSearch = (thing) =>
    thing && thing.toUpperCase().includes(updatedSearch);

  const doesCountrySatisfySearch = (country) =>
    matchesSearch(country.name) ||
    country.languages.some((language) => matchesSearch(language.name)) ||
    matchesSearch(country?.capital);

  const searchedCountries = data.filter(
    (country) => !searchField || doesCountrySatisfySearch(country)
  );

  searchList = searchedCountries;
  console.log(searchList);
  return searchedCountries.map((country) => (
    <li key={country.name}>
      <Country key={country.name} country={country} />
    </li>
  ));
};

export default App;
