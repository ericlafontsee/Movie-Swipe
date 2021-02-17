const User = require("../models/user");


module.exports = {
  create: function(req, res) {
    console.log(req.body);
    User
      .create(req.body)
      .then(data => {console.log(data); res.json(data)})
      .catch(err => {console.log(err); res.status(422).json(err)});
  },
  find: function(req, res) {
    User
      .findOne({email: req.params.email})
      .then(data => {res.json(data)})
      .catch(err => {console.log(err); res.status(422).json(err)});
  },
  remove: function(req, res) {
    User
      .findOne({_id: req.params.id})
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    User
      .findOne(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};