const router = require("express")
const userTransactionController = require("../../controller/user-transactionController");
const userController = require("../../controller/userController");
const passport = require("../../config/passport");
// Matches with "/api/books"
router.get("/api/user", (req, res) => {
    console.log(req.user)
    res.send(req.user)
});

// Matches with "/api/books/:id"
router.post("/api/transaction", userTransactionController.create)
router.put("api/transaction/:id", userTransactionController.update)
router.delete("api/transaction/:id", userTransactionController.remove);
// This is the api route to authenticate and process login
router.post("/api/login" , passport.authenticate("local"), function(req, res) {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
          req.logIn(user, (err) => {
            if (err) throw err;
            res.send("Successfully Authenticated");
            console.log(req.user);
          });
        }
      })(req, res, next);
})
router.post("/api/register", userController.create);
router.get('/api/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});
module.exports = router;