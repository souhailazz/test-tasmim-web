import React from 'react';
import './HomePage.css';
import ServicesGrid from '../servicegrid/ServiceGrid.jsx';
import GuideIcon from '../assets/icons/guide.svg';
import PrestationsIcon from '../assets/icons/presentation.svg';
import ProcessIcon from '../assets/icons/proc.svg';
import TechnologiesIcon from '../assets/icons/technologies.svg';



const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1 className="hero-title">BIENVENUE</h1>
        <h2 className="hero-subtitle">TASMIM WEB</h2>
        <p className="hero-description">
          Une agence web d'explorateurs ouverts sur le monde avec des<br/> 
          productions dans plusieurs secteurs d'activités, têtus lorsqu'il <br/>
          s'agit d'accomplir une mission.
        </p>
        <button className="learn-more-button">En savoir plus</button><br/><br/><br/>
        <div className="nav-container">
            <button className="nav-btn">
              <img src={GuideIcon} alt="Guides Icon" />
              Guides
            </button>
            <button className="nav-btn">
              <img src={PrestationsIcon} alt="Prestations Icon" />
              Nos prestations
            </button>
            <button className="nav-btn">
              <img src={ProcessIcon} alt="Process Icon" />
              Notre processus
            </button>
            <button className="nav-btn">
              <img src={TechnologiesIcon} alt="Technologies Icon" />
              Technologies
            </button>
        </div>
      </header>
            <section className="services-section">
        <ServicesGrid />
      </section>
    </div>
  );
};

export default HomePage;
