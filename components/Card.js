import Link from 'next/link'

export function Card(props) {
  return (
    <div className="flex flex-wraps justify-around">
      <div className="text-center w-48">
        <p className="text-lg font-bold">BASIC</p>
        <p className="text-sm mb-2 h-20 md:h-16">Yearly generated footprint which shows approximately consumption</p>
        <Link href="/calculate">
          <button className="text-yellow-300 rounded-full bg-leaf-800 px-3 py-1 font-bold hover:text-white">CALCULATE</button>
        </Link>
      </div>
      <div className="text-center w-48">
        <p className="text-lg font-bold">ADVANCE</p>
        <p className="text-sm mb-2 h-20 md:h-16">Daily generated footprint which shows overall consumption</p>
        <button className="text-yellow-300 rounded-full bg-leaf-800 px-3 py-1 font-bold hover:text-white">CALCULATE</button>
        <div className="flex justify-end -translate-y-1.5">
          <p className="text-xs bg-orange-600 text-white font-semibold rounded-full px-2 py-1 w-16">SOON</p>
        </div>

      </div>
    </div>
  );
}

export default Card;