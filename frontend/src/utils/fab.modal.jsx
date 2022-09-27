import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import{useState} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import axios from 'axios'


const FloatBtn = () => {
    const[open, setOpen]=useState(false);
    const[name, setName]= useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone]= useState('');
    const[portifolio, setPortifolio]= useState('');
    const[linkedin, setlinkedin]= useState('');
    const[git, setGit]= useState('');
    const[twitter, setTwitter]= useState('');
    const[ skills, setSkills]= useState('');

    const handleClick=function(){
        setOpen(true);
    }
    const handleName = function(e){
        setName(e.target.value);
    }
    const handleEmail = function(e){
        setEmail(e.target.value);
    }
    const handlePhone = function(e){
        setPhone(e.target.value);
    }
    const handleWeb = function(e){
        setPortifolio(e.target.value);
    }
    const handleLinkedin = function(e){
        setlinkedin(e.target.value);
    }
    const handleGit = function(e){
        setGit(e.target.value);
    }
    const handleTwitter = function(e){
        setTwitter(e.target.value);
    }
    const handleSkills = function(e){
        setSkills(e.target.value);
    }
    const handleClose=function(){
        setOpen(false);
        const newProfile=({
            name:name,
            email:email,
            phone:phone,
            portifolio:portifolio,
            linkedin:linkedin,
            git:git,
            twitter:twitter,
            skills:skills
        });
        axios.post('http://localhost:8000/profile',newProfile);
    }
    return ( 
        <div>
            <Fab variant="extended" aria-label="edit" color='secondary'
        sx={{position:'fixed',bottom:(theme)=>theme.spacing(10),
            right:(theme)=>theme.spacing(2)
    }}
        >
            <DownloadIcon/>Download App
        </Fab>
        <Fab variant="extended" aria-label="edit" color='secondary'
        sx={{position:'fixed',bottom:(theme)=>theme.spacing(2),
            right:(theme)=>theme.spacing(2)
    }}onClick={handleClick}
        >
            <EditIcon/>Edit Profile
        </Fab>
            <Dialog open={open}>
            <DialogTitle sx={{textAlign:'center',fontFamily:'monospace'}}>Create Your Profile</DialogTitle>
            <DialogContent spacing={1} sx={{textAlign:'center'}}>
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Username'type='text' value={name} onChange={handleName}/>
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Email address' type='email'value={email} onChange={handleEmail}/>
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Phone number' type='tell'value={phone}onChange={handlePhone}/>
                <TextField sx={{width:300,margin:1}} variant="outlined"color="secondary"label='Portifolio web'type='url'value={portifolio} onChange={handleWeb}/>
                <TextField sx={{width:300,margin:1}} variant="outlined"color="secondary"label='Linkein'type='url'value={linkedin} onChange={handleLinkedin}/>
                <TextField sx={{width:300,margin:1}} variant="outlined"color="secondary"label='GitHub'type='url'value={git} onChange={handleGit} />
                <TextField sx={{width:300,margin:1}} variant="outlined"color="secondary"label='Twitter'type='url' value={twitter} onChange={handleTwitter}/>
                <TextField sx={{width:300,margin:1}}required variant="outlined"color="secondary"label='Tech Skills'type='url' value={skills} onChange={handleSkills}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant='contained'color="secondary">SUBMIT</Button>
            </DialogActions>
            </Dialog>
        </div>
     );
}
 
export default FloatBtn;