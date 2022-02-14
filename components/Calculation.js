import React, { useState } from 'react';

export function Calculation() {

  const data = [
    {
      name:'Electricity',
      unit: 'kwh',
      carbonfootprintPerUnit: 100
    },
    {
      name:'Gas',
      unit: 'm3',
      carbonfootprintPerUnit: 201
    },
    {
      name:'Water',
      unit: 'm3',
      carbonfootprintPerUnit: 302
    },
    {
      name:'Drive',
      unit: 'km',
      carbonfootprintPerUnit: 404
    }
  ]
  const [costs, setCosts] = useState(data);

  const handleCostsChange = event => {
    const _tempCosts = [...costs];
    _tempCosts[event.target.dataset.id][event.target.name] = event.target.value;
    setCosts(_tempCosts);
  };

  const getTotalCosts = () => {
    return costs.reduce((total, e) => {
      return total + Number(e.carbonfootprintPerUnit);
    }, 0);
  };

  return (
    <div className="w-96 text-lg text-center">
      <p className="font-bold text-sm bg-leaf-800 text-white py-2 rounded my-3">CALCULATE YOUR CARBON FOOTPRINT</p>
      {data.map((e,index) =>
          <div data-id={index} className="flex my-2 justify-center">
            <p className="w-24">{e.name}</p>
            <input type="number" min="0" step="100" value={e.consumption} data-id={index} className="py-1 pl-3 w-24 rounded-lg"
            onChange={handleCostsChange}/>
            <p className="mx-2">{e.unit}</p>
         </div>
      )}
      <p className="font-bold">Total: {getTotalCosts()}</p>
    </div>
  );
}

export default Calculation;