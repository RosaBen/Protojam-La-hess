import { useContext } from "react";
import BasketContext from "../context/BasketContext";

export const useBasket = () => useContext(BasketContext);