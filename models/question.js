var mongoose = require("mongoose");

var QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    problem_statement: {
        type: String,
        required: true
    },
    input_format: String,
    output_format: String,
    difficulty: String,
    author: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Question",QuestionSchema);