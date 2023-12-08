const mongoose=require("mongoose")

const therapistSchema=new mongoose.Schema({
    name:{
     type:String,
     require:true,
    },
    
     age:{
      type:String,
      require:true,
     },
     mentalhealthstatus:{
      type:String,
      require:true,
     },
     prescriptions:{
        type:String,
        require:true,
    },
     image:{
      type:String,
     },
    reference: {
        type:String,
        require:true,
     }
     
   
  })
  
  
  
  module.exports=mongoose.model("therapist",therapistSchema)