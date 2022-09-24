
//importing the dependancies
const express= require('express');
const mongoose= require('mongoose');
const multer= require('multer');
const bodyParser= require('body-parser');
const cors= require('cors');
const bycrpt=require('bcryptjs');

//database and server
const PORT =8000;
const mongoURL='mongodb://0.0.0.0/iConnect';

//initiating the express app
const app=express();

//database schemas
const register=require('./models/schema');


//middlewares
app.use(bodyParser.json());
app.use(cors());

//connecting to the database and server
mongoose.connect(mongoURL).then(function(){
    app.listen(PORT, function(error){
        if(error){
            console.log('Server error:  ',error);
        }else{
            console.log(`App connected to database through server port ${PORT}`);
        }
    })
}).catch(function(error){
    console.log('Database error:  ',error);
});



//application Routes

//get all route
app.get('/',function(req,res){
    res.json({
        mess:'server is running'
    });
});

//posting route
app.post('/register',function(req,res){
    const newRegister=new register({
        name:req.body.Username,
        email:req.body.Email,
        password:bycrpt.hashSync(req.body.Password,10)
    });
    res.json({mess:'posting data'});
    newRegister.save(function(error){
        if(!error){
            console.log({newRegister});
        }else{
            console.log('error:  ',error);
        }
    });
});