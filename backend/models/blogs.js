const mongoose=require('mongoose');
const schema= mongoose.Schema;

const blogSchema= new schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    }
},{timestamps:true});

const blog= mongoose.model('blog',blogSchema);

module.exports=blog;