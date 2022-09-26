
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
const blog= require('./models/blogs');


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

// user email and password validation
app.post('/login', async function(req,res){
    var {email, password}= req.body;
    let user= await register.findOne({email})
    if(user){
        bycrpt.compare(req.params.password, password, function(resp, err){
            if(resp.message==ok){
                res.json(resp);
            }else{
                console.log('compare error: ',err);
            }
        })
    }else{
        console.log('user does not exist');
    }

});
//posting blogs route

app.post('/blog',function(req,res){
    const newBlog= new blog({
        title:req.body.title,
        description:req.body.description
    });
    newBlog.save(function(err){
        if(!err){
            console.log('saved');
            console.log({newBlog});
        }else{
            throw err;
        }
    });
})