const { User } = require("../model");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
    passport.use(
        new localStrategy((username, password, done) => {
            console.log(password);
            console.log(username)
            console.log(done);
            User.findOne({
                where: {
                    username: username
                }
            }).then(function (dbUser) {
                console.log(dbUser.get())
                // If there's no user with the given email
                if (!dbUser) {
                    return done(null, false, {
                        message: "Incorrect username."
                    });
                }
                // If there is a user with the given email, but the password the user gives us is incorrect
                if (!dbUser.validPassword(password)) {
                    return done(null, false, {
                        message: "Incorrect password."
                    });
                }
                // If none of the above, return the user
                return done(null, dbUser.get());
            });
        })
    );

    passport.serializeUser(function (user, cb) {
        cb(null, user);
    });

    passport.deserializeUser(function (obj, cb) {
        cb(null, obj);
    });
};