import React from "react";
import "./Feature.css";

const featureData = [
  {
    icon: "/fe1.png",
    content: "Que vous soyez commerçant, chef d'entreprise ou artisan, afficher un site internet aux couleurs de votre activité augmente considérablement votre crédibilité auprès de vos clients potentiels. Développez votre propre site Web ou votre blog personnel, ce qui vous aidera à obtenir de nouveaux contacts et à améliorer votre réputation. Vos clients potentiels pourront entrer en contact avec votre organisation grâce aux informations utiles fournies sur votre site Web."
  },
  {
    icon: "/fe2.png", 
    content: "Créez votre propre site Web statique ou dynamique à la demande. En fonction de vos besoins spécifiques, nous choisirons ensemble la solution la plus adaptée à votre projet: présentation ou conception d'un site internet corporate, création d'un site web sur mesure ou d'un pack CMS. Gérez votre site Web avec une interface de gestion de contenu simple et pratique."
  },
  {
    icon: "/fe3.png", 
    content: "Augmentez vos performances commerciales, votre volume de ventes, et diversifiez ainsi votre clientèle grâce à votre boutique en ligne. Créer votre propre site e-commerce dynamique vous ouvre les portes du e-business national et international. Proposez à vos clients un catalogue de vos produits pour passer leurs commandes et effectuer leurs achats en ligne de manière sécurisée."
  },
  {
    icon: "/fe4.png", 
    content: "Augmentez vos performances commerciales, votre volume de ventes, et diversifiez ainsi votre clientèle grâce à votre boutique en ligne. Créer votre propre site e-commerce dynamique vous ouvre les portes du e-business national et international. Proposez à vos clients un catalogue de vos produits pour passer leurs commandes et effectuer leurs achats en ligne de manière sécurisée."
  },
  {
    icon: "/fe5.png", 
    content: "Augmentez vos performances commerciales, votre volume de ventes, et diversifiez ainsi votre clientèle grâce à votre boutique en ligne. Créer votre propre site e-commerce dynamique vous ouvre les portes du e-business national et international. Proposez à vos clients un catalogue de vos produits pour passer leurs commandes et effectuer leurs achats en ligne de manière sécurisée."
  },
  {
    icon: "/fe6.png", 
    content: "Augmentez vos performances commerciales, votre volume de ventes, et diversifiez ainsi votre clientèle grâce à votre boutique en ligne. Créer votre propre site e-commerce dynamique vous ouvre les portes du e-business national et international. Proposez à vos clients un catalogue de vos produits pour passer leurs commandes et effectuer leurs achats en ligne de manière sécurisée."
  },
  {
    icon: "/fe7.png", 
    content: "Augmentez vos performances commerciales, votre volume de ventes, et diversifiez ainsi votre clientèle grâce à votre boutique en ligne. Créer votre propre site e-commerce dynamique vous ouvre les portes du e-business national et international. Proposez à vos clients un catalogue de vos produits pour passer leurs commandes et effectuer leurs achats en ligne de manière sécurisée."
  },
  {
    icon: "/fe8.png", 
    content: "Augmentez vos performances commerciales, votre volume de ventes, et diversifiez ainsi votre clientèle grâce à votre boutique en ligne. Créer votre propre site e-commerce dynamique vous ouvre les portes du e-business national et international. Proposez à vos clients un catalogue de vos produits pour passer leurs commandes et effectuer leurs achats en ligne de manière sécurisée."
  }
];

const Features = () => {
  return (
    <div className="features-container">

      {featureData.map((feature, index) => (
        <div key={index} className={`feature-item feature-item-${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="icon">
            {feature.icon && <img src={feature.icon} alt={`Feature ${index + 1}`} />}
          </div>
          <div className="content">
            <p>{feature.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
