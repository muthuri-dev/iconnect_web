const mongoose= require('mongoose');
const schema = mongoose.Schema;

//creating the model schema
const registerSchema= new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        minLength:5
    }
},{timestamps:true});

const reqister= mongoose.model('register',registerSchema);

//exporting the model

module.exports=reqister;