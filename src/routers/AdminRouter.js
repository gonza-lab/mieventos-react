import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AdminHome } from '../components/admin/AdminHome';
import { AdminServicios } from '../components/admin/AdminServicios';

export const AdminRouter = () => {
  return (
    <Switch>
      <Route path="/admin/dashboard/home" component={AdminHome} />
      <Route path="/admin/dashboard/servicios" component={AdminServicios} />
      <Redirect to="/admin/dashboard/home" />
    </Switch>
  );
};
