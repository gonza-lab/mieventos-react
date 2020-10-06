import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { ServiciosScreen } from '../components/servicios/ServiciosScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/servicios" component={ServiciosScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
};
