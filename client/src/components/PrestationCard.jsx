import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PrestationCard.css';

const PrestationCard = ({ nom, description, prix, devise, epoque, image }) => {
  return (
    <div className="prestation-card">
      <img src={image} alt={nom} className="prestation-image" />
      <h3>{nom}</h3>
      <p>{description}</p>
      <p>Époque: {epoque}</p>
      <p>Prix: {prix} {devise}</p>
      
    </div>
  );
};

PrestationCard.propTypes = {
  nom: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  prix: PropTypes.string.isRequired,
  epoque: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  devise: PropTypes.string.isRequired,
};

export default PrestationCard;





