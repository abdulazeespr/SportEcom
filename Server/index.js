const express = require("express");
const mongodb = require("mongoose");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

mongodb.connect("mongodb+srv://abdulazeespr:Mulearn7@sportecom.9n8ib.mongodb.net/").then(()=>{
    console.log("Database is connected..")
}).catch((Error)=>{
    console.log(Error);
})


app.get("/",(req,res)=>{
    res.json({"hello":"123"});
})



app.listen(PORT,()=>{
    console.log(`Server is Running On Port ${PORT}`);
})
