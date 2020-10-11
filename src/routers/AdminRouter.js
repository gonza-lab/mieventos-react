import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AdminHome } from '../components/admin/AdminHome';

export const AdminRouter = () => {
  return (
    <Switch>
      <Route path="/admin/dashboard/home" component={AdminHome} />
    </Switch>
  );
};
