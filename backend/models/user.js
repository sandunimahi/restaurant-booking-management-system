const mongoose=require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema=mongoose.Schema({
  username: {type: String, required:true, unique:true},
  role: {type: String, required:true},
  password: {type: String, required:true}
});

userSchema.plugin(AutoIncrement, {inc_field: 'id'});
userSchema.plugin(uniqueValidator);
module.exports=mongoose.model("User", userSchema);
