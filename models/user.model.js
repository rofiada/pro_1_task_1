const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
name :{type : String , required:true , trim :true},
password :{type : String , required:true , trim :true},
email :{type : String , required:true , trim :true},
address :{type : String , required:true , trim :true},
id :{type : Number , required:true , trim :true},
phone :{type : Number , required:true , trim :true}


});







const User =  mongoose.model("User" , userSchema)
  module.exports = User()
