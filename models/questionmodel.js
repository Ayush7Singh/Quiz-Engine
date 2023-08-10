const mongoose = require("mongoose");


/** question model */
const questionSchema = new mongoose.Schema({
    questions: { type : Array, default: []}, // create question with [] default value
    answers : { type : Array, default: []},
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Questions", questionSchema);
