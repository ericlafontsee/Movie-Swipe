const db = require("../models");

// Defining methods for the moviesController
module.exports = {
  findAll: function(req, res) {
    db.Movie
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  create: function(req, res) {
    db.Movie
      .create(req.body)
      .then(dbModel => {
        res.json(dbModel)
        console.log("test");
      })
      .catch(err => res.status(422).json(err));
  }
};
