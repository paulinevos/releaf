
export function Card(props) {
  return (
    <div className="flex items-center bg-leaf-800 w-64 m-4 shadow-lg rounded-lg hover:shadow-xl">
      <div className="flex justify-center p-2 w-36 items-center">
        <p className="text-lg font-bold text-white">BASIC</p>
      </div>
      <div className="bg-leaf-700 p-2 rounded-r-lg shadow-inner">
        <p className="text-sm text-leaf-100 mb-2">Yearly generated footprint which shows </p>
        <button class="text-leaf-700 rounded-full bg-yellow-300 px-3 py-1 font-bold hover:text-leaf-800">CALCULATE</button>
      </div>
    </div>
  );
}

export default Card;