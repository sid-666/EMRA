require('dotenv').config();
const path = require('path')
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const http = require("http");
const session = require("express-session");
const flash = require('connect-flash');
const bodyParser = require("body-parser");
const app = express();
const User = require("./model/users");
const PORT = process.env.PORT || 3001;
const router = require("./routes")
//----------------------------------------- END OF IMPORTS---------------------------------------------------


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(
    cors({
        origin: "http://localhost:3000", // <-- location of the react app were connecting to
        credentials: true,
    })
);
app.use(
    session({
        secret: "secretcode",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require("./config/passport")(passport);

app.use(router);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
const httpServer = http.createServer(app);
db.sequelize.sync().then(function () {
    httpServer.listen(PORT, function () {
        console.log(`🌎 ==> API server now on port ${PORT}!`);
    });
});
