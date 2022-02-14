import React, { useState } from 'react';

export function Calculation() {

  const data = [
    {
      name:'Electricity',
      unit: 'kwh',
      carbonfootprintPerUnit: 100,
      consumption:'0'
    },
    {
      name:'Gas',
      unit: 'm3',
      carbonfootprintPerUnit: 201,
      consumption:'0'
    },
    {
      name:'Water',
      unit: 'm3',
      carbonfootprintPerUnit: 302,
      consumption:'0'
    },
    {
      name:'Drive',
      unit: 'km',
      carbonfootprintPerUnit: 404,
      consumption:'0'
    }
  ]
  const [costs, setCosts] = useState(data);

  const handleCostsChange = event => {
    const _tempCosts = [...costs];
    _tempCosts[event.target.dataset.id].consumption= event.target.value;
    setCosts(_tempCosts);
  };

  const getTotalCosts = () => {
    return costs.reduce((total, e) => {
      return total + Number(e.consumption)* Number(e.carbonfootprintPerUnit);
    }, 0);
  };

  return (
    <div className="w-96 text-lg text-center">
      <p className="font-bold text-sm bg-leaf-800 text-white py-2 rounded my-3">CALCULATE YOUR CARBON FOOTPRINT</p>
      <p className="text-sm mb-6">Please enter your yearly consumption.</p>
      {data.map((e,index) =>
          <div data-id={index} key={index} className="flex my-2 justify-center items-center">
            <div className="w-24">
              <p className="text-left">{e.name}</p>
            </div>
            <input type="number" name="consumption" min="0" step="100" data-id={index} className="py-1 pl-3 w-24 rounded-lg border"
            onChange={handleCostsChange}/>
            <p className="mx-2 w-12">{e.unit}</p>
         </div>
      )}
      <p className="font-bold">Total: {getTotalCosts()}</p>
    </div>
  );
}

export default Calculation;