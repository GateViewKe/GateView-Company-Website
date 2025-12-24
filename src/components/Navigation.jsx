import React, { useState } from 'react';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#home">GateView</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
