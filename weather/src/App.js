// App.js

import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Settings from './Pages/Settings';

// Create a context for managing settings state
const SettingsContext = createContext();

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
        <Switch>
          {/* Pass settings as props to the Home and Settings components */}
          <Route path="/" exact render={() => <Home {...settings} />} />
          <Route path="/settings" component={Settings} />
          {/* Add more routes if needed */}
        </Switch>
      </SettingsContext.Provider>
    </Router>
  );
};

// Create a custom hook to access the settings context
const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export { App, useSettings };
