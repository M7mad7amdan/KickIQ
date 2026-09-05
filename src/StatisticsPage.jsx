import { useEffect, useState } from "react";

export default function Statistics() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStatistics() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/statistics"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to load statistics");
        }

        setStats(data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStatistics();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F6F7F9] flex items-center justify-center">
        <p className="text-slate-500 text-sm">
          Loading statistics...
        </p>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="min-h-screen bg-[#F6F7F9] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-xl font-semibold text-[#08111F]">
          Statistics unavailable
        </h2>

        <p className="text-slate-500 text-sm mt-2">
          {error || "Unable to load statistics."}
        </p>
      </div>
    );
  }

  const overview = [
    {
      label: "Matches",
      value: stats.overview?.matches ?? 0,
    },
    {
      label: "Goals",
      value: stats.overview?.goals ?? 0,
    },
    {
      label: "Teams",
      value: stats.overview?.teams ?? 0,
    },
    {
      label: "Avg. Goals",
      value: stats.overview?.averageGoals ?? 0,
    },
  ];

  const scorers = stats.scorers || [];
  const standings = stats.standings || [];

  return (
    <div className="min-h-screen bg-[#F6F7F9]">

      {/* Header */}
      <section className="bg-[#08111F]">
        <div className="max-w-[1120px] mx-auto px-6 py-16">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <div>
              <p className="text-sm font-medium text-slate-400 mb-3">
                Premier League
              </p>

              <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
                Statistics
              </h1>
            </div>

            <div className="text-sm text-slate-400">
              2024 / 25
            </div>

          </div>

        </div>
      </section>


      {/* Content */}
      <main className="max-w-[1120px] mx-auto px-6 py-12">

        {/* Overview */}
        <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-8">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {overview.map((item, index) => (
              <div
                key={item.label}
                className={`
                  px-6 py-6
                  border-slate-100
                  ${
                    index < overview.length - 1
                      ? "lg:border-r"
                      : ""
                  }
                  ${
                    index < 2
                      ? "border-b lg:border-b-0"
                      : ""
                  }
                `}
              >
                <p className="text-sm text-slate-500">
                  {item.label}
                </p>

                <p className="text-3xl font-semibold text-[#08111F] mt-2">
                  {item.value}
                </p>
              </div>
            ))}

          </div>

        </section>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Top Scorers */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6">

            <div className="flex items-center justify-between mb-5">

              <h2 className="text-xl font-semibold text-[#08111F]">
                Top Scorers
              </h2>

              <span className="text-xs uppercase tracking-wide text-slate-400">
                Goals
              </span>

            </div>

            {scorers.length > 0 ? (
              <div>

                {scorers.slice(0, 6).map((player, index) => (
                  <div
                    key={player.id || `${player.name}-${index}`}
                    className="
                      grid
                      grid-cols-[28px_44px_1fr_auto]
                      items-center
                      gap-3
                      py-4
                      border-b
                      border-slate-100
                      last:border-none
                    "
                  >

                    <span className="text-sm text-slate-400">
                      {index + 1}
                    </span>

                    <img
                      src={player.photo}
                      alt={player.name}
                      className="
                        w-10
                        h-10
                        rounded-full
                        object-cover
                        bg-slate-100
                      "
                    />

                    <div className="min-w-0">

                      <p className="
                        text-sm
                        font-medium
                        text-[#08111F]
                        truncate
                      ">
                        {player.name}
                      </p>

                      <p className="
                        text-xs
                        text-slate-400
                        mt-1
                        truncate
                      ">
                        {player.team}
                      </p>

                    </div>

                    <p className="text-base font-semibold text-[#08111F]">
                      {player.goals}
                    </p>

                  </div>
                ))}

              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-sm text-slate-500">
                  No scorer data available
                </p>
              </div>
            )}

          </section>


          {/* League Table */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6">

            <div className="flex items-center justify-between mb-5">

              <h2 className="text-xl font-semibold text-[#08111F]">
                League Table
              </h2>

              <span className="text-xs uppercase tracking-wide text-slate-400">
                Points
              </span>

            </div>

            {standings.length > 0 ? (
              <div>

                {standings.slice(0, 6).map((team) => (
                  <div
                    key={team.id}
                    className="
                      grid
                      grid-cols-[28px_38px_1fr_auto]
                      items-center
                      gap-3
                      py-4
                      border-b
                      border-slate-100
                      last:border-none
                    "
                  >

                    <span className="text-sm text-slate-400">
                      {team.rank}
                    </span>

                    <img
                      src={team.logo}
                      alt={team.name}
                      className="
                        w-8
                        h-8
                        object-contain
                      "
                    />

                    <div className="min-w-0">

                      <p className="
                        text-sm
                        font-medium
                        text-[#08111F]
                        truncate
                      ">
                        {team.name}
                      </p>

                      <p className="text-xs text-slate-400 mt-1">
                        {team.played ?? "-"} played
                      </p>

                    </div>

                    <p className="text-base font-semibold text-[#08111F]">
                      {team.points}
                    </p>

                  </div>
                ))}

              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-sm text-slate-500">
                  No standings available
                </p>
              </div>
            )}

          </section>

        </div>


        {/* Bottom Note */}
        <div className="mt-6 flex justify-end">
          <p className="text-xs text-slate-400">
            Premier League · Season 2024/25
          </p>
        </div>

      </main>

    </div>
  );
}