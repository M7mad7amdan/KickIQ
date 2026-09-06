import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  async function getFavorites() {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/favorites",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      setFavorites(data);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  }

  async function removeFavorite(playerId) {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/favorites/${playerId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      console.log(data);

      setFavorites((currentFavorites) =>
        currentFavorites.filter(
          (favorite) => favorite.player_id !== playerId
        )
      );
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  }

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

              sm:flex-row
              sm:items-end
              sm:justify-between

              gap-4
              sm:gap-6
            "
          >

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
              Favorites
            </h1>

            <p
              className="
                text-xs
                sm:text-sm
                text-slate-400
              "
            >
              {favorites.length} saved players
            </p>

          </div>

        </div>

      </section>


      {/* Main */}
      <main
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

        {favorites.length > 0 ? (

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

            {favorites.map((player) => (

              <div
                key={player.id}
                className="
                  group

                  bg-white

                  rounded-2xl
                  sm:rounded-[24px]

                  border
                  border-slate-200

                  overflow-hidden

                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                {/* Player image */}
                <Link to={`/players/${player.player_id}`}>

                  <div
                    className="
                      h-[210px]
                      sm:h-[235px]
                      lg:h-[260px]

                      bg-[#e8f2ff]

                      flex
                      items-end
                      justify-center

                      overflow-hidden
                    "
                  >

                    <img
                      src={player.photo}
                      alt={player.name}
                      className="
                        h-[190px]
                        sm:h-[215px]
                        lg:h-[235px]

                        max-w-full
                        object-contain

                        transition
                        duration-300

                        group-hover:scale-[1.03]
                      "
                    />

                  </div>

                </Link>


                {/* Info */}
                <div
                  className="
                    p-4
                    sm:p-5
                  "
                >

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-3
                      sm:gap-4
                    "
                  >

                    <div className="min-w-0">

                      <Link to={`/players/${player.player_id}`}>

                        <h2
                          className="
                            text-lg
                            sm:text-xl

                            font-semibold

                            text-[#030f1e]

                            truncate

                            hover:text-blue-600

                            transition
                          "
                        >
                          {player.name}
                        </h2>

                      </Link>


                      <div
                        className="
                          flex
                          flex-wrap
                          items-center

                          gap-2

                          mt-2

                          text-xs
                          sm:text-sm

                          text-slate-500
                        "
                      >

                        <span>
                          {player.nationality}
                        </span>

                        <span
                          className="
                            w-1
                            h-1

                            rounded-full

                            bg-slate-300
                          "
                        />

                        <span>
                          {player.position}
                        </span>

                      </div>

                    </div>


                    {/* Remove */}
                    <button
                      className="
                        shrink-0

                        w-9
                        h-9

                        sm:w-10
                        sm:h-10

                        rounded-full

                        border
                        border-slate-200

                        flex
                        items-center
                        justify-center

                        text-slate-400

                        hover:bg-red-50
                        hover:border-red-200
                        hover:text-red-500

                        transition
                      "
                      aria-label="Remove from favorites"
                      onClick={() =>
                        removeFavorite(player.player_id)
                      }
                    >
                      ×
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div
            className="
              min-h-[320px]
              sm:min-h-[380px]
              lg:min-h-[420px]

              flex
              flex-col

              items-center
              justify-center

              text-center

              px-4
            "
          >

            <div
              className="
                w-14
                h-14

                sm:w-16
                sm:h-16

                rounded-full

                bg-[#e8f2ff]

                flex
                items-center
                justify-center

                text-xl
                sm:text-2xl

                mb-4
                sm:mb-5
              "
            >
              ♡
            </div>

            <h2
              className="
                text-xl
                sm:text-2xl

                font-semibold

                text-[#030f1e]
              "
            >
              No favorites yet
            </h2>

            <p
              className="
                text-sm
                sm:text-base

                text-slate-500

                mt-3

                max-w-[380px]
              "
            >
              Save players you want to keep close.
            </p>

            <Link
              to="/players"
              className="
                mt-5
                sm:mt-6

                bg-blue-600
                text-white

                px-5
                sm:px-6

                py-2.5
                sm:py-3

                rounded-full

                text-sm
                font-medium

                hover:bg-blue-700

                transition
              "
            >
              Explore players
            </Link>

          </div>

        )}

      </main>

    </div>
  );
}