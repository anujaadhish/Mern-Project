const express=require('express')
const app= express()
const mongoose= require('mongoose')
require("dotenv").config();
const cors = require("cors");



mongoose.connect(
    process.env.MONGO_URI,{
        useNewURLParser: true,
    useUnifiedTopology: true,
    }
)
.then(() => console.log("database connected"))
  .catch((error) => console.log(error));

  app.use(cors());
  app.use(express.static("./public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT,function(){
    console.log(`server is connected on ${process.env.PORT}`)
})