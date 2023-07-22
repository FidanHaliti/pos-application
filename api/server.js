//server create//express

const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express();
const port = 5000;

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to database')
} catch(error){
   throw error;
}
}
app.get("/", (req,res)=> res.send("hey ku je bre "))

app.listen(port,()=>{
    connect();
    console.log(`Exemple app listening on portt ${port}`)
})