import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cups() {
  const [cups, setCups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCups() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:3000/api/cups"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Unable to load tournaments");
        }

        setCups(data);
      } catch (error) {
        console.error("Error fetching cups:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCups();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F6F7F9] flex items-center justify-center">
        <p className="text-sm text-slate-500">
          Loading tournaments...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F6F7F9] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-xl font-semibold text-[#08111F]">
          Tournaments unavailable
        </h2>

        <p className="text-sm text-slate-500 mt-2">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F7F9]">

      {/* Header */}
      <section className="bg-[#08111F]">
        <div className="max-w-[1120px] mx-auto px-6 py-16">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <div>
              <p className="text-sm text-slate-400 mb-3">
                Competitions
              </p>

              <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
                Tournaments
              </h1>
            </div>

            <p className="text-sm text-slate-400">
              {cups.length} competitions
            </p>

          </div>

        </div>
      </section>


      {/* Grid */}
      <main className="max-w-[1120px] mx-auto px-6 py-12">

        {cups.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {cups.map((cup) => {

              const latestSeason =
                cup.seasons?.length > 0
                  ? cup.seasons[cup.seasons.length - 1]?.year
                  : null;

              return (
                <Link
                  key={cup.id}
                  to={`/cups/${cup.id}`}
                  className="
                    group
                    bg-white
                    border
                    border-slate-200
                    rounded-2xl
                    overflow-hidden
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-slate-300
                    hover:shadow-md
                  "
                >

                  <div className="
                    h-[210px]
                    bg-[#F9FAFB]
                    border-b
                    border-slate-100
                    flex
                    items-center
                    justify-center
                  ">

                    <img
                      src={cup.logo}
                      alt={cup.name}
                      className="
                        w-[110px]
                        h-[110px]
                        object-contain
                        transition
                        duration-300
                        group-hover:scale-[1.04]
                      "
                    />

                  </div>


                  <div className="px-5 py-5">

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <p className="text-xs text-slate-400 mb-2">
                          {cup.country}
                        </p>

                        <h2 className="text-lg font-semibold text-[#08111F] leading-snug">
                          {cup.name}
                        </h2>

                        <p className="text-sm text-slate-500 mt-2">
                          {latestSeason
                            ? `Season ${latestSeason}`
                            : "Season unavailable"}
                        </p>

                      </div>


                      <div className="
                        w-8
                        h-8
                        rounded-full
                        border
                        border-slate-200
                        flex
                        items-center
                        justify-center
                        text-slate-400
                        transition
                        group-hover:border-[#4F8FEA]
                        group-hover:text-[#4F8FEA]
                      ">
                        →
                      </div>

                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

        ) : (

          <div className="min-h-[350px] flex items-center justify-center">
            <p className="text-sm text-slate-500">
              No tournaments found
            </p>
          </div>

        )}

      </main>

    </div>
  );
}