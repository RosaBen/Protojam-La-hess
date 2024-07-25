
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Papa from 'papaparse';
import PrestationCard from '../components/PrestationCard';
import '../styles/home.css';

export default function Home() {
  const csvData = useLoaderData();
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse(csvData, {
      header: true,
      complete: (result) => setData(result.data),
      error: (error) => console.error(error),
    });
  }, [csvData]);

  return (
    <>
      <h1>TOTO</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptates distinctio ducimus perspiciatis commodi quisquam tempore soluta fugiat fuga dolorum quidem dicta aliquid veritatis ipsam inventore, neque, explicabo sequi cupiditate.</p>
      <div className="prestation-container">
        {data.map((item) => (
          <PrestationCard 
            key={item.id}
            nom={item.nom}
            description={item.description}
            prix={item.prix}
            epoque={item.epoque}
            image={item.image}
            devise={item.devise}
          />
        ))}
      </div>
    </>
  );
}
