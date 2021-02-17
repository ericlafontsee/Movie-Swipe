const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  .post(userController.create);

router
  .route("/:id")
  .delete(userController.remove);

router
  .route('/:email')
  .get(userController.find)

router.post('/login',
function (req, res, next) {

  console.log('test', test);
  next()
},
passport.authenticate('local'),
(req, res) => {
  var userInfo = {
    username: req.user.username
  };
  res.send(userInfo);
}
)

module.exports = router;

