const mongoose=require('mongoose');

const ownerSchema=mongoose.Schema({
  userID: Number,
  name:{
  firstname:String,
  lastname:String
  },
  gender:String,
  address:String,
  dob:Date,
  city:String,
  nic:String,
  contactNumber:Number,
  email:String,
  restaurant:{
    name:String,
    contactNumber:Number,
    city:String,
    description:String,
    managerID:Number
  }
});

module.exports=mongoose.model("Owner", ownerSchema);
