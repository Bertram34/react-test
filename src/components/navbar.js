// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Hjem</Link></li>
        <li><Link to="/about">Om</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;