import { Button, TextField, Typography } from "@mui/material";
import SecondSVG from "../components/second";
import { FaGoogle ,FaFacebook,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa';
import { useState } from "react";
import axios from "axios";


const Login = () => {
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  const handleEmail=function(e){
    setEmail(e.target.value)
  }
  const handlePass=function(e){
    setPassword(e.target.value);

  }

  const handleSubmit= function(e){
    e.preventDefault();
    console.log({email,password});
    const login=({
      email:email,
      password:password
    });
    axios.post('http://localhost:8000/login',login);
  }
    return ( 
        <div className="login">
                <SecondSVG/>
                <div className={'head'}>
                    <Typography>Login to your account</Typography>
                </div>
                <form autoComplete='off'>
                    <TextField
                    className={"inputs"}
                    variant='outlined'
                    required
                    label='Email address'
                    color='secondary'
                    sx={{input:{color:'white'},

                        "& .MuiInputLabel-root": { color: "purple" },
                        border: "1px solid white",
                        borderRadius:1,
                        marginBottom:4
                      }}
                    type='email' onChange={handleEmail}
                    value={email}
                    ></TextField>

                    <TextField
                    className={"inputs"}
                    variant='outlined'
                    required
                    label='Password'
                    color='secondary'
                    sx={{input:{color:'white'},

                        "& .MuiInputLabel-root": { color: "purple" },
                        border: "1px solid white",
                        borderRadius:1,
                        marginBottom:4
                      }}
                    type='password' onChange={handlePass}
                    value={password}
                    ></TextField>
                        
                    <Button variant='contained' onClick={handleSubmit}
                    color='secondary'className={'submit'}>SUBMIT</Button>
                </form>
                      <Typography>Login with</Typography>
                <div className={'sign'}>
                      <div className='icons'><FaGoogle color='white'/></div>
                      <div className='icons'><FaFacebook color='white'/></div>
                      <div className='icons'><FaGithub color='white'/></div>
                      <div className='icons'><FaLinkedin color='white'/></div>
                      <div className='icons'><FaTwitter color='white'/></div>
                </div>
        </div>
     );
}
 
export default Login;