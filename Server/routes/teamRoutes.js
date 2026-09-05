const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
      console.log("Teams route hit");
  const page = req.query.page || 1;
  const search = req.query.search || "";

  let url =
    `https://v3.football.api-sports.io/teams/?league=39&season=2024`;

  if (search.length >= 4) {
    url += `&search=${search}`;
  }

  try {
    const response = await fetch(url, {
      headers: {
        "x-apisports-key": process.env.API_FOOTBALL_KEY
      }
    });
            console.log("API status:", response.status);


    const data = await response.json();
console.log("TEAMS API RESPONSE:", data);
    res.json(data);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong"
    });
  }
});


router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/teams?id=${id}`,
      {
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY
        }
      }
    );

    const data = await response.json();

    if (data.response.length === 0) {
      return res.status(404).json({
        message: "Team not found"
      });
    }

    res.json(data);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong"
    });
  }
});



module.exports = router