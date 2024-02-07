const Certificate = require("../../Model/certificateModel");


const result = async(req, res) => {
    const {enrollment, name, father, mother, dob, course, maxMarks, obtainedMarks, result} = req.body;
try {
    const newResult = await Certificate.create({enrollment, name, father, mother, dob, course, maxMarks, obtainedMarks, result});
    if(newResult){
        console.log("Result Save");
        return res.status(200).json({message:"Result Save"})
    }else{
        console.log("Result can't Save");
        return res.status(422).json({message:"Result can't Save"})
    }


    
} catch (error) {
    console.log(error)
}

}

module.exports = result;