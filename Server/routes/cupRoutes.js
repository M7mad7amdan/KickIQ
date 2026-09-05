const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://v3.football.api-sports.io/leagues",
      {
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY
        }
      }
    );

    const data = await response.json();

    const cups = (data.response || [])
      .filter((item) => item.league?.type === "Cup")
      .map((item) => ({
        id: item.league.id,
        name: item.league.name,
        type: item.league.type,
        logo: item.league.logo,
        country: item.country?.name || "International",
        flag: item.country?.flag || null,
        seasons: item.seasons || []
      }));

    res.json(cups);

  } catch (error) {
    console.error("Error fetching cups:", error);

    res.status(500).json({
      message: "Something went wrong"
    });
  }
});

module.exports = router;