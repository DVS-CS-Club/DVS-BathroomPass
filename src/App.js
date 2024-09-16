import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
 
  const [Num, setNum] = useState(Math.round(Math.random()*10));
  
  function refresh() {
     setNum(Math.round(Math.random()*10));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. The random number is <button onClick={refresh}>{Num}</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
