import { useState, useEffect } from "react";
import PlayerCard from "./playercard";
import { Link } from "react-router-dom";

export default function PlayersPage() {
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState("All Positions");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPlayers() {
      try {
        setLoading(true);
        setError("");

        let url = `http://localhost:3000/api/players?page=${page}`;

        if (search.length >= 4) {
          url += `&search=${encodeURIComponent(search)}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to load players"
          );
        }

        setPlayers(data.response || []);
        setTotalPages(data.paging?.total || 1);

      } catch (error) {
        console.error("Error fetching players:", error);
        setError(error.message);
        setPlayers([]);

      } finally {
        setLoading(false);
      }
    }

    fetchPlayers();

  }, [page, search]);


  const filteredPlayers = players.filter((item) => {
    return (
      position === "All Positions" ||
      item.player.position === position
    );
  });


  return (
    <div className="min-h-screen bg-[#f5f7fa]">

      {/* Header */}
      <section className="bg-[#030f1e]">

        <div
          className="
            max-w-[1050px]
            mx-auto

            px-4
            sm:px-6
            lg:px-8

            pt-12
            sm:pt-16
            lg:pt-20

            pb-10
            sm:pb-12
            lg:pb-16
          "
        >

          <div
            className="
              flex
              flex-col

              lg:flex-row
              lg:items-end
              lg:justify-between

              gap-6
              lg:gap-8
            "
          >

            <div>
              <p className="text-xs sm:text-sm text-slate-400 mb-2">
                Player Database
              </p>

              <h1
                className="
                  text-white

                  text-3xl
                  sm:text-4xl
                  lg:text-5xl

                  font-semibold
                  tracking-tight
                "
              >
                Players
              </h1>
            </div>


            {/* Search + Filter */}
            <div
              className="
                flex
                flex-col
                sm:flex-row

                gap-3

                w-full
                lg:w-auto
              "
            >

              <input
                type="text"
                value={search}
                placeholder="Search player"
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="
                  w-full
                  sm:w-[280px]

                  bg-white/10

                  border
                  border-white/15

                  text-white
                  placeholder:text-slate-400

                  rounded-full

                  px-4
                  sm:px-5

                  py-3

                  text-sm

                  outline-none

                  transition

                  focus:border-blue-400
                  focus:bg-white/15
                "
              />


              <select
                value={position}
                onChange={(e) =>
                  setPosition(e.target.value)
                }
                className="
                  w-full
                  sm:w-auto

                  bg-[#b9d8ff]

                  text-blue-700

                  font-medium

                  rounded-full

                  px-4
                  sm:px-5

                  py-3

                  text-sm

                  outline-none
                  border-none

                  cursor-pointer
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

        <div
          className="
            max-w-[1050px]
            mx-auto

            px-4
            sm:px-6
            lg:px-8

            py-8
            sm:py-10
            lg:py-14
          "
        >

          {/* Loading */}
          {loading && (
            <div
              className="
                min-h-[300px]

                flex
                items-center
                justify-center
              "
            >
              <p className="text-sm text-slate-500">
                Loading players...
              </p>
            </div>
          )}


          {/* Error */}
          {!loading && error && (
            <div
              className="
                min-h-[300px]

                flex
                flex-col
                items-center
                justify-center

                text-center

                px-4
              "
            >
              <h2
                className="
                  text-lg
                  sm:text-xl

                  font-semibold

                  text-[#030f1e]
                "
              >
                Players unavailable
              </h2>

              <p
                className="
                  text-sm
                  text-slate-500

                  mt-2
                "
              >
                {error}
              </p>
            </div>
          )}


          {/* Players Grid */}
          {!loading && !error && filteredPlayers.length > 0 && (

            <div
              className="
                grid

                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3

                gap-4
                sm:gap-5
                lg:gap-7
              "
            >

              {filteredPlayers.map((item) => (

                <Link
                  key={item.player.id}
                  to={`/players/${item.player.id}`}
                  state={{ player: item.player }}
                  className="block min-w-0"
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

          )}


          {/* No Players */}
          {!loading && !error && filteredPlayers.length === 0 && (

            <div
              className="
                min-h-[280px]
                sm:min-h-[320px]

                flex
                flex-col
                items-center
                justify-center

                text-center
              "
            >

              <h2
                className="
                  text-lg
                  sm:text-xl

                  font-semibold

                  text-[#030f1e]
                "
              >
                No players found
              </h2>

              <p
                className="
                  text-sm
                  text-slate-500

                  mt-2
                "
              >
                Try changing your search or position filter.
              </p>

            </div>

          )}


          {/* Pagination */}
          {!loading && !error && totalPages > 1 && (

            <div
              className="
                flex
                justify-center
                items-center

                gap-3
                sm:gap-5

                mt-10
                sm:mt-12
                lg:mt-16
              "
            >

              <button
                disabled={page === 1}
                onClick={() =>
                  setPage((currentPage) =>
                    currentPage - 1
                  )
                }
                className="
                  px-3
                  sm:px-4

                  py-2

                  rounded-full

                  text-xs
                  sm:text-sm

                  text-slate-700

                  border
                  border-slate-200

                  bg-white

                  disabled:text-slate-300
                  disabled:cursor-not-allowed
                  disabled:bg-slate-50

                  hover:text-blue-600
                  hover:border-blue-200

                  transition
                "
              >
                Previous
              </button>


              <div
                className="
                  min-w-10
                  h-10

                  px-3

                  rounded-full

                  bg-[#86bdf4]

                  text-white

                  flex
                  items-center
                  justify-center

                  text-sm
                  font-semibold
                "
              >
                {page}
              </div>


              <button
                disabled={page === totalPages}
                onClick={() =>
                  setPage((currentPage) =>
                    currentPage + 1
                  )
                }
                className="
                  px-3
                  sm:px-4

                  py-2

                  rounded-full

                  text-xs
                  sm:text-sm

                  text-slate-700

                  border
                  border-slate-200

                  bg-white

                  disabled:text-slate-300
                  disabled:cursor-not-allowed
                  disabled:bg-slate-50

                  hover:text-blue-600
                  hover:border-blue-200

                  transition
                "
              >
                Next
              </button>

            </div>

          )}

        </div>

      </section>

    </div>
  );
}