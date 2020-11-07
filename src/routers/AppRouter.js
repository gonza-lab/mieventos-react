import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { AuthRouter } from './AuthRouter';
import { MiEventosRouter } from './MiEventosRouter';
import { startGetScreens } from '../actions/screen';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { screen } = useSelector((state) => state);

  useEffect(() => {
    dispatch(startGetScreens());
  }, [dispatch]);

  if (screen.home) {
    return (
      <Router>
        <Switch>
          <Route path="/admin" component={AuthRouter} />
          <Route path="/" component={MiEventosRouter} />
        </Switch>
      </Router>
    );
  } else {
    return (
      <div className="loader">
        <Loader type="Hearts" color="#E74C3C" height={150} width={150} />
      </div>
    );
  }
};
