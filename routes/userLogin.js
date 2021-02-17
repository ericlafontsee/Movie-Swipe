const express = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');
const router = express.Router();

const User = require('../model/user');

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${email}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
  '/login',
  function (req, res, next) {
      console.log('routes/user.js, login, req.body: ');
      console.log(req.body)
      next()
  },
  passport.authenticate('local'),
  (req, res) => {
      console.log('logged in', req.user);
      var userInfo = {
          email: req.user.email
      };
      res.send(userInfo);
      console.log('userinfo', userInfo);
  }
)

router.get('/', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

router.post('/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
})

module.exports = router



  // let Users = new User({email: req.body.email});

//     User.register(Users, req.body.password, function(err, user) {
//       if (err) {
//         res.json(err);
//         res.json("Success");
//       }
//     });
// });

// //user login
// userController.doLogin = function(req, res) {
//   if(!req.body.email){
//     res.json({success: false, message: "email was not given"})
//   } else {
//     if(!req.body.password){
//       res.json({success: false, message: "password was not given"})
//     } else {
//       passport.authenticate('local', function (err, user, info) {
//         if(err){
//           res.json({success: false, message: err})
//         } else {
//           if (!user) {
//             res.json({success: false, message: 'email or password incorrect'})
//           } else {
//             req.login(user, function(err) {
//               if(err){
//                 res.json({success: false, message: err})
//               } else {
//                 const token = jwt.sign({userId : user._id, email : user.email}, secretkey,
//                   { expiresIn: '24h' })
//                 res.json({success:true, message:"Authentication Successful", token: token});
//               }
//             })
//           }
//         }
//       })(req, res);
//     }
//   }
// };