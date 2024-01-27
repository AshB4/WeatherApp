// src/utils/weatherApi.js

const apiKey = 'your-key-here';
const baseUrl = 'http://api.weatherapi.com/v1';

const getWeatherData = async (endpoint, params) => {
  const queryParams = new URLSearchParams({
    key: apiKey,
    ...params,
  });

  const apiUrl = `${baseUrl}/${endpoint}?${queryParams}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default getWeatherData;
