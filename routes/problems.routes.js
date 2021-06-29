var express = require("express");
var router = express.Router();
const middlewares = require("../middlewares/auth");
const run = require("../code_compiler/compile_code").run;

router.get("/", function(req, res){
    res.render("problems");
})

router.get("/:id", function(req, res){
    res.render("problem");
})

router.post("/:id/submit", middlewares.isLoggedIn, function(req, res){
    var code = req.body.code;
    var testcases = [{
        input: "1 2", 
        output: "3"
    },{
        input: "1 3", 
        output: "5"
    }]
    run(testcases, code, req.user.username).then((verdict)=>{
        if(verdict[0] == 'W')
            req.flash("error", verdict);
        else
            req.flash("success", verdict);
        res.redirect("/problems/"+ req.params.id);
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports = router;