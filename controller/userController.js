const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findByName: function(req, res) {
    db.User
      .find({"name": req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
          const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            transaction: []
          });
          await newUser.save();
          res.send("User Created");
        }
      });
  }
};