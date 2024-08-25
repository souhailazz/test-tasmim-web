// src/HomePage.jsx
import React from 'react';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1 className="hero-title">BIENVENUE</h1>
        <h2 className="hero-subtitle">TASMIM WEB</h2>
        <p className="hero-description">
          Une agence web d'explorateurs ouverts sur le monde avec des<br></br> productions dans plusieurs secteurs d'activités, têtus lorsqu'il <br></br>s'agit d'accomplir une mission.
        </p>
        <button className="learn-more-button">En savoir plus</button><br></br><br></br><br></br>
        <div className="nav-container">
          <button className="nav-btn">Guides</button>
          <button className="nav-btn">Nos prestations</button>
          <button className="nav-btn">Notre processus</button>
          <button className="nav-btn">Technologies</button>
        </div>
      </header>
    </div>  

  );
};

export default HomePage;
