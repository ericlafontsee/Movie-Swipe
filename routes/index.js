const path = require("path");
const router = require("express").Router();
const routes = require("./movies");

// API Routes
router.use("/api/movies", routes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../movie-match/build/index.html"));
});

module.exports = router;
