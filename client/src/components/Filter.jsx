import { useState, useEffect } from "react";
import { getListProduct } from "../services/request";
import PropTypes from "prop-types";
import Papa from 'papaparse';

export default function Filter() {

    // const [productList, setProductList] = useState([]);
    const [datas, setDatas] = useState([]);
    const [selection, setSelection] = useState("");
    const [uniqueEpoques, setUniqueEpoques] = useState([]);
    // const uniqueEpoques = Array.from(new Set(datas.map((product) => product.epoque)));
    
    console.log("titi", uniqueEpoques)

    useEffect(() => {
        getListProduct().then((data) => {
            Papa.parse(data, {
              header: true,
              complete: (result) => {
                const epoques = Array.from(new Set(result.data.map((product) => product.epoque)));
                setDatas(result.data);
                setUniqueEpoques(epoques);
              },
              error: (error) => console.error(error),
            });
          });
    }, [datas]);

    console.info("toto",datas);
    
    const handleChangeSelection = (event) => {
        setSelection(event.target.value);
    };
    const filteredProductList = datas
      .filter((era) => era.epoque === selection || selection === "");

    return (
    <>
    
    <label>
          Filtrer les produits par periode:
          <select onChange={handleChangeSelection}>
            <option >Toutes les périodes</option>
            {uniqueEpoques.map((epoque) => (
                <option key={epoque} value={epoque}>
                    {epoque}
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
            uniqueEpoques: PropTypes.arrayOf.isRequired,
        })
    ).isRequired,   
};