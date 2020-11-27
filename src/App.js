import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Numbers from './components/Numbers';
import News from './components/News';
import Germany from './components/Germany';
import Menu from './components/Menu';




function App() {
  //const [ dir, setDir ] = useState(0);
  var menuDir = 4;

const changeDir= (number) => {
  //setDir(number);
  menuDir = number;
  
}

console.log(menuDir);

  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/covid-19/" component={Numbers} exact />
        <Route path="/covid-19/news" component={News} />
        <Route path="/covid-19/germany" component={Germany} />
      </Switch>
      <Menu dir={menuDir}  change={(e) => changeDir(e)}/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
