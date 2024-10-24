import { useState } from 'react';
import Select, { ActionMeta, OnChangeValue } from 'react-select';
import './App.css';

type OptionType = {value: string, label: string};

const names: OptionType[] = [
    { value: 'John Doe', label: 'John Doe' },
    { value: 'Jane Doe', label: 'Jane Doe' },
]

function App() {
    const [selectedName, setSelectedName] = useState<OptionType>({} as OptionType);

    const handleChange = (option: OnChangeValue<OptionType,false>, _actionMeta: ActionMeta<OptionType>) => {
        if (option) {
            setSelectedName(option);
        }
    }  

    function LeaveClass() {
        const updatedOutofClass = [...OutofClass, selectedName];
        setOutofClass(updatedOutofClass);
        console.log(updatedOutofClass);
    }

    const [OutofClass, setOutofClass] = useState<OptionType[]>([]);

    return (
        <div className="flex flex-col">
            <h1 className="text-200xl font-bold mb-10 text-gray-600">DVS Bathroom Tracker</h1>

            <Select className="text-black border border-black rounded mb-5" value={selectedName} onChange={handleChange} options={names} />
            <button className="text-black bg-green-500 border border-black rounded-md" onClick={LeaveClass}>Validate Your Pass</button>
            {OutofClass.map((value) => <p key={value.value}>{value.label}</p>)}
        </div>
    )
}

export default App;
