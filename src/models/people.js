const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const PeopleSchema=new Schema({
  name:String,
  email:String,
  phone:Number,
  password:String,
  age:Number,
  gender:String,
  hobbie:String,
  date:String
});

module.exports=mongoose.model('people',PeopleSchema);

