import { useState, useEffect } from "react";
import { getListProduct } from "../services/request";
import Papa from 'papaparse';
import PrestationCard from "./PrestationCard";

export default function Filter() {
    const [datas, setDatas] = useState([]);
    const [selection, setSelection] = useState("");
    const [uniqueEpoques, setUniqueEpoques] = useState([]);
    
    console.log("titi", uniqueEpoques);

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
        }).catch((error) => console.error("Error fetching the product list: ", error));
    }, []);

    console.info("toto", datas);
    
    const handleChangeSelection = (event) => {
        setSelection(event.target.value);
    };

    const filteredProductList = datas
      .filter((product) => product.epoque === selection || selection === "");

    return (
        <>
            <label>
                Filtrer les produits par période:
                <select onChange={handleChangeSelection} value={selection}>
                    <option value="">Toutes les périodes</option>
                    {uniqueEpoques.map((epoque) => (
                        <option key={epoque} value={epoque}>
                            {epoque}
                        </option>
                    ))} 
                </select>
            </label>

            <section className="filtered_list">
                {filteredProductList.length > 0 ? (
                    filteredProductList.map((product) => (
                        <PrestationCard key={product.id} product={product} />
                    ))
                ) : (
                    "Aucun produit ne correspond à votre recherche"
                )}
            </section>
        </>
    );
}
