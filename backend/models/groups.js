const mongoose=require('mongoose');
const schema= mongoose.Schema;

const groupSchema= new schema({
    title:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:true,
    }
},{timestamps:true});

const groups= mongoose.model('groups',groupSchema);

module.exports=groups;