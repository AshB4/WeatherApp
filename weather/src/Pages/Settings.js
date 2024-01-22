import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSun,
  faMoon,
  faThermometer,
  faGlobe,
  faImages,
  faMap
 }
   from '@fortawesome/free-solid-svg-icons';

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
  switchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchLabel: {
    margin: '0 10px',
  },
});

const Settings = () => {
  const classes = useStyles();
  const [theme, setTheme] = useState('light'); 
    const [temperatureUnit, setTemperatureUnit] = useState('celsius');
    const [locationPreferences, setLocationPreferences] = useState('default');
    const [backgroundImage, setBackgroundImage] = useState('Default');
    const [mapStyle, setMapStyle] = useState('standard');

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };
const handleTemperatureUnitChange= (slelectedUnit) => {
  setTemperatureUnit(slelectedUnit);
}

  return (
    <div className={`${classes.settingsContainer} ${theme === 'dark' ? classes.darkTheme : classes.lightTheme}`}>
      <h2>Settings Page</h2>

      {/* Dark and Light Theme */}
<div className={`${classes.settingItem} ${classes.switchContainer}`}>
  <label>Theme:</label>
  <div className="switch">
    <input type="checkbox" id="themeSwitch" checked={theme === 'dark'} onChange={handleThemeChange} />
    <label htmlFor="themeSwitch" className="slider round"></label>
  </div>
  <select value={theme} onChange={(e) => handleThemeChange(e.target.value)}>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
  {/* Displaying icons */}
  {theme === 'light' ? <FontAwesomeIcon icon={faSun} color={'#000000'} /> : <FontAwesomeIcon icon={faMoon} color={'#fff'} />}
</div>


      {/* Temperature Unit */}
<div className={`${classes.settingItem} ${classes.switchContainer}`}>
  <label>Temperature Unit:</label>
  <div className="switch">
    <input type="checkbox" id="temperatureSwitch" checked={temperatureUnit === 'fahrenheit'} onChange={handleTemperatureUnitChange} />
    <label htmlFor="temperatureSwitch" className="slider round"></label>
  </div>
  <select value={temperatureUnit} onChange={(e) => handleTemperatureUnitChange(e.target.value)}>
    <option value="celsius">Celsius<FontAwesomeIcon icon={faThermometer} color={'#fff'} /></option>
    <option value="fahrenheit">Fahrenheit<FontAwesomeIcon icon={faThermometer} color={'#fff'} /></option>
  </select>
</div>


      <div className={classes.settingItem}>
        <label>Location Preferences:</label>
        <select value={locationPreferences} onChange={(e) => handleLocationPreferencesChange(e.target.value)}>
          <option value="default">Default Location<FontAwesomeIcon icon={faMap} color={'#fff'}/></option>
          <option value="multiple">Multiple Locations<FontAwesomeIcon icon ={faGlobe} color={'#fff'}/></option>
        </select>
      </div>

      {/* Multiple Locations Input Fields */}
      {locationPreferences === 'multiple' && (
        <div className={classes.settingItem}>
          {[0, 1, 2].map((index) => (
            <input
              key={index}
              type="text"
              placeholder={`Location ${index + 1}`}
              value={multipleLocations[index]}
              onChange={(e) => handleMultipleLocationsChange(index, e.target.value)}
            />
          ))}
        </div>
      )}

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
