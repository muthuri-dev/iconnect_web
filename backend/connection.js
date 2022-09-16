
//importing the dependancies
const express= require('express');
const mongoose= require('mongoose');
const multer= require('multer');
const bodyParser= require('body-parser');
const cors= require('cors');
const PORT =8080;
const mongoURL='mongodb://0.0.0.0/iConnect';

//initiating the express app
const app=express();



//middlewares
app.use(bodyParser.json());
app.use(cors());

//connecting to the database and server
mongoose.connect(mongoURL).then(function(){
    app.listen(PORT, function(erroe){
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

