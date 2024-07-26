/* eslint-disable react/prop-types */

import { useContext } from "react";
import BasketContext from "../context/BasketContext";

export default function Basket() {
  const { basket } = useContext(BasketContext);

  return (
    <>
      <h1>Panier</h1>
      <ul>
        {basket.map((item) => (
          <li key={item.id}>
            {item.nom} - {item.prix} 
          </li>
        ))}
      </ul>
      <h2>
        Total : {basket.reduce((sum, product) => sum + product.prix, 0)}€
      </h2>
    </>
  );
}