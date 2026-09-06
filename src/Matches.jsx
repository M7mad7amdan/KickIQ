import { useEffect, useState } from "react";

export default function Matches() {
  const [selectedDay, setSelectedDay] = useState("Today");
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const days = ["Yesterday", "Today", "Tomorrow"];

  function getDate(day) {
    const date = new Date();

    if (day === "Yesterday") {
      date.setDate(date.getDate() - 1);
    }

    if (day === "Tomorrow") {
      date.setDate(date.getDate() + 1);
    }

    return date.toISOString().split("T")[0];
  }

  useEffect(() => {
    async function fetchMatches() {
      try {
        setLoading(true);
        setError("");

        const date = getDate(selectedDay);

        const response = await fetch(
          `http://localhost:3000/api/matches?date=${date}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to load matches"
          );
        }

        console.log("MATCHES:", data.response);

        setMatches(data.response || []);

      } catch (error) {
        console.error("Error fetching matches:", error);
        setError(error.message);

      } finally {
        setLoading(false);
      }
    }

    fetchMatches();

  }, [selectedDay]);


  const competitions = [
    ...new Map(
      matches.map((match) => [
        match.league.id,
        {
          id: match.league.id,
          name: match.league.name,
          logo: match.league.logo,
          country: match.league.country
        }
      ])
    ).values()
  ];


  function formatTime(date) {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
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

              md:flex-row
              md:items-end
              md:justify-between

              gap-6
              md:gap-8
            "
          >

            <div>
              <p className="text-xs sm:text-sm text-slate-400 mb-2">
                Match Center
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
                Matches
              </h1>
            </div>


            {/* Date Switcher */}
            <div
              className="
                flex
                items-center

                gap-2

                overflow-x-auto

                pb-1

                max-w-full
              "
            >

              {days.map((day) => (

                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`
                    shrink-0

                    px-4
                    sm:px-5

                    py-2
                    sm:py-2.5

                    rounded-full

                    text-xs
                    sm:text-sm

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


      {/* Main */}
      <main
        className="
          max-w-[900px]
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
          <div className="min-h-[300px] flex items-center justify-center">
            <p className="text-sm text-slate-500">
              Loading matches...
            </p>
          </div>
        )}


        {/* Error */}
        {!loading && error && (
          <div className="min-h-[300px] flex items-center justify-center text-center">
            <p className="text-sm text-red-500">
              {error}
            </p>
          </div>
        )}


        {/* No matches */}
        {!loading && !error && matches.length === 0 && (
          <div className="min-h-[300px] flex flex-col items-center justify-center text-center">

            <h2 className="text-xl font-semibold text-[#030f1e]">
              No matches found
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              There are no matches available for {selectedDay.toLowerCase()}.
            </p>

          </div>
        )}


        {/* Matches */}
        {!loading && !error && matches.length > 0 && (

          <>
            {competitions.map((competition) => {

              const competitionMatches = matches.filter(
                (match) =>
                  match.league.id === competition.id
              );

              return (

                <section
                  key={competition.id}
                  className="
                    mb-8
                    sm:mb-10
                    lg:mb-12
                  "
                >

                  {/* Competition Header */}
                  <div
                    className="
                      flex
                      items-center
                      gap-3

                      mb-4

                      px-1
                    "
                  >

                    {competition.logo ? (
                      <img
                        src={competition.logo}
                        alt={competition.name}
                        className="
                          w-5
                          h-5
                          object-contain
                        "
                      />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-[#86bdf4]" />
                    )}

                    <div>

                      <h2
                        className="
                          text-sm
                          font-semibold
                          text-[#030f1e]
                        "
                      >
                        {competition.name}
                      </h2>

                      <p
                        className="
                          text-[11px]
                          text-slate-400
                        "
                      >
                        {competition.country}
                      </p>

                    </div>

                  </div>


                  {/* Match List */}
                  <div
                    className="
                      bg-white

                      border
                      border-slate-200

                      rounded-2xl
                      sm:rounded-[24px]

                      overflow-hidden
                    "
                  >

                    {competitionMatches.map((match) => {

                      const fixture = match.fixture;
                      const teams = match.teams;
                      const goals = match.goals;

                      const status = fixture.status.short;

                      const isFinished =
                        status === "FT" ||
                        status === "AET" ||
                        status === "PEN";

                      const isLive = [
                        "1H",
                        "HT",
                        "2H",
                        "ET",
                        "BT",
                        "P"
                      ].includes(status);

                      return (

                        <div
                          key={fixture.id}
                          className="
                            border-b
                            border-slate-100
                            last:border-none

                            transition
                            hover:bg-slate-50
                          "
                        >

                          {/* Desktop / Tablet */}
                          <div
                            className="
                              hidden
                              sm:grid

                              grid-cols-[75px_1fr_auto_1fr_45px]

                              items-center

                              gap-4

                              px-5
                              lg:px-6

                              py-5
                              lg:py-6
                            "
                          >

                            {/* Time */}
                            <div>

                              <p
                                className="
                                  text-sm
                                  font-medium
                                  text-slate-500
                                "
                              >
                                {formatTime(fixture.date)}
                              </p>

                              <p
                                className={`
                                  text-xs
                                  mt-1

                                  ${
                                    isLive
                                      ? "text-red-500 font-medium"
                                      : isFinished
                                      ? "text-slate-400"
                                      : "text-blue-600"
                                  }
                                `}
                              >
                                {isLive
                                  ? `${fixture.status.elapsed}'`
                                  : fixture.status.short}
                              </p>

                            </div>


                            {/* Home Team */}
                            <div
                              className="
                                flex
                                items-center
                                justify-end
                                gap-3
                              "
                            >

                              <p
                                className="
                                  text-sm
                                  font-medium
                                  text-[#030f1e]
                                  text-right
                                "
                              >
                                {teams.home.name}
                              </p>

                              <img
                                src={teams.home.logo}
                                alt={teams.home.name}
                                className="
                                  w-9
                                  h-9
                                  lg:w-10
                                  lg:h-10
                                  object-contain
                                "
                              />

                            </div>


                            {/* Score */}
                            <div
                              className="
                                min-w-[70px]

                                text-center

                                text-lg
                                lg:text-xl

                                font-semibold

                                text-[#030f1e]
                              "
                            >

                              {goals.home !== null ? (
                                <>
                                  {goals.home}

                                  <span className="text-slate-300 mx-2">
                                    :
                                  </span>

                                  {goals.away}
                                </>
                              ) : (
                                <span
                                  className="
                                    text-sm
                                    text-slate-400
                                    font-medium
                                  "
                                >
                                  VS
                                </span>
                              )}

                            </div>


                            {/* Away Team */}
                            <div
                              className="
                                flex
                                items-center
                                gap-3
                              "
                            >

                              <img
                                src={teams.away.logo}
                                alt={teams.away.name}
                                className="
                                  w-9
                                  h-9
                                  lg:w-10
                                  lg:h-10
                                  object-contain
                                "
                              />

                              <p
                                className="
                                  text-sm
                                  font-medium
                                  text-[#030f1e]
                                "
                              >
                                {teams.away.name}
                              </p>

                            </div>


                            {/* Arrow */}
                            <button
                              className="
                                w-9
                                h-9

                                rounded-full

                                border
                                border-slate-200

                                flex
                                items-center
                                justify-center

                                text-slate-400

                                hover:bg-[#b9d8ff]
                                hover:text-blue-700
                                hover:border-[#b9d8ff]

                                transition
                              "
                            >
                              →
                            </button>

                          </div>


                          {/* Mobile */}
                          <div
                            className="
                              sm:hidden

                              px-4
                              py-5
                            "
                          >

                            {/* Status */}
                            <div
                              className="
                                flex
                                justify-between
                                items-center

                                mb-5
                              "
                            >

                              <p className="text-xs text-slate-400">
                                {formatTime(fixture.date)}
                              </p>

                              <p
                                className={`
                                  text-xs
                                  font-medium

                                  ${
                                    isLive
                                      ? "text-red-500"
                                      : isFinished
                                      ? "text-slate-400"
                                      : "text-blue-600"
                                  }
                                `}
                              >
                                {isLive
                                  ? `${fixture.status.elapsed}'`
                                  : fixture.status.short}
                              </p>

                            </div>


                            {/* Teams */}
                            <div
                              className="
                                grid
                                grid-cols-[1fr_auto_1fr]

                                items-center

                                gap-3
                              "
                            >

                              {/* Home */}
                              <div
                                className="
                                  flex
                                  flex-col
                                  items-center

                                  min-w-0
                                "
                              >

                                <img
                                  src={teams.home.logo}
                                  alt={teams.home.name}
                                  className="
                                    w-12
                                    h-12
                                    object-contain
                                  "
                                />

                                <p
                                  className="
                                    text-xs
                                    font-medium
                                    text-[#030f1e]

                                    mt-2

                                    text-center

                                    line-clamp-2
                                  "
                                >
                                  {teams.home.name}
                                </p>

                              </div>


                              {/* Score */}
                              <div
                                className="
                                  min-w-[65px]

                                  text-center

                                  text-xl
                                  font-semibold

                                  text-[#030f1e]
                                "
                              >

                                {goals.home !== null ? (
                                  <>
                                    {goals.home}

                                    <span className="text-slate-300 mx-1.5">
                                      :
                                    </span>

                                    {goals.away}
                                  </>
                                ) : (
                                  <span
                                    className="
                                      text-sm
                                      text-slate-400
                                    "
                                  >
                                    VS
                                  </span>
                                )}

                              </div>


                              {/* Away */}
                              <div
                                className="
                                  flex
                                  flex-col
                                  items-center

                                  min-w-0
                                "
                              >

                                <img
                                  src={teams.away.logo}
                                  alt={teams.away.name}
                                  className="
                                    w-12
                                    h-12
                                    object-contain
                                  "
                                />

                                <p
                                  className="
                                    text-xs
                                    font-medium
                                    text-[#030f1e]

                                    mt-2

                                    text-center

                                    line-clamp-2
                                  "
                                >
                                  {teams.away.name}
                                </p>

                              </div>

                            </div>

                          </div>

                        </div>

                      );

                    })}

                  </div>

                </section>

              );

            })}
          </>

        )}

      </main>

    </div>
  );
}