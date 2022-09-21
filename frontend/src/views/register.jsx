import {Button, TextField, Typography} from '@mui/material'
import CoverSVG from '../components/cover'
import { FaGoogle ,FaFacebook,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa';

const Register = () => {
    return (  
        <div className={"register"}>
                <CoverSVG/>
                <div className={'head'}>
                    <Typography>Register if you dont have an account</Typography>
                </div>
                <form>
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
                    />

<TextField 
                    className={'inputs'}
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
                    type='email'
                    ></TextField>

                <TextField 
                    className={'inputs'}
                    variant='outlined'
                    required
                    label='Username'
                    color='secondary'
                    sx={{input:{color:'white'},

                        "& .MuiInputLabel-root": { color: "purple" },
                        border: "1px solid white",
                        borderRadius:2,
                        marginBottom:4
                      }}
                    type='text'
                    ></TextField>
                    <Button variant='contained'
                    color='secondary'className={'submit'}
                    >SUBMIT</Button>
                </form>
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
 
export default Register;