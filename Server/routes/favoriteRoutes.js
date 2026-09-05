const express = require("express");
const router = express.Router();
const pool = require("../db");
const authenticateToken = require("../middleware/authenticateToken");
router.get("/", authenticateToken, async (req, res) => {
const userId = req.user.userId;
try {
const result = await pool.query(
  "SELECT * FROM favorites WHERE user_id = $1",
  [userId]
);
const favoritesWithPlayers = await Promise.all(
  result.rows.map(async (favorite) => {

    const response = await fetch(
      `https://v3.football.api-sports.io/players/profiles?player=${favorite.player_id}`,
      {
        headers: {
          "x-apisports-key": process.env.API_FOOTBALL_KEY
        }
      }
    );

    const data = await response.json();

    const player = data.response[0]?.player;

    return {
      id: favorite.id,
      player_id: favorite.player_id,
      name: player?.name,
      nationality: player?.nationality,
      position: player?.position,
      photo: player?.photo
    };
  })
);
res.json(favoritesWithPlayers);

} catch (error) {
  console.error("Error fetching favorites:", error);
  res.status(500).json({ message: "Something went wrong" });
}
});


router.delete("/:id",authenticateToken, async (req, res) => {
    const playerId = req.params.id;
    const userId = req.user.userId;

    try {
        const result = await pool.query(
            "DELETE FROM favorites WHERE player_id = $1 AND user_id = $2 RETURNING *",
            [playerId, userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Favorite not found" });
        }

        res.json({ message: "Favorite removed", favorite: result.rows[0] });
    } catch (error) {
        console.error("Error removing favorite:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
});



router.post("/", authenticateToken, async (req, res) => {
  const player = req.body;
  const userId = req.user.userId;

  try {
    const result = await pool.query(
      `
      INSERT INTO favorites (user_id, player_id)
      VALUES ($1, $2)
      RETURNING *
      `,
      [userId, player.id]
    );

    res.status(201).json({
      message: "Player added to favorites",
      favorite: result.rows[0]
    });

  } catch (error) {
    console.error("Error adding favorite:", error);

    res.status(500).json({
      message: "Something went wrong"
    });
  }
});



module.exports = router;