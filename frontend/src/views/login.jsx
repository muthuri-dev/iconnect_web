import { Button, TextField, Typography } from "@mui/material";
import SecondSVG from "../components/second";
import { FaGoogle ,FaFacebook,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa';
import { useState } from "react";


const Login = () => {
  const [name, setName]= useState('');
  const [emil, setEmail]= useState('');

  const handleEmail=function(){
    
  }
  const handlePass=function(){}

  const handleSubmit= function(e){
    e.preventDefault();
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