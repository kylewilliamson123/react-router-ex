
import React from 'react';
import Shop from './Shop';
import Nav from './Nav';
import About from './About';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetails from './itemDetails';

function App() {
  return (
    <Router>
      <div className ="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/about" component={About}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/shop/:id" component ={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}

const Home =() =>(
  <div>
    <h1>Home Page</h1>
  </div>
);


export default App;
