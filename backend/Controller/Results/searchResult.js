const Result = require("../../Model/certificateModel");

const searchResult = async(req, res) => {
    const {enrollment} = req.body;
    try {
        const getResult = await Result.findOne({enrollment});
        if(getResult){
            return res.status(200).json({
                message:"Result Fined",
                enrollment: getResult.enrollment,
                name : getResult.name,
                father: getResult.father,
                mother: getResult.mother,
                dob : getResult.dob,
                course: getResult.course,
                maxMarks: getResult.maxMarks,
                obtainedMarks : getResult.obtainedMarks,
                result: getResult.result
            })
        }else{
            return res.status(422).json({message:"Result can't find"})
        }
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = searchResult