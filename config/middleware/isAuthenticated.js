// restricts users from routes they aren't authorized to visit
module.exports = function(req, res, next) {
  if (req.user) {
    return next();
  }

  return res.redirect("/login");
};