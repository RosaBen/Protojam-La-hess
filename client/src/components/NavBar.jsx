import Basket from "./Basket";
import Filter from "./Filter";
import SearchBox from "./SearchBox";


export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar_search">
          <SearchBox/>
        </div>
        <div><Filter/></div>
        <div className="navbar_basket">
            <Basket/>
        </div>
      </nav>
    </>
  );
}
