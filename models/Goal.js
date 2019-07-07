const mongoose = require('mongoose') ;
const Schema = mongoose.Schema;

// Create Schema
const GoalSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    date_created : {
        type : Date,
        default : Date.now
    }
})

module.exports = Goal = mongoose.model('goal',GoalSchema);