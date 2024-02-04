import React from 'react';
import '../css/NavBar.css';
import logo from '../images/wildsideCustomTaxidermy.jpeg';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navBar">
      <div className="logo">
        <Link to="/"><img src={logo} alt='Wildside Custom Taxidermy logo' /></Link>
      </div>
      <ul className="navLinks">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/awards">Awards</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/prices">Prices</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;