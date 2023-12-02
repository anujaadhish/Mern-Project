const express=require('express')
const app= express()
const mongoose= require('mongoose')
require("dotenv").config();


mongoose.connect(
    process.env.MONGO_URI,{
        useNewURLParser: true,
    useUnifiedTopology: true,
    }
)
.then(() => console.log("database connected"))
  .catch((error) => console.log(error));



app.listen(process.env.PORT,function(){
    console.log(`server is connected on ${process.env.PORT}`)
})