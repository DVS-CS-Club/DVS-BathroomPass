import { useState } from 'react';
import './App.css'

function App() {
  const [Num, setNum] = useState(Math.round(Math.random()*10));
  
  function refresh() {
      setNum(Math.round(Math.random()*10));
  }  

  return (
    <>
      <div className="flex flex-col">
        <big>DVS Bathroom Tracker</big>
        <input type = "text" id = "username" name="username" placeholder='Enter Name Here'></input>
        <button>Validate Your Pass</button>
        <p>
            <button onClick={refresh}>Click here to change the number</button> <br></br> The number is {Num}
        </p>
      </div>
    </>
  )
}

export default App
