import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Papa from 'papaparse';
import PrestationCard from '../components/PrestationCard';
import Review from '../components/Review';
import '../styles/home.css';

export default function Home() {
  const csvData = useLoaderData();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    Papa.parse(csvData, {
      header: true,
      complete: (result) => setDatas(result.data),
      error: (error) => console.error(error),
    });
  }, [csvData]);

  return (
    <>
      <div className="home-container">
        <div className="introduction-container">
          <h1>Voyagez dans le temps et apprenez des maîtres de l&apos;Histoire</h1>
          {console.log(datas)}
          <p>Plongez dans le passé et apprenez des maîtres historiques. Que ce soit la momification en Égypte antique, la philosophie grecque, les forges vikings ou les arts de la Renaissance, voyagez à travers le temps pour des cours uniques et enrichissants. Découvrez les secrets des civilisations anciennes et vivez une aventure éducative inoubliable.</p>
        </div>
        <div className="prestation-container">
          {datas.map((data, index) => (
            <PrestationCard
              key={index}
              product={data}

            />
          ))}
        </div>
        <div className="review-container">
          <Review />
        </div>

      </div>
    </>
  );
}