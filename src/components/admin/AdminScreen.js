import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const AdminScreen = () => {
  return (
    <div className="admin-screen">
      <Sidebar />
      <Switch>
        <Route path="/admin/dashboard/home">
          <div>Hola</div>
        </Route>
      </Switch>
    </div>
  );
};
