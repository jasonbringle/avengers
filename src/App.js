import React from 'react';
import './App.css';
import Home from './components/Home';
import AvengerList from './components/AvengersList';
import { Route,Link } from 'react-router-dom';
import avengers from './components/avengersData'
import Header from './components/Header'
import Avenger from './components/AvengerPage'
console.log('GET IT', avengers)

function App() {
  return (
    <div className="App">
      <Header/>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/avengers">Avengers</Link></li>
      </ul>
      <Route exact path="/" component={Home}/>
      <Route exact path="/avengers" component={AvengerList}/>
      <Route path="/avengers/:id" component={Avenger} />
    </div>
  );
}
export default App;
