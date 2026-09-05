const cors = require("cors");
const express = require("express");
require("dotenv").config();
const pool = require("./db");
const authRoutes = require("./routes/authRoutes");
const playerRoutes = require("./routes/playerRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const teamRoutes = require("./routes/teamRoutes");
const statisticsRoutes = require("./routes/statisticsRoutes");
const newsRoutes = require("./routes/newsRoutes");
const cupRoutes = require("./routes/cupRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/statistics", statisticsRoutes);
app.use("/api/cups", cupRoutes);
pool.query("SELECT NOW()", (error, result) => {
  if (error) {
    console.log("Database connection error:", error);
  } else {
    console.log("Database connected");
  }
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});