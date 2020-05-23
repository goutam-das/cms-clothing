import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import './App.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
  );
}

export default App;
