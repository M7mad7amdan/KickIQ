const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const standingsResponse = await fetch(
      "https://v3.football.api-sports.io/standings?league=39&season=2024",
      {
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY
        }
      }
    );

    const scorersResponse = await fetch(
      "https://v3.football.api-sports.io/players/topscorers?league=39&season=2024",
      {
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY
        }
      }
    );

    const fixturesResponse = await fetch(
      "https://v3.football.api-sports.io/fixtures?league=39&season=2024",
      {
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY
        }
      }
    );

    const standingsData = await standingsResponse.json();
    const scorersData = await scorersResponse.json();
    const fixturesData = await fixturesResponse.json();


    // League standings
    const standingsRaw =
      standingsData.response[0]?.league?.standings?.[0] || [];

    const standings = standingsRaw.map((item) => ({
      id: item.team.id,
      rank: item.rank,
      name: item.team.name,
      logo: item.team.logo,
      points: item.points,
      played: item.all.played
    }));


    // Top scorers
    const scorers = scorersData.response.map((item) => ({
      id: item.player.id,
      name: item.player.name,
      photo: item.player.photo,
      team: item.statistics[0]?.team?.name,
      goals: item.statistics[0]?.goals?.total || 0
    }));


    // Fixtures
    const matches = fixturesData.response.length;

    const goals = fixturesData.response.reduce((total, match) => {
      const homeGoals = match.goals.home || 0;
      const awayGoals = match.goals.away || 0;

      return total + homeGoals + awayGoals;
    }, 0);

    const averageGoals =
      matches > 0
        ? (goals / matches).toFixed(2)
        : 0;


    // Final response to React
    res.json({
      overview: {
        matches: matches,
        goals: goals,
        teams: standings.length,
        averageGoals: averageGoals
      },

      scorers: scorers,

      standings: standings
    });

  } catch (error) {
    console.error("Error fetching statistics:", error);

    res.status(500).json({
      message: "Something went wrong"
    });
  }
});

module.exports = router;