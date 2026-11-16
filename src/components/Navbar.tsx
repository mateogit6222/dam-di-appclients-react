import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = (): void => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = (): void => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/clients" onClick={closeNavbar}>
          AppClients React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/clients"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeNavbar}
              >
                Ver clientes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/new-client"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeNavbar}
              >
                Añadir clientes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeNavbar}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
