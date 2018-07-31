var problems = [{
    id: 1,
    name: 'two sum',
    desc: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.' +
        'You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    difficulty: 'easy'
},

    {
        id: 2,
        name: 'Add Two numbers',
        desc: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.' +
            'You may assume that each input would have exactly one solution, and you may not use the same element twice.',
        difficulty: 'medium'
    },

    {
        id: 3,
        name: 'Longest Substring Without Repeating Characters',
        desc: 'Given a string, find the length of the longest substring without repeating characters.\n' +
            '\n',
        difficulty: 'hard'
    },

    {
        id: 4,
        name: 'Longest Substring Without Repeating Characters',
        desc: 'Given a string, find the length of the longest substring without repeating characters.\n' +
            '\n',
        difficulty: 'hard'
    }

];

var ProblemModel = require("../models/problemModel");


var getProblems = function() {
    return new Promise((resolve, reject) => {
        ProblemModel.find({},function(err, problems){
            if(err){
                reject(err);
            }else {
                resolve(problems);
            }
        });
    });
};

var getProblem = function(id) {
    return new Promise((resolve, reject) => {
        //resolve(problems.find(problem => problem.id === id));
        ProblemModel.findOne({id:id}, function(err, problem) {
            if(err) {
                reject(err);
            }else {
                resolve(problem);
            }
        });
    });
};

var addProblem = function(newProblem) {
    return new Promise((resolve, reject) => {
        /*
        if(problems.find(problem=> problem.name === newProblem.name)) {
            reject();
        }else {
            newProblem.id = problems.length+1;
            problems.push(newProblem);
            resolve(newProblem);
        }*/
        ProblemModel.findOne({name: newProblem.name}, function(err, problem) {
            if(problem) {
                reject("Problem name already exist!");
            } else{
                ProblemModel.count({}, function(err, num) {
                    newProblem.id = num+1;
                    //transfer the common JavaScript object to the mongotyped object
                    var mongoProblem = new ProblemModel(newProblem);
                    mongoProblem.save();
                    resolve(newProblem);
                });
            }
        });
    });
};

module.exports = {
    getProblems: getProblems,
    getProblem: getProblem,
    addProblem: addProblem
};

