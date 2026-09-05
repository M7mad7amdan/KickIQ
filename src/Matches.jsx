import { useState } from "react";

export default function Matches() {
  const [selectedDay, setSelectedDay] = useState("Today");

  const days = ["Yesterday", "Today", "Tomorrow"];

  const matches = [
    {
      id: 1,
      competition: "Premier League",
      status: "FT",
      homeTeam: "Arsenal",
      awayTeam: "Chelsea",
      homeLogo: "https://media.api-sports.io/football/teams/42.png",
      awayLogo: "https://media.api-sports.io/football/teams/49.png",
      homeScore: 2,
      awayScore: 1,
      time: "18:30",
    },
    {
      id: 2,
      competition: "La Liga",
      status: "FT",
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      homeLogo: "https://media.api-sports.io/football/teams/529.png",
      awayLogo: "https://media.api-sports.io/football/teams/541.png",
      homeScore: 3,
      awayScore: 2,
      time: "20:00",
    },
    {
      id: 3,
      competition: "Champions League",
      status: "Upcoming",
      homeTeam: "Bayern Munich",
      awayTeam: "Paris Saint Germain",
      homeLogo: "https://media.api-sports.io/football/teams/157.png",
      awayLogo: "https://media.api-sports.io/football/teams/85.png",
      homeScore: null,
      awayScore: null,
      time: "22:00",
    },
    {
      id: 4,
      competition: "Serie A",
      status: "Upcoming",
      homeTeam: "Inter",
      awayTeam: "AC Milan",
      homeLogo: "https://media.api-sports.io/football/teams/505.png",
      awayLogo: "https://media.api-sports.io/football/teams/489.png",
      homeScore: null,
      awayScore: null,
      time: "22:45",
    },
  ];

  const competitions = [...new Set(matches.map((match) => match.competition))];

  return (
    <div className="min-h-screen bg-[#f5f7fa]">

      {/* Header */}
      <section className="bg-[#030f1e]">
        <div className="max-w-[1050px] mx-auto px-6 pt-20 pb-16">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            <h1 className="text-white text-5xl font-semibold tracking-tight">
              Matches
            </h1>

            {/* Date Switcher */}
            <div className="flex items-center gap-2">

              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`
                    px-5 py-2.5
                    rounded-full
                    text-sm
                    transition
                    ${
                      selectedDay === day
                        ? "bg-[#b9d8ff] text-blue-700 font-medium"
                        : "bg-white/10 text-slate-300 hover:bg-white/15"
                    }
                  `}
                >
                  {day}
                </button>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* Matches */}
      <main className="max-w-[900px] mx-auto px-6 py-14">

        {competitions.map((competition) => {

          const competitionMatches = matches.filter(
            (match) => match.competition === competition
          );

          return (
            <section key={competition} className="mb-12">

              {/* Competition */}
              <div className="flex items-center gap-3 mb-4 px-1">

                <div className="w-2 h-2 rounded-full bg-[#86bdf4]" />

                <h2 className="text-sm font-semibold text-[#030f1e]">
                  {competition}
                </h2>

              </div>


              {/* Match List */}
              <div className="bg-white border border-slate-200 rounded-[24px] overflow-hidden">

                {competitionMatches.map((match) => (
                  <div
                    key={match.id}
                    className="
                      grid
                      grid-cols-[70px_1fr_auto_1fr_70px]
                      items-center
                      gap-4
                      px-6
                      py-6
                      border-b
                      border-slate-100
                      last:border-none
                      transition
                      hover:bg-slate-50
                    "
                  >

                    {/* Time */}
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        {match.time}
                      </p>

                      <p
                        className={`
                          text-xs mt-1
                          ${
                            match.status === "FT"
                              ? "text-slate-400"
                              : "text-blue-600"
                          }
                        `}
                      >
                        {match.status}
                      </p>
                    </div>


                    {/* Home */}
                    <div className="flex items-center justify-end gap-3">

                      <p className="hidden sm:block text-sm font-medium text-[#030f1e] text-right">
                        {match.homeTeam}
                      </p>

                      <img
                        src={match.homeLogo}
                        alt={match.homeTeam}
                        className="w-10 h-10 object-contain"
                      />

                    </div>


                    {/* Score */}
                    <div className="
                      min-w-[70px]
                      text-center
                      text-xl
                      font-semibold
                      text-[#030f1e]
                    ">

                      {match.homeScore !== null ? (
                        <>
                          {match.homeScore}
                          <span className="text-slate-300 mx-2">:</span>
                          {match.awayScore}
                        </>
                      ) : (
                        <span className="text-sm text-slate-400 font-medium">
                          VS
                        </span>
                      )}

                    </div>


                    {/* Away */}
                    <div className="flex items-center gap-3">

                      <img
                        src={match.awayLogo}
                        alt={match.awayTeam}
                        className="w-10 h-10 object-contain"
                      />

                      <p className="hidden sm:block text-sm font-medium text-[#030f1e]">
                        {match.awayTeam}
                      </p>

                    </div>


                    {/* Arrow */}
                    <button className="
                      w-9 h-9
                      rounded-full
                      border border-slate-200
                      flex items-center justify-center
                      text-slate-400
                      hover:bg-[#b9d8ff]
                      hover:text-blue-700
                      hover:border-[#b9d8ff]
                      transition
                    ">
                      →
                    </button>

                  </div>
                ))}

              </div>

            </section>
          );
        })}

      </main>

    </div>
  );
}