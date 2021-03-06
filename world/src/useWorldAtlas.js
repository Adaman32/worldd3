import { json } from 'd3';
import React, {useState, useEffect} from 'react';
import { feature, mesh } from 'topojson';

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

export const useWorldAtlas = () => {
  const [data, setData] = useState(null);
  
    

  useEffect(() => {
    json(jsonUrl).then(topojsonData => {
        const {countries} = topojsonData.objects;
        setData({
            countries: feature(topojsonData, countries),
            interiors: mesh(topojsonData, countries, (a,b) => a !== b),
            id:countries.id
        });
    });
  }, []);
  return data;
}