
export function Card(props) {
  return (
    <div className="flex flex-wraps justify-around">
      <div className="text-center w-48">
        <p className="text-lg font-bold">BASIC</p>
        <p className="text-sm mb-2">Yearly generated footprint which shows approximately consumption</p>
        <button className="text-yellow-300 rounded-full bg-leaf-800 px-3 py-1 font-bold hover:text-white">CALCULATE</button>
      </div>
      <div className="text-center w-48">
        <p className="text-lg font-bold">ADVANCE</p>
        <p className="text-sm mb-2">Daily generated footprint which shows overall consumption</p>
        <button className="text-yellow-300 rounded-full bg-leaf-800 px-3 py-1 font-bold hover:text-white">CALCULATE</button>
      </div>
    </div>
  );
}

export default Card;