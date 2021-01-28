const router = require("express").Router();
const userTransactionController = require("../../controller/user-transactionController");
const userController = require("../../controller/userController");
const passport = require('passport');
const passportConfig = require("../../config/passport")(passport);
// Matches with "/api/books"
router.get("/user", userController.findById);

// Matches with "/api/books/:id"
router.post("/transaction", userTransactionController.create)
router.put("/transaction/:id", userTransactionController.update)
router.delete("/transaction/:id", userTransactionController.remove);
// This is the api route to authenticate and process login
router.post("/login", function (req, res, next) {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log(JSON.stringify(req.session))
                console.log('25', req.user);
            });
        }
    })(req, res, next);
});
router.post("/register", userController.create);
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.send("You are loggedout")
});
module.exports = router;