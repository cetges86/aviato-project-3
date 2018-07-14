const db = require("../models");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
    console.log(req.params)
    console.log(req.body)
    passport.use(new LocalStrategy (
      function (email, password, done) {
        db.User.findOne({ email: email }, function (err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: "Email address not found" });
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect Password' });
          }
          return done(null, user);
        });
      }
    ))
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
