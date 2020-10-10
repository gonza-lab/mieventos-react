import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { NavBar } from './NavBar';

import { ContactoScreen } from '../components/contacto/ContactoScreen';
import { GaleriaScreen } from '../components/galeria/GaleriaScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { ServiciosScreen } from '../components/servicios/ServiciosScreen';

import { Footer } from '../components/footer/Footer';

export const MiEventosRouter = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/servicios" component={ServiciosScreen} />
        <Route exact path="/galeria" component={GaleriaScreen} />
        <Route exact path="/contacto" component={ContactoScreen} />
        <Route exact path="/" component={HomeScreen} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};
