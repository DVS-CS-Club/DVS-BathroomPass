
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
        <big>DVS Bathroom Tracker</big>
        
        <input type = "text" id = "username" name="username" placeholder='Enter Name Here'></input>
        <button>Validate Your Pass</button>

        <p>
          <button onClick={refresh}>Click here to change the number</button> <br></br> The number is {Num}
        </p>
       
      </header>
    </div>
  );
}


export default App;
