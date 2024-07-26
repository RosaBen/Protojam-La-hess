import { useBasket } from "../hooks/useContext";
import Filter from "./Filter";
import SearchBox from "./SearchBox";


export default function Navbar() {
    const { basket } = useBasket();
    console.info(basket)
  return (
    <>
      <nav className="navbar">
        <div className="navbar_search">
          <SearchBox/>
        </div>
        <div><Filter/></div>
        <div className="navbar_basket">
        <p>
            {basket.length
              ? `Il y a ${basket.length} dans votre panier`
              : "Votre panier est vide"}
          </p>
        </div>
      </nav>
    </>
  );
}



