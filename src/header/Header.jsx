import React from 'react';
import './Header2.css';
import tasmimLogo from '/tasmim.png';

const Header = ({ onContactClick }) => {
  return (
    <header className="header">
      <div className="logo">
        <span><img src={tasmimLogo} alt="Tasmim Logo" /></span>
      </div>
      <nav className="nav">
        <ul>
          <li className="nav-item">
            <a href="#" onClick={() => window.location.reload()}>Accueil</a>
          </li>
          <li className="nav-item"><a href="#">L'agence</a></li>
          <li className="nav-item"><a href="#">Nos prestations</a></li>
          <li className="nav-item"><a href="#" onClick={onContactClick}>Contactez-nous</a></li>
        </ul>
      </nav>
      <div className="contact-info">
        <a href="tel:+212666671607">Appelez-nous : +212 6 66 67 16 07</a>
      </div>
    </header>
  );
};

export default Header;
