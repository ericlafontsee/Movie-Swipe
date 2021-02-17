const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require('passport');

router
  .route("/")
  .post(userController.create);

router
  .route("/:id")
  .delete(userController.remove);

router
  .route('/:email')
  .get(userController.find);

router
  .post('/login',
    function (req, res, next) {
      console.log('routes/user.js, login, req.body: ');
      console.log(req.body);
      next();
    },
    passport.authenticate('local'),
    (req, res) => {
      console.log('logged in', req.user);
      var userInfo = {
        email: req.user.email
      };
      res.send(userInfo);
    })

module.exports = router;

