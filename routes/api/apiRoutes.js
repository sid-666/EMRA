const router = require("express").Router();
const userTransactionController = require("../../controller/user-transactionController");
const userController = require("../../controller/userController");
const passport = require('passport');
const passportConfig = require("../../config/passport")(passport);
// Matches with "/api/books"

// Matches with "/api/books/:id"
router.post("/transaction", userTransactionController.create)
router.put("/transaction/:id", userTransactionController.update)
router.delete("/transaction/:id", userTransactionController.remove);
// This is the api route to authenticate and process login
router.get("/dashboard", userController.findDashBoardData)
router.get("/transaction", userController.findUserTransactions)
// router.post("/login", function (req, res, next) {
//     passport.authenticate("local", (err, user, info) => {
//         if (err) throw err;
//         if (!user) res.send("No User Exists");
//         else {
//             req.logIn(user, (err) => {
//                 if (err) throw err;
//                 res.send("Successfully Authenticated");
//                 console.log(JSON.stringify(req.session))
//                 console.log('25', req.user);
//             });
//         }
//     })(req, res, next);
// });

router.post("/login", passport.authenticate('local'), function (req, res, next) {
    console.log('user pasased auth')
    console.log(req.user)
    res.send("you are authenticated")
});
router.get("/loggedIn", function (req, res) {
    if (!req.user) {
        res.send(false)
    } else {
        res.send(true)
    }
})
router.post("/register", userController.create);
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.send("You are loggedout")
});
module.exports = router;