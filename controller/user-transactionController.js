const db = require("../model");

// Defining methods for the booksController
module.exports = {
  create: function(req, res) {
    console.log(req.user)
    if(req.user){
      let user = req.user
      db.sequelize.query(`
      INSERT INTO Transactions (type, name, value, createdAt, updatedAt, user_id) 
      VALUES (${req.body.type}, ${req.body.name}, ${req.body.value},NOW(), NOW(), ${user.id});`, {
          type: sequelize.QueryTypes.INSERT
      })
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
    }
  },
  update: function(req, res) {
    db.sequelize.query(`
    UPDATE Transactions
    SET 
        type = ${req.body.type}, 
        name = ${req.body.name},
        value = ${req.body.value}
    WHERE _id = ${req.params.id};`, {
        type: sequelize.QueryTypes.UPDATE
    }).then(function(data) {
        res.json(data)
    })
  },
  remove: function(req, res) {
    db.Transaction
      .destroy({where: {_id: req.params.id}})
      .then(data => {
        res.json(data)
      })
  }
};