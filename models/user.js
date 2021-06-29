var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username:{type: String},
    password:{type: String},
    category:{type: String},
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);