const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const category = req.query.category || "All";

    let query = "football";

    if (category === "Premier League") {
      query = "Premier League football";
    } else if (category === "Champions League") {
      query = "Champions League football";
    } else if (category === "Players") {
      query = "football players";
    } else if (category === "Analysis") {
      query = "football analysis";
    }

    const url =
      `https://serpapi.com/search.json` +
      `?engine=google_news` +
      `&q=${encodeURIComponent(query)}` +
      `&hl=en` +
      `&gl=us` +
      `&api_key=${process.env.SERP_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      return res.status(400).json({
        message: data.error
      });
    }

    const rawResults = data.news_results || [];

    const flattenedResults = rawResults.flatMap((item) => {
      if (Array.isArray(item.stories)) {
        return item.stories;
      }

      return [item];
    });

    const articles = flattenedResults
      .filter((item) => item.title && item.link)
      .map((item, index) => ({
        id: index,
        title: item.title,
        source: item.source?.name || "Unknown",
        date: item.iso_date || item.date || "",
        image: item.thumbnail || item.thumbnail_small || "",
        link: item.link
      }));

    res.json(articles);

  } catch (error) {
    console.error("Error fetching news:", error);

    res.status(500).json({
      message: "Something went wrong"
    });
  }
});

module.exports = router;