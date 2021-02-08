const db = require("../model");
const sequelize = require("sequelize");

// Defining methods for the booksController
module.exports = {
  create: function (req, res) {
    console.log(req.user)
    db.Transactions.create({
      type: req.body.type,
      name: req.body.name,
      value: req.body.value,
      user_id: req.user.id
    })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.status(422).json(err)
        console.log(err)
      });

  },
  update: function (req, res) {
    db.sequelize.query(`
    UPDATE Transactions
    SET 
        type = ${req.body.type}, 
        name = ${req.body.name},
        value = ${req.body.value}
    WHERE _id = ${req.params.id};`, {
      type: sequelize.QueryTypes.UPDATE
    }).then(function (data) {
      res.json(data)
    })
  },
  remove: function (req, res) {
    console.log("hi", req.params.id)
    console.log(typeof req.params.id)
    console.log(parseInt(req.params.id))
    db.Transactions
      .destroy({ where: { id: parseInt(req.params.id) } })
      .then(data => {
        res.json(data)
      })
  }
};