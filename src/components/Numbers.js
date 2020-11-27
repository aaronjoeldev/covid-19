import React from 'react';
import {useState, useEffect} from 'react';



function Numbers() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [ total, setTotal ] = useState(0);

    useEffect(() => {
        fetch("https://api.covid19api.com/summary")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              console.log(result.Global.TotalConfirmed);
              setTotal(result.Global.TotalConfirmed);
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
 
  return <div className="numbers">
      <div className="headline">
          <h1>Corona</h1>
          <h2>Zahlen</h2>
      </div>
      <div className="totalNumbers">
                {total}
      </div>
      
  </div>;
}
 
export default Numbers;