const express = require("express");
const authRoute = require("./Router/authRouter");
const contactRoute = require("./Router/contactRouter");
const resultRoute = require('./Router/resultRouter')

const app = express();
const dotenv = require('dotenv').config();
const db = require("./database/connect");

//default
app.get("/", (req, res)=>{
    res.send("Hello")
})

app.use(express.json())
app.use("/account/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use("/api",resultRoute);



const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`port is running at ${port}`);
});