import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

export default function Teams() {
  const [search, setSearch] = useState("");
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/teams");
        const data = await response.json();
        setTeams(data.response);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams();
  }, []);

  const filteredTeams = teams.filter((team) =>
    team.team.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F6F7F9]">

      <section className="bg-[#08111F]">
        <div className="max-w-[1120px] mx-auto px-6 py-16">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>
              <p className="text-sm font-medium text-slate-400 mb-3">
                Clubs
              </p>

              <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
                Teams
              </h1>
            </div>

            <div className="w-full md:w-[320px]">
              <input
                type="text"
                value={search}
                placeholder="Search teams"
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  bg-white/5
                  border border-white/10
                  text-white
                  placeholder:text-slate-500
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-[#4F8FEA]
                  focus:bg-white/[0.07]
                "
              />
            </div>

          </div>

        </div>
      </section>
      <main className="max-w-[1120px] mx-auto px-6 py-12">

        {filteredTeams.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredTeams.map((team) => (

              <Link
                key={team.team.id}
                to={`/teams/${team.team.id}`}
                className="
                  group
                  bg-white
                  border border-slate-200
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
                  flex
                  items-center
                  justify-center
                  border-b
                  border-slate-100
                ">

                  <img
                    src={team.team.logo}
                    alt={team.team.name}
                    className="
                      w-[108px]
                      h-[108px]
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
                      <h2 className="text-lg font-semibold text-[#08111F]">
                        {team.team.name}
                      </h2>

                      <p className="text-sm text-slate-500 mt-1">
                        {team.team.country}
                      </p>
                    </div>

                    <div className="
                      w-8
                      h-8
                      rounded-full
                      border border-slate-200
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

            ))}

          </div>

        ) : (

          <div className="min-h-[300px] flex items-center justify-center">
            <p className="text-sm text-slate-500">
              No teams found
            </p>
          </div>

        )}

      </main>

    </div>
  );
}