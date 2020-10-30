import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SidebarAdmin } from '../../../components/admin/sidebar/Sidebar';
import { AdminHome } from '../home/Home';
import { AdminServicios } from '../servicios/Servicios';
import './Screen.scss';

export const AdminScreen = () => {
  return (
    <div className="admin-screen">
      <SidebarAdmin />
      <Switch>
        <Route path="/admin/dashboard/home" component={AdminHome} />
        <Route path="/admin/dashboard/servicios" component={AdminServicios} />
        <Redirect to="/admin/dashboard/home" />
      </Switch>
    </div>
  );
};
