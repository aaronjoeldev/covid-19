import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';



const Menu = (props) => {
const [ page, setPage ] = useState(0);  

const putPath = (val) => {
    setPage(val);
}

const url = window.location.href;

const checkURL = () => {
    if(url.includes("news")){
        setPage(1);
    }else if(url.includes("germany")){
        setPage(2);
    }else{
        setPage(0);
    }
}

useEffect(() => {
    checkURL();
})



 
  return <div className="menu" data-value={page}>
      <Link to="/covid-19" className="slide" foo="0" onClick={() => putPath(0)}></Link>
      <Link to="/covid-19/news" className="slide" foo="1" onClick={() => putPath(1)}></Link>
      <Link to="/covid-19/germany" className="slide" foo="2" onClick={() => putPath(2)}></Link>
  </div>;
}
 
export default Menu;