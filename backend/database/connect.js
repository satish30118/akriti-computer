const mongoose = require('mongoose');
const db = process.env.DB


mongoose.connect(db,{
    family:4,
}).then(()=>{
    console.log("Connection Success")
}).catch((err)=>{
    console.log(err)
})