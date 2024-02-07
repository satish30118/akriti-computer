const mongoose = require("mongoose");

const contactModel = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    
    number:{
        type:Number,
        required:true,
    },
    course:{
        type:String,
    },
    querry:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now(),
    }

},{
    // timestamps:true,
})

const Contact = new mongoose.model("Contact", contactModel);

module.exports = Contact;