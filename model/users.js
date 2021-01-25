const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    },
    transaction: [
        {
            type: Schema.Types.ObjectId,
            ref: "Transaction"
        }
    ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
