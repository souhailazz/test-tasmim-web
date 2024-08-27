import React from 'react';
import './ServiceGrid.css';

import designImage from '../assets/images/design.png';
import analysisImage from '../assets/images/analysis.png';
import seoImage from '../assets/images/seo.png';
import uiux from '../assets/images/uiux.png'; 
import fullstack from '../assets/images/fullstack.png';
import webdev from '../assets/images/webdev.png';

function ServicesGrid() {
  const services = [
    { title: 'DESIGN GRAPHIQUE', backgroundImage: `url(${designImage})` },
    { title: 'ANALYSIS', backgroundImage: `url(${analysisImage})` },
    { title: 'SEO', backgroundImage: `url(${seoImage})` },
    { title: 'UI/UX DESIGN', backgroundImage: `url(${uiux})` },
    { title: 'FULLSTACK APPLICATIONS', backgroundImage: `url(${fullstack})` },
    { title: 'WEB DEVELOPPEMENT', backgroundImage: `url(${webdev})` },
  ];

  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="service-item" 
          style={{ backgroundImage: service.backgroundImage }}
        >
          <div className="service-content">
            <span className="icon">{service.icon}</span>
            <h3>{service.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesGrid;
