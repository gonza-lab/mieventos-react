import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogOut } from '../../actions/auth';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(startLogOut());
  };

  return (
    <aside className="sidebar">
      <header>
        MiEventos Dashboard
        <i onClick={handleLogOut} className="fas fa-sign-out-alt logout"></i>
      </header>
      <NavLink exact activeClassName="active" to="/admin/dashboard/home">
        <i className="fas fa-home"></i>
        Home
      </NavLink>
      <NavLink exact activeClassName="active" to="/admin/dashboard/servicios">
        <i className="fas fa-concierge-bell"></i>
        Servicios
      </NavLink>
      <NavLink exact activeClassName="active" to="/admin/dashboard/galeria">
        <i className="fas fa-images"></i>
        Galeria
      </NavLink>
      <NavLink exact activeClassName="active" to="/admin/dashboard/contacto">
        <i className="fas fa-phone-volume"></i>
        Contacto
      </NavLink>
    </aside>
  );
};
