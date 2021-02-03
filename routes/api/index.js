const router = require("express").Router();
const movieRoutes = require("./movies");
const userRoutes = require("./users");

//Movie Routes
router.use("/movies", movieRoutes);

//User Routes
router.use("/users", userRoutes);

module.exports = router;