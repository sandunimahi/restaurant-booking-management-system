const mongoose=require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const tableReservationSchema=mongoose.Schema({
  ownerID:Number,
  table:{
  tableNo:String,
  tableType:String,
  description:String,
  location:String,
  seats:Number
  },
  bookedBy:{
    role:String,
    id:Number
  },
  reservationDate:Date,
  reservationTime:String,
  });

tableReservationSchema.plugin(AutoIncrement, {inc_field: 'reservationID'});
module.exports=mongoose.model("TableReservation", tableReservationSchema);
