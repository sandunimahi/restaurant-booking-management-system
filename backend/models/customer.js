const mongoose=require('mongoose');

const customerSchema=mongoose.Schema({
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
  blacklistStatus:String
});

module.exports=mongoose.model("Customer", customerSchema);
