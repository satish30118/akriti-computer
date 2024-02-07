const User = require("../../Model/usermodel");
const generateAuthToken = require("../../database/generateToken");
const bcrypt = require('bcryptjs')

const login = async(req, res) => {

 const {email, password} = req.body;
 console.log("hello ji mai aa gya")

try{

 if(!email || !password){
    console.log("Empty field");
    return res.status(422).json({message:"Empty field"})
 }

 let findUser;
 if(isNaN(email)){
     findUser = await User.findOne({email:email});
 }else{
     findUser = await User.findOne({number:email});
 }

 
 if(findUser){

    const passwordMatch = await bcrypt.compare(password,findUser.password);

    if(!passwordMatch){
        console.log("Invalid Credential");
    return res.status(422).json({message:"Invalid Credential"})
    }

    console.log("User Login Sucess!!");
    return res.status(200).json({
            message:"User Login Success!!",
            userId : findUser._id,
            name : findUser.name,
            email : findUser.email,
            number : findUser.number,
            course : findUser.course,
            father : findUser.father,
            mother : findUser.mother,
            token : generateAuthToken(findUser._id),
    })
 }else{
    console.log("User have not registered");
    return res.status(420).json({message:"User have not registered"})
 }
}catch(err){
    console.log(err);
    return res.status(400).json(err)
}
}
module.exports = login;