import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from './NavBar';

import { ContactoScreen } from '../components/contacto/ContactoScreen';
import { GaleriaScreen } from '../components/galeria/GaleriaScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { ServiciosScreen } from '../components/servicios/ServiciosScreen';


export const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/servicios" component={ServiciosScreen} />
        <Route exact path="/galeria" component={GaleriaScreen} />
        <Route exact path="/contacto" component={ContactoScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
};
