// src/services/apiService.js

const weatherApi = 'https://www.weatherapi.com'; //sign up for free api and replace with your key

export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${weatherApi}/${endpoint}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // handle errors...what errors do I need to handle?
  }
};
