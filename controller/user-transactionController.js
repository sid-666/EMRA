const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function(req, res) {
    if(req.user){
      let user = req.user
      db.Transaction
      .create(req.body)
      .then(({ _id }) => db.User.findOneAndUpdate({"_id": user}, { $push: { transaction: _id } }, { new: true }))
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
    }
  },
  update: function(req, res) {
    db.Transaction
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Transaction
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};