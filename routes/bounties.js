var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bounty = mongoose.model('Bounty');
var User = mongoose.model('User');

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

router.route('/bounties')
//creates a new bounty
    .post(function (req, res) {
      console.log("Bounty POST: " + JSON.stringify(req.body));
      var bounty = new Bounty();
      bounty.text = req.body.text;
      bounty.title = req.body.title;
      bounty.tags = req.body.tags;
      User.findOne({'username': req.body.created_by}, function (err, user) {
        console.log("Bounty POST: " + JSON.stringify(user));
        if (err) {
          console.log("Bounty POST: " + err);
          return res.status(500).send(err);
        }
        bounty.created_by = user._id;
        console.log("Bounty POST: " + JSON.stringify(bounty));
        bounty.save(function (err, post) {
          if (err) {
            console.log("Bounty POST: " + err);
            return res.status(500).send(err);
          }
          return res.json(post);
        });
      });
    })
//gets all bounties
    .get(function (req, res) {
      Bounty.find()
          .populate('created_by', 'username')
          .exec(function (err, bounties) {
            if (err) {
              return res.send(500, err);
            }
            console.log("Bounty GET: " + JSON.stringify(bounties));
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