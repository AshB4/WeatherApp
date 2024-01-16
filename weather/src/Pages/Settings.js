import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  settingsContainer: {
    textAlign: 'center',
  },
  settingItem: {
    margin: '10px 0',
  },
  darkTheme: {
    backgroundColor: '#333',
    color: '#fff',
  },
  lightTheme: {
    backgroundColor: '#fff',
    color: '#333',
  },
});

const Settings = () => {
  const classes = useStyles();
  const [theme, setTheme] = useState('light'); // Default to light theme

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className={`${classes.settingsContainer} ${theme === 'dark' ? classes.darkTheme : classes.lightTheme}`}>
      <h2>Settings Page</h2>

      {/* Dark and Light Theme */}
      <div className={classes.settingItem}>
        <label>Theme:</label>
        <select value={theme} onChange={(e) => handleThemeChange(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {/* Temperature Unit */}
      <div className={classes.settingItem}>
        <label>Temperature Unit:</label>
        <select value={temperatureUnit} onChange={(e) => handleTemperatureUnitChange(e.target.value)}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>

      {/* Location Preferences */}
      <div className={classes.settingItem}>
        <label>Location Preferences:</label>
        <select value={locationPreferences} onChange={(e) => handleLocationPreferencesChange(e.target.value)}>
          <option value="default">Default Location</option>
          <option value="multiple">Multiple Locations</option>
        </select>
      </div>

      {/* Background Image Selection */}
      <div className={classes.settingItem}>
        <label>Background Image:</label>
        <select value={backgroundImage} onChange={(e) => handleBackgroundImageChange(e.target.value)}>
          <option value="Default">Beach Waves</option>
          <option value="image1">Joshua Tree</option>
          <option value="image2">St. Rosa Beach Florida</option>
          <option value="image3">Ocean Peir</option>
        </select>
      </div>

      {/* Map Styles */}
      <div className={classes.settingItem}>
        <label>Map Style:</label>
        <select value={mapStyle} onChange={(e) => handleMapStyleChange(e.target.value)}>
          <option value="standard">Standard</option>
          <option value="satellite">Satellite</option>
          <option value="terrain">Terrain</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
