import {Button, TextField, Typography} from '@mui/material'
import CoverSVG from '../components/cover'
//import { FaGoogle ,FaFacebook,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa';
import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';


const Register = () => {
    const navigate= useNavigate();

const[name, setName]= useState('');
const[email, setEmail]= useState('');
const[pass, setPass]= useState('');
const [error, setError]= useState(false);

const handleName=function(e){
    setName(e.target.value);
    console.log(e.target.value);
}
const handleEmail=function(e){
    setEmail(e.target.value);
    console.log(e.target.value);
}
const handlePass=function(e){
    setPass(e.target.value);
    console.log(e.target.value);
}

const handleSubmit= function(e){
    e.preventDefault();
    console.log({name,email,pass});
    const newRegister=({
        Username:name,
        Email:email,
        Password:pass
    });
    axios.post('https://immense-basin-80931.herokuapp.com/register',newRegister)
    .then(function(){
        setError(true);
    }).catch(function(error){
        console.log('Submiiting error:  ',error);
    });
    navigate('/home');
}

    return (  
        <div className={"register"}>
                <CoverSVG/>
                <div className={'head'}>
                    <Typography>Register if you dont have an account</Typography>
                </div>
                <form autoComplete='off'>
                    <TextField 
                    className={'inputs'}
                    variant='outlined'
                    required
                    label='Username'
                    color='secondary'
                    sx={{input:{color:'white'},

                        "& .MuiInputLabel-root": { color: "purple" },
                        border: "1px solid white",
                        borderRadius:1,
                        marginBottom:4
                      }}
                    type='text'
                    onChange={handleName}
                    value={name}
                    error={error}
                    />

                   <TextField 
                    className={'inputs'}
                    variant='outlined'
                    required
                    label='Email'
                    color='secondary'
                    sx={{input:{color:'white'},

                        "& .MuiInputLabel-root": { color: "purple" },
                        border: "1px solid white",
                        borderRadius:1,
                        marginBottom:4
                      }}
                    type='email'
                    onChange={handleEmail}
                    value={email}
                    ></TextField>

                <TextField 
                    className={'inputs'}
                    variant='outlined'
                    required
                    label='Password'
                    color='secondary'
                    sx={{input:{color:'white'},

                        "& .MuiInputLabel-root": { color: "purple" },
                        border: "1px solid white",
                        borderRadius:2,
                        marginBottom:4
                      }}
                    type='password'
                    onChange={handlePass}
                    value={pass}
                    ></TextField>
                    <Button variant='contained'
                    color='secondary'className={'submit'}
                    onClick={handleSubmit}
                    >SUBMIT</Button>
                </form>
                <Typography 
                sx={{color:'white',fontFamily:'monospace',cursor:'pointer'}}
                > Login With</Typography>
                <div className={'sign'}>
                      <GoogleLogin/>
                </div>
        </div>
    );
}
 
export default Register;