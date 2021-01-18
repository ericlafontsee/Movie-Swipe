const router = require("express").Router();
const movieRoutes = require("./movies");

//Movie Routes
router.use("/movies", movieRoutes);

module.exports = router;