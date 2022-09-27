const mongoose=require('mongoose');
const schema= mongoose.Schema;

const newSchema= new schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    }
},{timestamps:true});

const news= mongoose.model('news',newSchema);

module.exports=news;