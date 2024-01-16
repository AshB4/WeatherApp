import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Settings from './Settings';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/settings" component={Settings} />
        {/* Add more routes if needed */}
      </Switch>
    </Router>
  );
};

export default App;
