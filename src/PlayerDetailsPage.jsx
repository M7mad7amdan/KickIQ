import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PlayerDetailsPage() {
  const params = useParams();

  const [player, setPlayer] = useState(null);
  const [message, setMessage] = useState("");

  async function addToFavorites() {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Sign in to save players.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/favorites",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            id: player.player.id,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to add player");
      }

      setMessage("Player added to favorites.");
    } catch (error) {
      console.error("Error adding favorite:", error);
      setMessage(error.message);
    }
  }

  useEffect(() => {
    async function fetchPlayerDetails() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/players/${params.id}`
        );

        const data = await response.json();

        setPlayer(data.response[0]);
      } catch (error) {
        console.error("Error fetching player details:", error);
      }
    }

    fetchPlayerDetails();
  }, [params.id]);

  if (!player || !player.player) {
    return (
      <div className="min-h-screen bg-[#F6F7F9] flex items-center justify-center">
        <p className="text-sm text-slate-500">
          Loading player...
        </p>
      </div>
    );
  }

  const playerInfo = player.player;

  return (
    <div className="min-h-screen bg-[#F6F7F9]">

      {/* Header */}
      <section className="bg-[#08111F]">
        <div className="max-w-[1120px] mx-auto px-6 pt-10 pb-14">

          <Link
            to="/players"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition mb-10"
          >
            ← Back to players
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] items-center gap-10">

            {/* Photo */}
            <div className="
              h-[220px]
              bg-white
              rounded-2xl
              flex
              items-end
              justify-center
              overflow-hidden
            ">
              <img
                src={playerInfo.photo}
                alt={playerInfo.name}
                className="h-[205px] object-contain"
              />
            </div>


            {/* Main Info */}
            <div>

              <p className="text-sm text-slate-400 mb-3">
                Player Profile
              </p>

              <h1 className="
                text-white
                text-4xl
                md:text-5xl
                font-semibold
                tracking-tight
              ">
                {playerInfo.name}
              </h1>

              <div className="flex flex-wrap items-center gap-3 mt-5">

                <span className="
                  text-sm
                  text-slate-300
                  border
                  border-white/10
                  rounded-full
                  px-4
                  py-2
                ">
                  {playerInfo.nationality}
                </span>

                <span className="
                  text-sm
                  text-slate-300
                  border
                  border-white/10
                  rounded-full
                  px-4
                  py-2
                ">
                  {playerInfo.position}
                </span>

                {playerInfo.age && (
                  <span className="
                    text-sm
                    text-slate-300
                    border
                    border-white/10
                    rounded-full
                    px-4
                    py-2
                  ">
                    {playerInfo.age} years
                  </span>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Content */}
      <main className="max-w-[1120px] mx-auto px-6 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

          {/* Player Information */}
          <section className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-7
          ">

            <h2 className="text-xl font-semibold text-[#08111F] mb-7">
              Player Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">

              <InfoRow
                label="Full name"
                value={`${playerInfo.firstname || ""} ${playerInfo.lastname || ""}`.trim() || playerInfo.name}
              />

              <InfoRow
                label="Nationality"
                value={playerInfo.nationality}
              />

              <InfoRow
                label="Position"
                value={playerInfo.position}
              />

              <InfoRow
                label="Age"
                value={playerInfo.age ? `${playerInfo.age} years` : "-"}
              />

              <InfoRow
                label="Birth date"
                value={playerInfo.birth?.date || "-"}
              />

              <InfoRow
                label="Birth place"
                value={playerInfo.birth?.place || "-"}
              />

              <InfoRow
                label="Height"
                value={playerInfo.height || "-"}
              />

              <InfoRow
                label="Weight"
                value={playerInfo.weight || "-"}
              />

            </div>

          </section>


          {/* Action */}
          <aside className="
            bg-[#08111F]
            rounded-2xl
            p-7
            h-fit
          ">

            <p className="text-sm text-slate-400">
              Save Player
            </p>

            <h2 className="text-white text-xl font-semibold mt-2">
              Keep this player close
            </h2>

            <p className="text-sm text-slate-400 leading-6 mt-3">
              Add the player to your favorites for quick access later.
            </p>

            <button
              onClick={addToFavorites}
              className="
                w-full
                mt-7
                bg-[#4F8FEA]
                hover:bg-[#427FD5]
                text-white
                font-medium
                rounded-xl
                py-3
                transition
              "
            >
              Add to Favorites
            </button>

            {message && (
              <p className="text-sm text-slate-300 mt-4">
                {message}
              </p>
            )}

          </aside>

        </div>

      </main>

    </div>
  );
}


function InfoRow({ label, value }) {
  return (
    <div className="py-5 border-b border-slate-100">
      <p className="text-xs uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="text-sm font-medium text-[#08111F] mt-2">
        {value}
      </p>
    </div>
  );
}