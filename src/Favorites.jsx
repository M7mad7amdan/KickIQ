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
        else {
            try {
                const response = await fetch("http://localhost:3000/api/favorites", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setFavorites(data);
            } catch (error) {
                console.error("Error fetching favorites:", error);
            }

        }
    }

    async function removeFavorite(playerId) {
        const token = localStorage.getItem("token"); 
        if (!token) {
            console.error("No token found in localStorage");
            return;
        }
        try {
            const response = await fetch(`http://localhost:3000/api/favorites/${playerId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            console.log(data);
            // Remove the favorite from the UI
            setFavorites(favorites.filter((fav) => fav.player_id !== playerId));
        } catch (error) {
            console.error("Error removing favorite:", error);
        }
    }


  return (
    <div className="min-h-screen bg-[#f5f7fa]">

      <section className="bg-[#030f1e]">
        <div className="max-w-[1050px] mx-auto px-6 pt-20 pb-16">

          <div className="flex items-end justify-between gap-6">

            <h1 className="text-white text-5xl font-semibold tracking-tight">
              Favorites
            </h1>

            <p className="text-sm text-slate-400">
              {favorites.length} saved players
            </p>

          </div>

        </div>
      </section>

      <main className="max-w-[1050px] mx-auto px-6 py-14">

        {favorites.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {favorites.map((player) => (

              <div
                key={player.id}
                className="
                  group
                  bg-white
                  rounded-[24px]
                  border border-slate-200
                  overflow-hidden
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                <Link to={`/players/${player.player_id}`}>

                  <div className="
                    h-[260px]
                    bg-[#e8f2ff]
                    flex
                    items-end
                    justify-center
                    overflow-hidden
                  ">

                    <img
                      src={player.photo}
                      alt={player.name}
                      className="
                        h-[235px]
                        object-contain
                        transition
                        duration-300
                        group-hover:scale-[1.03]
                      "
                    />

                  </div>

                </Link>


                <div className="p-5">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <Link to={`/players/${player.player_id}`}>
                        <h2 className="
                          text-xl
                          font-semibold
                          text-[#030f1e]
                          hover:text-blue-600
                          transition
                        ">
                          {player.name}
                        </h2>
                      </Link>

                      <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                        <span>{player.nationality}</span>

                        <span className="w-1 h-1 rounded-full bg-slate-300" />

                        <span>{player.position}</span>
                      </div>
                    </div>


                    <button
                      className="
                        w-10 h-10
                        rounded-full
                        border border-slate-200
                        flex items-center justify-center
                        text-slate-400
                        hover:bg-red-50
                        hover:border-red-200
                        hover:text-red-500
                        transition
                      "
                      aria-label="Remove from favorites"
                        onClick={() => removeFavorite(player.player_id)}
                    >
                      ×
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="
            min-h-[420px]
            flex
            flex-col
            items-center
            justify-center
            text-center
          ">

            <div className="
              w-16 h-16
              rounded-full
              bg-[#e8f2ff]
              flex
              items-center
              justify-center
              text-2xl
              mb-5
            ">
              ♡
            </div>

            <h2 className="text-2xl font-semibold text-[#030f1e]">
              No favorites yet
            </h2>

            <p className="text-slate-500 mt-3">
              Save players you want to keep close.
            </p>

            <Link
              to="/players"
              className="
                mt-6
                bg-blue-600
                text-white
                px-6 py-3
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