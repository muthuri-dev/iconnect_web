
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
const errors =require('./models/errors');
const profile= require('./models/profile');
const groups=require('./models/groups');
const mentors= require('./models/mentors');
const news = require('./models/news');
const projects= require('./models/projects');


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
});

//getting all blogs from the database
app.get('/blogs',function(req,res){
    blog.find({}).then(function(data){
        res.json({
            data:data
        });
    }).catch(function(err){
        console.log('fetching error: ',err);
    })
});

//posting errors route

app.post('/errors', function(req,res){
    const newError=new errors({
        description:req.body.description,
        git:req.body.git,
        image:req.body.image,
        phone:req.body.phone
    });
    newError.save(function(err){
        if(!err){
            console.log({newError});
        }else{
            console.log(err);
        }
    });
});

//getting all errors from the database
app.get('/errors',function(req,res){
    errors.find({}).then(function(data){
        res.json({
            data:data
        });
    }).catch(function(err){
        console.log('fetching error: ',err);
    })
});

//posting new profile data

app.post('/profile', function(req,res){
    const newProfile= new profile({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        portifolio:req.body.portifolio,
        linkedin:req.body.linkedin,
        git:req.body.git,
        twitter:req.body.twitter,
        skills:req.body.skills,
    });
    newProfile.save(function(err){
        if(!err){
            console.log({newProfile});
        }else{
            console.log(err);
        }
    });
});

//getting all user profiles from the database
app.get('/profiles',function(req,res){
    profile.find({}).then(function(data){
        res.json({
            data:data
        });
    }).catch(function(err){
        console.log('fetching error: ',err);
    })
});

//posting new group data

app.post('/groups', function(req,res){
    const newGroup= new groups({
        title:req.body.title,
        link:req.body.link,
    });
    newGroup.save(function(err){
        if(!err){
            console.log({newGroup});
        }else{
            console.log('save error: ',err);
        }
    });
});
//getting all groups from the database
app.get('/groups',function(req,res){
    groups.find({}).then(function(data){
        res.json({
            data:data
        });
    }).catch(function(err){
        console.log('fetching error: ',err);
    })
});

//posting new mentor to the database
app.post('/mentors', function(req,res){
    const newMentor= new mentors({
        name:req.body.name,
        git:req.body.git,
        linkedin:req.body.linkedin,
        phone:req.body.phone
    });
    newMentor.save(function(err){
        if(!err){
            console.log({newMentor});
        }else{
            console.log('save error: ',err);
        }
    })
});
//getting all mentors from the database
app.get('/mentors',function(req,res){
    mentors.find({}).then(function(data){
        res.json({
            data:data
        });
    }).catch(function(err){
        console.log('fetching error: ',err);
    })
});

//posting news to the database

app.post('/news', function(req,res){
    const newNews=new news({
        title:req.body.title,
        content:req.body.content,
        image:req.body.image
    });
    newNews.save( function(err){
    if(!err){
        console.log({newNews});
    }else{
        console.log('save error: ',err);
    }
   });
});

//getting all tech news from the database
app.get('/news',function(req,res){
    news.find({}).then(function(data){
        res.json({
            data:data
        });
    }).catch(function(err){
        console.log('fetching error: ',err);
    })
});

//posting new project to the database

app.post('/projects', function(req,res){
    const newProject= new projects({
        title:req.body.title,
        description:req.body.description,
        git:req.body.git,
        live:req.body.live,
        image:req.body.image,
        skills:req.body.skills,
        category:req.body.category,
    });
    newProject.save(function(err){
        if(!err){
            console.log({newProject});
        }else{
            console.log('save error: ',err);
        }
    });
});

//getting all projects from the database
app.get('/projects',function(req,res){
    projects.find({}).then(function(data){
        res.json({
            data:data
        });
    }).catch(function(err){
        console.log('fetching error: ',err);
    })
});

