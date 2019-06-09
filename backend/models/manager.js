const mongoose=require('mongoose');

const managerSchema=mongoose.Schema({
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
});

module.exports=mongoose.model("Manager", managerSchema);
