import { useContext } from "react";
import BasketContext from "../context/BasketContext";

export function useBasket() {
    return useContext(BasketContext);
  }

