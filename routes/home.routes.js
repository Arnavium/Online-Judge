var express = require("express");
var router = express.Router();
const middlewares = require("../middlewares/auth");
const questioncontroller = require("../controllers/question")

router.get("/", function(req, res){
    res.redirect("/home")
})

router.get("/home", function(req, res){
    res.render("home")
})

router.get("/profile", middlewares.isLoggedIn, function(req, res){
    if(req.user.category == "User")
        res.render("userprofile");
    else if(req.user.category == "Contributor")
        res.render("contriprofile")
})

router.get("/problems", function(req, res){
    let filter = {};
    questioncontroller.getAll(filter).then((questions)=>{
        res.render("problems", {questions: questions});
    }).catch((err)=>{
        console.log(err);
        res.redirect("back");
    })
})

router.get("/problems/:id", function(req, res){
    let filter = {_id: req.params.id}
    questioncontroller.getOne(filter).then((question)=>{
        res.render("problem", {question: question});
    }).catch((err)=>{
        console.log(err);
        res.redirect("back");
    })  
})

module.exports = router;