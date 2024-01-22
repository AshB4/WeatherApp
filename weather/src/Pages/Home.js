import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  homeContainer: {
    textAlign: 'center',
    marginTop: '50px',
  },
  content: {
    fontSize: '18px',
    marginBottom: '20px',
  },
});

const Home = ({ theme, temperatureUnit, locationPreferences, backgroundImage, mapStyle }) => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <h2>Welcome to the Home Page!</h2>

      <div className={classes.content}>
        <p>Selected Theme: {theme}</p>
        <p>Temperature Unit: {temperatureUnit}</p>
        <p>Location Preferences: {locationPreferences}</p>
        <p>Background Image: {backgroundImage}</p>
        <p>Map Style: {mapStyle}</p>
      </div>

      {/* Add more content or components based on your requirements */}
    </div>
  );
};

export default Home;
