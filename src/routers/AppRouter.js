import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { MiEventosRouter } from './MiEventosRouter';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AuthRouter} />
        <Route path="/" component={MiEventosRouter} />
      </Switch>
    </Router>
  );
};
