import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Papa from 'papaparse';
import PrestationCard from '../components/PrestationCard';
import Review from '../components/Review';
import '../styles/home.css';

export default function Home() {
  const csvData = useLoaderData();
  const [datas, setDatas] = useState([]);
  const [selection, setSelection] = useState("");
  const [uniqueEpoques, setUniqueEpoques] = useState([]);


  useEffect(() => {
    Papa.parse(csvData, {
      header: true,
      complete: (result) =>  {
        const epoques = Array.from(new Set(result.data.map((product) => product.epoque)));
        setDatas(result.data);
        setUniqueEpoques(epoques);
      },
      error: (error) => console.error(error),
    });
  }, [csvData]);

  const handleChangeSelection = (event) => {
    setSelection(event.target.value);
};

const filteredProductList = datas
.filter((product) => product.epoque === selection || selection === "");


  return (
    <>
      <div className="home-container">
        <div className="introduction-container">
          <h1>Voyagez dans le temps et apprenez des maîtres de l&apos;Histoire</h1>
          {console.log(datas)}
          <p>Plongez dans le passé et apprenez des maîtres historiques. Que ce soit la momification en Égypte antique, la philosophie grecque, les forges vikings ou les arts de la Renaissance, voyagez à travers le temps pour des cours uniques et enrichissants. Découvrez les secrets des civilisations anciennes et vivez une aventure éducative inoubliable.</p>
        </div>
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
                
            </section>

        <div className="prestation-container">

        {filteredProductList.length > 0 ? (
                    filteredProductList.map((product) => (
                        <PrestationCard key={product.id} product={product} />
                    ))
                ) : (
                    "Aucun produit ne correspond à votre recherche"
                )}
          
        </div>
        <div className="review-container">
          <Review />
        </div>

      </div>
    </>
  );
}