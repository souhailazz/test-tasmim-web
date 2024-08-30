import React from 'react';
import './processus.css';
const ProcessStep = ({ number, title, description, colorClass }) => (
  <div className={`process-step ${colorClass}`}>
    <div className="step-number">{number}</div>
    <div className="step-content">
      <h3 className="step-title">{title}</h3>
      <p className="step-description">{description}</p>
    </div>
  </div>
);

const ProcessDiagram = () => {
  return (
    <div className="process-diagram">
      <h2 className="process-title">NOTRE PROCESSUS</h2>
      <div className="timeline">
        <ProcessStep
          number="1"
          title="PLANIFICATION"
          description="Comprendre ce que vous voulez sur votre site Web et comment planier pour le mettre en œuvre."
          colorClass="blue"
        />
        <ProcessStep
          number="2"
          title="CONCEPTION"
          description="Nous allons créer une conception de site Web magnifique et peu coûteuse pour votre projet de marketing créatif."
          colorClass="orange"
        />
        <ProcessStep
          number="3"
          title="DÉVELOPPEMENT"
          description="Nous développons des systèmes de gestion de contenu pour les clients qui ont besoin de plus de base."
          colorClass="green"
        />
      </div>
    </div>
  );
};

export default ProcessDiagram;