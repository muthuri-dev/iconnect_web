const mongoose=require('mongoose');
const schema= mongoose.Schema;

const errorSchema= new schema({
    description:{
        type:String,
        required:true,
    },
    git:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    phone:{
        type:Number,
        required:true,
    }
},{timestamps:true});

const errors= mongoose.model('errors',errorSchema);

module.exports=errors;