import { useState } from "react";

export default function Filter() {
    const productList = [
        {
          id: 1,
          name: "maconnerie Egyptienne",
          description:
            "créer des pyramides",
          price: 1450,
          era:"Egypte antique",
          picture:
            "https://picsum.photos/200/300"
        },
        {
          id: 2,
          name: "strategie militaire",
          description: "comment préparer ses troupes et gagner la bataille",
          price: 980,
          era:"Rome Antique",
          picture:
            "https://picsum.photos/id/237/200/300"}
      ];

      const [selection, setSelection] = useState("");
      const handleChangeSelection = (event) => {
        setSelection(event.target.value);
      };
      const filteredProductList = productList
      .filter((product) => product.era === selection || selection === "");

    return (
    <>
    
    <label>
          Filtrer les produits par periode:
          <select onChange={handleChangeSelection}>
            <option >Toutes les périodes</option>
            {productList.map((product) => (
                <option key={product.id} value={product.era}>
                    {product.era}
                </option>
            ))} 
            </select>
        </label>

        <section>
          {filteredProductList.length > 0 ? (
            filteredProductList.map((product) => (
              <article key={product.id}>
                <h3>{product.name}</h3>
              </article>)
          ))
        : "Aucun produit ne correspond à votre recherche"
        }
        </section>
    
    </>)
}