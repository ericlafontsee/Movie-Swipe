const db = require("../models");

// Defining methods for the movieController
module.exports = {
  findAll: function(req, res) {
    db.Movie
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
