//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [value,setValue]=useState(1)
 
 
  return (
    <div className="App">
      <div> 
        <h1>Exercise-A</h1>
        <p>{value}</p>
        <button onClick={()=>setValue(value+1)}>+</button>
        <button onClick={()=>setValue(value-1)}>-</button>
       
      </div>
     
    </div>
  );
}

export default App;
