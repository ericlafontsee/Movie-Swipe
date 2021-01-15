const router = require("express").Router();
const movieController = require("../../controllers/movieController");

// Matches with "/api/movies"
router.route("/")
  .get(movieController.findAll)
  .post(movieController.create);

// Matches with "/api/books/:id"

module.exports = router;
