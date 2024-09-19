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
        <h1 className="text-2xl">DVS Bathroom Tracker</h1>
        <input type = "text" id = "username" name="username" placeholder='Enter Name Here'></input>
        <button>Validate Your Pass</button>
        <button onClick={refresh}>Click here to change the number</button>
        <p>The number is {Num}</p>
      </div>
    </>
  )
}

export default App
