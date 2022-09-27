const mongoose=require('mongoose');
const schema= mongoose.Schema;

const projectSchema= new schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    git:{
        type:String,
    },
    live:String,
    image:String,
    skills:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    }
},{timestamps:true});

const projects= mongoose.model('projects',projectSchema);

module.exports=projects;