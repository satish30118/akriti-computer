const User = require("../../Model/usermodel");
const generateAuthToken = require("../../database/generateToken");

const register = async(req, res) => {
  try {
    const {name, email, number, course, gender,  password} = req.body;

    if(!name || !email || !number || !course || !gender|| !password){
        console.log("Empty Filled")
       return res.status(422).json({message:"Empty Filled"}); 
    }

    //Checking user existance;
    const userExist = await User.findOne({email});

    if(userExist){
        console.log("user Exist")
       return res.status(422).send({message:"User Exist"}); 
    }

    // New User creation
      const newUser = await User.create({name, email, number, course, gender, password})
    
      if(newUser){
        console.log("User registration Sucess")
        return res.status(200).json({
            message:"User registration Sucess",
            userId : newUser._id,
            name : newUser.name,
            email : newUser.email,
            number : newUser.number,
            course : newUser.course,   
            course : newUser.gender,         
            token : generateAuthToken(newUser._id)
        })
      }
  } catch (error) {
    console.log(error)
    res.status(400).send({message:"GET A ERROR", error:error})
  }

}

module.exports = register;