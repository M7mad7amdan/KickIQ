import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";

export default function PlayersInHomeScreen() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/players"
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        setPlayers(data.response || []);
      } catch (error) {
        console.error("Error fetching players:", error);
        setError("Could not load players.");
      } finally {
        setLoading(false);
      }
    }

    fetchPlayers();
  }, []);

  return (
    <section
      className="
        bg-[#030f1e]
        py-12
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          max-w-[1200px]
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* Header */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:justify-between
            sm:items-end
            gap-5
            mb-8
            sm:mb-10
          "
        >
          <div>
            <p className="text-blue-400 text-xs sm:text-sm font-medium mb-2">
              PLAYER DATABASE
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                font-bold
                text-white
              "
            >
              Top Players
            </h2>

            <p
              className="
                text-sm
                sm:text-base
                text-gray-400
                mt-2
                max-w-[520px]
              "
            >
              Explore professional football players from around the world.
            </p>
          </div>

          <button
            className="
              self-start
              sm:self-auto
              text-sm
              sm:text-base
              text-blue-400
              font-medium
              hover:text-blue-300
              transition
            "
          >
            View All →
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-gray-400">
            Loading players...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-400">
            {error}
          </p>
        )}

        {/* No players */}
        {!loading && !error && players.length === 0 && (
          <p className="text-gray-400">
            No players found.
          </p>
        )}

        {/* Players */}
        {!loading && players.length > 0 && (
          <div
            className="
              flex
              gap-4
              sm:gap-5
              overflow-x-auto
              pb-5

              snap-x
              snap-mandatory

              scrollbar-hide
            "
          >
            {players.slice(0, 6).map((item) => {
              const player = item.player;

              return (
                <div
                  key={player.id}
                  className="
                    group
                    relative
                    shrink-0

                    w-[190px]
                    sm:w-[210px]
                    lg:w-[220px]

                    h-[285px]
                    sm:h-[300px]
                    lg:h-[310px]

                    bg-[#07182d]

                    border
                    border-white/10

                    rounded-2xl
                    overflow-hidden

                    snap-start

                    hover:border-blue-500/40
                    hover:-translate-y-2

                    transition-all
                    duration-300
                  "
                >

                  {/* Favorite */}
                  <button
                    className="
                      absolute
                      top-3
                      right-3
                      sm:top-4
                      sm:right-4

                      z-20

                      w-8
                      h-8
                      sm:w-9
                      sm:h-9

                      rounded-full

                      bg-black/30
                      backdrop-blur-md

                      flex
                      justify-center
                      items-center

                      hover:bg-blue-600

                      transition
                    "
                  >
                    <CiStar className="text-lg sm:text-xl text-white" />
                  </button>

                  {/* Player Image */}
                  <div
                    className="
                      h-[165px]
                      sm:h-[175px]
                      lg:h-[185px]

                      flex
                      justify-center
                      items-end

                      bg-gradient-to-b
                      from-blue-500/10
                      to-transparent
                    "
                  >
                    <img
                      src={player.photo}
                      alt={player.name}
                      className="
                        h-[145px]
                        sm:h-[155px]
                        lg:h-[165px]

                        max-w-full
                        object-contain

                        group-hover:scale-105

                        transition
                        duration-300
                      "
                    />
                  </div>

                  {/* Player information */}
                  <div
                    className="
                      p-4
                      sm:p-5
                    "
                  >
                    <div
                      className="
                        flex
                        justify-between
                        items-center
                        gap-2
                        mb-3
                      "
                    >
                      <span
                        className="
                          text-[10px]
                          sm:text-xs

                          text-blue-300

                          bg-blue-500/10

                          border
                          border-blue-500/20

                          px-2
                          sm:px-3
                          py-1

                          rounded-full

                          truncate
                        "
                      >
                        {player.position || "Player"}
                      </span>

                      <span
                        className="
                          text-[10px]
                          sm:text-xs
                          text-gray-400
                          shrink-0
                        "
                      >
                        {player.age
                          ? `${player.age} yrs`
                          : ""}
                      </span>
                    </div>

                    {/* Name */}
                    <h3
                      className="
                        text-base
                        sm:text-lg
                        font-semibold
                        text-white
                        truncate
                      "
                    >
                      {player.name}
                    </h3>

                    {/* Nationality */}
                    <p
                      className="
                        text-xs
                        sm:text-sm
                        text-gray-500
                        mt-1
                        truncate
                      "
                    >
                      {player.nationality || "Unknown"}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}