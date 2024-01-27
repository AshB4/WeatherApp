// App.js

import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Settings from './Pages/Settings';

// Create a context for managing settings state
const SettingsContext = createContext();

// Define the useSettings hook
const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

const App = () => {
  const [settings, setSettings] = useState({
    theme: 'light',
    temperatureUnit: 'celsius',
    locationPreferences: 'default',
    backgroundImage: 'Default',
    mapStyle: 'standard',
  });

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <Router>
      {/* Provide the settings state and update function to the context */}
      <SettingsContext.Provider value={{ settings, updateSettings }}>
        <Routes>
          {/* Pass settings as props to the Home and Settings components */}
          <Route path="/" element={<Home />} />
          <Route path="/Settings" element={<Settings />} />       
        </Routes>
      </SettingsContext.Provider>
    </Router>
  );
};

export { App, useSettings };
