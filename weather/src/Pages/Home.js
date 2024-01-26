import React from 'react';
import { useSettings } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

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

const Home = () => {
  const classes = useStyles();
  const { theme, temperatureUnit, locationPreferences, backgroundImage, mapStyle } = useSettings();

  return (
    <div className={classes.homeContainer}>
      <h2>Welcome to the Home Page!</h2>
      <Link to="/settings">
  <FontAwesomeIcon icon={faCog} />
</Link>
      <div className={classes.content}>
        <p>Selected Theme: {theme}</p>
        <p>Temperature Unit: {temperatureUnit}</p>
        <p>Location Preferences: {locationPreferences}</p>
        <p>Background Image: {backgroundImage}</p>
        <p>Map Style: {mapStyle}</p>
      </div>

      <Link to="/settings">
        <FontAwesomeIcon icon={faCog} size="2x" />
      </Link>
    </div>
  );
};

export default Home;
