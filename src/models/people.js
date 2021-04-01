const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const PeopleSchema=new Schema({
  name:String,
  email:String,
  phone:Number,
  password:{type:String, select:false},
  age:Number,
  gender:String,
  hobbie:String,
  date:{type:Date, default:Date.now()}
});

module.exports=mongoose.model('people',PeopleSchema);

