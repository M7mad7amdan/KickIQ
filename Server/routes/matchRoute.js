const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const date = req.query.date;

  if (!date) {
    return res.status(400).json({
      message: "Date is required"
    });
  }

  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures?date=${date}`,
      {
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY
        }
      }
    );

    const data = await response.json();

    res.json(data);

  } catch (error) {
    console.error("Error fetching matches:", error);

    res.status(500).json({
      message: "Something went wrong"
    });
  }
});

module.exports = router;