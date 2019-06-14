const db = require("../models");

// Defining methods for the contactController
module.exports = {
  findAll: function (req, res) {
    db.Contact
      .find(req.query)
      .sort({ date: -1 })
      .then(dbContact => res.json(dbContact))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Contact
      .findById(req.params.id)
      .then(dbContact => res.json(dbContact))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Contact
      .create(req.body)
      .then(dbContact => res.json(dbContact))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Contact
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbContact => res.json(dbContact))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Contact
      .findById({ _id: req.params.id })
      .then(dbContact => dbContact.remove())
      .then(dbContact => res.json(dbContact))
      .catch(err => res.status(422).json(err));
  }
};
