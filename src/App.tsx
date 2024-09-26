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
        <h1 className="text-200xl font-bold mb-10 text-gray-600">DVS Bathroom Tracker</h1>

        <Select className="text-black border border-black rounded mb-5" value={selectedName} onChange={setSelectedName} options={names} />
        <button className="text-black bg-green-500 border border-black rounded-md">Validate Your Pass</button>
      </div>
    </>
  )
}

export default App;
