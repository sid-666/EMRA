const db = require("../model");
const bcrypt = require("bcryptjs")

// Defining methods for the booksController
module.exports = {
    findById: function (req, res) {
        db.User
            .findOne({ _id:  req.session.passport.user})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User.findOne({ name: req.body.username }, async (err, doc) => {
            if (err) throw err;
            if (doc) res.send("User Already Exists");
            if (!doc) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10);

                const newUser = new db.User({
                    name: req.body.username,
                    password: hashedPassword,
                    transaction: []
                });
                await newUser.save();
                res.send("User Created");
            }
        });
    }
};