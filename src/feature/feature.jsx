import React from "react";
import "./features.css"; 

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-item">
        <div className="icon">
          {/* Add your image icon here */}
        </div>
        <div className="content">
          <p>
            Que vous soyez commerçant, chef d'entreprise ou artisan, afficher un
            site internet aux couleurs de votre activité augmente considérablement
            votre crédibilité auprès de vos clients potentiels. Développez votre
            propre site Web ou votre blog personnel, ce qui vous aidera à obtenir
            de nouveaux contacts et à améliorer votre réputation. Vos clients
            potentiels pourront entrer en contact avec votre organisation grâce
            aux informations utiles fournies sur votre site Web.
          </p>
        </div>
      </div>
      <div className="feature-item">
        <div className="icon">
          {/* Add your image icon here */}
        </div>
        <div className="content">
          <p>
            Créez votre propre site Web statique ou dynamique à la demande. En
            fonction de vos besoins spécifiques, nous choisirons ensemble la
            solution la plus adaptée à votre projet: présentation ou conception
            d'un site internet corporate, création d'un site web sur mesure ou
            d'un pack CMS. Gérez votre site Web avec une interface de gestion de
            contenu simple et pratique.
          </p>
        </div>
      </div>
      <div className="feature-item">
        <div className="icon">
          {/* Add your image icon here */}
        </div>
        <div className="content">
          <p>
            Augmentez vos performances commerciales, votre volume de ventes, et
            diversifiez ainsi votre clientèle grâce à votre boutique en ligne.
            Créer votre propre site e-commerce dynamique vous ouvre les portes du
            e-business national et international. Proposez à vos clients un
            catalogue de vos produits pour passer leurs commandes et effectuer
            leurs achats en ligne de manière sécurisée.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
