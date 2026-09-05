import { useState, useEffect } from "react";
import PlayerCard from "./playercard";
import { Link } from "react-router-dom";

export default function PlayersPage() {
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState("All Positions");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      let url = `http://localhost:3000/api/players?page=${page}`;

      if (search.length >= 4) {
        url += `&search=${search}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      setPlayers(data.response);
      setTotalPages(data.paging.total);
    }

    fetchPlayers();
  }, [page, search]);

  const filteredPlayers = players.filter(
    (item) =>
      item.player.position === position ||
      position === "All Positions"
  );

  return (
 
  <div className="min-h-screen bg-[#f5f7fa]">

    {/* Top Section */}
    <section className="bg-[#030f1e]">
      <div className="max-w-[1050px] mx-auto px-6 pt-20 pb-16">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

          <h1 className="text-white text-5xl font-semibold tracking-tight">
            Players
          </h1>

          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="text"
              value={search}
              placeholder="Search player"
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="
                w-full sm:w-[280px]
                bg-white/10
                border border-white/15
                text-white
                placeholder:text-slate-400
                rounded-full
                px-5 py-3
                outline-none
                transition
                focus:border-blue-400
              "
            />

            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="
                bg-[#b9d8ff]
                text-blue-700
                font-medium
                rounded-full
                px-5 py-3
                outline-none
                border-none
              "
            >
              <option>All Positions</option>
              <option>Forward</option>
              <option>Midfielder</option>
              <option>Defender</option>
              <option>Goalkeeper</option>
            </select>

          </div>

        </div>

      </div>
    </section>


    {/* Players */}
    <section>
      <div className="max-w-[1050px] mx-auto px-6 py-14">

        {filteredPlayers.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {filteredPlayers.map((item) => (

              <Link
                key={item.player.id}
                to={`/players/${item.player.id}`}
                state={{ player: item.player }}
                className="block"
              >

                <PlayerCard
                  name={item.player.name}
                  country={item.player.nationality}
                  position={item.player.position}
                  photo={item.player.photo}
                />

              </Link>

            ))}

          </div>

        ) : (

          <div className="py-24 text-center">
            <p className="text-slate-500">
              No players found
            </p>
          </div>

        )}


        {/* Pagination */}
        <div className="flex justify-center items-center gap-5 mt-16">

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="
              text-sm
              text-slate-700
              disabled:text-slate-300
              disabled:cursor-not-allowed
              hover:text-blue-600
              transition
            "
          >
            Previous
          </button>

          <div className="
            w-10 h-10
            rounded-full
            bg-[#86bdf4]
            text-white
            flex items-center justify-center
            text-sm font-semibold
          ">
            {page}
          </div>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="
              text-sm
              text-slate-700
              disabled:text-slate-300
              disabled:cursor-not-allowed
              hover:text-blue-600
              transition
            "
          >
            Next
          </button>

        </div>

      </div>
    </section>

  </div>
);
  
}