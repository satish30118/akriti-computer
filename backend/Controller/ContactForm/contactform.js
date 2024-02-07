const Contact = require("../../Model/contactModel");

const contactForm = async(req, res) =>{
    const {name, number, course, querry} = req.body;

    if(!name || !number|| !course || !querry){
       return  res.status(422).send("Empty Field");
    }
    
    try {
        const userQuerry = await Contact.create({name,number, course, querry});
        if(userQuerry){
            return res.status(200).json({message:"Message send successfully"});
        }else{
            return res.status(422).json({message:"Message send successfully"});
        }
    } catch (error) {
        return res.send(error)
        
    }
}

module.exports = contactForm;
