const mongoose=require("mongoose")
const hopeSchema=new mongoose.Schema({
title:{
    type:String,
   require:true,
},
author:{
    type:String,
   require:true,
},
about:{
    type:String,
    require:true,
},
price:{
    type:Number,
   require:true,
},
image:{
    type:String,
}

})





module.exports=mongoose.model("thehope",hopeSchema)