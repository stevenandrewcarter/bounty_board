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
};

//Register the authentication middleware
router.use('/bounties', isAuthenticated);

router.route('/bounties')
//creates a new bounty
    .post(function (req, res) {
      var bounty = new Bounty();
      bounty.text = req.body.text;
      bounty.title = req.body.title;
      bounty.created_by = req.body.created_by;
      bounty.save(function (err, post) {
        if (err) {
          return res.status(500).send(err);
        }
        return res.json(post);
      });
    })
//gets all bounties
    .get(function (req, res) {
      Bounty.find(function (err, bounties) {
        if (err) {
          return res.send(500, err);
        }
        return res.status(200).send(bounties);
      });
    });

//post-specific commands. likely won't be used
router.route('/bounties/:id')
//gets specified bounty
    .get(function (req, res) {
      Bounty.findById(req.params.id, function (err, bounty) {
        if (err)
          res.send(err);
        res.json(bounty);
      });
    })
//updates specified post
    .put(function (req, res) {
      Bounty.findById(req.params.id, function (err, bounty) {
        if (err)
          res.send(err);
        bounty.created_by = req.body.created_by;
        bounty.text = req.body.text;
        bounty.save(function (err, bounty) {
          if (err)
            res.send(err);
          res.json(bounty);
        });
      });
    })
//deletes the post
    .delete(function (req, res) {
      Bounty.remove({
        _id: req.params.id
      }, function (err) {
        if (err)
          res.send(err);
        res.json("deleted :(");
      });
    });

module.exports = router;