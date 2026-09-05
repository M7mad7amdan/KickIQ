import { CiStar } from "react-icons/ci";

const players = [
  {
    name: "K. Mbappe",
    position: "Forward",
    rating: "9.2",
    flag: "🇫🇷",
    image: "/Images/mbappe.png",
  },
  {
    name: "L. Messi",
    position: "Forward",
    rating: "9.1",
    flag: "🇦🇷",
    image: "/Images/messi.png",
  },
  {
    name: "E. Haaland",
    position: "Forward",
    rating: "9.1",
    flag: "🇳🇴",
    image: "/Images/haaland.png",
  },
  {
    name: "J. Bellingham",
    position: "Midfielder",
    rating: "8.9",
    flag: "🇬🇧",
    image: "/Images/bellingham.png",
  },
  {
    name: "V. Junior",
    position: "Forward",
    rating: "8.8",
    flag: "🇧🇷",
    image: "/Images/vinicius.png",
  },
  {
    name: "H. Kane",
    position: "Forward",
    rating: "8.7",
    flag: "🇬🇧",
    image: "/Images/kane.png",
  },
];

export default function TopPlayers() {
  return (
    <section className="bg-slate-100 py-16">

      <div className="max-w-[1200px] mx-auto px-6">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Top Players
          </h2>

          <button className="text-blue-600 font-medium hover:text-blue-700 transition">
            View All
          </button>

        </div>

        <div className="flex gap-5 overflow-x-auto pb-5">

          {players.map((player) => (
            <div
              key={player.name}
              className="
                relative
                shrink-0
                w-[210px]
                h-[250px]
                bg-white
                border
                border-gray-200
                rounded-2xl
                shadow-sm
                p-5
                flex
                flex-col
                hover:-translate-y-1
                hover:shadow-md
                transition
                duration-300
              "
            >

              {/* Flag */}
              <span className="absolute top-4 right-4 text-xl">
                {player.flag}
              </span>

              {/* Player Image */}
              <div className="h-[115px] flex justify-center items-end mb-2">
                <img
                  src={player.image}
                  alt={player.name}
                  className="h-full max-w-full object-contain"
                />
              </div>

              {/* Rating */}
              <span
                className="
                  bg-blue-600
                  text-white
                  text-sm
                  px-2
                  py-1
                  rounded-full
                  w-fit
                  mb-2
                "
              >
                {player.rating}
              </span>

              {/* Player Name */}
              <h3 className="font-semibold text-gray-900">
                {player.name}
              </h3>

              {/* Position + Favorite */}
              <div className="flex justify-between items-center mt-auto">

                <p className="text-sm text-gray-400">
                  {player.position}
                </p>

                <CiStar
                  className="
                    text-2xl
                    text-gray-400
                    cursor-pointer
                    hover:text-blue-600
                    transition
                  "
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}