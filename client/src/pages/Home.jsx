
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Papa from 'papaparse';
import PrestationCard from '../components/PrestationCard';
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
      <h1>TOTO</h1>
    {console.log(datas)}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptates distinctio ducimus perspiciatis commodi quisquam tempore soluta fugiat fuga dolorum quidem dicta aliquid veritatis ipsam inventore, neque, explicabo sequi cupiditate.</p>
      <div className="prestation-container">
        {datas.map((data) => (
          <PrestationCard 
            key={data.id}
            product={data}
            
          />
        ))}
      </div>
    </>
  );
}
