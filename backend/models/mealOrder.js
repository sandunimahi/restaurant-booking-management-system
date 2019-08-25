const mongoose=require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const mealOrderSchema=mongoose.Schema({
  ownerID:Number,
  meal:{
  name:String,
  mealType:String,
  price:Number
  },
  quantity:Number,
  bookedBy:{
    role:String,
    id:Number
  },
  orderDate:Date,
  orderTime:String,
  orderType:String,
  additionalDetails:String,
  });

mealOrderSchema.plugin(AutoIncrement, {inc_field: 'orderID'});
module.exports=mongoose.model("MealOrder", mealOrderSchema);
