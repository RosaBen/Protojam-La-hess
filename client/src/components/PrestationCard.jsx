 
import { useBasket } from '../hooks/useContext';
import PropTypes from 'prop-types';

import { useState } from 'react';


import '../styles/PrestationCard.css';


const PrestationCard = ({ product}) => {
  
  const { basket, setBasket } = useBasket();
  console.log(basket)
  const addArticle = () => {
    setBasket(prevBasket => [...prevBasket, product]);
  };

  return (

    <div className="prestation-card">
      {/* {console.info(product)}  */}
      <div className="prestation-image-container">
        <img src={product.image} alt={product.nom} className="prestation-image" />
      </div>
      <div className="prestation-text-container">
        <h3>{product.nom}</h3>
        <p>{product.description}</p>
        <p>Époque: {product.epoque}</p>
        <p>Prix: {product.prix} {product.devise}</p>
        <button onClick={addArticle}>Ajouter au panier</button>
      </div>
    </div>

  );
};

PrestationCard.propTypes = {
  product: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    epoque: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    devise: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};


export default PrestationCard;