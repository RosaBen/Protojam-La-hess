import { useState, useEffect } from "react";
import { getListProduct } from "../services/request";
import PropTypes from "prop-types";
import Papa from 'papaparse';

export default function Filter() {

    // const [productList, setProductList] = useState([]);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        getListProduct().then((data) => {
            Papa.parse(data, {
              header: true,
              complete: (result) => setDatas(result.data),
              error: (error) => console.error(error),
            });
          });
    }, []);

    console.info("toto",datas);
    
    const [selection, setSelection] = useState("");
    const handleChangeSelection = (event) => {
      setSelection(event.target.value);
    };
    const filteredProductList = datas
      .filter((product) => product.epoque === selection || selection === "");

    return (
    <>
    
    <label>
          Filtrer les produits par periode:
          <select onChange={handleChangeSelection}>
            <option >Toutes les périodes</option>
            {datas.map((product) => (
                <option key={product.id} value={product.epoque}>
                    {product.epoque}
                </option>
            ))} 
            </select>
        </label>

        <section>
          {filteredProductList.length > 0 ? (
            filteredProductList.map((product) => (
              <article key={product.id}>
                <h3>{product.nom}</h3>
              </article>)
          ))
        : "Aucun produit ne correspond à votre recherche"
        }
        </section>
    
    </>)
}

Filter.propTypes = {
    datas: PropTypes.arrayOf(
        PropTypes.shape({
            nom: PropTypes.string.isRequired,
            epoque: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,   
};