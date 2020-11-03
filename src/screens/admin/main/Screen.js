import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { startGetScreens } from '../../../actions/screen';
import { SidebarAdmin } from '../../../components/ui/sidebar/Sidebar';
import { AdminHome } from '../home/Home';
import { AdminServicios } from '../servicios/Servicios';
import './Screen.scss';

export const AdminScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetScreens());
  }, [dispatch]);

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
