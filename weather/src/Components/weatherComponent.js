import React, { useEffect, useState } from 'react';
import { getWeatherData } from '../services/weatherService';

const WeatherComponent = () => {
  const [forecastData, setForecastData] = useState([]);
  const [temperatureUnit, setTemperatureUnit] = useState('celsius'); //'celsius' as default

  // Function to toggle temperature unit
  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) => (prevUnit === 'celsius' ? 'fahrenheit' : 'celsius'));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming 'forecast.json' is the correct endpoint for the forecast data
        const data = await getWeatherData('forecast.json', { q: 'Paris', days: 5 });

        // Assuming the API response structure has a 'forecast' property containing an array of daily forecasts
        if (data && data.forecast) {
          setForecastData(data.forecast.forecastday);
        }
      } catch (error) {
        // Handle errors
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Add a button or toggle switch to allow users to switch between Celsius and Fahrenheit */}
      <button onClick={toggleTemperatureUnit}>Toggle Temperature Unit</button>

      {forecastData.map((day, index) => (
        <WeatherCard key={index} day={day} temperatureUnit={temperatureUnit} />
      ))}
    </div>
  );
};

const WeatherCard = ({ day, temperatureUnit }) => {
  // Function to convert temperature based on the selected unit
  const convertTemperature = (temperature) => {
    if (temperatureUnit === 'celsius') {
      return `${temperature}°C`;
    } else {
      // Convert to Fahrenheit (example conversion, you might need a more accurate formula)
      const fahrenheit = (temperature * 9) / 5 + 32;
      return `${fahrenheit.toFixed(2)}°F`;
    }
  };

  return (
    <div>
      <h3>{day.date}</h3>
      <div style={{ background: 'white', padding: '10px', margin: '10px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h3>{day.date}</h3>
      <p>{getWeatherIcon(day.day.condition.code)} {day.day.condition.text}</p>
      <p>Condition: {day.day.condition.text}</p>
      <p>Temperature: {day.day.avgtemp_c}°C</p>
      <p>Max Temperature: {day.day.maxtemp_c}°C</p>
      <p>Min Temperature: {day.day.mintemp_c}°C</p>
      <p>Max Wind Speed: {day.day.maxwind_kph} km/h</p>
      <p>Total Precipitation: {day.day.totalprecip_mm} mm</p>
      <p>Average Visibility: {day.day.avgvis_km} km</p>
      <p>Average Humidity: {day.day.avghumidity}%</p>
      <p>UV Index: {day.day.uv}</p>
    </div>
    </div>
  );
};
export default WeatherComponent;
