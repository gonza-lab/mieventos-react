import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <header>MiEventos Dashboard</header>
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
