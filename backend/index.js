require("dotenv").config();

const express = require('express');
const db = require("./config/db");

const app = express();

db.connect();

app.use(express.json());

app.get("/",(req,res) =>{
    res.send("server is running ");

})


const PORT = process.env.PORT || 4000;

app.listen(PORT,() =>{
    console.log(`serevr is runnning on ${PORT}`)
})




