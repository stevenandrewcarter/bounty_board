var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Category = mongoose.model('Category');
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
router.use('/categories', isAuthenticated);

router.route('/categories')
    .post(function (req, res) {
      var category = new Category();
      category.name = req.body.name;
      category.description = req.body.description;
      category.save(function (err, category) {
        if (err) {
          return res.status(500).send(err);
        }
        return res.json(category);
      });
    })
    .get(function (req, res) {
      Category.find(function (err, categories) {
        if (err) {
          return res.send(500, err);
        }
        return res.status(200).send(categories);
      });
    });

router.route('/categories/:id')
    .get(function (req, res) {
      Category.findById(req.params.id, function (err, category) {
        if (err)
          res.send(err);
        res.json(category);
      });
    })
    .put(function (req, res) {
      Category.findById(req.params.id, function (err, category) {
        if (err)
          res.send(err);
        category.description = category.body.description;
        category.save(function (err, category) {
          if (err)
            res.send(err);
          res.json(category);
        });
      });
    })
    .delete(function (req, res) {
      Category.remove({
        _id: req.params.id
      }, function (err) {
        if (err)
          res.send(err);
        res.json("deleted :(");
      });
    });

module.exports = router;