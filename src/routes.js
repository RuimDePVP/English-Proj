import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';
import Retry from './pages/Retry';

export default function Routes() {
  return (
  <BrowserRouter>
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/game' component={Game} />
        <Route path='/retry' component={Retry} />
    </Switch>
  </BrowserRouter>
  );
}