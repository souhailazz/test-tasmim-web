import React from 'react';
import './Header2.css';
import tasmimLogo from '../assets/images/tasmim.png';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span><img src={tasmimLogo} alt="Tasmim Logo" /></span>
      </div>
      <nav className="nav">
        <ul>
          <li className="nav-item"><a href="#">Accueil</a></li>
          <li className="nav-item"><a href="www.agence.ma">L'agence</a></li>
          <li className="nav-item"><a href="#">Nos prestations</a></li>
          <li className="nav-item"><a href="#">Contactez-nous</a></li>
        </ul>
      </nav>
      <div className="contact-info">
        <a href="tel:+212666671607">Appelez-nous : +212 6 66 67 16 07</a>
      </div>
    </header>
  );
};

export default Header;
