const mongoose=require('mongoose');
const schema= mongoose.Schema;

const mentorSchema= new schema({
    name:{
        type:String,
        required:true,
    },
    git:{
        type:String,
        required:true,
    },
    linkedin:{
        type:String,
    },
    phone:{
        type:Number,
        required:true,
    }
},{timestamps:true});

const mentors= mongoose.model('mentors',mentorSchema);

module.exports=mentors;