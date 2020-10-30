import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

export const SidebarAdmin = () => {
  const [isShow, setIsShow] = useState('hide');

  const handleClose = () => {
    setIsShow((prev) => (prev === 'show' ? 'hide' : 'show'));
  };

  return (
    <aside className={`sidebar-admin sidebar-admin__${isShow}`}>
      <header>
        <i className="fas fa-tachometer-alt"></i>
        <p>GNZ ADMIN</p>
      </header>
      <nav className="sidebar-admin__nav">
        <ul>
          <p>PANTALLAS</p>
          <li>
            <NavLink exact activeClassName="active" to="/admin/dashboard/home">
              <i className="fas fa-home"></i>
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active"
              to="/admin/dashboard/servicios"
            >
              <i className="fas fa-concierge-bell"></i>
              <p>Servicios</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active"
              to="/admin/dashboard/galeria"
            >
              <i className="fas fa-images"></i>
              <p>Galeria</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active"
              to="/admin/dashboard/contacto"
            >
              <i className="fas fa-file-signature"></i>
              <p>Contacto</p>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="close-open-button">
        <i
          onClick={handleClose}
          className={`fas fa-chevron-${isShow === 'show' ? 'left' : 'right'}`}
        ></i>
      </div>
    </aside>
  );
};
