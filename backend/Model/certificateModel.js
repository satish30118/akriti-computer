const mongoose = require('mongoose')

const certificateModel = new mongoose.Schema({
    enrollment:{
        type:Number,
    },
    name:{
        type:String,
    },
    father:String,
    mother:String,
    dob:String,
    course:String,
    maxMarks:Number,
    obtainedMarks:Number,
    result:String,

})

const Result = new mongoose.model("Result", certificateModel);

module.exports = Result