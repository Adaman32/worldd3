import { json } from 'd3';
import  {useState, useEffect} from 'react';

const jsonUrl = 'https://services.swpc.noaa.gov/json/ovation_aurora_latest.json';

export const useAurora = () => {
  const [data, setData] = useState(null);
  
    
  useEffect(() => {
    json(jsonUrl).then(data => {
      setData(data.coordinates);
    });
  }, []);
        
  console.log(data);

  return data;
}