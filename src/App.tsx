import { useState } from 'react';
import Select from 'react-select';
import './App.css';

const names = [
    { value: 'John Cena', label: 'John Cena' },
    { value: 'Tom Brady', label: 'Tom Brady' }
];

function App() {
  const [selectedName, setSelectedName] = useState(null);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-200xl mb-10">DVS Bathroom Tracker</h1>

        <Select className="text-black" value={selectedName} onChange={setSelectedName} options={names} />
        <button>Validate Your Pass</button>
      </div>
    </>
  )
}

export default App;
