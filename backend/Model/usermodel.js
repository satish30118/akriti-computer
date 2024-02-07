const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userId = require("../database/genUserId");


const userModel = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    number:{
        type:Number,
    },
    course:{
        type:String,
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    date:{
        type:Date,
        default:Date.now(),
    }

},{
    timestamps: true,
});

// Password Hashing
userModel.pre("save", async function(){
    const saltNumber = 10;
    try {
        if(this.isModified("password")){
            this.password = await bcrypt.hash(this.password, saltNumber);
        } 
    } catch (error) {
        console.log(error)
    }

});

const User = new mongoose.model("User",userModel);

module.exports = User;

