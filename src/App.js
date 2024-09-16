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
          Edit <code>src/App.js</code> and save to reload. <br></br> <button onClick={refresh}>Click here to change the number</button> <br></br> The number is {Num}
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
