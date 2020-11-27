import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import loading from './assets/loading.png'

const NewsCard = styled.div`
        flex: 0 0 30%;
        margin-right: 3rem;
        background: #222C38;
`;

const onWheel = e => {
    e.preventDefault();
    const container = document.getElementById("container");
    const containerScrollPosition = document.getElementById("container").scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: "smooth"
    });
  };

function News() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
   
    const [appState, setAppState] = useState({
        loading: null,
        repos: 0,
      });
  
          useEffect(() => {
            setAppState({ loading: true });
            const apiUrl = 'https://gnews.io/api/v4/search?q=corona&token=7e1140834e066608272e30de241a65ad';
            axios.get(apiUrl).then((repos) => {
              const allRepos = repos.data;
              setItems( allRepos.articles );
              console.log(allRepos);
            });
          }, [setAppState]);

          
          console.log(items);
          
     
        return( <div className="news">
            <div className="headline">
                <h1>Corona</h1>
                <h2>News</h2>
            </div>
            <div className="newsCards" onWheel={onWheel} id="container">
            {items.length < 1 ? <img src={loading} className="loading"/> : 
                items.map((news, key) =>
                    <NewsCard className="card">
                        <div className="c-img">
                            <img src={news.image} />
                        </div>
                        <h4>{news.title}</h4>
                        <p>{news.content}</p>
                        <div className="lower">
                            <div>
                                <p>Datum: {news.publishedAt.slice(0,10)}</p>
                                <p>Quelle: {news.source.name}</p>
                            </div>
                            <div>
                                <a href={news.url} target="_blank">weiter lesen</a>
                            </div>
                        </div>
                    </NewsCard>
                  )
            }
            </div>
         </div>
     )
  
}
 
export default News;