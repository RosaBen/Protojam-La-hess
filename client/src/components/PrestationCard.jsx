import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/PrestationCard.css';

const PrestationCard = ({ product }) => {
  const [basket, setBasket] = useState([]);

  console.info(basket);

  const addArticle = () => {
    setBasket(prevBasket => [...prevBasket, product]);
  };

  return (
    <div className="prestation-card">
      {console.info(product)} 
      <img src={product.image} alt={product.nom} className="prestation-image" />
      <h3>{product.nom}</h3>
      <p>{product.description}</p>
      <p>Époque: {product.epoque}</p>
      <p>Prix: {product.prix} {product.devise}</p>
      <button onClick={addArticle}>Ajouter au panier</button>
    </div>
  );
};

// PrestationCard.propTypes = {
//   product: PropTypes.shape({
//     nom: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     prix: PropTypes.number.isRequired,++
//     epoque: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     devise: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//   }).isRequired,
// };

// PrestationCard.defaultProps = {
//   product: {
//     nom: '',
//     description: '',
//     prix: '',
//     epoque: '',
//     image: '',
//     devise: '',
//     id: '',
//   }
// };

export default PrestationCard;