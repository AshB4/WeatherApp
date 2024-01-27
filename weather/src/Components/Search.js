import React, { useState, useEffect } from 'react';
import { geoApiOptions, GEO_API_URL } from '../../api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Function to load options when the component mounts
    const loadOptions = async (inputValue) => {
      try {
        const response = await fetch(
          `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
          geoApiOptions
        );
        if (response.ok) {
          const data = await response.json();
          const formattedOptions = data.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          }));
          setOptions(formattedOptions);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error loading options:', error);
      }
    };

    // Load initial options
    loadOptions('');

    // Cleanup function
    return () => {
      // Cleanup tasks (if any)
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleOnChange = (event) => {
    const selectedValue = event.target.value;
    setSearch(selectedValue);
    onSearchChange(selectedValue);
  };

  return (
    <select value={search} onChange={handleOnChange}>
      <option value="">Search for city</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Search;
