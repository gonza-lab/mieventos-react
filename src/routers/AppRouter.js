import React, { useEffect } from 'react';
import { useDispatch/* , useSelector  */} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import {
  startGetCardsFromHome,
  startGetPresentationFromHome,
} from '../actions/home';
import {
  startLoadCardsFromServicios,
  startLoadPresentationFromServicios,
} from '../actions/servicios';

import { AuthRouter } from './AuthRouter';
import { MiEventosRouter } from './MiEventosRouter';

export const AppRouter = () => {
  const dispatch = useDispatch();
  // const { presentation } = useSelector((state) => state.servicios);

  useEffect(() => {
    dispatch(startGetCardsFromHome());
    dispatch(startGetPresentationFromHome());
    dispatch(startLoadCardsFromServicios());
    dispatch(startLoadPresentationFromServicios());
  }, [dispatch]);

  if (true) {
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
