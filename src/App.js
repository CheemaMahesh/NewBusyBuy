import './App.css';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
// import { useState,useEffect } from 'react';

function App() {

function callHandle(){
  fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.2513844&lng=81.62964130000002&restaurantId=194638')
  .then(res=>res.json())
  .then(json=>console.log(json))
}

  return (
    <div className="App">
      <button onClick={callHandle}>Vlick mee i say</button>
      <Home/>
      <Contact/>

    </div>
  );
}

export default App;
