import React from 'react';
import {useState, useEffect} from 'react';
import loading from './assets/loading.png'


function Germany() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://corona-api.com/countries")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              console.log(result.data);
              //setTotal(result.data);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
 
  return <div className="germany">
      <div className="headline">
          <h1>Corona</h1>
          <h2>Deutschland</h2>
      </div>
      {items.length < 1 ? "" : 
      <div className="stats">
          <p>Zahlen aktuell: <span>{items.data[76].latest_data.confirmed - items.data[76].latest_data.recovered - items.data[76].latest_data.deaths}</span></p>
          <p>Neuinfektionen täglich: <span>{items.data[76].today.confirmed}</span></p>
          <p className="akt">Letzte Aktualisierung: {items.data[76].updated_at.slice(0, 10)} um {items.data[76].updated_at.slice(11, 16)} Uhr</p>
      </div>}
    
    
  </div>;
}
 
export default Germany;