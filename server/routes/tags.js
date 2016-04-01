var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bounty = mongoose.model('Bounty');

//Used for routes that must be authenticated.
function isAuthenticated(req, res, next) {
  // if user is authenticated in the session, call the next() to call the next request handler
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects
  //allow all get request methods
  if (req.method === "GET") {
    return next();
  }
  if (req.isAuthenticated()) {
    return next();
  }
  // if the user is not authenticated then redirect him to the login page
  return res.redirect('/#login');
}
//Register the authentication middleware
router.use('/bounties', isAuthenticated);

router.route('/tags')
//gets all tags
    .get(function (req, res) {
      Bounty.find(function (err, bounties) {
            if (err) {
              return res.send(500, err);
            }
            console.log("Bounty GET: " + JSON.stringify(bounties));
            return res.status(200).send(bounties);
          });
    });

router.route('/tag/:id/bounties')
//gets specified bounties for a tag
    .get(function (req, res) {
      Bounty.findById(req.params.id, function (err, bounty) {
        if (err)
          res.send(err);
        res.json(bounty);
      });
    });

module.exports = router;