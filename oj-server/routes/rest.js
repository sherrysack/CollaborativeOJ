var express = require("express");
var router = express.Router();
var problemService = require("../services/problemService");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
router.get("/problems/:id", function(req, res) {
    var id = req.params.id;
    problemService.getProblem(+id).then(problem => res.json(problem));
});
router.get("/problems", function(req, res) {//suppose it would return a list of problems
    problemService.getProblems().then(problems => res.json(problems));
});



router.post("/problems", jsonParser, function(req, res) {
    problemService.addProblem(req.body).then(function(problem) {
        res.json(problem);
    }, function(error) {
        res.status(400).send("Problem name already exists!");
    });
});
//we should export
module.exports = router;