const mongoose=require('mongoose');
const schema= mongoose.Schema;

const profileSchema= new schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    portifolio:{
        type:String,
    },
    linkedin:{
        type:String,
    },
    git:String,
    twitter:String,
    skills:String,
},{timestamps:true});

const profile= mongoose.model('profile',profileSchema);

module.exports=profile;