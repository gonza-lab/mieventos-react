import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SidebarAdmin } from '../../../components/ui/sidebar/Sidebar';
import { AdminHome } from '../home/Home';
import { AdminServicios } from '../servicios/Servicios';

import './Screen.scss';
import '../../../components/admin/Modal.scss';
import '../../../components/admin/AdminForm.scss';
import { AdminGaleria } from '../galeria/Galeria';

export const AdminScreen = () => {

  return (
    <div className="admin-screen">
      <SidebarAdmin />
      <Switch>
        <Route path="/admin/dashboard/home" component={AdminHome} />
        <Route path="/admin/dashboard/servicios" component={AdminServicios} />
        <Route path="/admin/dashboard/galeria" component={AdminGaleria} />
        <Redirect to="/admin/dashboard/home" />
      </Switch>
    </div>
  );
};
