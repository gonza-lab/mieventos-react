import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleShowMenu = () => {
    setIsShowMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <p>
          <span>Mi</span> <span>E</span>ventos
        </p>
      </div>
      <button
        className="navbar__more"
        onClick={() => setIsShowMenu(!isShowMenu)}
      >
        <div className="navbar__menu-activador">
          <span className={isShowMenu ? 'navbar__menu-abierto' : ''}>
            <span className="navbar__menu-activador-linea"></span>
            <span className="navbar__menu-activador-linea"></span>
            <span className="navbar__menu-activador-linea"></span>
          </span>
        </div>
      </button>
      <div
        className={`navbar__links ${isShowMenu ? 'navbar__links-show' : ''}`}
      >
        <NavLink
          onClick={handleShowMenu}
          exact
          activeClassName="navbar__link-active"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={handleShowMenu}
          exact
          activeClassName="navbar__link-active"
          to="/servicios"
        >
          Servicios
        </NavLink>
        <NavLink
          onClick={handleShowMenu}
          exact
          activeClassName="navbar__link-active"
          to="/galeria"
        >
          Galeria
        </NavLink>
        <NavLink
          onClick={handleShowMenu}
          exact
          activeClassName="navbar__link-active"
          to="/contacto"
        >
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};
