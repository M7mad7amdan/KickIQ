export default function PlayerCard(props) {
  return (
    <div className="
      bg-white
      border
      border-gray-200
      rounded-2xl
      p-6
      hover:shadow-md
      transition
      cursor-pointer
    ">

      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {props.name}
          </h2>

          <p className="text-gray-500 mt-1">
            {props.country}
          </p>
        </div>

        <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-semibold">
          {props.rating}
        </div>

      </div>

      <div className="border-t border-gray-100 mt-6 pt-5">

        <p className="text-sm text-gray-400">
          Position
        </p>

        <p className="text-gray-800 font-medium mt-1">
          {props.position}
        </p>

      </div>

    </div>
  );
}