const User = require("../../Model/usermodel");

const changePassword = async(req, res) =>{
    const {email, password} = req.body;

    try {

        const findUser = await User.findOne({email});

        if(findUser){
            const updatePass = await User.updateOne({email},{$set:{password:password}});
            
        if(updatePass){
            res.status(200).json({message:"password updated"});
            return;
        }else{
            res.status(422).json({message:"password can't updated"});
            return;
        }
        }else{
            res.status(420).json({message:"user can't fined"});
            return;
        }
        


        
    } catch (error) {
        console.log(error)
    }
}

module.exports = changePassword;