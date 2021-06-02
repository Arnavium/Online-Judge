var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.render("login");
})

router.get("/home", function(req, res){
    res.render("home")
})

router.get("/problems", function(req, res){
    res.render("problems")
})

router.get("/problem", function(req, res){
    res.render("problem")
})
module.exports = router;